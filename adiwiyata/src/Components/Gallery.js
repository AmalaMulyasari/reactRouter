import React from 'react';
import g6 from "../images/adiwiyata6.jpeg";
import g5 from "../images/adiwiyata5.jpg";
import g4 from "../images/adiwiyata4.jpg";
import g3 from "../images/adiwiyata3.jpg";
import g2 from "../images/adiwiyata2.jpeg";
import g1 from "../images/adiwiyata1.jpeg";

class Gallery extends React.Component{
    render(){
        return(
            <div className="gallery">
                <img src={g6} class="rounded " alt="g6" height="250px" width="370px"/>
                <img src={g5} class="rounded " alt="g5" height="250px" width="370px"/>
                <img src={g4} class="rounded " alt="g4" height="250px" width="370px"/>
                <img src={g3} class="rounded " alt="g3" height="250px" width="370px"/>
                <img src={g2} class="rounded " alt="g2" height="250px" width="370px"/>
                <img src={g1} class="rounded " alt="g1" height="250px" width="370px"/>
            </div>
        )
    }
}

export default Gallery;