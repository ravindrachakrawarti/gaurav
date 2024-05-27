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

  { link: 'https://www.youtube.com/results?search_query=african+blues+songs+',    text: '•	African Blues', imgSrc: 'images/songs/11.png'},
  { link: 'https://www.youtube.com/results?search_query=background++songs+',   text: '•	Background ', imgSrc: 'images/songs/12.png'},  

  { link: 'https://www.youtube.com/results?search_query=ballads++songs+',   text: '•	Ballads', imgSrc: 'images/songs/13.png'},
  { link: 'https://www.youtube.com/results?search_query=blues+songs+',    text: '•	Blues', imgSrc: 'images/songs/4.png'},
  { link: 'https://www.youtube.com/results?search_query=carnatic++songs+',    text: '•	Carnatic ', imgSrc: 'images/songs/14.png'},
  { link: 'https://www.youtube.com/results?search_query=classical+songs+',   text: '•	Classical ', imgSrc: 'images/songs/5.png'},

 
  { link: 'https://www.youtube.com/results?search_query=electronic++songs+',   text: '•	Electronic ', imgSrc: 'images/songs/3.png'},
 
 
  { link: 'https://www.youtube.com/results?search_query=disco++songs+',   text: '•	Disco', imgSrc: 'images/songs/6.png'},
  { link: 'https://www.youtube.com/results?search_query=funk++songs+', text: '•	Funk', imgSrc: 'images/songs/7.png'},
  { link: 'https://www.youtube.com/results?search_query=folk++songs+', text: '•	Folk ', imgSrc: 'images/songs/15.png'},
  { link: 'https://www.youtube.com/results?search_query=hip+hop+songs+', text: '•	Hip hop ', imgSrc: 'images/songs/2.png'},

  { link: 'https://www.youtube.com/results?search_query=jazz+songs+',   text: '•	Jazz', imgSrc: 'images/songs/8.png'},

  

 

  


  { link: 'https://www.youtube.com/results?search_query=latin++songs+',   text: '•	Latin ', imgSrc: 'images/songs/16.png'},

  { link: 'https://www.youtube.com/results?search_query=new+age+songs+',   text: '•	New-age ', imgSrc: 'images/songs/18.png'},
  { link: 'https://www.youtube.com/results?search_query=punk+++songs+', text: '•	Punk', imgSrc: 'images/songs/19.png'},
  { link: 'https://www.youtube.com/results?search_query=pop+songs+',   text: '•	Pop  ', imgSrc: 'images/songs/1.png'}, 

  { link: 'https://www.youtube.com/results?search_query=reggae++songs+',    text: '•	Reggae', imgSrc: 'images/songs/20.png'},
  { link: 'https://www.youtube.com/results?search_query=rhythm+and+blues+songs+',   text: '•	Rhythm and blues', imgSrc: 'images/songs/21.png'},
  { link: 'https://www.youtube.com/results?search_query=rock++songs+', text: '•	Rock', imgSrc: 'images/songs/9.png'},
  { link: 'https://www.youtube.com/results?search_query=soul++songs+',   text: '•	Soul ', imgSrc: 'images/songs/10.png'},
];

function Songs() {

    


   


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

export default Songs