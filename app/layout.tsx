import Navbar from "@/components/Navbar/index";
import "./globals.css";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import Footer from "../components/Footer";
import cloud from "@/public/cloud.png";
import background from "@/public/vector-background.png";

export const metadata = {
    title: "Eka Ferdiyanto | UI and Web Developer ",
    description: "UI Web Developer",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="bg-blue-500">
            <body className=" ">
                <Navbar />

                <div className="">{children}</div>
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

                <Image
                    src={background}
                    className="cloud object-fill absolute bottom-0 right-0 left-0 top-0 -z-10 "
                    alt="cloud"
                />
            </body>
        </html>
    );
}
