import React from "react";


function ThreePRight(props){
    return(
        <>
          <div className="right">
            <a href={props.threeproduct_2_link} >
              <div className="side_view">

                   <div className="image_right">
                       <img src={props.threeproduct_2_image}  alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_right">{props.threeproduct_2_name}</div>
                   <div className="price_right" id="cost">{props.threeproduct_2_price}</div>
              </div>
              </a>

              <hr className="line"></hr>

              <a href={props.threeproduct_3_link} >
              <div className="side_view">

                   <div className="image_right">
                       <img src={props.threeproduct_3_image}  alt="there is some error in React,plz check" className="img"></img>
                   </div>

                   <div className="name_right">{props.threeproduct_3_name}</div>
                   <div className="price_right" id="cost">{props.threeproduct_3_price} </div>
              </div>
            </a>
          </div>
        </>
    );
}

export default ThreePRight; 