import type { StateType } from "@/types/context";

export const ReadStorage = (): StateType | undefined => {
  const { state: value }: Storage = localStorage;

  if (!value) return undefined;

  return JSON.parse(value);
};

export const WriteStorage = (state: StateType) => {
  localStorage.setItem("state", JSON.stringify(state));
};
