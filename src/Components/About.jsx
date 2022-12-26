/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import image from "../images/mosaic.svg";
let image = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a graduate of the General Assembly Online Software Engineering Immerisve course. I enjoy creating unique and simplistic user interfaces in creative ways and strive to grow and learn as much as possible.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  <img className="skill-icon" src="https://img.icons8.com/ios-filled/512/html-5--v1.png" alt="HTML"/>,
  <img className="skill-icon" src="https://img.icons8.com/ios-filled/512/css3.png" alt="CSS"/>,
  <img className="skill-icon" src="https://img.icons8.com/ios-filled/512/javascript.png" alt="JS"/>,
  <img className="skill-icon" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/512/external-react-social-media-tanah-basah-glyph-tanah-basah.png" alt="React"/>,
  <img className="skill-icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="MongoDB"/>,
  <img className="skill-icon" src="https://img.icons8.com/external-soleicons-line-amoghdesign/512/external-database-soleicons-line-vol-1-soleicons-line-amoghdesign.png" alt="PostgreSQL"/>,
  <img className="skill-icon" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/512/external-vuejs-an-open-source-javascript-framework-for-building-user-interfaces-and-single-page-applications-logo-bold-tal-revivo.png" alt="Vue"/>,
  <img className="skill-icon" src="https://img.icons8.com/ios-glyphs/512/python.png" alt="Python"/>,
  <img className="skill-icon" src="https://img.icons8.com/ios/512/flask.png" alt="Flask"/>
]

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With experience from past positions and Mechanical Engineering degree, I am comfortable leading and working with groups on tight schedules and complex ideas. I am driven by growth and the challenge to develop new and creative solutions.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <div className="skillset">
          {skillsList.map((skill) => (
            <div key={skill}>{skill}</div>
            ))}
        </div>
        <hr />
        <p className="medium">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
