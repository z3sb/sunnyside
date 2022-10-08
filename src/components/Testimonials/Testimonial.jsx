import React from 'react';
import './Testimonial.css';
import img1 from '../../assets/images/image-emily.jpg';
import img2 from '../../assets/images/image-jennie.jpg';
import img3 from '../../assets/images/image-thomas.jpg';
import { Container } from 'reactstrap';

const testimonialData = [
  {
    imgUrl: img1,
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    job: 'Marketing Director'
  },
  {
    imgUrl: img2,
    text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    job: 'Chief Operating Officer'
  },
  {
    imgUrl: img3,
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    job: 'Business Owner'
  }
]
function Testimonial() {
  return (
    <div className='testimonial'>
      <Container>
        <h2 className='title'>Client testimonials</h2>
        <div className="content">
          {
            testimonialData.map((item, index) => (
              <div className="item" key={index}>
                  <img src={item.imgUrl} alt="" />
                  <p className='text'>{item.text}</p>
                  <div className="info">
                    <h3>{item.name}</h3>
                    <p className='job'>{item.job}</p>
                  </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}
export default Testimonial;