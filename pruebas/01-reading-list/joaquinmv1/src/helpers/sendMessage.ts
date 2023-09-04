import { Book } from "../models/types";

export const sendMessage = (payload: Book[], type: string, channel: BroadcastChannel | null): void => {
  if (typeof payload !== 'object') throw new Error('the first parameter provided must be a array');
  if (typeof type !== 'string') throw new Error('the second parameter provided must be a string');

  if (channel) {
    const message = {
      type,
      payload
    };
    channel.postMessage(message);
  }
};
