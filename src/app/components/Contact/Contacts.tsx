import styles from "../Contact/Contacts.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import {
  FaShoppingCart,
  FaHandHoldingUsd,
  FaCreditCard,
  FaFacebook,
} from "react-icons/fa";

import { Link } from "src/i18n/routing";
import { useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("IndexPage");
  return (
    <div className={cx("contacts")}>
      <Link href="/" className={cx("link")}>
        <FaShoppingCart style={{ margin: "0 6px" }} />
        {t("buyingGuide")}
      </Link>
      <Link href="/" className={cx("link")}>
        <FaHandHoldingUsd style={{ margin: "0 6px" }} />
        {t("sellingGuide")}
      </Link>
      <Link href="/" className={cx("link")}>
        <FaCreditCard style={{ margin: "0 6px" }} />
        {t("paymentMethods")}
      </Link>
      <Link href="/" className={cx("link")}>
        <FaFacebook style={{ margin: "0 6px" }} />
        {t("fanPage")}
      </Link>
    </div>
  );
}

export default Contact;
