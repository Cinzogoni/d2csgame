import type { Metadata } from "next";

import styles from "../[locale]/styles/layout.module.scss";
import styles1 from "../[locale]/styles/GridSystem/GridSystem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const cx1 = classNames.bind(styles1);

import GlobalStyles from "./styles/GlobalStyles/GlobalStyles";
import GridSystem from "./styles/GridSystem/GridSystem";
import Header from "../components/ui/Header/Header";

import { ThemeProvider } from "../components/context/ThemeContext";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "src/i18n/routing";

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
    <GlobalStyles>
      <ThemeProvider>
        <html lang="en">
          <body>
            <div className={cx("container")}>
              <NextIntlClientProvider messages={messages}>
                <Header />
                <GridSystem gridClass={cx1("grid")} wideClass={cx1("wide")}>
                  {children}
                </GridSystem>
              </NextIntlClientProvider>
            </div>
          </body>
        </html>
      </ThemeProvider>
    </GlobalStyles>
  );
}
