import React from 'react'
import Header from '../Header/Header';
import './Landing.css';
import { Container } from 'reactstrap';
import icon from '../../assets/images/icon-arrow-down.svg'
function Landing() {
  return (
    <div className='landing'>
      <Container>
        <Header />
        <div className="landing__content">
          <h2>We are creatives</h2>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Landing;