import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavItem({ href, children, active }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-medium font-medium tracking-[0.08em] uppercase text-zinc-600 hover:text-zinc-400 text-center min-w-[120px] px-4 py-2 rounded-full",
        active ? "text-white hover:text-white apple-glass-nav" : "bg-transparent"
      )}
    >
      {children}
    </Link>
  );
}
