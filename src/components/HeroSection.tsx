"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundBeams } from "./ui/background-beams";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HeroSection = () => {
  const words = [
    {
      text: "Master",
    },
    {
      text: "The",
    },
    {
      text: "Art",
    },
    {
      text: "Of",
    },
    {
      text: "Music.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
          {/* <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          /> */}
          {/* <BackgroundBeams/> */}
          <div className=" p-4 relative z-10 w-full text-center">
            {/* <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Master the art of Music{" "}
            </h1> */}
            <TypewriterEffectSmooth words={words} />

            <p className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Dive into our music courses and transform your musical journey
              today. Whether you're a beginner or looking to refine your skills,
              join us to unlock your true potential.
            </p>
            <div className="mt-4">
              <Link href={"/courses"}>
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Explore courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default HeroSection;
