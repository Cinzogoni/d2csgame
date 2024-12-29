"use client";

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
    <div>
      <select
        onChange={(e) => onSelectChange(e.target.value as Locale)}
        value={locale}
      >
        {routing.locales.map((localeItem) => (
          <option key={localeItem} value={localeItem}>
            {localeItem}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguagesSwitcher;
