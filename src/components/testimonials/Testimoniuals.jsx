import React from "react";
import "./Testimonials.css";
import avtar1 from "../../img/img1.png";
import avtar2 from "../../img/img2.png";
import avtar3 from "../../img/img3.png";
import avtar4 from "../../img/img4.png";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avtar1,
    name: "rakesh pandey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde quis aspernatur fugit tempora maxime vitae molestias culpa eius sed a facilis aperiam facere repellendus voluptatem natus saepe rerum quibusdam?",
  },
  {
    avatar: avtar2,
    name: "rakesh pandey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde quis aspernatur fugit tempora maxime vitae molestias culpa eius sed a facilis aperiam facere repellendus voluptatem natus saepe rerum quibusdam?",
  },
  {
    avatar: avtar3,
    name: "rakesh pandey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde quis aspernatur fugit tempora maxime vitae molestias culpa eius sed a facilis aperiam facere repellendus voluptatem natus saepe rerum quibusdam?",
  },
  {
    avatar: avtar4,
    name: "rakesh pandey",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde quis aspernatur fugit tempora maxime vitae molestias culpa eius sed a facilis aperiam facere repellendus voluptatem natus saepe rerum quibusdam?",
  },
];

const Testimoniuals = () => {
  return (
    <section id="testimoniuals">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container_testimoniuals"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials ">
              <div className="client_avatar">
                <img src={avatar} alt="avtar one" />
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimoniuals;
