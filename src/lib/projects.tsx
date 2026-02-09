import { type StaticImageData } from "next/image";
import omsThumb from "/public/img/projects/omsimos.jpg";
import umaminThumb from "/public/img/projects/umamin.jpg";
import foliageThumb from "/public/img/projects/foliage.jpg";
import outframethumb from "/public/img/outframethumb.jpeg";

export type Project = {
  subtitle: string;
  image: StaticImageData;
  description: string;
  projectTitle: string;
  year: number;
  role: string;
  techs: string;
  url: string;
  // shineColor: string[];
};

export const projects: Project[] = [
  {
    projectTitle: "Outframe",
    description: " is my systems and websites development brand",
    subtitle:
      "In just 1 year and 5 months in the industry I've developed more than 20 projects, including websites and systems",
    image: outframethumb,
    year: 2024,
    role: "Full Stack Web Developer",
    techs: "React, Typescript, Next.js, Tailwind",
    url: "https://outframe.dev",
    // shineColor: ["#f51aa6", "#4f0835"],
  },
  {
    projectTitle: "Buzz33",
    description: "is a community driven open source developer collective",
    subtitle:
      "I specialize in crafting high-quality websites using cutting-edge technologies, seamlessly blending creative design with top-tier performance.",
    image: omsThumb,
    year: 2025,
    role: "Full Stack Web Developer",
    techs: "React, Typescript, Next.js, Tailwind, GSAP.",
    url: "https://omsimos.com",
    // shineColor: ["#28af66", "#15422c"],
  },
   {
     projectTitle: "foliage",
     description:
       "is an experimental e-commerce website design for luxurious plants.",
     subtitle:
       "Excels in crafting clean and interactive websites, seamlessly blending minimalist design with modern technology for exceptional user experiences.",
     image: foliageThumb,
     year: 2023,
     role: "UI/UX Designer, Front-End Engineer",
     techs: "React, Typescript, Next.js, Tailwind, and GSAP.",
     url: "https://foliage.omsimos.com",
     // shineColor: ["#656a74", "#273245"],
   },
];
