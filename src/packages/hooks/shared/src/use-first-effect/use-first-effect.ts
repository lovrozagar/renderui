"use client"

import { useEffect, useRef, type DependencyList } from "react";
import { useFreshRef } from "../use-fresh-ref/use-fresh-ref";

type UseFirstEffectOptions = {
  enabled?: boolean; 
};

function useFirstEffect(
  callback: () => void,
  deps: DependencyList = [], 
  options?: UseFirstEffectOptions
) {
  const { enabled = true } = options ?? {};

  const freshCallback = useFreshRef(callback);
  const hasRun = useRef(false);

  /* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern */
  useEffect(() => {
    if (!enabled || hasRun.current) return;

    hasRun.current = true;
    freshCallback.current();
  }, [enabled, ...deps]);

  return hasRun;
}

type UseFirstEffectReturn = ReturnType<typeof useFirstEffect>

export { useFirstEffect, type UseFirstEffectReturn };

