import styles from "../Contact/Contacts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Link from "next/link";
import {
  FaShoppingCart,
  FaHandHoldingUsd,
  FaCreditCard,
  FaFacebook,
} from "react-icons/fa";

function Contact() {
  return (
    <div className={cx("contacts")}>
      <Link href="/" className={cx("link")}>
        <FaShoppingCart style={{ margin: "0 6px" }} />
        Hướng dẫn mua
      </Link>
      <Link href="/" className={cx("link")}>
        <FaHandHoldingUsd style={{ margin: "0 6px" }} />
        Hướng dẫn bán item
      </Link>
      <Link href="/" className={cx("link")}>
        <FaCreditCard style={{ margin: "0 6px" }} />
        Phương thức thanh toán
      </Link>
      <Link href="/" className={cx("link")}>
        <FaFacebook style={{ margin: "0 6px" }} />
        Fan page
      </Link>
    </div>
  );
}

export default Contact;
