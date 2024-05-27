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
   
  { link: "https://www.youtube.com/results?search_query=Archery+sports",   text: "Archery", imgSrc: 'images/olympic/1.png'},
  { link: 'https://www.youtube.com/results?search_query=Artistic+Gymnastics+sports', text: 'Artistic Gymnastics', imgSrc: 'images/olympic/2.png'},
 
  { link: 'https://www.youtube.com/results?search_query=Artistic+Swimming+sports',    text: 'Artistic Swimming', imgSrc: 'images/olympic/4.png'},
  { link: 'https://www.youtube.com/results?search_query=Athletics+sports',   text: 'Athletics', imgSrc: 'images/olympic/5.png'}, // Add links to your images here
  { link: 'https://www.youtube.com/results?search_query=Badminton+sports',   text: 'Badminton', imgSrc: 'images/olympic/6.png'},
  { link: 'https://www.youtube.com/results?search_query=Baseball%2FSoftball+sports', text: 'Baseball/Softball', imgSrc: 'images/olympic/7.png'},
  { link: 'https://www.youtube.com/results?search_query=Basketball+sports',   text: 'Basketball', imgSrc: 'images/olympic/8.png'},
  { link: 'https://www.youtube.com/results?search_query=Beach+Volleyball+sports',    text: 'Beach Volleyball', imgSrc: 'images/olympic/9.png'},
  { link: 'https://www.youtube.com/results?search_query=Boxing+sports',   text: 'Boxing', imgSrc: 'images/olympic/10.png'},
  { link: 'https://www.youtube.com/results?search_query=Canoe+Slalom+sports',   text: 'Canoe Slalom', imgSrc: 'images/olympic/11.png'},
  { link: 'https://www.youtube.com/results?search_query=Canoe+Sprint+sports', text: 'Canoe Sprint', imgSrc: 'images/olympic/12.png'},
  { link: 'https://www.youtube.com/results?search_query=Cycling+BMX+Freestyle+sports',   text: 'Cycling BMX Freestyle', imgSrc: 'images/olympic/13.png'},
  { link: 'https://www.youtube.com/results?search_query=Cycling+BMX+Racing+sports',    text: 'Cycling BMX Racing', imgSrc: 'images/olympic/14.png'},
  { link: 'https://www.youtube.com/results?search_query=Cycling+Mountain+Bike+sports',   text: 'Cycling Mountain Bike', imgSrc: 'images/olympic/15.png'},
  { link: 'https://www.youtube.com/results?search_query=Cycling+Road+sports',   text: 'Cycling Road', imgSrc: 'images/olympic/16.png'},



  { link: 'https://www.youtube.com/results?search_query=Fencing+sports',   text: 'Fencing', imgSrc: 'images/olympic/17.png'}, 
  { link: 'https://www.youtube.com/results?search_query=Football+sports', text: 'Football', imgSrc: 'images/olympic/18.png'},
  { link: 'https://www.youtube.com/results?search_query=Golf+sports',   text: 'Golf', imgSrc: 'images/olympic/19.png'},
  { link: 'https://www.youtube.com/results?search_query=Handball+sports',    text: 'Handball', imgSrc: 'images/olympic/20.png'},
  { link: 'https://www.youtube.com/results?search_query=Hockey+sports',   text: 'Hockey', imgSrc: 'images/olympic/21.png'},
  { link: 'https://www.youtube.com/results?search_query=Judo+sports',   text: 'Judo', imgSrc: 'images/olympic/22.png'},
  { link: 'https://www.youtube.com/results?search_query=Karate+sports', text: 'Karate', imgSrc: 'images/olympic/23.png'},

  { link: 'https://www.youtube.com/results?search_query=Modern+Pentathlon+sports',    text: 'Modern Pentathlon', imgSrc: 'images/olympic/24.png'},
  { link: 'https://www.youtube.com/results?search_query=Rhythmic+Gymnastics+sports',   text: 'Rhythmic Gymnastics', imgSrc: 'images/olympic/25.png'},
  { link: 'https://www.youtube.com/results?search_query=Rowing+sports',   text: 'Rowing', imgSrc: 'images/olympic/277.png'},
  { link: 'https://www.youtube.com/results?search_query=Rugby+sports', text: 'Rugby', imgSrc: 'images/olympic/27.png'},
  { link: 'https://www.youtube.com/results?search_query=Sailing+sports',   text: 'Sailing', imgSrc: 'images/olympic/28.png'},
  { link: 'https://www.youtube.com/results?search_query=Shooting+sports',    text: 'Shooting', imgSrc: 'images/olympic/29.png'},
  { link: 'https://www.youtube.com/results?search_query=Skateboarding+sports',   text: 'Skateboarding', imgSrc: 'images/olympic/30.png'},  
  { link: 'https://www.youtube.com/results?search_query=Sport+Climbing+sports', text: 'Sport Climbing', imgSrc: 'images/olympic/31.png'},
  { link: 'https://www.youtube.com/results?search_query=Surfing+sports',   text: 'Surfing', imgSrc: 'images/olympic/32.png'},
  { link: 'https://www.youtube.com/results?search_query=Swimming+sports',    text: 'Swimming', imgSrc: 'images/olympic/33.png'},
  { link: 'https://www.youtube.com/results?search_query=Table+Tennis+sports',   text: 'Table Tennis', imgSrc: 'images/olympic/34.png'},
  { link: 'https://www.youtube.com/results?search_query=Taekwondo+sports', text: 'Taekwondo', imgSrc: 'images/olympic/35.png'},
  { link: 'https://www.youtube.com/results?search_query=Tennis+sports',   text: 'Tennis', imgSrc: 'images/olympic/36.png'},
  { link: 'https://www.youtube.com/results?search_query=Trampoline+Gymnastics+sports',    text: 'Trampoline Gymnastics', imgSrc: 'images/olympic/37.png'},
  { link: 'https://www.youtube.com/results?search_query=Triathlon+sports',   text: 'Triathlon', imgSrc: 'images/olympic/38.png'},
  { link: 'https://www.youtube.com/results?search_query=Volleyball+sports', text: 'Volleyball', imgSrc: 'images/olympic/39.png'},
  { link: 'https://www.youtube.com/results?search_query=Water+Polo+sports',   text: 'Water Polo', imgSrc: 'images/olympic/40.png'},
  { link: 'https://www.youtube.com/results?search_query=Weightlifting+sports',    text: 'Weightlifting', imgSrc: 'images/olympic/41.png'},
  { link: 'https://www.youtube.com/results?search_query=Wrestling+sports',   text: 'Wrestling', imgSrc: 'images/olympic/42.png'}, 
];

function Olympic() {

    


   


    const [searchTerm, setSearchTerm] = useState('');

    const filteredTags = tagsData.filter(tag =>
      tag.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    
  return (
    <div>
    <Link className="arrow" to="/section"><img style={{ width: '3rem',height:'3rem' }} src='images/left-arrow.png'></img></Link>

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

export default Olympic