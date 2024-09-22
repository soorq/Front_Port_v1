import { Languages, User2, Dock, Aperture } from "lucide-react";
import { ContentPart } from "^/src/widgets/content-part";
import { Badge } from "^/src/shared/ui/badge";
import { Header } from "^/src/widgets/header";
import { useTranslations } from "next-intl";

export const AboutPage = () => {
    const t = useTranslations("About");

    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <ContentPart
                    about={
                        <p className="font-poppins text-2xl w-full text-pretty leading-snug max-sm:text-lg">
                            {t("desc")}
                        </p>
                    }
                    header={{
                        content: {
                            title: t("title.after"),
                            subtitle: t("title.before"),
                        },
                        badge: (
                            <Badge className="gap-2">
                                <User2 className="h-5 w-5" />
                                {t("badge")}
                            </Badge>
                        ),
                    }}
                    links={{
                        github: "",
                        linkedin: "",
                        twitch: "",
                        twitter: "",
                        youtube: "",
                    }}
                    other={other}
                />
            </div>
        </main>
    );
};

const other = [
    {
        label: 'Язык:',
        value: 'Русский, Английский',
        icon: <Languages />,
    },
    {
        label: "Пол:",
        value: 'Мужской',
        icon: <Dock />,
    },
    {
        label: "Хобби:",
        value: 'блоги, кодер, фотограф',
        icon: <Aperture />,
    },
];
