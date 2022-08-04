import React, {FC} from "react";


import "../styles/Header.css";


const Header:FC = () => {
    return (
        <header>
                <img src={require("../images/logo.png")} alt="logo"></img>
        </header>
    )
}

export default Header;