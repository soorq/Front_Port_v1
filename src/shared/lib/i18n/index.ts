import { Pathnames } from "next-intl/navigation";

/**
 *  en: English
 *  ru: Russian
 */

export const locales = ["en", "ru"] as const;

export const pathnames = {
    "/": "/",
    "/education": "/education",
    "/projects": "/projects",
    "/contact": "/contact",
    "/skills": "/skills",
    "/about": "/about",
    "/more": "/more",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
