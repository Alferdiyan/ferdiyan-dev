import React from "react";

type Props = {
    title: string;
};

function Title({ title }: Props) {
    return (
        <div>
            <h1 className="flex justify-center uppercase tracking-[20px] text-primary text-2xl md:text-4xl font-bold mt-10 mb-10">
                {title}
            </h1>
        </div>
    );
}

export default Title;
