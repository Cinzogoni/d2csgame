import styles from "../News/News.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Link from "next/link";

function News() {
  return (
    <div className={cx("billboard")}>
      <article className={cx("news")}></article>
      <aside className={cx("banners")}></aside>
    </div>
  );
}

export default News;
