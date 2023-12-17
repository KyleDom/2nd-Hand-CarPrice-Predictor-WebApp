import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-14">
      <div className="mx-auto flex min-w-[200px] max-w-[1400px] flex-col items-center justify-between sm:flex-row">
        <div className="w-full sm:pl-6 md:w-1/2 lg:pr-6 xl:pl-0">
          <img
            src="/about-pic.png"
            alt="about fundimpact"
            className="h-72 w-full px-4 sm:px-0 md:h-80 xl:h-96"
          />
        </div>

        <motion.div
          className="w-full flex-col items-center justify-center px-4 md:w-1/2 xl:px-0 xl:pl-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          ref={ref}
        >
          <p className="mb-2 uppercase mt-3 text-2xl font-medium text-[#FF7A00] sm:text-3xl xl:text-5xl xl:font-normal">
            About Us
          </p>
          <p className="mb-3 text-sm font-medium text-gray-700 sm:text-base lg:mb-5 xl:text-lg">
            Welcome to RKS - Your Trusted Destination for
            <div className="font-bold"> Quality Second-Hand Cars </div>
          </p>

          <p className="text-sm font-normal text-gray-700 sm:text-sm xl:text-base max-w-[620px]">
            At RKS, we're committed to redefining the experience of buying and
            selling pre-owned vehicles in the Philippines. With a passion for
            automobiles and a dedication to transparency and reliability, we've
            created a platform that fosters trust, convenience, and empowerment
            for both buyers and sellers alike.
          </p>

          <p className="mt-8">
            <Link
              href="/about-us"
              className="mt-8 rounded bg-[#FF7A00] px-14 py-3 font-medium text-white hover:bg-[#F17400] text-lg"
            >
              Read More
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
