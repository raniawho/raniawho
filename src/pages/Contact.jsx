import React from "react";
import Layout from "./Layout";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 851-5772-6519",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hurleyquin890@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "JawaBarat-Bogor . Bogor-kota",
  },
];

const Contact = () => {
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/*Bagian Form*/}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-primary">
                  Let&apos;s work together
                </h3>
                <p className=" text-white/60">
                  Saya siap bekerja sama dengan Anda untuk memenuhi segala
                  kebutuhan digital di bidang web development, data science,
                  SEO, dan UI/UX.
                </p>
                {/*Bagian Input*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First name" />
                  <Input type="lastname" placeholder="Last name" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>
                {/*Bagian Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/*Bagian TextArea*/}
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {/*Bagian Button*/}
                <Button className="max-w-40 bg-primary">Send message</Button>
              </form>
            </div>
            {/*Bagian Info*/}
            <div
              className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0"
            >
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-primary rounded-md flex items-center justify-center">
                        <div>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Contact;
