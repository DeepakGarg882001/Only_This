import React from "react";

function TwoCardProduct(props){
    return(
        <>
        <div className="v_box">
        <a href={props.TwoCardProduct_link} >
            <div className="v_box1">
                <div className="v_image">
                    <img src={props.TwoCardProduct_image}  alt="there is something error in React,plz check"  className="v_img"></img>
                </div>

                <div className="v_offer"> {props.TwoCardProduct_discount} </div>
                <div className="v_info"> {props.TwoCardProduct_discription} </div>
                <div className="v_name"> {props.TwoCardProduct_catagory_name} </div>
            </div>
            </a>
        </div>
        </>
    );
}

export default TwoCardProduct; 