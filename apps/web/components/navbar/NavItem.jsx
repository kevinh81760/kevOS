import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavItem({ href, children, active }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-[20px] text-zinc-600 hover:text-white transition tracking-wide",
        active && "text-white font-[450]"
      )}
    >
      {children}
    </Link>
  );
}
