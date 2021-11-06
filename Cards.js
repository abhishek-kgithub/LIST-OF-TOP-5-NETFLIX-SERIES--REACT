import React from "react";
import  ReactDOM  from "react";


function Card(props) {
    // console.log(props);
      return(
        <>  
         <div className= "cards">
      <div className= "card">
        <img src={props.imgsrc} alt="myPic" className="card__img"/>
        <div className="class__info">
          <span className="card__category">{props.title}</span>
          <h3 className="card__title">{props.sname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now </button>
            </a>
        </div>
      </div>
    </div>
        </>
      );
  }

export default Card;