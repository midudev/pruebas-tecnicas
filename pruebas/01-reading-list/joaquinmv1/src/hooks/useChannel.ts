import { useEffect, useState } from "react";
import { useBooks } from ".";
import { Book } from "../models/types";

interface ChannelMessage {
  type: 'AVAILABLE_BOOKS_UPDATE' | 'READING_LIST_UPDATE';
  payload: Book[];
}

export const useChannel = (): BroadcastChannel | null => {
  const [channel, setChannel] = useState<BroadcastChannel | null>(null);
  const { availableBooks, readingList, setAvailableBooks, setReadingList } = useBooks();

  useEffect(() => {
    const newChannel = new BroadcastChannel('book-channel');
    setChannel(newChannel);

    return () => {
      newChannel.close();
    };
  }, []);

  useEffect(() => {
    if (!channel) return;

    const messageListener = (event: MessageEvent<ChannelMessage>) => {
      const { type, payload } = event.data;
      switch (type) {
        case 'AVAILABLE_BOOKS_UPDATE': {
          setAvailableBooks(payload);
          window.localStorage.setItem('available', JSON.stringify(payload));
          break
        }
        case 'READING_LIST_UPDATE': {
          setReadingList(payload);
          window.localStorage.setItem('reading', JSON.stringify(payload));
          break;
        }
      }
    };

    channel.removeEventListener('message', messageListener);
    channel.addEventListener('message', messageListener);

    return () => {
      channel.removeEventListener('message', messageListener);
    };
  }, [channel, availableBooks, readingList]);

  return channel;
};
