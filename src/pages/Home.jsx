import React, { Fragment } from 'react'
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Landing from '../components/Landing/Landing';
import Project from '../components/Projects/Project';
import Services from '../components/Services/Services';
import Testimonial from '../components/Testimonials/Testimonial';

const Home = () => {
  return (
    <Fragment>
      <Landing />
      <About />
      <Services />
      <Testimonial />
      <Project />
      <Footer />
    </Fragment>
  )
}
export default Home;