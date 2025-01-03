"use client";
import styles from "..//LanguagesSwitcher/LanguagesSwitcher.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import { Locale, routing, usePathname, useRouter } from "src/i18n/routing";
import { useLocale } from "next-intl";

function LanguagesSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onSelectChange = (nextLocale: string) => {
    router.push({ pathname }, { locale: nextLocale as Locale });
  };

  return (
    <select
      className={cx("wrapper")}
      onChange={(e) => onSelectChange(e.target.value as Locale)}
      value={locale}
    >
      {routing.locales.map((localeItem) => (
        <option key={localeItem} value={localeItem}>
          {localeItem}
        </option>
      ))}
    </select>
  );
}

export default LanguagesSwitcher;
