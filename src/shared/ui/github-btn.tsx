import { Github } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

export const GithubBtn = () => {
  return (
    <Button
      asChild
      className="font-rubik after:absolute after:h-2.5 after:w-2.5 after:bg-primary after:-top-1 after:-right-1 after:animate-pulse after:block after:rounded-full gap-2.5 absolute bottom-10 left-0 border-y border-r border-l-0 rounded-l-none rounded-r-xl h-12"
      variant="outline"
      size="lg"
    >
      <Link
        href="https://github.com/soorq"
        rel="noopener noreferrer"
        target="blank"
      >
        <Github />
        <span className="text-2xl font-light max-sm:text-xl">
          Github
        </span>
      </Link>
    </Button>
  );
};
