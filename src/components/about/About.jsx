import React from "react";
import "./About.css";
import Me from "../../img/me.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* <small>200+ Worldwide</small> */}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-mg">
            <img src={Me} alt="Aboutimage" />
          </div>
        </div>
        <div className="about_contant">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>8+ Complited</small>
            </article>

            <article className="about_card">
              <FaUserFriends className="about_icon" />
              <h5>Experiance</h5>
              <small>1+ Years Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            laborum quod eos odit, commodi, porro excepturi voluptatem
            perferendis quisquam accusantium ipsa quae odio! Quos nesciunt
            soluta illo quo tempore perspiciatis.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
