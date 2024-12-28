import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [`vi`, `en`, `ru`, `de`, `br`],

  // Used when no locale matches
  defaultLocale: `vi`,
  pathnames: {
    "/buying": {
      vi: "/mua-hang",
      en: "/buying",
      ru: "/покупка",
      de: "/kaufen",
      br: "/compra",
    },
    "/selling": {
      vi: "/ban-hang",
      en: "/selling",
      ru: "/продажа",
      de: "/verkaufen",
      br: "/venda",
    },
    "/payment": {
      vi: "/thanh-toan",
      en: "/payment",
      ru: "/оплата",
      de: "/zahlung",
      br: "/pagamento",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
