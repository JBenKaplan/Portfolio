/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react"
import arrowSvg from "../images/down-arrow.svg"
import PropTypes from "prop-types"

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/por.jpeg"

const imageAltText = "next section arrow"

const Home = ({ name, title, handleClick}) => {
  return (
    <section id="home" className="dark">
      <img className="profile" src={image} alt="profile" />
      <div className="profile-details">
        <h1 className="name">{name}</h1>
        <h2 className="title">{title}</h2>
      </div>
      <div className="profile-arrow">
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} onClick={handleClick}/>
      </div>
    </section>
  )
}

Home.defaultProps = {
  name: "",
  title: ""
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Home
