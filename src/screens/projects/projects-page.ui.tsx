import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import { ProjectCard } from "^/src/shared/ui/project-card";
import { Heading } from "^/src/shared/ui/heading";
import { Header } from "^/src/widgets/header";
import { Badge } from "^/src/shared/ui/badge";
import { Layers } from "lucide-react";

const Projects = [
    {
        title: "FriendZ - A social media Platform",
        desc: "FriendZ is a social media app made with modern tech stacks such as redis, Authjs etc. A user can Create, delete, like, comment Post. ",
        tags: ["Redis", "Authjs", "Typescript", "Nextjs"],
        href: "https://github.com/taqui-786/project-friendz",
    },
    {
        title: "itZmyLink- One Page many Links",
        desc: "itZmyLink is a simple platform where user can create a personalized page to showcase all your social media profiles in one place. ",
        tags: ["Nextjs", "Typescript", "Shadcn Ui"],
        href: "https://github.com/taqui-786/itZmyLink",
    },
    {
        title: "GitEstimate- Github estimate worth generator",
        desc: "GitEstimate is a simple fun tool where user can generate their github estimate worth card just by entering their github username. ",
        tags: ["Nextjs", "Typescript", "Shadcn Ui"],
        href: "https://github.com/taqui-786/GitEstimate",
    },
    {
        title: "Mixcn-ui- Reusable components for Nextjs",
        desc: "This is Nextjs app with a Collection of Nextjs Components - (Currently under Devlelopment) ",
        tags: ["Nextjs", "Shadcnui", "Npx", "Library"],
        href: "https://mixcn-ui.vercel.app",
    },
    {
        title: "Rupeespot- All deals Product in one place",
        desc: "This is a free tool to check price history charts for millions of products for popular Indian stores such as Amazon and Flipkart. ",
        tags: ["Nextjs", "Freelancing", "MySQL"],
        href: "https://rupeespot.com/",
    },

    {
        title: "KryptoKapital- Investing in Cryptocurreny",
        desc: "This is a platform for learning about cryptocurrency with many tools and festures. It is very big project. ",
        tags: ["Nextjs", "Freelancing", "Supabase"],
        href: "https://devkryptokapital.netlify.app/",
    },
    {
        title: "ChatApp- Simple instagram clone",
        desc: "ChatApp is similar to instagram, you can create, edit, delete, like,comment, post and  Follow, unfollow users",
        tags: ["Reactjs", "Javascript"],
        href: "https://github.com/taqui-786/chatapp-api",
    },
    {
        title: "Devletter - A Newsletter for devs",
        desc: "Devletter ia a newsletter subscribing single page app made with Nextjs and Tailwindcss.",
        tags: ["Nextjs", "Tailwindcss"],
        href: "https://github.com/taqui-786/Devletter",
    },
    {
        title: "CrouMaker - A Crousal Maker App",
        desc: "Crousal Maker is a tool with in-built crousals templates edit and download it in any format.",
        tags: ["Nextjs", "jsPDF", "html2canvas", "Shadcn Ui"],
        href: "https://github.com/taqui-786/crousal-maker",
    },
];


export const ProjectsPage = () => {
    return (
        <main className="flex relative break-words min-h-screen container items-center justify-between pt-14 pb-4 max-md:p-4 max-sm:pt-20">
            <Header />

            <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
                <Badge className="gap-2">
                    <Layers className="h-5 w-5" />
                    Projects
                </Badge>
                <div className="flex flex-col gap-3">
                    <Heading>My Projects</Heading>
                    <FramerWrapper y={0} x={200}>
                        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
                            I love to Build Cool Projects. Here, you&#x27;ll find a
                            curated collection of my creative endeavors and
                            technical projects. Each piece represents a journey of
                            innovation, problem-solving, and continuous learning.
                            Feel free to explore this showcase of my passion and
                            expertise in action.
                        </p>
                    </FramerWrapper>
                </div>

                <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
                    {Projects.map((val, indx) => {
                        return <ProjectCard key={indx} value={val} num={indx} />;
                    })}
                </div>
            </div>
        </main>
    );
}
