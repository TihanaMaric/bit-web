import './Heroes.css'
const Heroes = ({heroes, setHeroes}) =>{

    return (
        <div className="hero-container">
            <div className='flex'>
            {heroes.map((hero => (
                <div className="card">
                    <div className="hero-info">
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
    )
}
export default Heroes;
