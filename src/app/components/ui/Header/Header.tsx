"use client";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { useTheme } from "src/app/components/context/ThemeContext";
import LocaleSwitcher from "../LocaleSwitcher";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={cx("wrapper")}>
      <button onClick={toggleTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>

      <LocaleSwitcher />
    </header>
  );
}

export default Header;
