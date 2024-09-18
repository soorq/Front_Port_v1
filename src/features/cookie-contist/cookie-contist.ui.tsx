"use client";

import { Button } from "^/src/shared/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "^/src/shared/lib/merge";

export const CookieNotification = () => {
    const [visible, setVisible] = useState(false);
    const t = useTranslations("Cookie");

    return (
        <motion.section className={cn("fixed max-w-md font-poppins p-4 mx-auto bg-background border border-border right-10 bottom-10 rounded-2xl", visible && 'hidden')}>
            <h2 className="font-semibold">🍪 {t("title")}</h2>
            <p className="mt-4 text-sm">
                {t("desc.part")}{" "}
                <a
                    href="#"
                    className="font-medium underline transition-colors duration-300 text-foreground hover:text-primary"
                >
                    {t("desc.link")}
                </a>
                .
            </p>
            <p className="mt-3 text-sm">{t("notice")}</p>
            <div className="grid grid-cols-2 gap-2.5 mt-4 shrink-0">
                <Button variant='default' onClick={() => setVisible(true)}>
                    {t("buttons.accept")}
                </Button>
                <Button variant='outline'>
                    {t("buttons.reject")}
                </Button>
                <Button variant='outline'>
                    {t("buttons.prefer")}
                </Button>
                <Button variant='outline'>
                    {t("buttons.decline")}
                </Button>
            </div>
        </motion.section>
    );
};
