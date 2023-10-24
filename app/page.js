"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";

import { IoIosMailUnread } from "react-icons/io";

import { RiTwitterXLine } from "react-icons/ri";

import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
// let Icons = [
//   { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
//   { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
//   { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
// ];

function Homepage() {
  const { theme } = useTheme();

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Location</p>
              <p className="text-neutral-500 text-xs ">New York</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 transition-all ease-in-out object-cover"
            src={theme == "dark" ? "/lightm.bmp" : "/map.webp"}
            alt=""
          />
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold max-sm:mt-16 sm:mt-4  ">
                Available for freelance <br /> design projects. Hit me up <br />{" "}
                for a collab 🦾
              </p>

              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
                <span>Contact me</span>
                <PiArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Joscript Stone</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold   leading-5">
              Am Joscript Stone, an adventurous Creative Director based in the
              vibrant city of San Francisco. With a keen eye for aesthetics, a
              passion for innovation, and a drive for designs that leaves a
              lasting impact. let's collaborate and bring your creative visions
              to life
            </p>
          </div>
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Experience & Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2  ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2002 -- 2012
              </p>
              <div>
                <h4 className="text-xs font-bold">Creative Studio Owner</h4>
                <p className="text-[11px] text-neutral-500">
                  Self-employed at my own creative studio, delivering innovative
                  design solutions and giving value to your brand experience.
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2020 -- 2022
              </p>
              <div>
                <h4 className="text-xs font-bold">Nike Headquarters</h4>
                <p className="text-[11px] text-neutral-500">
                  Designer & Creative Director
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2018 -- 2020
              </p>
              <div>
                <h4 className="text-xs font-bold">Spotify</h4>
                <p className="text-[11px] text-neutral-500">
                  Designer & Art Director.
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2016 -- 2018
              </p>
              <div>
                <h4 className="text-xs font-bold">Apple</h4>
                <p className="text-[11px] text-neutral-500">Product Designer</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2014 -- 2016
              </p>
              <div>
                <h4 className="text-xs font-bold">Royal Academy of Arts</h4>
                <p className="text-[11px] text-neutral-500">
                  Graduate Master’s Degree
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                2012 -- 2016
              </p>
              <div>
                <h4 className="text-xs font-bold">Zurich University of Arts</h4>
                <p className="text-[11px] text-neutral-500">
                  Visual Communication
                </p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                2011 -- 2012
              </p>
              <div>
                <h4 className="text-xs font-bold">Vogue France</h4>
                <p className="text-[11px] text-neutral-500">Graphic Designer</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                2010 -- 2011
              </p>
              <div>
                <h4 className="text-xs font-bold">Vignelli Associates</h4>
                <p className="text-[11px] text-neutral-500">Internship</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  mb-6 px-2 relative ">
              <p className="dar:text-white  text-xs w-20 shrink-0  ">
                2010 -- 2011
              </p>
              <div>
                <h4 className="text-xs font-bold">Norm Zurich</h4>
                <p className="text-[11px] text-neutral-500">Internship</p>
              </div>
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
        <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-8 px-2">
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-14">
                <Image
                  width={200}
                  height={200}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                  <p className="text-xs">Fusion Pro Presentation</p>
                  <p className="text-xs">
                    I've come up with something truly unique
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                  <p className="text-xs">Fusion Pro Presentation</p>
                  <p className="text-xs">
                    I've come up with something truly unique
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
            <div className="bg-[#F5F5F5]  dark:bg-[#1B1B1B] rounded-md px-1  relative">
              <div className="flex justify-between items-center p-2  gap-x-2 mt-4">
                <Image
                  width={300}
                  height={300}
                  className="w-14 h-14 rounded-full object-cover"
                  src="/jo4.jpeg"
                  alt=""
                />

                <div>
                  <p className="text-xs">Fusion Pro Presentation</p>
                  <p className="text-xs">
                    I've come up with something truly unique
                  </p>
                </div>

                <ul className="menu">
                  <a href="#0"></a>
                </ul>
              </div>
            </div>
          </div>
          {/* <Products /> */}
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">
              <Tooltip showArrow={true} content="X (Twitter)" color="#161616">
                <Link
                  href={"https://twitter.com/Joenaldo"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <RiTwitterXLine className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub" color="#161616">
                <Link
                  href={"https://github.com/Joscriptt"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiGithubLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="Behance" color="#161616">
                <Link
                  href={"https://twitter.com/Joenaldo"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <PiBehanceLogoThin className="text-xl" />
                </Link>
              </Tooltip>
              <Tooltip showArrow={true} content="E-mail" color="#161616">
                <Link
                  href={"https://twitter.com/Joenaldo"}
                  className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
                >
                  <IoIosMailUnread className="text-xl" />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Latest Work</p>
              <p className="text-neutral-500 text-xs ">Waitlist</p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <Image
            width={900}
            height={300}
            className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
            src={"/jo8.jpeg"}
            alt=""
          />
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Side Projects</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[180px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-14 px-2  ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Since 2023
              </p>
              <div>
                <h4 className="text-xs font-bold">WebFlow</h4>
                <p className="text-[11px] text-neutral-500">Official partner</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="text-white  text-xs w-20 shrink-0  ">Since 2021</p>
              <div>
                <h4 className="text-xs font-bold">Awwward</h4>
                <p className="text-[11px] text-neutral-500">Jury Member</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3  px-2 relative ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Since 2018
              </p>
              <div>
                <h4 className="text-xs font-bold">ADC Club Global</h4>
                <p className="text-[11px] text-neutral-500">Jury Member</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg z-20 h-44 relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Newsletter</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-24 flex flex-col items-center w-full px-2 ">
            <input
              className=" w-full rounded-full text-sm p-1 placeholder:text-neutral-700 outline-none border dark:border-neutral-600 border-neutral-400/60 pl-6 bg-neutral-900"
              type="email"
              placeholder="name@email.com"
            />
            <button className="text-xs  w-full  border dark:border-neutral-600 border-neutral-400/60  mt-2 rounded-full p-1 px-2 dark:bg-neutral-700/40">
              <span>Contact me</span>
            </button>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2"
        >
          <div>
            <p className="text-[10px] mt-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              optio vel officia.
            </p>

            <div className="flex items-center gap-x-2 mt-7">
              <Image
                height={400}
                width={400}
                className="w-8 h-8 rounded-full object-cover"
                src="/jo2.jpeg"
                alt=""
              />

              <div className="">
                <p className="text-xs">JoScript</p>
                <p className="text-xs">Founder, Joscript</p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Years of Experience</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-10  w-full flex justify-center items-center">
              <h1 className="text-8xl">17</h1>
            </div>
          </motion.div>
          <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">CV</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="mt-24 w-full">
              <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>View</span>
                <PiArrowUpRight />
              </button>
              <button className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                <span>Download</span>
                <PiArrowDownThin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
