import React,{useState} from 'react';
import Video from './Video';

const TopPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraphStyle = {
    borderRight: '2px solid black',
    display: 'inline-block',
    overflow: 'visible',
    animation: isHovered ? 'typing 20s steps(10, start), blink-caret 2s infinite' : 
    'typing 20s steps(10, end), blink-caret 2s infinite'
  };

 
const handleMouseOver = () => {
    setIsHovered(true);
};
const handleMouseOut = () => {
  setIsHovered(false);
};

  return (
    <div className='top-container'>
      {/*<div className='reflection-top'>
        Art Gallery
      </div>*/} 

     <h1
     style={paragraphStyle}
     onMouseOver={handleMouseOver}
     onMouseOut={handleMouseOut}>Art Galery</h1> 
      <p>An art gallery is a space where visual art is displayed 
        for aesthetic enjoyment, education, or marketing.
        They can be found in many forms, including commercial galleries, 
        non-profit spaces, and museums and on this webpage.</p>
        <span>Learn more about art on these videos</span>
      <div className='video-container'>
      <div className='video'>
      <Video />
      </div>
      <div className='art-info'>
        <p>Art is a vast and diverse field, encompassing various forms and styles.<br />
          Here are some of the main types of art.</p>
      <ul>
        <li>Visual Arts</li>
        <li>Performing Arts</li>
        <li> Literary Arts</li>
        <li>Applied Arts</li>
    </ul>
    <p>Explore a curated collection of visual art that captivates me, 
      each piece chosen for its rich history, profound concept, or sheer creativity. 
      Dive into the stories behind these artworks and see why they hold a special place in my heart.</p>
      </div>
    </div>
    
    </div>
  )
}

export default TopPage;
