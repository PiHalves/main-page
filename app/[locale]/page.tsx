import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { routing } from "@/src/i18n/routing";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Enable static rendering
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("Teaser");
  return (
    <>
      <div className="h-screen mx-auto text-left lg:text-3xl min-xl:text-8xl font-bold flex items-center w-full lg:w-3/4">
        {t("header.0")}
        <br />
        {t("header.1")}
        <br />
        {t("header.2")}
        <br />
        {t("header.3")}
      </div>
      <div className="w-full p-4 lg:w-3/4 lg:p-0 mx-auto ">dasdas </div>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
