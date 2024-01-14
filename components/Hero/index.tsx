"use client";

import Image from "next/image";
import React from "react";
import photo from "@/public/image/Eka_ferdiyanto.png";
import Button from "@/components/Button";
import { profile } from "../constant";
import { useTypewriter } from "react-simple-typewriter";
import motion from "framer-motion";

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name's Eka Ferdiyanto",
            "Guy-who-love-coffee",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="relative">
            <div className="hero py-12 pb-3 px-5 md:px-16 relative z-10">
                <div className="p hero-content flex justify-center items-center flex-col lg:flex-row-reverse">
                    <div
                        className="border rounded-full 
                      p-3 bg-slate-200 w-96 "
                    >
                        <div className="rounded-full bg-slate-300">
                            <Image
                                src={photo}
                                alt="hero"
                                className=" top-0 z-10    rounded-full  "
                            />
                        </div>
                    </div>
                    <div className="gap-2 flex flex-col py-6 md:pr-8">
                        {profile.map((index) => (
                            <div className="flex flex-col justify-center items-center  md:items-start ">
                                <div className="text-primary text-lg font-semibold">
                                    {text}
                                </div>
                                <h1
                                    className="text-xl md:text-4xl
                                 font-bold"
                                >
                                    {index.role}
                                </h1>
                                <p className="py-6">{index.description}</p>
                            </div>
                        ))}
                        <div className="flex gap-3  items-center">
                            <Button title="More About Me" href="/about" />
                            <Button title="Portfolio" href="/portfolio" />
                        </div>
                    </div>

                    {/* <div className="text-2xl font-bold">{text}</div> */}
                </div>
            </div>
        </div>
    );
}
