"use client";

import { Button, buttonVariants } from "^/src/shared/ui/button";
import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { ThemeSwitcher } from "^/src/shared/ui/theme-swicther";
import { usePathname } from "next/navigation";
import { Link } from "^/src/shared/ui/i18n";
import { cn } from "^/src/shared/lib/merge";
import {
    PackagePlus,
    Lightbulb,
    Briefcase,
    Layers,
    Phone,
    User2,
    Home,
} from "lucide-react";
import {
    TooltipProvider,
    TooltipTrigger,
    TooltipContent,
    Tooltip,
} from "^/src/shared/ui/tooltip";
import Image from "next/image";

export const Header = () => {
    const pathname = usePathname();

    const lang = pathname.startsWith("/en") ? "/ru" : "/en";

    const items = [
        { name: "Home", icon: <Home />, link: "/" },
        { name: "About", icon: <User2 />, link: "/about" },
        { name: "Skills", icon: <Lightbulb />, link: "/skills" },
        { name: "Projects", icon: <Layers />, link: "/projects" },
        { name: "Education", icon: <Briefcase />, link: "/education" },
        { name: "More", icon: <PackagePlus />, link: "/more" },
        { name: "Contact", icon: <Phone />, link: "/contact" },
    ];

    return (
        <div className="container fixed top-5 left-0 right-0 flex justify-between items-center">
            <Button
                asChild
                variant="ghost"
                className="p-2 overflow-hidden"
                size="icon"
            >
                <Link scroll={false} href={lang} replace hrefLang={lang}>
                    {pathname.startsWith("/en") ? (
                        <Image
                            src="https://flagcdn.com/w40/ru.png"
                            className="aspect-square rounded-full object-cover object-center"
                            sizes="100%"
                            height={40}
                            width={40}
                            alt=""
                        />
                    ) : (
                        <Image
                            src="https://flagcdn.com/w40/us.png"
                            className="aspect-square rounded-full object-cover object-center"
                            sizes="100%"
                            height={40}
                            width={40}
                            alt=""
                        />
                    )}
                </Link>
            </Button>
            <FramerWrapper
                className="bg-background/50 h-fit px-2.5 py-1.5 border border-border rounded-lg flex-row gap-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 sm:gap-1 flex"
                y={-100}
            >
                <TooltipProvider>
                    {items.map((itm) => (
                        <Tooltip key={itm.link} delayDuration={0.5}>
                            <TooltipTrigger asChild>
                                <Link
                                    scroll={false}
                                    className={cn(
                                        buttonVariants({
                                            size: "icon",
                                            variant: "ghost",
                                        }),
                                        "hover:text-primary/90",
                                        pathname === itm.link &&
                                        "text-primary bg-accent/75"
                                    )}
                                    href={itm.link}
                                >
                                    {itm.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>{itm.name}</span>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </TooltipProvider>
            </FramerWrapper>
            <ThemeSwitcher />
        </div>
    );
};
