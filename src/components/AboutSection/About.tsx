import { useState } from "react";
import "../Global.css";
import "./About.css";

function About() {
  return (
    <>
      <div className="about hidden" id="about">
        <div className="about-header">About</div>

        <div className="experience-section">
          <div className="experience-title">2021 - 2023</div>
          <div className="experience-details">
            <div className="experience-title">Sysdoc New Zealand</div>
            <div className="experience-subtitle">
              Front-End Developer & Technical Consultant
            </div>

            <div className="experience-info">
              <div>
                <div className="experience-info-title">Things I did:</div>
                <div className="experience-info-description">
                  Developed and deployed Sharepoint web applications using React
                  and Typescript for clients like{" "}
                  <strong>
                    Anchor, Fonterra, FMG & the Reserve Bank of New Zealand
                  </strong>
                </div>
              </div>
              <div>
                <div className="experience-info-title">What I've learnt:</div>
                <div className="experience-info-description">
                  Microsoft Sharepoint - Power Automate - Typescript - SASS -
                  Tailwind - Jest - Cypress - Azure - FluentUI - MobX
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <div className="experience-title">2018 - 2021</div>
          <div className="experience-details">
            <div className="experience-title">
              Auckland University of Technology
            </div>
            <div className="experience-subtitle">
              Bachelor of Computer & Information Sciences
            </div>
            <div className="experience-info">
              <div>
                <div className="experience-info-title">Things I did:</div>
                <div className="experience-info-description">
                  Worked on a variety of projects using many different technologies.
                  Projects were done either individually or in small teams of 3-5 students. <br /><br />
                  Graduated with a Major in Software Development.
                </div>
              </div>
              <div>
                <div className="experience-info-title">What I've learnt:</div>
                <div className="experience-info-description">
                  Javascript - ReactJS - C - Java - Matlab - Bootstrap - HTML -
                  CSS - Git - MySQL - MongoDB - Heroku - AWS - Firebase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buzzwords hidden">
        <div className="buzzwords-left">
          <div className="about-header">
            I AM NOT A ROCKSTAR DEVELOPER
            <div className="experience-subtitle">
              However, I am confident that I know enough to pick up any required
              skills and contribute to a project. Here are some of my buzzwords that may (or may not) make me a good
              fit for your projects.
            </div>
          </div>
        </div>

        <div className="buzzwords-right">
          <div className="buzzwords-info">
            <div className="experience-info-title">Problem Solver</div>
            <div className="experience-info-description">
              I do not like problems (who does anyways?), and by extension I
              like it when they get resolved. I approach problems one step at a
              time while maintaining communication with all stakeholders
              involved and give estimates or offer alternatives if possible.
              <br />
              <br />I will not hesitate to let people know when I do not know
              something, and I will try my best to figure it out.
            </div>
          </div>
          <div className="buzzwords-info">
            <div className="experience-info-title">Self Motivated</div>
            <div className="experience-info-description">
              I am able to quickly find inspiration whenever I want to learn or
              do something new. I tend to get the most motivated whenever I see
              someone who is highly-skilled at their craft as they inspire me to
              become like them.
              <br />
              <br />
              When I do learn something, I try to set realistic expectations and
              compare my progress only to my past self. This prevents me from
              easily losing motivation or getting burnt out.
            </div>
          </div>
          <div className="buzzwords-info">
            <div className="experience-info-title">Adaptable</div>
            <div className="experience-info-description">
              Like most humans, I am not a fan of changing or going out of my
              comfort zone. However, more often than not, I find myself capable
              of adapting to the situation.
              <br />
              <br />
              Projects at Sysdoc and AUT taught me how to adapt to various
              needs, from picking up new technologies (e.g React, Sharepoint,
              Flow, SAP), to learning basic designing and consulting skills.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
