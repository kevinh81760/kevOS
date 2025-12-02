"use client";

import { Github, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function NavSocials() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={25} strokeWidth={1.5} />
        </a>
      ))}
    </div>
  );
}

