import React from 'react'
import './Home.css'

import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About.jsx/About'
import Skills from '../../Components/Skills/Skills'
import Education from '../Education/Education'
import Internship from '../Internship/Internship'
import Project from '../Project/Project'
import Services from '../Service/Service'
import Paper from '../Paperpublish/Paperpublish'
import Gallery from '../Gallery/Gallery'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <section className="home-section"><About /></section>
      <section className="home-section"><Skills /></section>
      <section className="home-section"><Education /></section>
      <section className="home-section"><Internship /></section>
      <section className="home-section"><Project /></section>
      <section className="home-section"><Services /></section>
      <Paper />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
