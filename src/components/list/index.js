import React, { Component }from "react";

class List extends Component{
    render(){
        return(
            <>
                <div className="list-videos">
                    <div className="item">
                        <div className="title-video">
                            <h2>Music Example Name 1</h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-video">
                            <h2>Music Example Name 2</h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-video">
                            <h2>Music Example Name 3</h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-video">
                            <h2>Music Example Name 4</h2>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title-video">
                            <h2>Music Example Name 5</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default List