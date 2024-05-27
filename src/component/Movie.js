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
   

 
 
  { link: 'https://www.youtube.com/results?search_query=adventure++movies',   text: '•	Adventure', imgSrc: 'images/movie/10.png'},
  { link: 'https://www.youtube.com/results?search_query=action+movie',   text: '•	Action comedy', imgSrc: 'images/movie/3.png'},
  { link: 'https://www.youtube.com/results?search_query=animated++movies',   text: '•	Animated', imgSrc: 'images/movie/16.png'},
  { link: 'https://www.youtube.com/results?search_query=biopic++movies',    text: '•	Biopic', imgSrc: 'images/movie/11.png'},
  { link: 'https://www.youtube.com/results?search_query=black+comedy+movies',    text: '•	Black Comedy', imgSrc: 'images/movie/19.png'},
  { link: 'https://www.youtube.com/results?search_query=buddy+comedy+movies',    text: '•	Buddy Comedy', imgSrc: 'images/movie/23.png'},
  { link: 'https://www.youtube.com/results?search_query=comedy+movie', text: '•	Comedy', imgSrc: 'images/movie/2.png'},
  { link: 'https://www.youtube.com/results?search_query=crime++movies',   text: '•	Crime', imgSrc: 'images/movie/13.png'},



  { link: 'https://www.youtube.com/results?search_query=drama+movie',    text: '•	Drama', imgSrc: 'images/movie/4.png'},
  { link: 'https://www.youtube.com/results?search_query=fantasy+movie',   text: '•	Fantasy', imgSrc: 'images/movie/5.png'},
  { link: 'https://www.youtube.com/results?search_query=historical++movies ', text: '•	Historical', imgSrc: 'images/movie/15.png'},
  { link: 'https://www.youtube.com/results?search_query=horror+movie',   text: '•	Horror', imgSrc: 'images/movie/1.png'}, 
  { link: 'https://www.youtube.com/results?search_query=musical++movies',   text: '•	Musical', imgSrc: 'images/movie/20.png'},
  { link: 'https://www.youtube.com/results?search_query=mystery++movies',    text: '•	Mystery', imgSrc: 'images/movie/21.png'},
  { link: 'https://www.youtube.com/results?search_query=romance+movie',   text: '•	Romance', imgSrc: 'images/movie/6.png'},
  { link: 'https://www.youtube.com/results?search_query=romantic+comedy+movies',   text: '•	Romantic comedy', imgSrc: 'images/movie/12.png'},  
  { link: 'https://www.youtube.com/results?search_query=sports++movies',    text: '•	Sports', imgSrc: 'images/movie/22.png'},
  { link: 'https://www.youtube.com/results?search_query=thriller+movies', text: '•	Triller', imgSrc: 'images/movie/7.png'},


  { link: 'https://www.youtube.com/results?search_query=science+fiction+movies ',   text: '•	Science Fiction', imgSrc: 'images/movie/8.png'},
  { link: 'https://www.youtube.com/results?search_query=western++movies', text: '•	Western', imgSrc: 'images/movie/9.png'},
  




 

 
  

  { link: 'https://www.youtube.com/results?search_query=war++movies',   text: '•	War', imgSrc: 'images/movie/17.png'},
  { link: 'https://www.youtube.com/results?search_query=zombie++movies', text: '•	Zombie', imgSrc: 'images/movie/18.png'},

  
  
 

];

function Movie() {

    


   


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

export default Movie