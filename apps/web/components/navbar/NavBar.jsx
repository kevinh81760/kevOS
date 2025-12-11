"use client";

import { usePathname } from "next/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import NavItem from "./NavItem";
import NavSocials from "./NavSocials";
import NavClock from "./NavClock";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  const { isScrollingDown, scrollY, isAtTop } = useScrollDirection();

  const items = [
    { label: "HOME", href: "/" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "PROJECTS", href: "/projects" },
    { label: "SUITE", href: "/suite" },
    { label: "ABOUT", href: "/about" },
  ];

  // Determine if navbar should be hidden
  // Always visible at top, hide when scrolling down past threshold, show when scrolling up
  const shouldHide = !isAtTop && isScrollingDown && scrollY > 160;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 border-b border-neutral-950 bg-black/85 backdrop-blur-sm",
        "transition-transform duration-300 ease-in-out",
        shouldHide ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="flex gap-3">
        {items.map(item => (
          <NavItem
            key={item.href}
            href={item.href}
            active={pathname === item.href}
          >
            {item.label}
          </NavItem>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <NavSocials />
        <span className="text-zinc-600">|</span>
        <NavClock />
      </div>
    </nav>
  );
}
