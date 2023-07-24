import type { AppDispatch, RootState } from "@/store";
import { useSelector } from "@/store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
