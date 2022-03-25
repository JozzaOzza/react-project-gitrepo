
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import TitleOrId from './components/TitleOrId';
import FilmList from './components/FilmList';
import Director from './components/Director';

function App() {
  return (
    <div className="App">
      
      <Router>
        {/* Have NavBar component here */}
        <NavBar></NavBar>
        <Routes>

          <Route path='/' element={<Login/>} ></Route>
          <Route path='/home' element={<Home/>} ></Route>
          <Route path='/title' element={<TitleOrId/>} ></Route>
          <Route path='/list' element={<FilmList/>} ></Route>
          <Route path='/director' element={<Director/>} ></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
