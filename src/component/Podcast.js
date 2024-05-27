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


  { link: 'https://www.youtube.com/results?search_query=busines++podcast',   text: '•	Business ', imgSrc: 'images/podcast/16.png'},
  { link: 'https://www.youtube.com/results?search_query=conversational++podcast',    text: '•	Conversational ', imgSrc: 'images/podcast/3.png'},
  { link: 'https://www.youtube.com/results?search_query=criminal++podcast',   text: '•	Criminal', imgSrc: 'images/podcast/11.png'},  
  { link: 'https://www.youtube.com/results?search_query=comedy+podcast',    text: '•	Comedy', imgSrc: 'images/podcast/13.png'},
  { link: 'https://www.youtube.com/results?search_query=discussion+panel+podcast',   text: '•	Discussion panel', imgSrc: 'images/podcast/22.png'},
  { link: 'https://www.youtube.com/results?search_query=documentary++podcast-', text: '•	Documentary', imgSrc: 'images/podcast/18.png'},
  { link: 'https://www.youtube.com/results?search_query=educational++podcast',    text: '•	Educational', imgSrc: 'images/podcast/19.png'},
  
  { link: 'https://www.youtube.com/results?search_query=hybrid+++podcast', text: '•	Hybrid ', imgSrc: 'images/podcast/6.png'},


  { link: 'https://www.youtube.com/results?search_query=interview+podcast',   text: '•	Interview ', imgSrc: 'images/podcast/1.png'}, 
  
 
 

  { link: 'https://www.youtube.com/results?search_query=monologue++podcast',    text: '•	Monologue ', imgSrc: 'images/podcast/10.png'},
  { link: 'https://www.youtube.com/results?search_query=nonfiction+narratives+podcast',   text: '•	Nonfiction narrative ', imgSrc: 'images/podcast/9.png'},
 
  { link: 'https://www.youtube.com/results?search_query=panel++podcast',   text: '•	Panel ', imgSrc: 'images/podcast/12.png'},
  { link: 'https://www.youtube.com/results?search_query=repurposed+content+podcast',   text: '•	Repurposed content', imgSrc: 'images/podcast/4.png'},


  { link: 'https://www.youtube.com/results?search_query=solo+podcast', text: '•	Solo ', imgSrc: 'images/podcast/2.png'},

 
 
  { link: 'https://www.youtube.com/results?search_query=story+telling++podcast',   text: '•	Storytelling ', imgSrc: 'images/podcast/5.png'},



 
  
  

 

  
 

 


 
  
  { link: 'https://www.youtube.com/results?search_query=sports++podcast',   text: '•	Sports', imgSrc: 'images/podcast/21.png'},
  
];

function Podcast() {

    


   


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

export default Podcast