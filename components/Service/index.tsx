import React from "react";
import mobileDev from "@/public/mobileDev.png";
import webDev from "@/public/webDev.png";
import uiUX from "@/public/uiUX.png";
import ServiceCard from "./ServiceCard";

const servicesData = [
    {
        judul: "Mobile Developer",
        description:
            "We design mobile app designs with the latest trends and of course according to your needs",
        logo: mobileDev,
    },
    {
        judul: "Web Developer",
        description:
            "The website is like a house and it is appropriate to give it a good look and according to its function.",
        logo: webDev,
    },
    {
        judul: "UI Design",
        description:
            "Intuitive, easy to use, and visually appealing for the user",
        logo: uiUX,
    },
];

export default function Service(): JSX.Element {
    return (
        <div className="py-5">
            <div className="flex flex-wrap gap-4  justify-center">
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        judul={service.judul}
                        description={service.description}
                        logo={service.logo}
                    />
                ))}
            </div>
        </div>
    );
}
