import React from "react";

import Rating from "../Rating/Rating";
import Address from "./Address";
import Shop_Name from "./Shop_Name";



function Shop_Details(props){
    return(
  <>
  <div className="details">
  
   <Shop_Name 
            shopname={props.shopname} ></Shop_Name>
   <Address
            shopaddress={props.shopaddress}></Address>
   <Rating
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
   ></Rating>

   </div>
  </>
    );
}

export default Shop_Details;