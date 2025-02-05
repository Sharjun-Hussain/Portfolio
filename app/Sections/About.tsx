import React from "react";
import Sharjun from "@/public/Sharjun-Hussain.jpg";
import Image from "next/image";

export function About() {
  return (
    <div
      id="about"
      className="h-screen w-full   relative flex items-center justify-center "
    >
      <div className="absolute -z-10 inset-0 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]  pointer-events-none" />
      {/* Radial gradient for the container to give a faded look */}

      <section className="bg-transparent text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="  flex flex-col md:flex-row justify-between items-center">
          {/* Column for Text */}
          <div className="md:w-1/2 md:pr-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-4">
              Hello! I’m{" "}
              <span className="text-indigo-400 font-semibold">
                Sharjun Hussain
              </span>
              , a passionate full-stack developer with expertise in creating
              dynamic web applications. With a strong background in both
              frontend and backend development, I have built a wide range of
              applications from POS systems to Learning Management Systems.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              I specialize in technologies like{" "}
              <span className="text-indigo-400">
                JavaScript, React, Node.js, and MongoDB
              </span>
              . My goal is to create seamless and user-friendly applications
              that solve real-world problems. I am constantly learning and
              adapting to new technologies to deliver the best solutions to my
              clients.
            </p>
            <p className="text-lg leading-relaxed">
              In addition to development, I have experience in network
              administration and have worked with various organizations to
              optimize their IT infrastructure.
            </p>
          </div>

          {/* Column for Image */}
          {/* <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div
              className="relative rounded-full overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              style={{ paddingBottom: "100%" }}
            >
              <Image
                src={Sharjun}
                alt="Sharjun Hussain"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div> */}
          <div className="w-1/2 flex justify-center  text-center">
            <Image
              loading="lazy"
              className="h-[400px] w-[400px] object-cover justify-center rounded-full"
              src={Sharjun}
              alt="Sharjun"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
