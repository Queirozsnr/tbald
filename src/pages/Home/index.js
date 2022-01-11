import React, { Component } from "react";

import Header from "../../components/header";
import List from "../../components/list";
import Video from "../../components/video";

import '../Home/styles.css'

class Home extends Component{
    render(){
        return(
            <>
                <Header />
                <div className="container">
                    <List />
                    <Video />
                </div>
            </>
        )
    }
    
}

export default Home