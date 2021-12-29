import React from "react";

import SlidePoster from "./SlidePoster";

function AutoSlideShow(props){
    return(
        <>
        <SlidePoster 
        
          auto_slide_poster_image={props.auto_slide_poster_image}
        />

        </>
    );
}

export default AutoSlideShow;