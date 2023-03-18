import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import { ListOfNews } from './components/ListOfNews/ListOfNews.jsx';
import './App.css';
function App() {
  return (
    <div className="App">
      <Fragment>
      <Header />
      <ListOfNews />
      </Fragment>
    </div>
  );
}
export default App;