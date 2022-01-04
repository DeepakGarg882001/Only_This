import React from "react";
import All_Shop_Data from "./All_Shops/All_Shop_Data";
import Allshops from "./All_Shops/Allshops";
function Body(){
    return(
        <>
         {All_Shop_Data.map(Allshops)}
        </>
    );
}
export default Body;