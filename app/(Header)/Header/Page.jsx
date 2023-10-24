"use client";

import React from "react";

import { AnimatePresence, motion, useCycle } from "framer-motion";

import { useState } from "react";

import { useTheme } from "next-themes";
import { PiArrowRightThin } from "react-icons/pi";
import Image from "next/image";

function HeaderPage() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverTheme, setHovertheme] = useState(null);
  const { theme, systemTheme, setTheme } = useTheme();

  const links = [
    { name: "/jo1.jpeg", theme: "dark" },
    { name: "/jo2.jpeg", theme: "light" },
    { name: "/jo3.jpeg", theme: "system" },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const ButtonVariant = {
    closed: {
      height: "1.6rem",
      transition: { duration: 0.4 },
    },

    open: {
      height: "3.7rem",
      transition: { when: "beforeChildren", duration: 0.4 },
    },
  };

  let textvariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };

  const handleTheme = (newTheme) => {
    // setTheme(newTheme);
    cycleOpen(!open);

    if (newTheme === "system") {
      setHovertheme(" System Theme");
      setTheme(newTheme);
    } else if (newTheme === "light") {
      setHovertheme(" System Theme");
      setTheme(newTheme);
    } else if (newTheme === "dark") {
      setHovertheme(" System Theme");
      setTheme(newTheme);
    }
  };
  {
    /* DF1B89 */
  }
  return (
    <div className="">
      {/* <i className="fi fi-rr-cart-arrow-down"></i> */}

      <AnimatePresence>
        <motion.header
          key="parent"
          variants={ButtonVariant}
          initial="closed"
          animate={open ? "open" : "closed"}
          exit={{
            height: 0,
            transition: { delay: 0.7, duration: 0.3 },
          }}
          className="mx-auto w-full z-50 flex justify-center fixed top-0 "
        >
          <div className="cursor-pointer bg-[#343434]    hover:text-neutral-700 border-neutral-600 border border-t-0  w-[110px] flex-col overflow-hidden rounded-b-xl break-all ">
            <div
              onClick={handleClick}
              className="text-[12px] text-center mt-1 text-neutral-200 group-hover/sidebar:opacity-100 transition-all font-bold ease-out duration-700 "
            >
              {hoverTheme ? (
                <p className="transition-all font-bold ease-out duration-700">
                  {hoverTheme}
                </p>
              ) : (
                <p className="transition-all font-bold ease-out duration-700">
                  Switch Theme
                </p>
              )}
            </div>

            {/*  */}

            <div className="bg-[#161616] overflow-hidden  h-fit rounded-xl mt-1">
              {open && (
                <div className="gap-x-1 flex justify-center">
                  {links.map(({ name, theme }, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <>
                        <motion.div
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          onMouseEnter={() => setActiveIndex(index)}
                          className=" relative rounded-md text-neutral-400 flex  transition-all ease-in duration-200    "
                        >
                          {isActive && (
                            <motion.span
                              layoutId="highlight"
                              className="dark:bg-[#ffffff] bg-yellow-500 w-fit top-0 border border-neutral-700/40   absolute inset-0 z-[2] rounded-2xl"
                            ></motion.span>
                          )}

                          <Image
                            width={200}
                            height={200}
                            onClick={() => handleTheme(theme)}
                            onMouseEnter={() => setHovertheme(theme)}
                            onMouseLeave={() => setHovertheme(null)}
                            className="w-8 h-8 opacity-25 duration-500 transition-all ease-in hover:opacity-100 object-cover rounded-full"
                            src={name}
                            alt=""
                          />
                        </motion.div>
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.header>
      </AnimatePresence>

      <nav className="flex justify-between items-center w-full  px-4 pt-10 max-w-6xl mx-auto">
        <div className="flex gap-x-3 items-center">
          <Image
            width={200}
            height={200}
            className="w-10 h-10 rounded-full object-cover"
            src="/jo3.jpeg"
            alt=""
          />

          <div>
            <h4 className="text-xs ">Joscript Joeeeeeeee</h4>
            <p className="text-[#828282] text-xs">Software Developer</p>
          </div>
        </div>

        <div>
          <button className="flex w-40 items-center justify-between border border-neutral-600 rounded-full p-1 px-5">
            <span className="text-xs">Buy my Template</span>
            <PiArrowRightThin />
          </button>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[1120px] mt-4 flex justify-center relative">
        <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
      </div>
    </div>
  );
}

export default HeaderPage;
