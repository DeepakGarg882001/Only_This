import React from "react";


function SlidePoster(props){

    // const SlideIndex = 0;
    //   StartSlideShow();

    //   function StartSlideShow(){
    //       const i;
    //       const poster = document.getElementById("poster1");

    //       for(i=0; i< poster.length)


    //   }

    return(
        <>

        <div className="mySlides fade"  id="poster1" >
              <img src={props.auto_slide_poster_image} ></img>
        </div>

        </>
    );
}

export default SlidePoster;