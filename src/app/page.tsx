import styles from "../app/styles/page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Contact from "./components/Contact/Contacts";
import News from "./components/News/News";

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Contact />
      <News />
    </div>
  );
}

export default Home;
