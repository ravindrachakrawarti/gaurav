import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './Team.css';

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
   
  { link: "https://www.youtube.com/results?search_query=American+Football+sports",   text: "American Football", imgSrc: 'images/team/1.png'},
  { link: 'https://www.youtube.com/results?search_query=Athletics+sports', text: 'Athletics', imgSrc: 'images/team/2.png'},
  { link: 'https://www.youtube.com/results?search_query=Australian+Rules+Footballsports',   text: 'Australian Rules Football', imgSrc: 'images/team/3.png'},
  { link: 'https://www.youtube.com/results?search_query=Baseball+sports',    text: 'Baseball', imgSrc: 'images/team/4.png'},
  { link: 'https://www.youtube.com/results?search_query=Basketball+sports',   text: 'Basketball', imgSrc: 'images/team/5.png'}, // Add links to your images here
  { link: 'https://www.youtube.com/results?search_query=Bobsleigh+sports',   text: 'Bobsleigh', imgSrc: 'images/team/6.png'},
  { link: 'https://www.youtube.com/results?search_query=Cricket+sports', text: 'Cricket', imgSrc: 'images/team/7.png'},
  { link: 'https://www.youtube.com/results?search_query=Gaelic+Football+sports',   text: ' Gaelic Football', imgSrc: 'images/team/8.png'},
  { link: 'https://www.youtube.com/results?search_query=Handball+sports',    text: ' Handball', imgSrc: 'images/team/9.png'},
  { link: 'https://www.youtube.com/results?search_query=Hockey+sports',   text: 'Hockey', imgSrc: 'images/team/10.png'},
  { link: 'https://www.youtube.com/results?search_query=Hurling+sports',   text: 'Hurling', imgSrc: 'images/team/11.png'},
  { link: 'https://www.youtube.com/results?search_query=Ice+Hockey+sports', text: 'Ice Hockey', imgSrc: 'images/team/12.png'},
  { link: 'https://www.youtube.com/results?search_query=Korfball+sports',   text: 'Korfball', imgSrc: 'images/team/13.png'},
  { link: 'https://www.youtube.com/results?search_query=Lacrosse+sports',    text: 'Lacrosse', imgSrc: 'images/team/14.png'},
  { link: 'https://www.youtube.com/results?search_query=Netball+sports',   text: 'Netball', imgSrc: 'images/team/15.png'},
  { link: 'https://www.youtube.com/results?search_query=Polo+sports',   text: 'Polo', imgSrc: 'images/team/16.png'},
  { link: 'https://www.youtube.com/results?search_query=Rowing+sports', text: 'Rowing', imgSrc: 'images/team/17.png'},
  { link: 'https://www.youtube.com/results?search_query=Rugby+Union+sports',   text: 'Rugby Union', imgSrc: 'images/team/18.png'},
  { link: 'https://www.youtube.com/results?search_query=Rugby+League+sports',    text: 'Rugby League', imgSrc: 'images/team/19.png'},
  { link: 'https://www.youtube.com/results?search_query=Rounders+sports',   text: 'Rounders', imgSrc: 'images/team/20.png'}, 
  { link: 'https://www.youtube.com/results?search_query=Roller+Hockey+sports', text: 'Roller Hockey', imgSrc: 'images/team/21.png'},
  { link: 'https://www.youtube.com/results?search_query=Roller+Derby+sports',   text: 'Roller Derby', imgSrc: 'images/team/22.png'},
  { link: 'https://www.youtube.com/results?search_query=Soccer%2FAssociation+Football+sports',    text: 'Soccer/Association Footbal', imgSrc: 'images/team/23.png'},
  { link: 'https://www.youtube.com/results?search_query=Softball+sports',   text: 'Softball', imgSrc: 'images/team/24.png'},
  { link: 'https://www.youtube.com/results?search_query=Swimming+sports',   text: 'Swimming', imgSrc: 'images/team/25.png'},
  { link: 'https://www.youtube.com/results?search_query=Ultimate+Frisbee+sports', text: 'Ultimate Frisbee', imgSrc: 'images/team/26.png'},
  { link: 'https://www.youtube.com/results?search_query=Underwater+Football+sports',   text: 'Underwater Football', imgSrc: 'images/team/27.png'},
  { link: 'https://www.youtube.com/results?search_query=Volleyball+sports',    text: 'Volleyball', imgSrc: 'images/team/28.png'},
  { link: 'https://www.youtube.com/results?search_query=Water+Polo+sports',   text: 'Water Polo', imgSrc: 'images/team/29.png'},
 
];

function Team() {

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

export default Team