import React from 'react';
import './Project.css'
import img1des from '../../assets/images/desktop/image-gallery-milkbottles.jpg';
import img1mob from '../../assets/images/mobile/image-gallery-milkbottles.jpg';
import img2des from '../../assets/images/desktop/image-gallery-orange.jpg';
import img2mob from '../../assets/images/mobile/image-gallery-orange.jpg';
import img3des from '../../assets/images/desktop/image-gallery-cone.jpg';
import img3mob from '../../assets/images/mobile/image-gallery-cone.jpg';
import img4des from '../../assets/images/desktop/image-gallery-sugarcubes.jpg';
import img4mob from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg';

function Project() {
  return (
    <div className='projects'>
      <div className="image">
        <img src={window.innerWidth <= 767 ? img1mob : img1des} alt="" />
      </div>
      <div className="image">
        <img src={window.innerWidth <= 767 ? img2mob : img2des} alt="" />
      </div>
      <div className="image">
        <img src={window.innerWidth <= 767 ? img3mob : img3des} alt="" />
      </div>
      <div className="image">
        <img src={window.innerWidth <= 767 ? img4mob : img4des} alt="" />
      </div>
    </div>
  )
}
export default Project;