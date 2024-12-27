import styles from "../app/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Contact from "./components/Contact/Contacts";
import Billboard from "./components/Billboard/Billboard";

function Home() {
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
