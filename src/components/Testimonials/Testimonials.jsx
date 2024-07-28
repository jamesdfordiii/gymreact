import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "JJ Abrams",
    text: "Iron Pulse Gym has transformed my training routine. The old-school atmosphere and top-notch equipment make every workout intense and rewarding.",
    img: "https://images.squarespace-cdn.com/content/v1/58e3f732a5790a96f91bd13a/1577221525743-JNPG07S28IU7FL57UKYS/pro-fitness-photos-fitness-photography-gym-men01.jpg",
  },
  {
    id: 2,
    name: "Claude Smith",
    text: "I love the community at Iron Pulse Gym. The support and motivation from fellow members and trainers have pushed me to achieve new personal bests.",
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/Charles-Griffen.png",
  },
  {
    id: 3,
    name: "Jessica Ramos",
    text: "From the moment I stepped into Iron Pulse Gym, I knew it was the perfect place for serious bodybuilding. The vintage equipment and expert guidance are unparalleled.",
    img: "https://www.bpmcdn.com/f/files/mapleridge/import/2023-08/33482788_web1_230801-MRN-BT-MapleRidgeBodybuilder_1.jpg",
  },
  {
    id: 5,
    name: "Lorrie Jacobson",
    text: "Iron Pulse Gym provides the perfect environment for reaching my fitness goals. The variety of equipment and the inspiring atmosphere keep me coming back",
    img: "https://hiddengym.net/wp-content/uploads/2020/08/Beginners-Guide-Blog.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 my-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-40 h-40"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-md text-white-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-primary">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-primary/20 text-12xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
