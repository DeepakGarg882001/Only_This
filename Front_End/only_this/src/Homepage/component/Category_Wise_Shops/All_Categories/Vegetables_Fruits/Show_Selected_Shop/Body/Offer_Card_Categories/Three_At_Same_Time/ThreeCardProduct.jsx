import React from "react";

function ThreeCardProduct(props){
    return(
        <>
            <div className="u_box">
            <a href={props.Three_CardProduct_link}>
                <div className="u_box1">

                    <div className="u_image">
                      <img src={props.Three_CardProduct_image}  alt="There is some error in React,plz check" className="u_img"></img>
                    </div>

                    <div className="u_offer"> {props.Three_CardProduct_discount} </div>
                    <div className="u_name"> {props.Three_CardProduct_catagory_name} </div>
                </div>
                </a>
            </div>
        </>
    );

}

export default ThreeCardProduct; 