import React, { useState ,useEffect} from 'react';
import './Medicine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  
`;

function Medicine() {

  const [showTabs, setShowTabs] = useState(false);

  const tabs = [
    { path: '/section', label: 'Sports', imgSrc: 'images/1.png'},
    { path: '/movie', label: 'Movies', imgSrc: "images/cinema.png" },
    { path: '/news', label: 'News' , imgSrc: "images/news.png" },
    { path: '/podcast', label: 'Podcast', imgSrc: "images/podcaster.png" },
    { path: '/songs', label: 'Songs' , imgSrc: "images/music.png" },
    { path: '/dance', label: 'Dance' , imgSrc: "images/4.png" },
    { path: '/video', label: 'video' , imgSrc: "images/20.png" },
  ];

  const sortedTabs = tabs.sort((a, b) => a.label.localeCompare(b.label));
  useEffect(() => {
    // Trigger the animation after the component mounts
    setShowTabs(true);
  }, []);

  return (
   
    
    <div className="tabs-container">
      <Link className="mt-2 mb-2" to="/"><img style={{ width: '3rem',height:'3rem' }} src='images/left-arrow.png'></img></Link>
      <TagContainer>
      {sortedTabs.map((tab, index) => (
        <Link to={tab.path} className={`tab ${showTabs ? 'show' : 'hidden'}`} style={{ transitionDelay: `${index * 0.1}s` }}>
          {tab.label}

          <img src={tab.imgSrc}  className="tab-image" />
        </Link>
      ))}
      </TagContainer>
    </div>
       

  )
}

export default Medicine







