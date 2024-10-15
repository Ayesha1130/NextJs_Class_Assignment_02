import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center text-justify p-4 justify-items-center mt-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-center animate-bounce">
        Contact Us
      </h1>
      <p>
        For any inquiries or queries, please contact our customer support team
        at <strong>customer@example.com</strong>.
      </p>
      <p>We are open Monday to Friday, 9 am to 5 pm ET.</p>
      <p>
        For security reasons, please do not share sensitive information, such as
        credit card numbers, in your inquiries.
      </p>
      <p>
        If you require immediate assistance, please call our emergency number{" "}
        <strong>1-800-999-9999</strong>.
      </p>
      <p>
        WonderToys is a Pakistani toy company, and we are committed to providing
        high-quality, ethically sourced products.
      </p>

      {/* add social icons */}
      <div className="flex flex-row mt-10 ">
        <CiFacebook
          size={40}
          className="mx-4 cursor-pointer hover:text-blue-600"
        />

        <FaInstagram
          size={40}
          className="mx-1 md:mx-2 lg:mx-3 cursor-pointer hover:text-pink-600"
        />
        <CiTwitter
          size={40}
          className="mx-1 md:mx-2 lg:mx-3 cursor-pointer hover:text-lime-700"
        />
        <CiLinkedin
          size={40}
          className="mx-1 md:mx-2 lg:mx-3cursor-pointer hover:text-blue-600"
        />
        <FaGithub
          size={40}
          className="mx-1 md:mx-2 lg-mx-3 cursor-pointer hover:text-purple-600"
        />
        <FaWhatsapp
          size={40}
          className="mx-1 md:mx-2 lg-mx-3 cursor-pointer hover:text-green-600"
        />
      </div>
    </div>
  );
};

export default Contact;
