import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './Olympic.css';

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const Tag = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  max-width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 30%;
    height: auto;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
`;

const TagText = styled.div`
  font-size: 16px;
  color: #333;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const tagsData = [
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Animated typography', imgSrc: 'images/video/17.png'},
  { link: 'https://www.youtube.com/results?search_query=+football+most+viewed+video', text: '•	Animation', imgSrc: 'images/video/7.png'},
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Announcement ', imgSrc: 'images/video/21.png'},
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Behind the scenes', imgSrc: 'images/video/12.png'},  

  { link: 'https://www.youtube.com/results?search_query=+tennis+most+viewed+video',   text: '•	Brand ', imgSrc: 'images/video/13.png'},
  { link: 'https://www.youtube.com/results?search_query=+football+most+viewed+video', text: '•	Case studies', imgSrc: 'images/video/18.png'},
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Comparison  ', imgSrc: 'images/video/22.png'}, 
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Corporate  ', imgSrc: 'images/video/23.png'}, 
  { link: 'https://www.youtube.com/results?search_query=+cricket+most+viewed+video',   text: '•	Demos', imgSrc: 'images/video/8.png'},

  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Explainer ', imgSrc: 'images/video/1.png'}, 
  { link: 'https://www.youtube.com/results?search_query=+football+most+viewed+video', text: '•	Educational ', imgSrc: 'images/video/2.png'},
  { link: 'https://www.youtube.com/results?search_query=+chess+most+viewed+video',    text: '•	Event ', imgSrc: 'images/video/19.png'},
  { link: 'https://www.youtube.com/results?search_query=+chess+most+viewed+video',    text: '•	Live streams', imgSrc: 'images/video/4.png'},
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Product ', imgSrc: 'images/video/5.png'},
  





  { link: 'https://www.youtube.com/results?search_query=+chess+most+viewed+video',    text: '•	Promotional ', imgSrc: 'images/video/11.png'},
 
  { link: 'https://www.youtube.com/results?search_query=+chess+most+viewed+video',    text: '•	Personalized ', imgSrc: 'images/video/14.png'},
  
  
  { link: 'https://www.youtube.com/results?search_query=+football+most+viewed+video', text: '•	Social ', imgSrc: 'images/video/9.png'},
  
  { link: 'https://www.youtube.com/results?search_query=+cricket+most+viewed+video',   text: '•	Testimonials', imgSrc: 'images/video/6.png'},
  { link: 'https://www.youtube.com/results?search_query=+tennis+most+viewed+video',   text: '•	Video emails', imgSrc: 'images/video/10.png'},
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Videographic', imgSrc: 'images/video/20.png'},
  { link: 'https://www.youtube.com/results?search_query=+football+most+viewed+video', text: '•	Video tutorials', imgSrc: 'images/video/15.png'},
  { link: 'https://www.youtube.com/results?search_query=+tennis+most+viewed+video',   text: '•	Whiteboard', imgSrc: 'images/video/16.png'},

 
 


 
  { link: 'https://www.youtube.com/results?search_query=+hockey+most+viewed+video',   text: '•	Webinars', imgSrc: 'images/video/24.png'}, 
  
  


];

function Video() {

    


   


    const [searchTerm, setSearchTerm] = useState('');

    const filteredTags = tagsData.filter(tag =>
      tag.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    
  return (
    <div>
    <Link className="arrow" to="/medicine"><img style={{ width: '3rem',height:'3rem' }} src='images/left-arrow.png'></img></Link>

      <div className='searchbar'>
      

    <SearchInput
      type="text"
      placeholder="Search tags..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
    <TagContainer>
      {filteredTags.map((tag, index) => (
        <Link key={index} to={tag.link}>
          <Tag>
            <img src={tag.imgSrc} alt={tag.text} />
            <TagText>{tag.text}</TagText>
          </Tag>
        </Link>
      ))}
    </TagContainer>
  </div>
  )
}

export default Video