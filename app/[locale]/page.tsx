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
  const t = useTranslations("Landing");
  return (
    <>
      <div className="h-[calc(100vh-10rem)] xl:h-screen mx-auto text-left text-5xl lg:text-5xl min-xl:text-8xl font-bold flex items-center w-full lg:w-3/4">
        <h1>
          {t("header.0")}
          <br />
          {t("header.1")}
          <br />
          {t("header.2")}
          <br />
          {t("header.3")}
        </h1>
      </div>

      <div className="w-full p-3 lg:w-3/4 lg:p-4 mx-auto border border-border rounded-md lg:rounded-2xl text-justify text-sm lg:text-lg min-xl:text-2xl bg-card mb-8">
        <h2 className="font-bold text-xl lg:text-3xl min-xl:text-4xl mb-4">
          {t("subheadings.0")}
        </h2>
        <span className="my-4">{t("descriptions.0")}</span>
      </div>
      <div className="w-full p-3 lg:w-3/4 lg:p-4  mx-auto my-8">
        <h2 className="font-bold text-xl lg:text-3xl min-xl:text-4xl mb-4">
          {t("subheadings.1")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-2xl:grid-cols-3 gap-2 lg:gap-8 my-6  text-sm lg:text-lg min-xl:text-2xl ">
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.1")}
          </span>
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.2")}
          </span>
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.3")}
          </span>
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.4")}
          </span>
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.5")}
          </span>
          <span className="border border-border rounded-md p-2 lg:p-4 bg-card">
            {t("descriptions.6")}
          </span>
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
