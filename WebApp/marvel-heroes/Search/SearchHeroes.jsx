import { useNavigate } from 'react-router';
import './Search.css'

const SearchHeroes = ({heroes, setSearchHeroes}) =>{
    const navigate = useNavigate();

    const handleHeroClick = (id) => {
        navigate(`/heroes/${id}`);
        setSearchHeroes("");
      };

    return (
        <>
        <div className="heroContainer">
            <div className='flex'>
            {heroes.map((hero => (
                <div className="card" onClick={()=> handleHeroClick(hero.id)}>
                    <div className="heroInfo">
                        <h2>{hero.name}</h2>
                        <div className='card-img'>
                        <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={hero.name}/>
                        </div>
                        
                    </div>
                    <button className='btn'>Info</button> <button className='btn'>Add</button>
                </div>
            )))}
            </div>
            </div>
        </>
    )
}
export default SearchHeroes;