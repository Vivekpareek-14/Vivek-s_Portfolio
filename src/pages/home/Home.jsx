import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} className="home__img"/>

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Vivek Pareek.</span><br />
            Web Designer  
          </h1>

          <p className="home__description">
          A passionate web designer with a keen eye for creativity and functionality. With experience in crafting clean, responsive, and user-friendly websites, I specialize in translating ideas into visually stunning designs that provide seamless user experiences. I believe in combining aesthetics with strategic design to deliver websites that not only look great but also perform optimally.
          </p>

          <Link to="/about" className="button">
            More About Me <span className="button__icon"><FaArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="color__block">

      </div>
    </section>
  )
}

export default Home
