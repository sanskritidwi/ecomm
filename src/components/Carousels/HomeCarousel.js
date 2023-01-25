import React from 'react'
import bgImage from "../../assets/bgImage.jpg";
import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.png";


function HomeCarousel() {
  return (
    <div className='HomeCarouselWrapper'>
        
        <div className='bgImage'><img src={bgImage} alt="noimg" className='cover'/>
        <div className='posters'>
            <div className='subscribePoster'>
                <img src={poster1} alt="noimg"/>
                <img src={poster2} alt="noimg"/>
            </div>
        </div>
        </div>
        </div>
  )
}

export default HomeCarousel