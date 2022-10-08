import React, { useState } from 'react';
import './Header.css';
import menuIcon from '../../assets/images/icon-hamburger.svg'

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
  },
  {
    display: 'Contact',
    url: '#'
  },
]
function Header() {
  const [active, setActive] = useState(false);
  return (
    <header>
      <h1 className="logo">Sunnyside</h1>
      <div className="menu__icon" onClick={() => setActive(!active)}>
        <img src={menuIcon} alt="" />
      </div>
      <ul className={`nav ${active && 'active'}`}>
        {
          links.map((item, index) => (
            item.display === 'Contact' 
              ? <li key={index}><a href={item.url + item.display.toLocaleLowerCase()}  className='contact' >{item.display}</a></li> 
              : <li key={index}><a href={item.url + item.display.toLocaleLowerCase()}>{item.display}</a></li>
          ))
        }
      </ul>
    </header>
  )
}
export default Header;