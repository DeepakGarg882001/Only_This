import React from "react";

function Rating_Price(props){
    return(
        <>
         <small className="price"> Price :

         <span className={props.p_start1}></span>
         <span className={props.p_start2}></span>
         <span className={props.p_start3}></span>
         <span className={props.p_start4}></span>
         <span className={props.p_start5}></span> 

         </small>
        
        </>
    );
}

export default Rating_Price;