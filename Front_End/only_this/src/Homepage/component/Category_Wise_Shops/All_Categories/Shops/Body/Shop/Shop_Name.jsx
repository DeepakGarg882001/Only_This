import React from "react";

function Shop_Name(props){
  console.log(props);
    return(
  <>
   <h2 id="name"> {props.shopname} </h2>
  </>
    );
}

export default Shop_Name;