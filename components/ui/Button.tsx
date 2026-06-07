import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  type = "button",
}: Props) {
  const cls = `btn btn-${variant}${size !== "md" ? ` btn-${size}` : ""} ${className}`.trim();

  if (href) {
    return <Link href={href} className={cls}>{children}</Link>;
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
