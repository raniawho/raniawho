import React, { useState } from "react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "./Layout";
import { NavLink } from "react-router-dom";
import "swiper/css";
import gambar from "../assets/photo.png";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import WorkSliderBtns from "../components/WorksSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam qui consectetur enim quas dolore deserunt?",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: gambar,
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    num: "02",
    category: "Backend",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam qui consectetur enim quas dolore deserunt?",
    stack: [{ name: "ReactJS" }, { name: "C++" }, { name: "Python" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Data Analysis",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam qui consectetur enim quas dolore deserunt?",
    stack: [{ name: "R programing" }, { name: "Python" }, { name: "Pycharm" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // mengambil slide sekarang index
    const currentIndex = swiper.activeIndex;
    // Update project statte based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div
              className="w-full xl:w-[50%] xl:h-[460px] flex
          flex-col xl:justify-between order-2 xl:order-none"
            >
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/*Bagian Outline*/}
                <div
                  className="text-8xl leading-none font-extrabold text-transparent
            text-outline"
                >
                  {project.num}
                </div>
                {/*Bagian Category*/}
                <h2
                  className="text-[42px] font-bold text-white group-hover:text-accent
                transition-all duration-500 capitalize "
                >
                  {project.category} Project
                </h2>
                {/*Bagian Deskripsi*/}
                <p className="text-white/60 "> {project.description}</p>
                {/*Bagian Stack*/}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/*Bagian Border*/}
                <div className="border border-white/20 "></div>
                {/*Bagian Button*/}
                <div className="flex items-center gap-4">
                  {/*Bagian Live Button*/}
                  <NavLink href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-accent flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </NavLink>
                  {/*Bagian Github Button*/}
                  <NavLink href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-accent flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div
                        className="h-[460px] relative group flex justify-center items-center
                     bg-pink-50/20 "
                      >
                        {/*Bagian Overlay*/}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/*Bagian Image*/}
                        <div className=" relative w-full h-full">
                          <img
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/*Bagian Button Slider*/}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
              xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[32px] w-[54px]
                flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Work;
