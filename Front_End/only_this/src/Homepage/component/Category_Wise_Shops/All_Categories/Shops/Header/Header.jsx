import React from "react";
import Search_bar from "./Search_bar/Search_bar";
import Select_Range from "./Select_Range/Select_Range";

function Header(){
    return(
        <>
          <div className="header">
              <Search_bar></Search_bar>
              <Select_Range></Select_Range>
         </div>
          <br></br><br></br><br></br><br></br><br></br>
        </>
    );
}
export default Header;