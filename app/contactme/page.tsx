"use client";
import Service from "@/components/Service";
import Title from "@/components/Title";
import {
    YoutubeLogo,
    GithubLogo,
    LinkedinLogo,
    InstagramLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactMe() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const options = [
        {
            value: "Need help with a one-off project",
            label: "Need help with a one-off project",
        },
        {
            value: "Looking for a long term partnership",
            label: "Looking for a long term partnership",
        },
        {
            value: "Want to hire me full-time",
            label: "Want to hire me full-time",
        },
        { value: "Just wanted to say hi!", label: "Just wanted to say hi!" },
    ];

    const onSubmit = (formData: any) => console.log(formData);

    return (
        <div className="min-h-screen bg-slate-200/30 rounded p-3 m-4 ">
            <Title title="Contact" />
            <div className=" flex flex-col md:p-16 m-10 ">
                <h1 className="text-2xl font-semibold py-3">
                    Get In Touch - Lets Work Together
                </h1>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="h-full   md:my-9"
                >
                    <div className="flex gap-x-3">
                        <div className="w-1/2 flex flex-wrap mb-4">
                            <input
                                {...register("name", { required: true })}
                                className="appearance-none block w-full bg-gray-200/30 text-black border border-gray-200/60 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
                                id="name"
                                type="text"
                                placeholder="Masukkan nama Anda"
                            />
                        </div>
                        <div className="w-1/2 flex flex-wrap mb-4">
                            <input
                                {...register("email", { required: true })}
                                className="appearance-none block w-full bg-gray-200/30 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
                                id="email"
                                type="email"
                                placeholder="Masukkan email Anda"
                            />
                            {errors.email && (
                                <span>This field is required</span>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-4">
                        <div className="w-full">
                            <select
                                {...register("service", { required: true })}
                                className="appearance-none block w-full bg-gray-200/30 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
                                id="form-contact_service"
                            >
                                <option value="" disabled selected>
                                    What are you interested in?
                                </option>
                                {options.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-4">
                        <div className="w-full">
                            <input
                                {...register("subject", { required: true })}
                                className="appearance-none block w-full bg-gray-200/30 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
                                id="subject"
                                type="text"
                                placeholder="Masukkan subjek"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap mb-4">
                        <div className="w-full">
                            <textarea
                                {...register("message", { required: true })}
                                className="appearance-none block w-full bg-gray-200/30 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white/40 focus:border-gray-500"
                                id="message"
                                placeholder="Masukkan pesan Anda"
                            ></textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <input
                            type="submit"
                            className="w-full bg-[#f7ab0a] hover:bg-[#FEC868] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </form>
            </div>
            <Service />
            <div className="text-white flex flex-row justify-center py-5">
                <Link href="https://www.youtube.com/ferdiyan">
                    <YoutubeLogo size={32} weight="fill" />
                </Link>
                <Link href="https://github.com/Alferdiyan">
                    <GithubLogo size={32} weight="fill" />
                </Link>
                <Link href="https://www.linkedin.com/in/eka-ferdiyanto-11ab551b2/">
                    <LinkedinLogo size={32} weight="fill" />
                </Link>
                <Link href="https://www.instagram.com/ferdiyan.id">
                    <InstagramLogo size={32} weight="fill" />
                </Link>
            </div>
        </div>
    );
}
