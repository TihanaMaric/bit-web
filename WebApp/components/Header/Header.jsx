import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export const Header = ({ isView, refresh, changeView }) => {

    let btnLook = <i className="cardButton btn-info fas fa-grip-horizontal m-3 text-light " ></i>;
    
    if (isView){
        btnLook = <i className="fas fa-list"></i>;
    }

    return (

<header>
<nav className="navbar navbar-light header fixed-top">
    <div className="w-75 container-fluid">
    <Link className= "bitPeople" to="/home"><span className="navbar-brand mb-0 ms-5 fw-bold fs-1 text-light ">Bit People</span></Link>
    <div className="links">
        <Link to="/about" className=" about text-light m-3 text-light"> About </Link>
        <button  onClick={refresh}><i className="btnRefresh fas fa-redo m-3 text-light" ></i></button>
            <button onClick={changeView}>{btnLook}</button>
    </div>
    </div>
</nav>
</header>

    );
};