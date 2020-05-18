import React from "react";
import Karl from "./karl.jpeg";
import Eddy from "./eddy.jpeg";
import Aimy from "./aimy.jpeg";
import Vivienne from "./vivienne.jpeg";
import "./team.css";

const Team = () => {
  
    return (
      <div className="team-container">
        <div className="member-container">
          <div className="member-name">Eddy Flores</div>
          <div className="member">
            <div className="member-image-container">
              <img src={Eddy} alt="Eddy Flores" />
            </div>
            <div className="member-info">
              <div className="member-details">
                <h2>Team Lead</h2>
                <p>
                  Eddy kept the team on track and facilitated communication
                  between team members. He assisted in frontend and backend
                  development.
                </p>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/eddy-flores-2794951a9/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/makaveddy" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://angel.co/u/eddy-flores" target="_blank">
                  <i className="fab fa-angellist"></i>
                </a>
                <a href="https://makaveddy.github.io/" target="_blank">
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="member-container">
          <div className="member-name">Aimy Yu</div>
          <div className="member">
            <div className="member-image-container">
              <img src={Aimy} alt="Aimy Yu" />
            </div>
            <div className="member-info">
              <div className="member-details">
                <h2>Backend Lead, Fullstack</h2>
                <p>
                  Aimy implemented backend storage and data retrieval using
                  MongoDB and Express.js. She coordinated with the frontend lead
                  to manage frontend state and render React components using
                  data fetched from the backend.
                </p>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/aimy-yu-11a5681a9/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/aimyaa" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://angel.co/u/aimy-yu" target="_blank">
                  <i className="fab fa-angellist"></i>
                </a>
                <a href="http://aimyaa.github.io/" target="_blank">
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="member-container">
          <div className="member-name">Karl Fleener</div>
          <div className="member">
            <div className="member-image-container">
              <img src={Karl} alt="Karl Fleener" />
            </div>
            <div className="member-info">
              <div className="member-details">
                <h2>Frontend Lead</h2>
                <p>
                  Karl organized frontend state with Redux and rendered React
                  components, among which included ReactPlayer. He is the
                  designer behind Felix's seamless visual experience.
                </p>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/karlfleener/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/karlfleener" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://angel.co/u/karlfleener" target="_blank">
                  <i className="fab fa-angellist"></i>
                </a>
                <a href="https://karlfleener.github.io/" target="_blank">
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="member-container">
          <div className="member-name">Vivienne van Vliet</div>
          <div className="member">
            <div className="member-image-container">
              <img src={Vivienne} alt="Vivienne van Vliet" />
            </div>
            <div className="member-info">
              <div className="member-details">
                <h2>Frontend Flex</h2>
                <p>Vivienne assisted with styling.</p>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/viviennevanvliet/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/cleopatra2035" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://angel.co/u/viviennevanvliet" target="_blank">
                  <i className="fab fa-angellist"></i>
                </a>
                <a href="http://viviennevanvliet.com/" target="_blank">
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;
