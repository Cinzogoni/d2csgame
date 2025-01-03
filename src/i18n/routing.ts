import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [`vi`, `en`, `ru`],

  // Used when no locale matches
  defaultLocale: `vi`,
  pathnames: {
    "/buying": {
      vi: "/mua-hang",
      en: "/buying",
      ru: "/покупка",
    },
    "/selling": {
      vi: "/ban-hang",
      en: "/selling",
      ru: "/продажа",
    },
    "/payment": {
      vi: "/thanh-toan",
      en: "/payment",
      ru: "/оплата",
    },
    "/realtimeProducts": {
      vi: "/vua-cap-nhat",
      en: "/real-time-update",
      ru: "/обновление-в-реальном-времени",
    },
    "/news": {
      vi: "/tin-tuc",
      en: "/news",
      ru: "/новости",
    },
    "/classification": {
      vi: "/phan-loai",
      en: "/classification",
      ru: "/классификация",
    },
    // "/item": {
    //   vi: "/",
    //   en: "/",
    //   ru: "/",
    // },
    // "/set": {
    //   vi: "/",
    //   en: "/",
    //   ru: "/",
    // },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
