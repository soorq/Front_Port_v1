import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({ defaultLocale: "ru", locales: ["ru", "en"] });

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);
