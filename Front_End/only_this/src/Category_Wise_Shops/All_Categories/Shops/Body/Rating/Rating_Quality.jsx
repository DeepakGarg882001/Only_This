import React from "react";

function Rating_Quality(props){
    return(
        <>
        <small className="quality"> Quality :

         <span className={props.q_start1}></span>
         <span className={props.q_start2}></span>
         <span className={props.q_start3}></span>
         <span className={props.q_start4}></span>
         <span className={props.q_start5}></span> 
       </small>
       <br></br>

        </>
    );
}

export default Rating_Quality;