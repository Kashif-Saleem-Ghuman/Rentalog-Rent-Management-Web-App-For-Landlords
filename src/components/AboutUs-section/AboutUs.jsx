import React from "react";
import rentBoardImg from "../.././assets/Images/rent-board.png";
import "./AboutUs-section.css";
const AboutUs = () => {
  return (
    <div className="aboutUs-section">
      <span className="text-3xl md:text-4xl font-semibold text-[#312F2F] text-center pt-10">About Us</span>
      <div className=" row flex flex-col justify-center items-center md:flex-row">
        <img
          className="rent-board-img"
          src={rentBoardImg}
          alt="rent board image"
        />
        <p className="paragraph">
          Rentalog is a web application that makes it easy for landlords to
          manage their rental properties. With Rentalog, landlords can keep
          track of important information about their renters, including their
          names, addresses, and rental payment history. This information is
          stored in a secure and organized manner, so landlords can access it
          whenever they need to. In addition to keeping track of renters'
          information, Rentalog also makes it easy for landlords to collect and
          track monthly rent payments. This way, landlords always know exactly
          how much money they're earning from their properties and can make
          informed decisions about their business. Using Rentalog is simple and
          straightforward. All of the information is organized in a
          user-friendly interface, so landlords can access what they need
          quickly and easily. And, if they ever have questions or need help,
          they can reach out to Rentalog's dedicated support team for
          assistance. Overall, Rentalog is a convenient and efficient tool for
          landlords who want to keep their rental business organized and running
          smoothly.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
