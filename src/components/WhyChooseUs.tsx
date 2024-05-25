import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { SparklesCore } from "./ui/sparkles";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Expert Instructors",
      description:
        "Our courses are taught by seasoned musicians who bring years of professional experience and a deep passion for teaching. They provide personalized feedback and insights, ensuring that you receive the best possible guidance on your musical journey. With their expertise, you'll gain the skills and confidence to excel in your chosen instrument.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our curriculum is designed to cater to learners of all levels, from absolute beginners to advanced musicians. We offer a structured learning path that covers foundational skills, advanced techniques, music theory, and performance practices. Each course is carefully crafted to ensure a thorough understanding and mastery of the subject matter.",
    },
    {
      title: "Flexible Learning",
      description:
        "We understand that everyone has different schedules and commitments. That's why our courses are available online 24/7, allowing you to learn at your own pace and on your own time. Whether you prefer to study early in the morning or late at night, you can access our high-quality content whenever it suits you best.",
    },
    {
      title: "Community Support",
      description:
        "Joining our platform means becoming part of a vibrant community of music enthusiasts. Connect with fellow learners, share your progress, ask questions, and receive support from both peers and instructors. Our community forums and interactive sessions create a collaborative and encouraging learning environment.",
    },
    {
      title: "Affordable Pricing",
      description:
        "We believe that high-quality music education should be accessible to everyone. Our courses are priced competitively to ensure that you get the best value for your investment. We also offer various discounts and payment plans to make learning music more affordable for all aspiring musicians.",
    },
    {
      title: "Lifetime Access",
      description:
        "Once you enroll in a course, you'll have lifetime access to all the materials, including any future updates or additional content. This means you can revisit lessons, practice exercises, and stay up-to-date with the latest advancements in your field without any additional cost. Your learning journey can continue as long as you need.",
    },
  ];
  return (
    <div className="pt-5 bg-[#0f172a]">
      <div className="w-full bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="text-4xl pb-7 md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Why Choose Us
        </h1>
      </div>
      <div className="pt-7 bg-[#0f172a] p-8 ">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
