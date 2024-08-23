import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const intro = "https://www.youtube.com/embed/ZVlQOytFCRI?si=07LVYA3hc-TjMFJb";
const purpose = "";
const benefic = "";


const Video = () => {
  return (
    <div className='container'>
    <div className='img-container'>
      <Container>
        <div className="ratio ratio-21x9">
             <iframe width="300" height="300" src={intro} title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
    <div>
      <Container>
        <div className="ratio ratio-21x9">
             <iframe width="300" height="300" src={purpose} title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
    <div>
      <Container>
        <div className="ratio ratio-21x9">
             <iframe width="300" height="300" src={benefic} title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
    </div>
  )
}

export default Video;

