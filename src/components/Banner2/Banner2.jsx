import React from "react";
import BannerImg from "../../assets/banner2.png";

const Banner2 = () => {
  return (
    <div className="py-14 dark:bg-dark bg-white duration-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl ">
                  <h1 className="font-bold">02</h1>
                </div>
                <div>
                  <p className="text-primary font-bold">Iron Pulse Gym</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    Our Mission
                  </h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At Iron Pulse Gym, our mission is to preserve and promote the
                essence of old-school bodybuilding. We are committed to
                providing a space where individuals of all fitness levels can
                train with intensity, focus, and dedication. Our goal is to
                empower our members to reach their full potential through expert
                guidance, state-of-the-art equipment, and a community that
                inspires greatness.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                We believe in the transformative power of fitness and aim to
                foster a culture of discipline, perseverance, and respect for
                the art of bodybuilding. Together, we strive to build a
                stronger, healthier, and more confident you.
              </p>
              <button data-aos="fade-up" className="button-outline font-bold">
                Get Started Now
              </button>
            </div>
          </div>
          {/* Image section */}
          <div data-aos="fade-up">
            <img
              src={BannerImg}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
