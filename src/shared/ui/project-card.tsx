import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { Button } from "^/src/shared/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "^/src/shared/ui/card";

export const ProjectCard: React.FC<{
  value: { tags: string[]; title: string; desc: string; href: string };
  num: number;
}> = ({ value, num }) => {
  return (
    <FramerWrapper
      className={"max-w-[32%] min-h-[345px] max-lg:max-w-full"}
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>{value.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base font-poppins">{value.desc}</p>
          <div className=" w-full h-fit flex mt-2 justify-center flex-row gap-3">
            {value.tags.map((itm: string, indx: number) => {
              // return <Badge key={indx}>{itm}</Badge>
              return (
                <span
                  className={`inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${(itm === "Nextjs" &&
                      "bg-teal-100 text-teal-800") ||
                    (itm === "Freelancing" &&
                      "bg-yellow-100 text-yellow-800 ") ||
                    (itm === "Shadcn Ui" &&
                      "bg-blue-100 text-blue-800") ||
                    (itm === "Typescript" &&
                      "bg-red-100 text-red-800") ||
                    "bg-gray-100 text-gray-800"
                    }  `}
                  key={indx}
                >
                  {itm}
                </span>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="items-center justify-center flex">
          <Button
            variant="default"
            className="flex"
            size="lg"
            asChild
          >
            <Link
              rel="noopener noreferrer"
              href={value.href}
              target="blank"
            >
              Visit Project{" "}
              <ArrowUpRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};
