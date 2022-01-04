import React from "react";


import AutoTopSlider from "./AutoCategories_Slider";
import TopslideData from "./Categories_SlideData";

function TopSlide(props){
    return(
        <>
         <div>
             <ol className="ol_list">

               {TopslideData.map(AutoTopSlider)}

             </ol>
         </div>
        </>
    );
}

export default TopSlide; 