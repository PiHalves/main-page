"use client";
import { Link, usePathname } from "@/src/i18n/navigation";
import LanguageSwitcher from "./language_switcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  "use client";
  // Get the current page without using window
  const currentPage = usePathname();
  const t = useTranslations("Nav");
  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 w-full h-12 p-1  bg-border flex flex-row items-center justify-between px-4 z-40">
        <Link
          href="/"
          className={`rounded-md py-1 px-2 hover:bg-border/50 ${
            currentPage === "/" ? "bg-card" : ""
          }`}
        >
          Logo
        </Link>
        <div className="flex flex-row items-center gap-4">
          <Link
            href="/about"
            className={`rounded-md py-1 px-2 hover:bg-border/50 ${
              currentPage === "/about" ? "bg-card" : ""
            }`}
          >
            {t("about")}
          </Link>
          <Link
            href="/contact"
            className={`rounded-md py-1 px-2 hover:bg-border/50 ${
              currentPage === "/contact" ? "bg-card" : ""
            }`}
          >
            {t("contact")}
          </Link>
          <Link
            href="/blog"
            className={`rounded-md py-1 px-2 hover:bg-border/50 ${
              currentPage === "/blog" ? "bg-card" : ""
            }`}
          >
            {t("blog")}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
}
