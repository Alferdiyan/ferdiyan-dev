import Image from "next/image";
import React from "react";
import photo from "@/public/image/Eka_ferdiyanto.png";
import GetInTouch from "@/components/Button";
import cloud from "@/public/cloud.png";
import background from "@/public/vector-background.png";

import { profile } from "./constant";
import Navbar from "./Navbar";
import Link from "next/link";
import Button from "@/components/Button";

export default function Hero() {
    return (
        <div className=" h-screen md:min-h-screen relative">
            {/* <Navbar /> */}
            <div className="hero px-16 relative z-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="gap-2 flex flex-col  ">
                        {profile.map((index) => (
                            <div>
                                <p className="text-primary text-lg font-semibold">
                                    Hello I am {index.name}
                                </p>
                                <h1 className="text-5xl font-bold">
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
                    <div>
                        <Image
                            src={photo}
                            alt="hero"
                            className=" top-0 z-10  max-w-xs md:max-w-sm  rounded-full  bg-transparent"
                        />
                    </div>
                </div>
                <div className="flex justify-end border items-end">
                    {/* <Image src={cloud} className="cloud" alt="cloud" />
                    <Image
                        src={cloudSoft}
                        className="cloud-soft"
                        alt="cloud-soft"
                    /> */}
                </div>
            </div>
            {/* <div className="z-10">
                <Image
                    src={cloud}
                    className="cloud absolute bottom-0"
                    alt="cloud"
                />
                <Image
                    src={cloud}
                    className="cloud absolute bottom-5 opacity-25"
                    alt="cloud"
                />

                <Image
                    src={background}
                    className="cloud bg-cover absolute bottom-0 right-0 left-0 top-0 z-0"
                    alt="cloud"
                />
            </div> */}
        </div>
    );
}
