import React from "react";
import "./Experiance.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container experiance_container">
        <div className="experiance_frontend">
          <h3>Frontend Devolopment</h3>
          <div className="experiance_content">
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance_backend ">
          <h3>Backend Devolopment</h3>
          <div className="experiance_content">
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experinace_details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Intemediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
