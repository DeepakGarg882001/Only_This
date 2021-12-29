import React from "react";

import AutoSlideShow from "./AutoSlideShow";
import AutoSlideData from "./AutoSlideData";

function SlideShow(props){
    return(
        <>
         <div className="slideshow-container">

            {AutoSlideData.map(AutoSlideShow)}

         </div>

        </>
    );
}

export default SlideShow;