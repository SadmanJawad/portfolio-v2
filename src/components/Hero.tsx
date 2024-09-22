/* eslint-disable @next/next/no-img-element */
"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello, it's me Sadman Jawad Chowdhury",
      "Guy-who-loves-Tea.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-4 md:-space-y-14 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="./sadman bw.jpg"
        alt="Sadman Jawad Chowdhury's Picture"
      />
      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pt-2 md:pt-20 tracking-[15px]">
          A Full-Stack Developer
        </h2>
        <h1 className="text-xs lg:text-6xl font-semibold px-10">
          <span className="mr-3 pt:4 md:pt-0">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
