"use client";

import React from "react";
import Navbar from "@/components/navbar-landing";
import Image from "next/image";
import About from "@/components/landing/about";
import RumahTangga from "@/components/landing/rumah-tangga";
import Parenting from "@/components/landing/parenting";
import Artikel from "@/components/landing/artikel";
import Contact from "@/components/landing/contact";
import Link from "next/link";

function App() {
  return (
    <div className="App bg-white">
      <Navbar />

      <div className="absolute top-0 right-0 z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] overflow-hidden">
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-b from-[#7FD8E8] to-[#0798C5] rounded-full -top-1/4 -right-1/4"></div>
      </div>

      <section id="beranda"  className="relative overflow-hidden min-h-screen bg-white flex flex-col lg:flex-row items-center justify-start pt-15 md:pt-0 px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Text Content */}
        <aside className="w-full lg:w-1/2 text-center lg:text-left lg:mb-0 lg:pr-8 z-20 order-2 lg:order-1 lg:py-20">
          <h2 className="text-[#0798C5] text-lg sm:text-xl mb-2">
            Keluarga Sehat
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 text-black leading-tight">
            Family Care
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-black leading-tight">
            Solutions
          </h1>

          <p className="text-gray-500 mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Platform informasi komprehensif yang membantu pasangan mempersiapkan pernikahan dan
            kehamilan sehat melalui edukasi prakonsepsi, pengelolaan stres, dan 
            penguatan hubungan untuk fondasi keluarga yang bahagia.
          </p>

          <Link
            href="/"
            className="px-6 py-3 sm:px-8 sm:py-3 bg-[#0798C5] text-white font-bold text-sm sm:text-base rounded-full transition-all duration-200 hover:bg-white hover:text-[#0798C5] border-2 border-transparent hover:border-[#0798C5] shadow-lg hover:shadow-xl cursor-pointer"
          >
            Mulai Sekarang
          </Link>
        </aside>

        <div className="w-full lg:w-1/2 z-20 flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
          <div className="relative">
            <Image
              src="/assets/Human.png"
              alt="StudyCare Hero Image"
              width={300}
              height={210}
              className=" w-[325px] h-[220px] sm:w-[350px] sm:h-[245px] md:w-[400px] md:h-[280px] lg:w-[550px] lg:h-[415px] xl:w-[700px] xl:h-[550px] object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <About />
      <RumahTangga />
      <Parenting />
      {/* <Artikel /> */}
      <Contact />
    </div>
  );
}

export default App;
