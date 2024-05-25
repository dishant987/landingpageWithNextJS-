import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { BackgroundBeams } from "./ui/background-beams";

const TestimonialCard = () => {
  const testimonials = [
    {
      quote:
        "This course completely transformed my guitar playing. The instructors are amazing and the content is top-notch. Highly recommend!",
      title: "Guitar Mastery",
      name: "Alice Johnson",
    },
    {
      quote:
        "The piano lessons were exactly what I needed to get started. The flexible learning schedule allowed me to practice whenever I had time.",
      title: "Beginner Piano",
      name: "Michael Smith",
    },
    {
      quote:
        "I have taken several music theory courses, but this one is by far the most comprehensive and easy to understand. The instructor made complex concepts simple.",
      title: "Music Theory Simplified",
      name: "Emily Davis",
    },
    {
      quote:
        "The advanced guitar techniques course pushed me to new heights. I learned so much and have seen significant improvement in my playing.",
      title: "Advanced Guitar",
      name: "David Martinez",
    },
    {
      quote:
        "The drumming course was fun and engaging. The lessons were clear and the instructor's enthusiasm was infectious. I love drumming now!",
      title: "Drumming Essentials",
      name: "Sarah Lee",
    },
    {
      quote:
        "This is the best violin course I have ever taken. The instructor was very knowledgeable and the course materials were excellent.",
      title: "Violin for Beginners",
      name: "James Brown",
    },
  ];
  return (
    <div className="bg-[#0f172a] pt-4 h-[33rem] w-full dark:bg-black dark:bg-dot-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl pb-8 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Hear our Harmony : Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
         <BackgroundBeams/>
      </div>
    </div>
  );
};

export default TestimonialCard;
