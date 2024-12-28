import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTranslations } from "next-intl";

import Contact from "../components/Contact/Contacts";
import Billboard from "../components/Billboard/Billboard";

function Home() {
  const t = useTranslations("IndexPage");
  return (
    <main className={cx("wrapper")}>
      <div className={cx("container")}>
        <Contact />
        <Billboard />
      </div>
    </main>
  );
}

export default Home;
