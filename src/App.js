
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from "./component/Homepage";
import Medicine from "./component/Medicine";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Section from "./component/Section";
import Olympic from "./component/Olympic";
import Adventure from "./component/Adventure";
import Team from "./component/Team";
import Video from "./component/Video";
import Songs from "./component/Songs";
import Podcast from "./component/Podcast";
import Dance from "./component/Dance";
import Movie from "./component/Movie";
import News from "./component/News";
function App() {
  return (
    <div>
    <Router>
   
<NavBar/>

    <Routes>

    <Route exact path="/" element={ <Homepage/>}/>
    <Route exact path="/Section" element={<Section/>}/>
    <Route exact path="/Olympic" element={<Olympic/>}/>
    <Route exact path="/adventure" element={<Adventure/>}/>
    <Route exact path="/team" element={<Team/>}/>
    <Route exact path="/video" element={<Video/>}/>
    <Route exact path="/songs" element={<Songs/>}/>
    <Route exact path="/news" element={<News/>}/>
    <Route exact path="/adventure" element={<Adventure/>}/>
    <Route exact path="/dance" element={<Dance/>}/>
    <Route exact path="/movie" element={<Movie/>}/>
    <Route exact path="/medicine" element={<Medicine/>}/>

    
    <Route exact path="/podcast" element={<Podcast/>}/>
    </Routes>

</Router>
    </div>
  );
}

export default App;
