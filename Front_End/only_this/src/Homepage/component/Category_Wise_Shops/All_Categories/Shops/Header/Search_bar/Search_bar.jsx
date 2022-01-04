import React from "react";


function Search_bar(){
    return(
        <>
        <div className="search">
            <input id="bar" type="search" placeholder=" Search...." title="Search For All near available Shops" onKeyup="myfunctiom()" ></input>
        </div>
         
        </>
    );
}
export default Search_bar;