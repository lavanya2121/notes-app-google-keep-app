import React from 'react'
import download1 from '../../images/download1.png'

function Home(){
    return(
        <div>
            <h2 style={{textAlign:"center", color:"blue"}}>WELCOME TO NOTES-APP  HOME COMPONENT</h2>
            {/* <img src="/static/media/image.402c825e.png" alt="man holding sign"/> */}
            <div className="container" style={{backgroundImage:`url(${download1})`,backgroundSize:'cover',width:'1350px',height:'800px'}}></div>
        </div>
    )
}
export default Home