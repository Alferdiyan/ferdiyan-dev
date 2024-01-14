"use client";
import React, { useState } from "react";
import project1 from "../../public/image/crisp-works.png";
import project2 from "../../public/image/lifecycle-works.png";
import project3 from "../../public/image/desktop-design.jpg";
import CardGlass from "@/components/Card/CardGlass";
import Title from "@/components/Title";
import { portfolioData } from "@/components/constant/index";
import { List, X } from "@phosphor-icons/react";
import Modal from "@/components/Modal";
// import ProjectCard from './ProjectCard';

type Props = {};

export default function Page({}: Props) {
    return (
        <div className="h-full text-center border rounded-lg p-3 m-4 flex flex-col md:text-left  lg:m-10  xl:space-y-0  items-center ">
            <Title title="Portfolio" />
            <div className="flex justify-center  ">
                <div className="flex flex-wrap gap-3 items-start justify-center">
                    {portfolioData.map((project, index) => (
                        <>
                            <CardGlass
                                key={index}
                                images={project.gambar}
                                cardTitle={project.projectTitle}
                                description={project.deskripsi}
                            />
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}
