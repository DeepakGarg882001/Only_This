import React from "react";

function Shop_Image(props){
    return(
  <>
  <div className="logo">
   <img src={process.env.PUBLIC_URL + props.shopimage }  alt="why my image is not showing" className="img"></img>
  </div>
  </>
    );
}

export default Shop_Image;