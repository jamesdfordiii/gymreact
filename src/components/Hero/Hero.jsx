import React from "react";
import BannerImg from "../../assets/hero.jpg";
import { motion } from "framer-motion";

const BgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const Hero = () => {
  return (
    <div
      style={BgStyle}
      className="dark:bg-black dark:text-white duration-300 "
    >
      <div className="bg-white/70  dark:bg-black/80 duration-300 ">
        <div className="container min-h-[620px] flex items-center">
          <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
            <p
              data-aos="fade-up"
              className="text-primary text-2xl font-semibold"
            >
              Embark on The Ultimate Fitness Journey
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-5xl md:text-7xl font-bold"
            >
              Earn The Body You Deserve
            </h1>
            <p data-aos="fade-up" data-aos-delay="500">
              “Success is the sum of small efforts, repeated day-in and day-out”{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once={"true"}
              className="primary-btn hover:bg-red-600 hover:text-white transition duration-300"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
