import React from "react";

function Address(props){
    return(
  <>
  <div className="address">
      <p><i className="fas fa-map-marker-alt" id="icon"></i> {props.shopaddress} </p>
  </div>
  </>
    );
}

export default Address;