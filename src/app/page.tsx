import styles from "./page.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Home Page</h1>
    </div>
  );
}

export default Home;
