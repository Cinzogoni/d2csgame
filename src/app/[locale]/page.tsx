import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { getTranslations } from "next-intl/server";

import Contact from "../components/ui/Contact/Contacts";
import Billboard from "../components/ui/Billboard/Billboard";
import RealTimeProduct from "../components/ui/RealTimeProduct/RealTimeProduct";
import GridSystem from "./styles/GridSystem/GridSystem";

function Home() {
  const t = getTranslations("HomePage");
  return (
    <main className={cx("container")}>
      <GridSystem gridClass={cx("grid")} wideClass={cx("wide")}>
        <Contact />
        <Billboard />
        <RealTimeProduct />
      </GridSystem>
    </main>
  );
}

export default Home;
