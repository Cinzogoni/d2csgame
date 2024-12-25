import type { Metadata } from "next";

import styles from "./layout.module.scss";
import styles1 from "../app/GridSystem/GridSystem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const cx1 = classNames.bind(styles1);

import GlobalStyles from "./GlobalStyles/GlobalStyles";
import GridSystem from "./GridSystem/GridSystem";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
      <html lang="en">
        <body>
          <div className={cx("container")}>
            <Header />
            <GridSystem gridClass={cx1("grid")} wideClass={cx1("wide")}>
              {children}
            </GridSystem>
            <Footer />
          </div>
        </body>
      </html>
    </GlobalStyles>
  );
}
