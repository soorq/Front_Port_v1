import { FramerWrapper } from "^/src/shared/ui/framer-wrapper";
import React from "react";

export const TimeLine: React.FC<IPropsTimeline> = ({ data, className }) => (
    <div className="w-full h-auto font-rubik flex flex-col">
        {data.map((item, i) => (
            <div
                key={`${i}-timeline-element-${item.date}`}
                className="w-full h-full flex"
            >
                <FramerWrapper
                    className="w-3/12"
                    delay={i + 1 / 2.5 - i * 0.65}
                    x={0}
                    y={-100}
                >
                    <p className="w-full h-full flex justify-center items-center text-lg">
                        {item.date}
                    </p>
                </FramerWrapper>
                <FramerWrapper
                    y={-100}
                    x={0}
                    delay={i + 1 / 2.5 - i * 0.65}
                    className="w-9/12 border-l-4 px-3.5 border-l-input py-2.5 gap-3 relative point"
                >
                    <p className="text-lg leading-snug text-pretty mb-1 max-sm:text-xl">
                        {item.title}
                    </p>
                    <p className="leading-tight text-base text-balance w-full max-sm:text-xs">
                        {item.description}
                    </p>
                </FramerWrapper>
            </div>
        ))}
    </div>
);

interface IPropsTimeline {
    data: IDataItemTimline[];
    className?: string
}

interface IDataItemTimline {
    date: string;
    title: string;
    description: string;
}
