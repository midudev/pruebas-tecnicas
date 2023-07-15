import { getRandomIndex } from "./getRandomIndex";

type GetRandomMessageParams = {
  messages: string[];
  msgAvoid?: string
}

export const getRandomMessage = ({
  messages,
  msgAvoid 
}: GetRandomMessageParams) => {
  const newMsgIndex = getRandomIndex(0, messages.length - 2);
  return !msgAvoid 
    ? messages.at(newMsgIndex)
    : messages.filter(msg => msg !== msgAvoid).at(newMsgIndex)
     
}