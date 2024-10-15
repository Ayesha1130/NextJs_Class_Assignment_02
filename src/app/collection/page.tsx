"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

interface Collectionitemprops {
  href: string;
  imgSrc: string;
  title: string;
}

const CollectionItems: React.FC<Collectionitemprops> = ({
  href,
  imgSrc,
  title,
}) => (
  <Link href={href}>
    <div className="relative">
      <img
        src={imgSrc}
        alt={title}
        className="size-full rounded-md"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      />

      <div className="absolute inset-1 flex flex-col justify-center rounded-md text-center  ">

        <h1 className="text-2xl md:text-3xl lg:text-4xl bg-black bg-opacity-50 rounded-md p-2 font-bold italic">
          <Typewriter words={[title]} loop={true} />
        </h1>
      </div>
    </div>
  </Link>
);

const Collection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="mt-20 px-10">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 font-bold animate-bounce">Our Collection</h1>

    <div className="grid md:grid-cols-2 lg:grid-col-3 gap-5 px-10 cursor-pointer mb-20 mt-20 ">
     {CollectionItems({
        href: "/about/car",
        imgSrc: "/images/p3.avif",
        title: "Kids  Car Collection",
      })}
      {CollectionItems({
        href: "/about/bike",
        imgSrc: "/images/bt.avif",
        title: "Kids Bike Collection",
      })}
      {CollectionItems({
        href: "/about/doll",
        imgSrc: "/images/bt5.avif",
        title: "Girls  Doll Collection",
      })}
      {CollectionItems({
        href: "/about/toys",
        imgSrc: "/images/p3.avif",
        title: "kids  Toy Collection",
      })}
    </div>
    </div>
  );
};

export default Collection;
