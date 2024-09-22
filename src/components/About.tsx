/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="./Nabil formal cropped.jpg"
        alt="Sadman Jawad Chowdhury"
        className="mt-28 -mb-30 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[490px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          {" "}
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hi, I’m Sadman Jawad Chowdhury, a Fullstack developer from Bangladesh.
          My journey in web development began with JavaScript, where I honed my
          skills by working on various frontend projects, building interactive
          and user-friendly interfaces. Over the past year, I’ve been diligently
          expanding my expertise, diving into backend technologies, database
          management, and cloud solutions to become a more well-rounded
          developer. I’m always eager to learn new tools and frameworks to stay
          updated in the fast-evolving tech world. Feel free to reach out if
          you'd like to know more about my experience or collaborate on
          projects!
        </p>
      </div>
    </motion.div>
  );
}
