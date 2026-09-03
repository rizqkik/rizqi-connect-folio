"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(options?: { threshold?: number; once?: boolean }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (options?.once !== false) observer.unobserve(entry.target);
          } else if (options?.once === false) {
            setInView(false);
          }
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.threshold, options?.once]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/** Fade-up scroll reveal. Content stays fully readable with animations disabled. */
export function Reveal({ children, as: Tag = "div", delay = 0, className }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ once: false });

  return (
    <Tag
      ref={ref}
      data-shown={inView ? "true" : "false"}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
