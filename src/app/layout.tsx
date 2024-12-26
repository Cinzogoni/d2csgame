import type { Metadata } from "next";

import styles from "../app/styles/layout.module.scss";
import styles1 from "../app/styles/GridSystem/GridSystem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const cx1 = classNames.bind(styles1);

import GlobalStyles from "./styles/GlobalStyles/GlobalStyles";
import GridSystem from "./styles/GridSystem/GridSystem";
import Header from "./components/Header/Header";

import { ThemeProvider } from "./context/ThemeContext";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalStyles>
      <ThemeProvider>
        <html lang="en">
          <body>
            <div className={cx("container")}>
              <Header />
              <GridSystem gridClass={cx1("grid")} wideClass={cx1("wide")}>
                {children}
              </GridSystem>
            </div>
          </body>
        </html>
      </ThemeProvider>
    </GlobalStyles>
  );
}
