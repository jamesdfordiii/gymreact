import React from "react";
import BannerImg from "../../assets/banner.png";

const About = () => {
  return (
    <div className="py-14 dark:bg-black bg-slate-100 duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">01</h1>
                </div>
                <div>
                  <p className="text-primary font-semibold">Iron Pulse Gym</p>
                  <h1 className="text-2xl md:text-4xl font-bold">About us</h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Welcome to Iron Pulse Gym, where the spirit of old-school
                bodybuilding thrives! Established with a passion for strength
                and fitness, Iron Pulse Gym is dedicated to those who appreciate
                the timeless appeal of muscle gyms. Our community is built on
                hard work, dedication, and a no-nonsense approach to achieving
                peak physical condition. At Iron Pulse, you’ll find a supportive
                and motivating environment that pushes you to your limits and
                helps you achieve your personal best.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Join us and become a part of a tradition that celebrates the
                roots of bodybuilding and the relentless pursuit of excellence.
              </p>
              <button data-aos="fade-up" className="button-outline font-bold">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
