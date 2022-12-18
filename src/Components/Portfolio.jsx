/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

let image = "https://images.unsplash.com/photo-1506784881475-0e408bbca849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80"

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Foliage Friends",
    description:
      "Plant tracker app devloped using React and Sequelize. Hand-rolled auth for personalization. Group project created with mobile users in mind.",
    url: "https://foliage-friends.herokuapp.com/",
    repo: "http://github.com/jbenkaplan/foliage-friends-frontend"
  },
  {
    title: "Computer Workbench",
    description:
      "Develped using React and Mongoose, app is a computer creation website to put together lists of computer parts for budgeting and plannging.",
    url: "https://computer-workbench.herokuapp.com/",
    repo: "https://github.com/JBenKaplan/Computer-Workbench"
  },
  {
    title: "Checkers",
    description:
      "Javascript web game made for 2 people. Utilized grid and flebox for styling and custom logic to create game functionality.",
    url: "https://checkers-bk.surge.sh/",
    repo: "https://github.com/JBenKaplan/Checkers"
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "Simple Javascript game created after 1 week at the General Assembly bootcamp. Used flexbox for styling and onclick events for functionality",
    url: "https://ttt-bk.surge.sh/",
    repo: "https://github.com/JBenKaplan/u1_hw_tic_tac_toe?organization=JBenKaplan&organization=JBenKaplan",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
       <img className="background" src={image} alt={imageAltText} />
       <div className="portfolio-box">
      <h2 >Portfolio</h2>
       </div>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <a href={project.repo}>Repo</a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
