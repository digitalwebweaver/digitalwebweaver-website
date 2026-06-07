"use client";
import { useReveal } from "@/hooks/useReveal";
import type { ReactNode, CSSProperties, ElementType } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: ElementType;
}

export default function Reveal({ children, className = "", style, delay, as: Tag = "div" }: Props) {
  const ref = useReveal();
  const delayStyle: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${className}`.trim()}
      style={{ ...delayStyle, ...style }}
    >
      {children}
    </Tag>
  );
}
