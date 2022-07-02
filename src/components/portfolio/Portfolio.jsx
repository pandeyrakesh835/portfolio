import React from "react";
import "./Portfolio.css";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "Crypto Currency Dashboard & Finacial Visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18603497-Vandalz-Creative-Agency-Responsive-View",
  },
  {
    id: 2,
    image: img2,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/users/9295020/screenshots/18601240/media/d56cd18c94821a802eb2d8f78c5f31dc.png?compress=1&resize=1200x900&vertical=top",
  },
  {
    id: 3,
    image: img3,
    title: "Fignma dishboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3003116/file/original-ac83b02320b673b8d78f68b3c3b601d2.png?compress=1&resize=2048x1536",
  },
  {
    id: 4,
    image: img4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/2987667/file/original-895f0cde61ee1e48fe09612688ee78e0.jpg?compress=1&resize=2048x1536",
  },
  {
    id: 5,
    image: img5,
    title: "Charts templetes & infographics in Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3001834/file/original-e85177fd2d1ce3a5b0a194d012137a7b.png?compress=1&resize=752x564",
  },
  {
    id: 6,
    image: img6,
    title: "Charts templetes & infographics in Figma",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3003820/file/original-35ebfd535c194d07402087e844f1e7ec.png?compress=1&resize=2048x1536",
  },
];
const Portfolio = () => {
  return (
    <section id="experiance">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="__blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary " target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
