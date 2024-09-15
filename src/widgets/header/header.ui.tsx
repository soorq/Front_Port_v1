"use client";

import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Button, buttonVariants } from "^/src/shared/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "^/src/shared/lib/merge";
import { Link } from "^/src/shared/ui/i18n";
import {
    Home,
    User2,
    Lightbulb,
    Layers,
    Briefcase,
    PackagePlus,
    Phone
} from "lucide-react";
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from "^/src/shared/ui/tooltip";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "^/src/shared/ui/dropdown-menu";

export const Header = () => {
    const pathname = usePathname();

    const items = [
        { name: "Home", icon: <Home />, link: "/" },
        { name: "About", icon: <User2 />, link: "/about" },
        { name: "Skills", icon: <Lightbulb />, link: "/skills" },
        { name: "Projects", icon: <Layers />, link: "/projects" },
        { name: "Work", icon: <Briefcase />, link: "/education" },
        { name: "More", icon: <PackagePlus />, link: "/more" },
        { name: "Contact", icon: <Phone />, link: "/contact" },
    ];

    return (
        <div className="container fixed top-5 left-0 right-0 flex justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {pathname.startsWith('/en') ? 'En' : 'Ру'}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link href="/ru" replace>Ру</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link href="/en" replace>En</Link>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <FramerWrapper
                className="backdrop-blur-3xl h-fit px-2.5 py-1.5 border border-black rounded-lg bg-transparent flex-row gap-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 sm:gap-1 flex"
                y={-100}
            >
                <TooltipProvider>
                    {items.map((itm) => (
                        <Tooltip key={itm.link} delayDuration={0.5}>
                            <TooltipTrigger asChild>
                                <Link
                                    className={cn(
                                        buttonVariants({
                                            size: "icon",
                                            variant: "ghost",
                                        }),
                                        "hover:text-[#2f7df4]",
                                        pathname === itm.link &&
                                        "text-[#2f7df4] bg-zinc-100"
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
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {pathname.startsWith('/en') ? 'En' : 'Ру'}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link href="/ru" replace>Ру</Link>
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button asChild>
                                <Link href="/en" replace>En</Link>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
