import React from "react";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function index({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My Name's Eka Ferdiyanto",
            "Guy-who-love-coffee",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return <span className="mr-5">{text}</span>;
}
