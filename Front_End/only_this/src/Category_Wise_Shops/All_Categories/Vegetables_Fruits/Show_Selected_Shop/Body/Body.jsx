import React from 'react';
import Categories_Slide from "./Show_Categories_Available/Categories_Slide";
import SlideShow from './New_Launches_Slideshow/SlideShow';
import AllCatalogAutomatic from './AllCatalogAutomatic';
import AllCatalogData from './AllCatalogData';
function Body(){
   return(
       <>
           <Categories_Slide></Categories_Slide>
           <SlideShow></SlideShow>
           {AllCatalogData.map(AllCatalogAutomatic)}
       </>
   );
}
export default Body;