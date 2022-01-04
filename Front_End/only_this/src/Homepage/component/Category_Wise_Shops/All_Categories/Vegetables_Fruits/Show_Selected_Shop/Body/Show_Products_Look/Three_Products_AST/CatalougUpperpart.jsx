import React from "react";


function CatalougUpperpart(props){
    return(
        <>
         <div className="upper_part">
          <div className="catalaug_name"> {props.CatalougUpperpart_catagory_name}</div>
          <a href={props.CatalougUpperpart_view_all_link}>
          <button className="view_all" autoFocus="autofocus" >View All <b><span  className="iconify" data-icon="mdi:chevron-right" data-inline="false" id="arrow"></span></b> </button>  
          </a>
          </div>
         
        </>
    );
}

export default CatalougUpperpart;