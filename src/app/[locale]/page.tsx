import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { getTranslations } from "next-intl/server";

import GridSystem from "../components/GridSystem/GridSystem";
import Contact from "../components/Contact/Contacts";
import Billboard from "../components/Billboard/Billboard";
import RealTimeProducts from "../components/RealTimeProducts/RealTimeProducts";
import ItemsSet from "../components/ItemsSet/ItemsSet";

function Home() {
  const t = getTranslations("HomePage");
  return (
    <main className={cx("container")}>
      <GridSystem gridClass={cx("grid")} wideClass={cx("wide")}>
        <Contact />
        <Billboard />
        <RealTimeProducts />
        <ItemsSet />
      </GridSystem>
    </main>
  );
}

export default Home;
