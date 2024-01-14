"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { GoogleChromeLogo, SketchLogo } from "@phosphor-icons/react";

// import { document } from "postcss";

type Props = {
    cardTitle: string;
    description: string;
    images: StaticImageData;
};

export default function CardGlass({ cardTitle, description, images }: Props) {
    return (
        <div className="p-3">
            <div className="card p-4  flex flex-col justify-center items-center  w-[400px] bg-blue-400/80 rounded-xl">
                <figure className="bg-blue-500/60 p-3 rounded">
                    <Image
                        src={images}
                        alt="car!"
                        className="object-cover"
                        height={250}
                    />
                </figure>
                <div className="card-body flex flex-col p-3 gap-2 ">
                    <h2 className="card-title font-bold">{cardTitle}</h2>
                    <p>{description}</p>
                    <div className="card-actions  text-white justify-end">
                        <GithubLogo size={32} />
                        <GoogleChromeLogo size={32} />
                        <SketchLogo size={32} />
                    </div>
                </div>
            </div>
        </div>
    );
}
