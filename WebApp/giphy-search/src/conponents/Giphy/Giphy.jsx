import "./Giphy.css";
import { useState } from "react";

export const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [information, setInformation] = useState("");
  const onChangeHandler = (e) => {
    setInformation(e.target.value);
  };
  const onClickHandler = () => {
    let API_KEY = "BvCidyoztQ9D5LmeffMxEQ7t0Eje5b0i";
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=12&q=${information}`
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      });
  };
  return (
    <div className="container">
      <div className="searchMain">
        <label>Search Giphy</label>
        <input
          type="search"
          id="searchInput"
          value={information}
          onChange={onChangeHandler}
        />
        <button id="btn" onClick={onClickHandler}>Submit</button>
      </div>
      <div id="results">
        {gifs.map(item => (
            <div className="card">
                <img src={item.images.original.url} alt="gif" className="gif" />
            </div>
        ))}
      </div>
    </div>
  );
};
