import { Circle, Dna, Globe2, Languages } from "lucide-react";

export const AboutInformation = () => {
    const items = [
        {
            name: "Language",
            answer: "English UK, Russia",
            icon: <Languages className="h-11 w-11" />,
        },
        {
            name: "Nationality",
            answer: "Russian",
            icon: <Globe2 className="h-8 w-8" />,
        },
        { name: "Gender", answer: "Male", icon: <Dna className="h-8 w-8" /> },
    ];

    return items.map((val) => (
        <div
            key={`about-information-${val.name}`}
            className="p-1 w-fit relative"
        >
            <h3 className="gap-2 text-3xl [&>svg]:text-primary font-poppins font-semibold relative items-start flex c_underline max-sm:text-2xl">
                {val.icon}
                {val.name}
            </h3>
            <div className="flex gap-2 items-center flex-row text-xl pt-3 max-lg:justify-start">
                <Circle className="h-3 w-3" />
                {val.answer}
            </div>
        </div>
    ));
};
