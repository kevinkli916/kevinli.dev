"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#experience", id: "experience", label: "Experience" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#education", id: "education", label: "Education" },
  { href: "#contact", id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    track("theme_toggle", { theme: nextTheme });
    setTheme(nextTheme);
  };

  const renderNavLink = (item: (typeof navItems)[number]) => {
    const isActive = activeSection === item.id;

    return (
      <a
        key={item.id}
        href={item.href}
        onClick={() => {
          setIsMenuOpen(false);
          track("nav_click", { section: item.id });
        }}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          isActive
            ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
        }`}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="sticky top-0 z-50 -mx-5 border-b border-slate-200 bg-slate-50/90 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-slate-50/75 dark:border-slate-800 dark:bg-slate-950/90 dark:supports-[backdrop-filter]:bg-slate-950/75 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <a
          href="#top"
          onClick={() => track("nav_click", { section: "top" })}
          className="text-sm font-semibold tracking-tight text-slate-950 transition-colors hover:text-slate-700 dark:text-white dark:hover:text-slate-300"
        >
          Kevin Li
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 text-sm md:flex">
          {navItems.map(renderNavLink)}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
          >
            {isMounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="h-9 w-9 rounded-full border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="mx-auto mt-3 flex max-w-5xl flex-wrap gap-2 text-sm md:hidden">
          {navItems.map(renderNavLink)}
        </nav>
      )}
    </header>
  );
}
