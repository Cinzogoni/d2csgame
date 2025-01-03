import type { Metadata } from "next";

import "../[locale]/styles/globals.scss";
import styles from "../[locale]/styles/layout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "src/i18n/routing";

import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "d2csgame",
  description: "Game item trading platform",
  openGraph: {
    title: "d2csgame",
    description: "Game item trading platform",
    url: "",
    images: [
      {
        url: "",
        width: "",
        height: "",
        alt: "Custom image",
      },
    ],
    type: "website",
    siteName: "d2csgame",
    locale: "vi_VN",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={cx("wrapper")}>
            <Header />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
