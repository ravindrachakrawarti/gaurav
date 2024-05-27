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
  max-width: 180px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 50%;
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
   
  { link: 'https://www.youtube.com/results?search_query=aaj+tak+live',   text: 'AajTak', imgSrc: 'images/news/1.png'}, 
  { link: 'https://www.youtube.com/results?search_query=abp+live',   text: 'ABP', imgSrc: 'images/news/2.avif'}, 
  { link: 'https://www.youtube.com/results?search_query=indiatv+live',   text: 'indiatv', imgSrc: 'images/news/11.jpg'}, 
  { link: 'https://www.youtube.com/results?search_query=news18+live',   text: 'new18', imgSrc: 'images/news/4.jfif'}, 
  { link: 'https://www.youtube.com/results?search_query=zee+live',   text: 'Zee News', imgSrc: 'images/news/5.webp'}, 
  { link: 'https://www.youtube.com/results?search_query=tv9+live',   text: 'TV9', imgSrc: 'images/news/6.jpg'}, 
  { link: 'https://www.youtube.com/results?search_query=news24+live',   text: 'News24', imgSrc: 'images/news/7.png'}, 
  { link: 'https://www.youtube.com/results?search_query=indiatoday+live',   text: 'India Today', imgSrc: 'images/news/8.png'}, 
  { link: 'https://www.youtube.com/results?search_query=republic+bharat+live',   text: 'Repulic Bharat', imgSrc: 'images/news/9.jfif'}, 

  
];

function News() {

    


   


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

export default News