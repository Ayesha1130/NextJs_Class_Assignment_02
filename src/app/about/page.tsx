"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="flex flex-col justify-center p-4 text-center items-center  bg-cover bg-no-repeat h-screen bg-[url(/images/b2.jpg)]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic animate-bounce">
        About Us
      </h1>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic mb-20">
        <Typewriter
          words={["WelCome to WonderToys", " where imagination comes to life!"]}
          loop={true}
        />
      </h2>

      <p className="text-justify  italic p-4 w-full md:w-3/4 lg:w-3/5  px-5 justify-center items-center uppercase  bg-black bg-opacity-60 rounded-md text-white">
        We are a passionate team dedicated to providing children with unique and
        engaging toys that inspire creativity and play.
      </p>
    </div>
  );
};

export default About;
