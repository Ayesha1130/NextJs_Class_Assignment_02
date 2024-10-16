import React from "react";

const Footer = () => {
  return (
    <div className=" bg-red-900 bg-opacity-25 h-auto p-5 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <ul className="mb-4 min-w-40 ">
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#F7941D80] font-bold">
            ABOUT
          </h1>
          <li>
            WonderToys is one stop online toys store in Pakistan. It has the
            largest range of Islamic Toys, Baby Toys, Girl Toys, Educational,
            Activity Games, Cars and Wheels, Toys World, Water World, etc.
          </li>
        </ul>

        <ul className="mb-4 w-40">
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#F7941D80] font-bold">
            CATEGORIES
          </h1>
          <li>
            Baby Toys Girl Toys Educational Toys Activity Games Cars & Wheels
            Toys World Water World
          </li>
        </ul>

        <ul className="mb-4 w-40">
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#F7941D80] font-bold">
            USEFUL LINKS
          </h1>
          <li>
            Privacy Policy Terms & Conditions Returns Policy Contact Us Reviews
            About Toys
          </li>
        </ul>
        <ul className="mb-4 w-40">
          <h1 className="text-lg md:text-xl lg:text-2xl text-[#F7941D80] font-bold">
            OUR ACCOUNT
          </h1>
          <li>Login / Register Wishlist Cart Checkout Orders Tracking Shop</li>
        </ul>
      </div>
      
    </div>
  );
};

export default Footer;
