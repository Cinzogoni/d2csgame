import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Link } from "src/i18n/routing";

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("links")}>
        <Link href="/" className={cx("link")}>
          Về chúng tôi
        </Link>
        <Link href="/" className={cx("link")}>
          Chính sách
        </Link>
        <Link href="/" className={cx("link")}>
          Liên hệ
        </Link>
      </div>

      <h1 className={cx("copyright")}>© 2025 d2csgame. All rights reserved.</h1>
    </footer>
  );
}

export default Footer;
