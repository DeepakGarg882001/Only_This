import React from "react";


function FourPLeft(props){
    return(
        <>
          <div className="left_1">
          <a href={props.fourproduct_1_link}>
              <div className="side_view_1">

                   <div className="image_left_1">
                       <img src={props.fourproduct_1_image}  alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_left_1"> {props.fourproduct_1_name} </div>
                   <div className="price_left_1" id="cost"> {props.fourproduct_1_price} </div>
              </div>
           </a>
           
              <hr className="line_1"></hr>

          <a href={props.fourproduct_2_link}>
              <div className="side_view_1">

                   <div className="image_left_1">
                       <img src={props.fourproduct_2_image} alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_left_1"> {props.fourproduct_2_name} </div>
                   <div className="price_left_1" id="cost"> {props.fourproduct_2_price} </div>
              </div>
          </a>
          </div>
        </>
    );
}

export default FourPLeft; 