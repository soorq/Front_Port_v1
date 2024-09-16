"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
export const CookieNotification = () => {
    const t = useTranslations("Cookie");

    return (
        <motion.section className="fixed max-w-md font-poppins p-4 mx-auto bg-background border border-border right-12 bottom-16 rounded-2xl">
            <h2 className="font-semibold">🍪 {t("title")}</h2>
            <p className="mt-4 text-sm">
                {t("desc.part")}{" "}
                <a
                    href="#"
                    className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500"
                >
                    {t("desc.link")}
                </a>
                .
            </p>
            <p className="mt-3 text-sm">{t("notice")}</p>
            <div className="grid grid-cols-2 gap-2.5 mt-4 shrink-0">
                <button className="text-xs text-white bg-primary font-medium rounded-lg hover:bg-primary/85 px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    {t("buttons.accept")}
                </button>
                <button className="text-xs text-white border border-border hover:bg-background/80 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    {t("buttons.reject")}
                </button>
                <button className="text-xs text-white border border-border hover:bg-background/80 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    {t("buttons.prefer")}
                </button>
                <button className="text-xs text-white border border-border hover:bg-background/80 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                    {t("buttons.decline")}
                </button>
            </div>
        </motion.section>
    );
};
