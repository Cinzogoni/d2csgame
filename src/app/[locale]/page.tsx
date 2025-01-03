import styles from "../[locale]/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { getTranslations } from "next-intl/server";
import Footer from "../components/Footer/Footer";
import Events from "../components/Events/Events";
import Contact from "../components/Contact/Contacts";

function Home() {
  const t = getTranslations("HomePage");
  return (
    <main className={cx("container")}>
      <div className={cx("body")}>
        <Events />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
