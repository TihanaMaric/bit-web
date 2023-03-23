import "./App.css";

import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { getUsers } from "./services/getUsers";

function App() {
  const [isView, setIsView] = useState(false);
  const [users, setUsers] = useState([]);

  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("bitPeople") === null) {
      getUsers().then((users) => {
        setUsers(users);
        setFilteredUsers(users);
        localStorage.setItem("bitPeople", JSON.stringify(users));
      });
    } else {
      setUsers(JSON.parse(localStorage.getItem("bitPeople")));
      setFilteredUsers(JSON.parse(localStorage.getItem("bitPeople")));
    }
  }, []);

  const refresh = () => {
    localStorage.removeItem("bitPeople");
    getUsers().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
      setInputValue("");
      localStorage.setItem("bitPeople", JSON.stringify(users));
      localStorage.setItem("lastModBitPeople", document.lastModified);
    });
  };

  const onTyping = (e) => {
    setInputValue(e.target.value);
    const filtUsers = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredUsers(filtUsers);
  };

  const changeView = () => {
    setIsView(!isView);
  };

  return (
    <div className="App">
      <Header isView={isView} refresh={refresh} changeView={changeView} />
      <Search inputValue={inputValue} onChange={onTyping} />

      <Routes>
        <Route
          path="/home"
          element={
            <Main
              isView={isView}
              users={filteredUsers}
              inputValue={inputValue}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;