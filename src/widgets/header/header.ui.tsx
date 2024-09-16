"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "^/src/shared/ui/dropdown-menu";
import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Button, buttonVariants } from "^/src/shared/ui/button";
import { cn } from "^/src/shared/lib/merge";
import {
    Home,
    User2,
    Lightbulb,
    Layers,
    Briefcase,
    PackagePlus,
    Phone,
} from "lucide-react";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "^/src/shared/ui/tooltip";
import { Link, usePathname } from "^/src/shared/ui/i18n";
import { ThemeSwitcher } from "^/src/shared/ui/theme-swicther";

export const Header = () => {
    const pathname = usePathname();

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
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {pathname.startsWith("/en") ? "En" : "Ру"}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link scroll={false} href="/ru" replace>
                                    Ру
                                </Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link scroll={false} href="/en" replace>
                                    En
                                </Link>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
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
