/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from 'react'

import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Portfolio from './Components/Portfolio'

import './styles.css'

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: 'Ben Kaplan',
  title: 'Software Engineer & Web Developer',
  email: 'jbenkaplan@gmail.com',
  gitHub: 'JBenKaplan',
  instagram: '',
  linkedIn: 'JBenKaplan',
  medium: '',
  twitter: '',
  youTube: '',
  resume: "https://docs.google.com/document/d/1nirspLT8haICBpu5CjKy8mz-rnq622jA-H9OCtK70go"
}

const primaryColor = '#4E567E'
const secondaryColor = '#D2F1E4'

const App = () => {
  const handleClick = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} handleClick={handleClick}/>
      <About id='about'/>
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
    </div>
  )
}

export default App
