import React from 'react';
import './Services.css'
import img1des from '../../assets/images/desktop/image-photography.jpg';
import img1mob from '../../assets/images/mobile/image-photography.jpg';
import img2des from '../../assets/images/desktop/image-graphic-design.jpg';
import img2mob from '../../assets/images/mobile/image-graphic-design.jpg';
function Services() {
  return (
    <div className='services'>
      <div className="service__item">
        <img src={window.innerWidth <= 767 ? img2mob : img2des} alt="" />
        <div className="content">
          <h3>Graphic design</h3>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
      </div>
      <div className="service__item">
        <img src={window.innerWidth <= 767 ? img1mob : img1des} alt="" />
        <div className="content">
          <h3>Photography</h3>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </div>
  )
}
export default Services;