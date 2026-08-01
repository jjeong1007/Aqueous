"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { PanelLeft } from "lucide-react";
import { navSections } from "./nav-data";
import { SidebarIcon } from "./SidebarIcon";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-2 rounded-lg px-2 py-3 ${
        active ? "bg-bg-brand-subtle" : "bg-transparent"
      }`}
    >
      <SidebarIcon icon={icon} active={active} />
      <span
        className={`text-base font-medium leading-none ${
          active ? "text-text-brand" : "text-text-navigation"
        }`}
      >
        {label}
      </span>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-[224px] flex-col overflow-y-auto bg-bg-secondary py-9 pl-2.5 pr-4">
      <div className="flex w-full flex-col gap-4">
        {/* Brand header */}
        <div className="flex w-full items-center gap-[52px] px-2">
          <div className="flex items-center gap-2.5">
            <div className="relative flex size-[30px] items-center justify-center rounded-lg bg-brand-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sidebar/logo-n.svg"
                alt=""
                width={17}
                height={19}
                className="h-[19px] w-[17px]"
              />
            </div>
            <span className="whitespace-nowrap text-base font-bold leading-[22px] text-text-primary">
              Nyck AI
            </span>
          </div>
          <button
            type="button"
            aria-label="Collapse sidebar"
            className="flex size-5 shrink-0 items-center justify-center"
          >
            <SidebarIcon icon={PanelLeft} tone="primary" />
          </button>
        </div>

        {/* Nav sections */}
        {navSections.map((section, sectionIndex) => (
          <div
            key={section.title || `section-${sectionIndex}`}
            className={`flex w-full flex-col ${
              sectionIndex === 0 ? "gap-3" : "gap-2"
            }`}
          >
            {section.title && (
              <div className="flex w-full items-center px-2">
                <p className="flex-1 text-[13px] leading-[22px] text-text-tertiary">
                  {section.title}
                </p>
              </div>
            )}
            {section.items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActivePath(pathname, item.href)}
              />
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
}
