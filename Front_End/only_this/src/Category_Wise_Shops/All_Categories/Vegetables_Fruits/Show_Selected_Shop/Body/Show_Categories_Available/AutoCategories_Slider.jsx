import React from "react";

import SlideProduct from "./SlideProduct";



function AutoTopSlider(props){
    return(
        <>
        <SlideProduct

               top_slider_catagory_link={props.top_slider_catagory_link}
               top_slider_catagory_image={props.top_slider_catagory_image}
               top_slider_catagory_name={props.top_slider_catagory_name}
         />
        </>
    );
}

export default AutoTopSlider;