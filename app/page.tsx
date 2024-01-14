import Hero from "@/components/Hero";
import { profile } from "@/components/constant";
import background from "@/public/vector-background.png";
import cloud from "@/public/cloud.png";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <Hero />
            {/* <Image
                src={cloud}
                className="cloud fixed -bottom-9 opacity-60 z-0"
                alt="cloud"
            />
            <Image
                src={cloud}
                className="cloud fixed -bottom-1 opacity-25 z-0"
                alt="cloud"
            /> */}

            {/* <Image
                src={background}
                className="cloud bg-cover fixed bottom-0 right-0 left-0 top-0 z-0"
                alt="cloud"
            /> */}
        </main>
    );
}
