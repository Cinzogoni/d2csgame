import styles from "../Contact/Contacts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Link from "next/link";

function Contact() {
  return (
    <div className={cx("contacts")}>
      <Link href="/" className={cx("link")}>
        Hướng dẫn mua
      </Link>
      <Link href="/" className={cx("link")}>
        Hướng dẫn bán item
      </Link>
      <Link href="/" className={cx("link")}>
        Hướng dẫn mua
      </Link>
      <Link href="/" className={cx("link")}>
        Fan page
      </Link>
    </div>
  );
}

export default Contact;
