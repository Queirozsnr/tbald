import React, { Component } from "react";

import logo from '../../assets/html/assets/img/bald.png'



class Header extends Component{
    render(){
        return(
            <>
                <header>
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Buscar" />
                    </div>
                </header>
            </>
        )
    }
}

export default Header