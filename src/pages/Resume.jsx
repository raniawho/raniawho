import React from "react";
import Layout from "./Layout";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { ScrollArea } from "../components/ui/scroll-area";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam culpa cumque ipsa eius eum mollitia explicabo cupiditate?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aditia Nur Lukman",
    },
    {
      fieldName: "Phone ",
      fieldValue: "+62 851-5772-6519",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Indonesia - English",
    },
    {
      fieldName: "Email",
      fieldValue: "hurleyquin890@gmail.com",
    },
  ],
};

//Data Experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam culpa cumque ipsa eius eum mollitia explicabo cupiditate?",
  items: [
    {
      company: "AcV Development",
      position: "Front-End Developer",
      duration: "2021 - Present",
    },
    {
      company: "Art Antimatic",
      position: "UI/UX Developer",
      duration: "2022 - Present",
    },
    {
      company: "Blog Startup",
      position: "SEO Consultant",
      duration: "2023 - Present",
    },
    {
      company: "Lab Home Startup",
      position: "Data Science",
      duration: "2023 - Present",
    },
    {
      company: "Blog Startup",
      position: "SEO Consultant",
      duration: "2023 - Present",
    },
    {
      company: "Lab Home Startup",
      position: "Data Science",
      duration: "2023 - Present",
    },
  ],
};
//Data Education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam culpa cumque ipsa eius eum mollitia explicabo cupiditate?",
  items: [
    {
      institution: "Pakuan University",
      degree: "Majoring Computer Science",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Membangun SEO dengan baik & efektif",
      duration: "2024",
    },
    {
      institution: "Online Course",
      degree: "Data science dengan pemograman R",
      duration: "2024",
    },
  ],
};
//Data Skill
const skills = {
  title: "My Skill",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam culpa cumque ipsa eius eum mollitia explicabo cupiditate?",
  skilllist: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "React.JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
  ],
};

const Resume = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: "easeIn",
          },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About Me</TabsTrigger>
            </TabsList>

            {/* Bagian Konten */}
            <div className="min-h-[70vh] w-full">
              {/* Bagian Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent">
                    {experience.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Bagian Education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent">
                    {education.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 
                    px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Bagian Skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-accent ">
                      {skills.title}
                    </h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                    <ul
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]
              gap-4 "
                    >
                      {skills.skilllist.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  className="w-full h-[150px] bg-[#232329] rounded-xl flex 
                          justify-center items-center group  "
                                >
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize ">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              {/* Bagian About*/}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold text-accent">
                    {about.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul
                      className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto
            xl:mx-0"
                    >
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center 
                  xl:justify-start gap-4 bg-slate-500 p-2 rounded-md"
                          >
                            <span className="text-white/60">
                              {item.fieldName}
                            </span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Resume;
