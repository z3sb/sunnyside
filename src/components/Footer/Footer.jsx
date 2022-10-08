import React from 'react';
import './Footer.css'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import twitter from '../../assets/images/icon-twitter.svg'
const links = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Services',
    url: '#'
  },
  {
    display: 'Projects',
    url: '#'
  }
]
function Footer() {
  return (
    <footer>
      <h2 className="title">Sunnyside</h2>
      <ul className="links">
        {
          links.map((item, index) => (
            <li key={index}><a href={item.url + item.display.toLocaleLowerCase()}>{item.display}</a></li>
          ))
        }
      </ul>
      <div className="icons">
        <div className="img"><img src={facebook} alt="" /></div>
        <div className="img"><img src={instagram} alt="" /></div>
        <div className="img"><img src={pinterest} alt="" /></div>
        <div className="img"><img src={twitter} alt="" /></div>
      </div>
    </footer>
  )
}
export default Footer;