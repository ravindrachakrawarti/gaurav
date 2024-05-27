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
   
  { link: "https://www.youtube.com/results?search_query=BASE+Jumping+sports",   text: "BASE Jumping", imgSrc: 'images/advence/1.png'},
  { link: 'https://www.youtube.com/results?search_query=Bobsleigh+sports', text: 'Bobsleigh', imgSrc: 'images/advence/2.png'},
  { link: 'https://www.youtube.com/results?search_query=BMX+sports',   text: 'BMX', imgSrc: 'images/advence/3.png'},
  { link: 'https://www.youtube.com/results?search_query=Climbing+sports',    text: 'Climbing', imgSrc: 'images/advence/4.png'},
  { link: 'https://www.youtube.com/results?search_query=Free+Climbing+sports',   text: 'Free Climbing', imgSrc: 'images/advence/5.png'}, // Add links to your images here
  { link: 'https://www.youtube.com/results?search_query=Free+running+sports',   text: 'Free running', imgSrc: 'images/advence/6.png'},
  { link: 'https://www.youtube.com/results?search_query=Freestyle+skiing+sports', text: 'Freestyle skiing', imgSrc: 'images/advence/7.png'},
  { link: 'https://www.youtube.com/results?search_query=Gliding+sports',   text: 'Gliding', imgSrc: 'images/advence/8.png'},
  { link: 'https://www.youtube.com/results?search_query=Ice+Climbing+sports',    text: 'Ice Climbing', imgSrc: 'images/advence/9.png'},
  { link: 'https://www.youtube.com/results?search_query=Ice+Cross+sports',   text: 'Ice Cross', imgSrc: 'images/advence/10.png'},
  { link: 'https://www.youtube.com/results?search_query=Ice+Diving+sports',   text: 'Ice Diving', imgSrc: 'images/advence/11.png'},

 
  { link: 'https://www.youtube.com/results?search_query=Luge+sports',    text: 'Luge', imgSrc: 'images/advence/12.png'},
  { link: ' https://www.youtube.com/results?search_query=Mountain+Boarding+sports',   text: 'Mountain Boarding', imgSrc: 'images/advence/13.png'},
  { link: 'https://www.youtube.com/results?search_query=Mountain+Climbing+sports',   text: 'Mountain Climbing', imgSrc: 'images/advence/14.png'},
  { link: 'https://www.youtube.com/results?search_query=Paragliding+sports', text: 'Paragliding', imgSrc: 'images/advence/15.png'},
  { link: 'https://www.youtube.com/results?search_query=Parkour+sports',   text: 'Parkour', imgSrc: 'images/advence/16.png'},
  { link: 'https://www.youtube.com/results?search_query=Rock+Climbing+sports',    text: 'Rock Climbing', imgSrc: 'images/advence/17.png'},
  { link: 'https://www.youtube.com/results?search_query=Scuba+diving+sports',   text: 'Scuba diving', imgSrc: 'images/advence/18.png'}, 
  { link: 'https://www.youtube.com/results?search_query=Ski+Jumping+sports', text: 'Ski Jumping', imgSrc: 'images/advence/19.png'},
  { link: 'https://www.youtube.com/results?search_query=Skeleton+sports',   text: 'Skeleton', imgSrc: 'images/advence/25.png'},
  { link: 'https://www.youtube.com/results?search_query=Trail+runningsports',    text: 'Trail running', imgSrc: 'images/advence/20.png'},
  { link: 'https://www.youtube.com/results?search_query=Skateboarding+sports',   text: 'Skateboarding', imgSrc: 'images/advence/21.png'},
  { link: 'https://www.youtube.com/results?search_query=Skydiving+sports',   text: 'Skydiving', imgSrc: 'images/advence/22.png'},
  { link: 'https://www.youtube.com/results?search_query=Water+Skiing+sports', text: 'Water Skiing', imgSrc: 'images/advence/23.png'},
  { link: 'https://www.youtube.com/results?search_query=Whitewater+Rafting%2Fkayaking+sports',   text: 'Whitewater Rafting/kayaking', imgSrc: 'images/advence/24.png'},

 
];

function Adventure() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTags = tagsData.filter(tag =>
      tag.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (


    
    <div>
     <Link className="mt-5" to="/section"><img style={{ width: '3rem',height:'3rem' }} src='images/left-arrow.png'></img></Link> 

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

export default Adventure