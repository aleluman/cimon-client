import { useEffect } from "react";
import { useTimeout } from "./timeout";

export const useDebounce = <T>(callback: () => void, delay: number, values: T[]): void => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...values, reset]);
  useEffect(clear, [clear]);
};
