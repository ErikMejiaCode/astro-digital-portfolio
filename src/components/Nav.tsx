import avatar from "../assets/images/avatar.png";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="250"
        height={4}
        viewBox="0 0 250 4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M2 2L428 2"
          strokeWidth={2}
          stroke="#282828"
          strokeLinecap="round"
        />
      </svg>

      <div>
        <img src={avatar.src} alt="Profile Picture of Hua" />
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      <div className="space-y-1">
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
        <span className="block h-0.5 w-4 bg-black"></span>
      </div>
    </nav>
  );
}
