"use client";
import { routing } from "@/src/i18n/routing";
import { useState } from "react";
import Link from "next/link";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

export default function LanguageSwitcher() {
  const { locales, defaultLocale, localeCookie } = routing;
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState(defaultLocale);

  if (!hasLocale(locales, locale)) {
    return notFound();
  }

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocaleChange = (newLocale: typeof defaultLocale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  const getLanguageName = (locale: string) => {
    const names: Record<string, string> = {
      en: "EN",
      es: "ES",
      fr: "FR",
      de: "DE",
      it: "IT",
      pl: "PL",
      ru: "РУ",
      ja: "JA",
      ko: "KO",
      zh: "ZH",
    };
    return names[locale] || locale.toUpperCase();
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {getLanguageName(locale)}
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
        <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                onClick={() => handleLocaleChange(loc)}
                className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                  loc === locale
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
