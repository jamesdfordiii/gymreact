import React from "react";
import BannerImg from "../../assets/pushups.png";

const Banner3 = () => {
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
                  <h1 className="font-bold">03</h1>
                </div>
                <div>
                  <p className="text-primary font-bold">Iron Pulse Gym</p>
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    Our Facility
                  </h1>
                </div>
              </div>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Iron Pulse Gym is a testament to the golden era of bodybuilding,
                featuring a facility that harkens back to the glory days of
                muscle gyms. Our gym is equipped with vintage and modern
                equipment that caters to all your training needs, from
                heavy-duty free weights to specialized machines. The industrial
                aesthetic, complete with exposed brick walls and iron fixtures,
                creates an authentic and motivating atmosphere. We offer
                spacious workout areas, a dedicated section for powerlifting,
                and a posing room for those looking to perfect their form.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                At Iron Pulse, you’ll find everything you need to train like a
                true bodybuilding legend.
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

export default Banner3;
