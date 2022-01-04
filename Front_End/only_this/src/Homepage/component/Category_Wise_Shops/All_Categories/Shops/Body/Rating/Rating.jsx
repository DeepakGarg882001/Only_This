import React from "react";

import Rating_Price from "./Rating_Price";
import Rating_Quality from "./Rating_Quality";

function Rating(props){
    return(
        <>
        <div className="rating">
           <Rating_Quality
            q_start1={props.q_start1}
            q_start2={props.q_start2}
            q_start3={props.q_start3}
            q_start4={props.q_start4}
            q_start5={props.q_start5}  
            />

           <Rating_Price
            p_start1={props.p_start1}
            p_start2={props.p_start2}
            p_start3={props.p_start3}
            p_start4={props.p_start4}
            p_start5={props.p_start5}           
           />
        </div>
        </>
    );
}

export default Rating;