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




 
  { link: 'https://www.youtube.com/results?search_query=ballet+dance',   text: 'Ballet', imgSrc: 'images/dance/1.png'},
  { link: 'https://www.youtube.com/results?search_query=break+dance',    text: 'Break ', imgSrc: 'images/dance/18.png'},
  { link: 'https://www.youtube.com/results?search_query=belly+dance',   text: 'Belly ', imgSrc: 'images/dance/15.png'}, 
  { link: 'https://www.youtube.com/results?search_query=bharatnatyam+dance',   text: 'Bharatnatyam', imgSrc: 'images/dance/7.png'},
  { link: 'https://www.youtube.com/results?search_query=capoeira+dance',   text: 'Capoeira', imgSrc: 'images/dance/25.png'},
  { link: 'https://www.youtube.com/results?search_query=contemporary+dance',   text: 'Contemporary', imgSrc: 'images/dance/9.png'},
  { link: 'https://www.youtube.com/results?search_query=folk+dance', text: 'Folk ', imgSrc: 'images/dance/6.png'},

  { link: 'https://www.youtube.com/results?search_querpoy=hip+hop+dance', text: 'Hip hop ', imgSrc: 'images/dance/2.png'},
  { link: 'https://www.youtube.com/results?search_query=irish+dance',   text: 'Irish ', imgSrc: 'images/dance/19.png'}, 
  { link: 'https://www.youtube.com/results?search_query=jazz+dance', text: 'Jazz', imgSrc: 'images/dance/8.png'},
  { link: 'https://www.youtube.com/results?search_query=jive+dance',   text: 'Jive', imgSrc: 'images/dance/21.png'},

  
  { link: 'https://www.youtube.com/results?search_query=kathak+dance',    text: 'Kathak', imgSrc: 'images/dance/10.png'},
  { link: 'https://www.youtube.com/results?search_query=kuchipudi+dance',   text: 'Kuchipudi', imgSrc: 'images/dance/16.png'},
  { link: 'https://www.youtube.com/results?search_query=lambada+dance',   text: 'Lambada', imgSrc: 'images/dance/22.png'}, 
  { link: 'https://www.youtube.com/results?search_query=latin+dance', text: 'Latin', imgSrc: 'images/dance/17.png'},
  { link: 'https://www.youtube.com/results?search_query=manipuri+dance',   text: 'Manipuri', imgSrc: 'images/dance/11.png'},
 
  { link: 'https://www.youtube.com/results?search_query=mordern+dance',    text: 'Mordern ', imgSrc: 'images/dance/4.png'},
  
 

  





  

  { link: 'https://www.youtube.com/results?search_query=odissi+dance',   text: 'Odissi', imgSrc: 'images/dance/12.png'},
 



  



 
  { link: 'https://www.youtube.com/results?search_query=salsa+dance',   text: 'Salsa', imgSrc: 'images/dance/20.png'}, 
  { link: 'https://www.youtube.com/results?search_query=swing+dance',   text: 'Swing', imgSrc: 'images/dance/5.png'},
 
  { link: 'https://www.youtube.com/results?search_query=tango+dance',   text: 'Tango', imgSrc: 'images/dance/23.png'}, 
 
  { link: ' https://www.youtube.com/results?search_query=tap+dance',   text: 'Tap ', imgSrc: 'images/dance/3.png'},


];

function Dance() {

    


   


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

export default Dance