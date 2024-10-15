"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-cover bg-no-repeat h-screen bg-[url(/images/p5.jpg)]">
      <h1 className="text-lg md:text-3xl lg:text-4xl mt-10 ml-5 mr-5 font-extrabold italic animate-bounce">
        Imagination with Our Toys!
      </h1>
      <h2 className="text-lg md:text-lg lg:text-2xl font-bold italic mt-2 text-center  ">
        <Typewriter words={["Explore Endless Fun and Learning"]} loop={true} />
      </h2>
      <p className="text-justify w-full md:w-3/4 lg:w-3/4 mt-4 font-semibold uppercase px-5">
        Our toys are designed with your creativity in mind, allowing you to
        create unique and engaging experiences. From simple toys like blocks and
        puzzle pieces, to more complex toys like action figures and robots, our
        toys are perfect for kids of all ages.
      </p>
    </div>
  );
};

export default Hero;
