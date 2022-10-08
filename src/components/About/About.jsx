import React from 'react';
import './About.css'
import img1des from '../../assets/images/desktop/image-transform.jpg';
import img1dmob from '../../assets/images/mobile/image-transform.jpg';
import img2des from '../../assets/images/desktop/image-stand-out.jpg';
import img2dmob from '../../assets/images/mobile/image-stand-out.jpg';
function About() {
  return (
    <div className='about'>
      <div className="item">
        <div className="content">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
          <div className="link"><a href="#">Learn more</a></div>
        </div>
        <div className="image">
          <img src={window.innerWidth <= 767 ? img1dmob : img1des} alt="" />
        </div>
      </div>
      <div className="item">
        <div className="image">
          <img src={window.innerWidth <= 767 ? img2dmob : img2des} alt="" />
        </div>
        <div className="content">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
          </p>
          <div className="link"><a href="#">Learn more</a></div>
        </div>
      </div>
    </div>
  )
}
export default About;