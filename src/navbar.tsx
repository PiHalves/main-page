"use client;";
import { Link } from "@/src/i18n/navigation";
import LanguageSwitcher from "./language_switcher";

export default function Navbar() {
  return (
    <>
      <nav className="absolute w-full h-10 bg-gray-600 flex flex-row items-center justify-between px-4 z-40">
        <Link href="/">Logo</Link>
        <div className="flex flex-row items-center gap-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
}
