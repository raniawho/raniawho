import React from "react";
import Layout from "./Layout";

import { FiDownload } from "react-icons/fi";
import { Button, buttonVariants } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";

const Home = () => {
  return (
    <Layout>
      <section className="h-full">
        <div className="container">
          <div
            className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian teks*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Copy-Writer</span>
              <h1 className="h1">
                Hello I&apos;m <br />{" "}
                <span className="text-accent">Rania Faradita Lubis</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Saya menawarkan layanan lengkap di bidang Web Development, data
                science, SEO, dan UI/UX dengan mengikuti kemajuan teknologi
              </p>
              {/*Tombol sosial media*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="../../public/assets/cv.pdf" download="My_CV.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles=" w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>
            {/*bagian photo*/}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
