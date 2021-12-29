import React from "react";


function SlideProduct(props){
    return(
        <>
         <li>
         <a href={props.top_slider_catagory_link}>
             <div className="top_slide" >
                 <img  src={props.top_slider_catagory_image}  alt="There is some thing error in React,plz check" className="img" ></img>
             </div>
             <span  className="p" > {props.top_slider_catagory_name} </span>
             </a>
         </li>

        </>
    );
}

export default SlideProduct;