import React from "react";


function ThreePLeft(props){
    return(
        <>
        <a href={props.threeproduct_1_link} >
          <div className="left">
          
              <div className="image_left">
                  <img src={props.threeproduct_1_image}  alt="there is some error in React,plz check" className="img"></img>
              </div>
              <div className="name_left"> {props.threeproduct_1_name} </div>
              <div className="price_left"id="cost">{props.threeproduct_1_price} </div>
              
          </div>
          </a>
        </>
    );
}

export default ThreePLeft; 