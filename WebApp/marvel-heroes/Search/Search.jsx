const Search = ({searchHero, setSearchHero}) => {
    return (
        <div className="container">
        <div className="inputField">
          <input id="search" type="search" placeholder="Search Hero" value={searchHero} onChange={(event) => setSearchHero(event.target.value)}/>
        </div>
        </div>
    )
}
export default Search