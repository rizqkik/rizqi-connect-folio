import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { CONTACT, NAV_LINKS } from "./data";

function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    const onScroll = () => {
      const probe = window.innerHeight * 0.32;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= probe) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fade-in-up sticky top-0 z-50 bg-background/85 backdrop-blur-[2px] transition-colors duration-300",
        scrolled ? "border-b border-border" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 md:px-10">
        <a href="#top" className="flex min-w-0 items-baseline gap-2.5">
          <span className="grid h-7 w-7 shrink-0 place-items-center border border-border-strong text-[11px] font-medium tracking-[0.04em]">
            RF
          </span>
          <span className="truncate text-sm font-medium tracking-tight">Rizqi Fauzan</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "relative text-[13px] tracking-tight transition-colors duration-200",
                active === link.id
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300",
                  active === link.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
          <a
            href={CONTACT.resume}
            className="border border-border-strong px-3.5 py-1.5 text-[13px] tracking-tight transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform duration-300",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform duration-300",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background transition-[max-height,opacity] duration-400 md:hidden",
          open ? "max-h-[70vh] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 pb-8 pt-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              style={{ ["--anim-delay" as string]: `${i * 45}ms` }}
              className={cn(
                "flex items-baseline justify-between border-b border-border py-4 text-lg tracking-tight",
                open && "fade-in-up",
                active === link.id ? "text-accent" : "text-foreground",
              )}
            >
              {link.label}
              <span className="label-eyebrow">0{i + 1}</span>
            </a>
          ))}
          <a
            href={CONTACT.resume}
            onClick={() => setOpen(false)}
            className="mt-6 border border-border-strong py-3 text-center text-sm tracking-tight"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
