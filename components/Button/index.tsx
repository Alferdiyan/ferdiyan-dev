import Link from "next/link";
import React, { Children } from "react";

type prop = {
    href: string;
    title: string;
};

export default function Button({ href, title }: prop) {
    return (
        <Link
            className="hover:ease-out min-w-fit bg-white btn-primary font-bold text-info px-4 py-2 rounded-xl transition-all duration-5000 hover:bg-secondary hover:text-white"
            href={href}
        >
            <button>{title}</button>
        </Link>
    );
}
