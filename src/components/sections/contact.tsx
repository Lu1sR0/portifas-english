import Image from "next/image";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";
import Ripple from "../magicui/ripple";
import OrbitingIcons, {
  type OrbitingIconsProps,
} from "../magicui/orbiting-icons";
import starsBg from "/public/img/rings-bg.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="z-10 w-full overflow-hidden sm:overflow-auto sm:border-y-0 pt-72"
    >
      <div className=" sm:rounded-lg sm:p-4">
        <div className="relative flex h-[550px] w-full rounded-lg  sm:overflow-hidden md:shadow-xl">
          <Ripple />

          <Image
            alt="Stars"
            src={starsBg}
            className="absolute inset-0 size-full opacity-70"
            fill
          />

          <div className="absolute inset-0 flex size-full flex-col items-center justify-center rounded-lg  md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white from-25% to-black to-[130%] bg-clip-text text-center text-6xl font-semibold leading-none text-transparent lg:text-7xl">
              Have a project? Let's talk!
            </span>

            {socials.map((social) => (
              <OrbitingIcons
                href={social.href}
                key={social.name}
                className={cn(
                  "cursor-pointer border-none bg-transparent opacity-75",
                  social.className,
                )}
                duration={social.duration}
                delay={social.delay}
                radius={social.radius}
                reverse={social.reverse}
                path={social.path}
              >
                <social.icon />
              </OrbitingIcons>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type Socials = {
  name: string;
  icon: any;
  className?: string;
} & OrbitingIconsProps;

const socials: Socials[] = [
 
   {
    name: "Email",
    icon: Icons.gmail,
    href: "mailto:luiscardoso946@gmail.com",
    duration: 20,
    delay: 20,
    radius: 80,
    path: true,
    className: "size-[55px]",
  },

  {
    name: "LinkedIn",
    icon: Icons.linkedIn,
    href: "https://www.linkedin.com/in/luis-roberto-cardoso-trindade-2852891b3/",
    duration: 20,
    radius: 190,
    reverse: true,
    className: "size-[55px]",
  },
  {
    name: "GitHub",
    icon: Icons.gitHub,
    href: "https://github.com/Lu1sR0",
    duration: 20,
    delay: 20,
    radius: 190,
    reverse: true,
    className: "size-[55px]",
  },
];
