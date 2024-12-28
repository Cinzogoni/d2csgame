import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTranslations } from "next-intl";

import Contact from "../components/ui/Contact/Contacts";
import Billboard from "../components/ui/Billboard/Billboard";

function Home() {
  const t = useTranslations("HomePage");
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
