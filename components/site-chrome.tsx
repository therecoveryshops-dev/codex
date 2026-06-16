"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Facebook, Instagram, Mail, MapPinned, Menu, Phone, X } from "lucide-react";
import { contact } from "@/lib/content";
import { menuTree, type MenuItem } from "@/lib/site-map";

function MenuLink({ item, onClick }: { item: MenuItem; onClick?: () => void }) {
  if (!item.href) {
    return <span className="text-white/90">{item.label}</span>;
  }

  return (
    <Link href={item.href} onClick={onClick} className="focus-ring rounded-sm text-white/86 transition hover:text-gold">
      {item.label}
    </Link>
  );
}

function DesktopItem({ item }: { item: MenuItem }) {
  const triggerClassName = "focus-ring inline-flex items-center gap-1 rounded-sm text-sm font-medium text-white/78 transition hover:text-gold";

  if (!item.children?.length) {
    return (
      <Link
        href={item.href ?? "/"}
        className="focus-ring rounded-sm text-sm font-medium text-white/78 transition hover:text-gold"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      {item.href ? (
        <Link href={item.href} className={triggerClassName}>
          {item.label}
          <ChevronDown className="h-3.5 w-3.5" />
        </Link>
      ) : (
        <span tabIndex={0} className={triggerClassName}>
          {item.label}
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      )}
      <div className="invisible absolute left-1/2 top-full z-50 w-[min(92vw,620px)] -translate-x-1/2 pt-5 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
        <div data-menu-panel="true" className={`grid gap-1 border border-gold/25 bg-forest p-3 shadow-estate ${item.children.length > 6 ? "md:grid-cols-2" : ""}`}>
          {item.children.map((child) => (
            <div key={child.label} className="relative">
              {child.href ? (
                <Link
                  href={child.href}
                  className="focus-ring flex items-center justify-between gap-3 px-4 py-3 text-sm text-white/76 transition hover:bg-white/7 hover:text-gold"
                >
                  {child.label}
                  {child.children?.length ? <ChevronDown className="h-3.5 w-3.5 -rotate-90" /> : null}
                </Link>
              ) : (
                <div className="flex items-center justify-between gap-3 px-4 py-3 text-sm text-white/76">
                  {child.label}
                  {child.children?.length ? <ChevronDown className="h-3.5 w-3.5 -rotate-90" /> : null}
                </div>
              )}
              {child.children?.length ? (
                <div className="ml-3 border-l border-gold/30">
                  {child.children.map((grandchild) => (
                    <Link
                      key={grandchild.label}
                      href={grandchild.href ?? "/"}
                      className="focus-ring block px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/50 transition hover:text-gold"
                    >
                      {grandchild.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FullSiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    About: true,
    Lessons: true,
    Events: true
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm">
          <span className="grid h-11 w-11 place-items-center border border-gold/60 font-display text-lg text-gold">
            NT
          </span>
          <span>
            <span className="block font-display text-xl leading-none">NTEC</span>
            <span className="block text-[11px] uppercase tracking-[0.24em] text-white/62">Wylie, Texas</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {menuTree.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={`tel:${contact.phone}`} className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm text-white/78 transition hover:text-gold">
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <Link href="/book" className="focus-ring inline-flex items-center gap-2 bg-gold px-5 py-3 text-sm font-semibold text-forest shadow-gold transition hover:bg-white">
            Book a Lesson
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button aria-label="Open menu" className="focus-ring rounded-sm p-2 xl:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-forest p-6 text-white xl:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="font-display text-2xl">
              NTEC
            </Link>
            <button aria-label="Close menu" className="focus-ring rounded-sm p-2" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-10 grid gap-6" aria-label="Mobile navigation">
            {menuTree.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-5">
                {item.children?.length ? (
                  <button
                    className="focus-ring flex w-full items-center justify-between rounded-sm text-left font-display text-3xl"
                    onClick={() => setOpenGroups((current) => ({ ...current, [item.label]: !current[item.label] }))}
                    aria-expanded={Boolean(openGroups[item.label])}
                  >
                    {item.label}
                    <ChevronDown className={`h-5 w-5 transition ${openGroups[item.label] ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <div className="font-display text-3xl">
                    <MenuLink item={item} onClick={() => setOpen(false)} />
                  </div>
                )}
                {item.children?.length && openGroups[item.label] ? (
                  <div className="mt-5 grid gap-3 pl-4">
                    {item.children.map((child) => (
                      <div key={child.label}>
                        {child.href ? (
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64 transition hover:text-gold"
                          >
                            {child.label}
                          </Link>
                        ) : (
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                            {child.label}
                          </p>
                        )}
                        {child.children?.length ? (
                          <div className="mt-2 grid gap-2 pl-4">
                            {child.children.map((grandchild) => (
                              <Link
                                key={grandchild.label}
                                href={grandchild.href ?? "/"}
                                onClick={() => setOpen(false)}
                                className="text-sm text-white/52 transition hover:text-gold"
                              >
                                {grandchild.label}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function FullSiteFooter() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_.7fr_.7fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-4xl text-gold">NTEC</p>
          <p className="mt-5 max-w-sm leading-7 text-white/68">
            North Texas Equestrian Center offers English riding lessons, boarding, training, horse sales,
            camps, events, and a professional 50-acre equestrian environment in Wylie, Texas.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/" className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/" className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={`mailto:${contact.email}`} className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</p>
          <div className="mt-5 grid gap-3 text-white/70">
            {["About Us", "Horse Sales", "Gallery", "Awards", "Contact"].map((item) => {
              const href = item === "About Us" ? "/about" : item === "Horse Sales" ? "/horses-for-sale" : item === "Awards" ? "/about/awards" : item === "Gallery" ? "/gallery/awards-events" : "/contact";
              return (
                <Link key={item} href={href} className="focus-ring w-fit rounded-sm transition hover:text-gold">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Services</p>
          <div className="mt-5 grid gap-3 text-white/70">
            {[
              ["Horse Boarding", "/boarding"],
              ["Riding Lessons", "/lessons"],
              ["Horse Training", "/training"],
              ["NTEC Pricing", "/pricing"],
              ["Summer Camp", "/summer-camp"]
            ].map(([label, href]) => (
              <Link key={label} href={href} className="focus-ring w-fit rounded-sm transition hover:text-gold">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Visit</p>
          <div className="mt-5 grid gap-4 text-white/70">
            <p className="flex gap-3">
              <MapPinned className="mt-1 h-5 w-5 shrink-0 text-gold" />
              {contact.address}
            </p>
            <a href={`tel:${contact.phone}`} className="focus-ring flex w-fit gap-3 rounded-sm transition hover:text-gold">
              <Phone className="h-5 w-5 text-gold" />
              {contact.phone}
            </a>
            <p>{contact.hours}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">
        © 2026 North Texas Equestrian Center.
      </div>
    </footer>
  );
}
