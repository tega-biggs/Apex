import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 font-manrope font-bold text-xl tracking-tight text-primary transition-opacity hover:opacity-90",
        className
      )}
    >
      <span className="text-primary">Apex</span>
      <span>C&P Ltd</span>
    </Link>
  );
}
