"use client";
import { routing } from "@/src/i18n/routing";
import { useState } from "react";
import Link from "next/link";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const { locales, defaultLocale } = routing;
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState(defaultLocale);
  const currentPage = usePathname();
  const currentLocale = useLocale();

  if (!hasLocale(locales, locale)) {
    return notFound();
  }

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocaleChange = (newLocale: typeof defaultLocale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const getLanguageName = (locale: string) => {
    return locale.toUpperCase();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-4 py-1.5 text-sm font-medium text-[var(--foreground)] bg-[var(--card)] border border-[var(--border)] rounded-md shadow-sm hover:bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] focus:ring-offset-[var(--background)] transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getLanguageName(currentLocale)}
        <svg
          className={`ml-2 h-5 w-5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-20 origin-top-right rounded-md bg-[var(--card)] shadow-lg ring-1 ring-[var(--border)] focus:outline-none">
          <div className="py-1">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}/${currentPage === "/" ? "" : currentPage}`}
                onClick={() => handleLocaleChange(loc)}
                className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                  loc === currentLocale
                    ? "bg-[var(--background)] text-[var(--primary)] font-medium"
                    : "text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)]"
                }`}
              >
                {getLanguageName(loc)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
