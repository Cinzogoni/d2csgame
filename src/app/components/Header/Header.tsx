import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import LanguagesSwitcher from "../LanguagesSwitcher/LanguagesSwitcher";

function Header() {
  return (
    <header className={cx("wrapper")}>
      <LanguagesSwitcher />
    </header>
  );
}

export default Header;
