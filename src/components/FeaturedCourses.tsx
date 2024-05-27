"use client";
import React from "react";
import data from "../data/music_course.json";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image:string
}

const FeaturedCourses = () => {
  const featuredCourses = data.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className=" text-center ">
          <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide ">
            {" "}
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With The Best
          </p>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-6">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={`${course.image}`}
                      height="1000"
                      width="1000"
                      className="h-30 lg:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl m-auto mt-4 font-bold text-neutral-600 dark:text-white"
                  >
                    {course.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-justify mx-auto"
                  >
                    {course.description}
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-2 md:px-2 lg:px-5 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Buy{" "}
                      <span className="bg-zinc-700 rounded-full text-[0.6rem] px-4 py-2 text-white">
                        ${course.price}
                      </span>{" "}
                      →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <Link href={`/courses/${course.slug}`}>Learn More</Link>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-12 text-center">
        <Link href={"/courses"}>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
