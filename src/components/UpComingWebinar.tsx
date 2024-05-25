'use client'
import Link from "next/link";
import React from "react";
import { Button } from "./ui/moving-border";
import { HoverEffect } from "./ui/card-hover-effect";

const UpComingWebinar = () => {
  const project = [
    {
      title: "Mastering Guitar Techniques",
      description:
        "Join our live webinar to learn advanced guitar techniques from a professional guitarist. Improve your skills and take your playing to the next level.",
      slug: "mastering-guitar-techniques",
      isFeatured: true,
    },
    {
      title: "Piano Improvisation Basics",
      description:
        "Discover the fundamentals of piano improvisation in this interactive webinar. Perfect for those looking to add creativity to their piano playing.",
      slug: "piano-improvisation-basics",
      isFeatured: true,
    },
    {
      title: "Understanding Music Theory",
      description:
        "This webinar covers essential music theory concepts that every musician should know. Gain a deeper understanding of music and how it's structured.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "Drumming Techniques for Beginners",
      description:
        "Learn the basics of drumming with our expert instructor. This webinar is designed for beginners looking to start their drumming journey.",
      slug: "drumming-techniques-for-beginners",
      isFeatured: true,
    },
    {
      title: "Advanced Violin Techniques",
      description:
        "Take your violin playing to the next level with this advanced techniques webinar. Ideal for intermediate to advanced violinists.",
      slug: "advanced-violin-techniques",
      isFeatured: true,
    },
    {
      title: "Songwriting and Composition",
      description:
        "Join our songwriting webinar to learn tips and techniques for writing and composing your own music. Suitable for musicians of all levels.",
      slug: "songwriting-and-composition",
      isFeatured: true,
    },
  ];
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED WEBINERS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={project.map(project=> (
          {  
            title:project.title,
            description:project.description,
            link:'/'
            
          }
        ))} />
        </div>
        <div className="mt-7 text-center">
          <Link href={"/courses"}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpComingWebinar;
