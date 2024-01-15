"use client";

import Image from "next/image";

import React, { Fragment, useState } from "react";
import Logo from "@/public/ferdiyan.svg";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
    const [menuItems] = useState([
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "about" },
        { id: 3, name: "Portfolio", link: "portfolio" },
        { id: 4, name: "Contact", link: "contactme" },
    ]);
    const [open, setOpen] = useState(false);

    return (
        <div className="px-5 sm:px-10 md:px-28">
            <div className="  z-20 text-white  relative">
                <div className="flex justify-between items-center mb-10 ">
                    <div className="fixed top-6 left-11 hover:text-orange-400">
                        <a href="/" className="font-semibold md:text-3xl">
                            Ferdiyan
                        </a>
                    </div>

                    <div className="">
                        <div
                            onClick={() => setOpen(false)}
                            className={`${
                                open ? "block" : "hidden"
                            } bg-transparent fixed inset-0 z-40 cursor`}
                        ></div>
                        <div
                            className="cursor-pointer transition-all fixed top-6 right-16 z-50 hover:text-orange-400"
                            onClick={() => setOpen(!open)}
                        >
                            {!open ? (
                                <List size={32} weight="fill" />
                            ) : (
                                <X size={32} weight="fill" />
                            )}
                        </div>

                        <ul
                            className={`${
                                open ? "block" : "hidden"
                            } bg-blue-200/90 opacity-95 text-xl md:text-3xl lg:text-5xl font-bold shadow-2xl fixed  left-5 right-5 top-5 bottom-5  flex flex-col justify-center items-center   rounded-xl    z-40  overflow-hidden gap-3 `}
                        >
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="hover:text-orange-400"
                                >
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
