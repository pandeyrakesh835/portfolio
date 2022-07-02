import React from "react";
import "./Service.css";
import { BiCheck } from "react-icons/bi";
const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className="container container_service">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* ==========2==================== */}
        <article className="service">
          <div className="service_head">
            <h3>Web Devolopment</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* =======================================3=========== */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
