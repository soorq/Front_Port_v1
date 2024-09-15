import Image from "next/image";

export const SkillsFooter: React.FC<{ items: { alt: string; img: any }[] }> = ({
    items,
}) => {
    return (
        <>
            {items &&
                items.map((val, indx) => {
                    return (
                        <div className="p-4" key={indx}>
                            <Image
                                src={val?.img}
                                width={400}
                                height={250}
                                alt={val?.alt}
                                className="rounded-full w-auto max-h-20"
                            />
                        </div>
                    );
                })}
        </>
    );
};
