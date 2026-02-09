import {
  Github,
  BlocksIcon,
  FileTextIcon,
  BotMessageSquare,
} from "lucide-react";

import { ChatBot, CertGen, GhStats, PhoneConfig } from "./tools";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { IconCloudDemo } from "../iconsion";

const features = [
  {
    Icon: FileTextIcon,
    name: "Don't forget to read my resume",
    description:
      "My resume contains important information about my education and experience.",
    className: "col-span-3 lg:col-span-1",
    href: "/resume.pdf",
    cta: "Read",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10 md:w-[450px]">
        <CertGen />
      </div>
    ),
  },
  {
    Icon: Github,
    name: "Tech Stack",
    description: "I work with these technologies.",
    href: "https://github.com/Lu1sR0",
    cta: "Visit my Github",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
               <IconCloudDemo /> 
      </div>
    ),
  },
  {
    Icon: BotMessageSquare,
    name: "Chatbot and Automation Creation",
    description: "",
    href: "",
    cta: "Coming Soon",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-7 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
        <ChatBot />
      </div>
    ),
  },
  {
    Icon: BlocksIcon,
    name: "3D in my creations",
    description: "I've always liked working with 3D and exploring the possibility of inserting it on the web is incredible",
    href: "https://applelr.vercel.app",
    cta: "Visit Website",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-7 mx-auto flex justify-center duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-110 sm:inset-10">
        <PhoneConfig />
      </div>
    ),
  },
];

export default function   OSShowcase() {
  return (
    <section id="about" className="container relative z-10 mx-auto xl:w-5/6">
      <h2 className="mx-auto mb-20 text-center text-[clamp(1.7rem,7vw,5rem)] font-medium leading-[1] tracking-[-0.07em]">
        A little more about me<br /> Web developer focused on Frontend
      </h2>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}
