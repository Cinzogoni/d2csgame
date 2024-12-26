"use client";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTheme } from "src/app/context/ThemeContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={cx("wrapper")}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>

      <LanguageSwitcher />
    </header>
  );
}

export default Header;
