import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import SinglePage from './SinglePage/SinglePage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';;




function App() {
  const [heroes, setHeroes] = useState([]);
  const [searchHero, setSearchHero] = useState("")

  useEffect(() => {
    const APIKey = 'cf147e304056a973462499001286f73a';
    fetch(`http://gateway.marvel.com/v1/public/characters?apikey=${APIKey}`)
    .then((res) => res.json())
    .then((data)=> {
      setHeroes(data.data.results);

    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main heroes={heroes} setHeroes={setHeroes} searchHero={searchHero} setSearchHero={setSearchHero}/>} />
        <Route path='/heroes/:id' element={<SinglePage/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;