import React from "react";

import Shop_Image from "./Shop_Image";
import Shop_Details from "./Shop_Details";


function Shop(props){
    return(
  <>
    <div className="main">
        <br></br>
        <hr className="line"></hr>
        
        <Shop_Image
            shopimage={props.shopimage}
        ></Shop_Image>
        
        <Shop_Details 
            shopname={props.shopname} 
            shopaddress={props.shopaddress}

            q_start1={props.q_start1}
            q_start2={props.q_start2}
            q_start3={props.q_start3}
            q_start4={props.q_start4}
            q_start5={props.q_start5}

            p_start1={props.p_start1}
            p_start2={props.p_start2}
            p_start3={props.p_start3}
            p_start4={props.p_start4}
            p_start5={props.p_start5}  

        ></Shop_Details>
    </div>
  </>
    );
}

export default Shop;