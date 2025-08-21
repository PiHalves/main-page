import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { routing } from "@/src/i18n/routing";

export default function Home({ params }: { params: { locale: string } }) {
  // Enable static rendering
  const locale = params.locale;
  setRequestLocale(locale);
  const t = useTranslations("Teaser");
  return (
    <div className="h-screen w-screen text-center lg:text-3xl xl:text-5xl font-bold flex items-center justify-center overflow-hidden">
      {t("title")}
    </div>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
