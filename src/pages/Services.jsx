import React from "react";
import Layout from "./Layout";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Menyediakan layanan pembuatan dan pengembangan situs web yang responsif dan fungsional. Saya memastikan situs web Anda aman, cepat, dan sesuai dengan kebutuhan bisnis.",
    description_full:
      "Saya menawarkan pembuatan dan pengembangan situs web yang profesional dan fungsional. Dengan menciptakan situs web yang responsif, aman, dan sesuai dengan kebutuhan bisnis Anda. Mulai dari website perusahaan, e-commerce, hingga aplikasi web khusus, saya siap membantu Anda menghadirkan pengalaman online yang terbaik untuk pengguna Anda. Kami juga menyediakan layanan pemeliharaan dan pembaruan rutin untuk memastikan situs web Anda selalu dalam kondisi optimal.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Layanan UI/UX berfokus pada desain antarmuka yang menarik dan pengalaman pengguna yang intuitif",
    description_full:
      "UI/UX saya akan fokus pada menciptakan antarmuka pengguna (UI) yang menarik dan pengalaman pengguna (UX) yang intuitif dan memuaskan. Saya memahami bahwa desain yang baik bukan hanya tentang estetika, tetapi juga tentang bagaimana pengguna berinteraksi dengan produk digital Anda. Saya juga melakukan penelitian mendalam, wireframing, prototyping, dan uji kegunaan untuk memastikan setiap elemen desain berfungsi dengan baik dan memenuhi kebutuhan pengguna.",
    href: "",
  },
  {
    num: "03",
    title: "Data Science",
    description:
      "Saya dapat membantu bisnis anda dengan memanfaatkan data untuk pengambilan keputusan yang lebih baik.",
    description_full:
      "Saya membantu bisnis Anda dengan memanfaatkan kekuatan data untuk pengambilan keputusan yang lebih baik. Saya akan menyediakan solusi analisis data yang komprehensif, mulai dari pengumpulan dan pengolahan data, analitik prediktif, hingga visualisasi data. Dengan menggunakan teknik machine learning dan algoritma canggih, Saya akan membantu Anda mengidentifikasi pola, tren, dan wawasan berharga dari data Anda untuk mendorong inovasi dan efisiensi operasional.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Saya memberikan Layanan SEO yang dirancang untuk meningkatkan visibilitas situs web Anda di mesin pencari.",
    description_full:
      "(Search Engine Optimization) Saya dirancang untuk meningkatkan visibilitas situs web Anda di mesin pencari seperti Google. Saya menggunakan teknik SEO terkini untuk membantu situs web Anda mendapatkan peringkat yang lebih tinggi dalam hasil pencarian, sehingga meningkatkan trafik organik dan potensi konversi. Mulai dari penelitian kata kunci, optimasi konten, hingga pembangunan tautan, saya soap membantu anda mencapai tujuan digital yang Efektif dan Inovativ",
    href: "",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((services, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/*Top Bar*/}
                  <div className="w-full flex justify-between items-center">
                    <div
                      className="text-5xl font-extrabold text-outline text-transparent 
              group-hover:text-outline-hover transition-all duration-500"
                    >
                      {services.num}
                    </div>
                    <NavLink
                      href={services.href}
                      className="w-[70px] h-[70px] rounded-full bg-white 
                group-hover:bg-accent transition-all duration-500 
                flex justify-center items-center hover:-rotate-45"
                    >
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <BsArrowDownRight className="text-primary text-3xl" />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              <div className="text-accent">
                                {services.title}
                              </div>
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              {services.description_full}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Kembali</AlertDialogCancel>
                            <AlertDialogAction>
                              <NavLink href="/contact">Hire Me</NavLink>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </NavLink>
                  </div>
                  {/*Title*/}
                  <h2
                    className="text-[42px] font-bold leading-none text-white 
            group-hover:text-accent transition-all duration-500"
                  >
                    {services.title}
                  </h2>
                  {/*Description*/}
                  <p className="text-white/60">{services.description}</p>
                  {/*Border*/}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
          <div></div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
