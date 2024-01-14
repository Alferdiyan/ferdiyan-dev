import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import photo from "@/public/image/Eka_ferdiyanto.png";

export default function About() {
    return (
        <section id="about" className="p-6 ">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center p-3 m-4 bg-slate-200/50 border  rounded-2xl">
                    <Title title="About Me" />
                    <div className="bg-slate-200 p-3 rounded-lg">
                        <div className="rounded-lg bg-slate-300">
                            <Image
                                src={photo}
                                alt="hero"
                                className=" top-0 z-10  max-w-[250px] md:max-w-sm  rounded-lg bg-slate-300  "
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left p-10 ">
                        <p className="text-neutral text-lg mb-4 ">
                            Hi, my name is Eka Ferdiyanto and I'm a professional
                            front-end developer with over 5 years of experience
                            in building responsive and user-friendly websites. I
                            specialize in front-end development using modern web
                            technologies such as React and Figma.
                        </p>
                        <p className="text-neutral text-lg mb-4">
                            I am passionate about creating clean, elegant, and
                            functional designs that enhance the user experience.
                            I have a strong eye for detail and a deep
                            understanding of the latest web design trends and
                            best practices.
                        </p>

                        <p className="text-neutral text-lg mb-4">
                            In my free time, I enjoy exploring new technologies
                            on web development. I also contribute to open-source
                            projects and share my knowledge and experience with
                            the community through blog posts and tutorials.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 z-20">
                        <Button title="My Portfolio" href="portfolio" />
                        <Button title="Contact Me" href="contactme" />
                    </div>
                </div>
            </div>
        </section>
    );
}
