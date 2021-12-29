import React from "react";


function FourPRight(props){
    return(
        <>
          <div className="right_1">
          <a href={props.fourproduct_3_link}>
              <div className="side_view_1">

                   <div className="image_right_1">
                       <img src={props.fourproduct_3_image}  alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_right_1"> {props.fourproduct_3_name}  </div>
                   <div className="price_right_1" id="cost"> {props.fourproduct_3_price} </div>
              </div>
             </a>
              <hr className="line_1"></hr>
              <a href={props.fourproduct_4_link}>
              <div className="side_view_1">

                   <div className="image_right_1">
                       <img src={props.fourproduct_4_image}  alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_right_1"> {props.fourproduct_4_name} </div>
                   <div className="price_right_1" id="cost"> {props.fourproduct_4_price} </div>
              </div>
           </a>
          </div>
        </>
    );
}

export default FourPRight; 