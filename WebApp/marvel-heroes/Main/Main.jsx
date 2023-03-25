import Heroes from "../../Heroes/Heroes";
import MyTeam from "../../MyTeam/MyTeam";
import './Main.css'
import Search from "../../Search/Search";
import SearchHeroes from "../../Search/SearchHeroes";
const MainContent = ({heroes, searchHero, setSearchHero}) => {
    const filteredHeroes = heroes.filter((heroes) => heroes.name.toLowerCase().includes(searchHero.toLowerCase()))
    return(
        <div className="wrapper">
            <Search searchHero={searchHero} setSearchHero={setSearchHero}/>
            <div className="main-content-container">     
            <div className="heroes">
                {searchHero ? (<SearchHeroes heroes={filteredHeroes} setSearchHero={setSearchHero}/>) : (<Heroes heroes={heroes}/>)}
            </div>
            <div className="myteam">
            <MyTeam/>
            </div>
        </div>
        </div>
       
    )
}
export default MainContent;