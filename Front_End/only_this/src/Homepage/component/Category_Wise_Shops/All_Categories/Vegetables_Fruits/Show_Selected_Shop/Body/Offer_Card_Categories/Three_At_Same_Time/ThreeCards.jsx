import React from "react";

import ThreeCardProduct from "./ThreeCardProduct";

function ThreeCards(props){
    return(
        <>
        <div>
            <div className="u_main">
           <ThreeCardProduct 
        
               Three_CardProduct_link={props.Three_CardProduct_1_link}
               Three_CardProduct_image={props.Three_CardProduct_1_image}
               Three_CardProduct_catagory_name={props.Three_CardProduct_1_catagory_name}
               Three_CardProduct_discount={props.Three_CardProduct_1_discount}

           />
           <ThreeCardProduct 

               Three_CardProduct_link={props.Three_CardProduct_2_link}
               Three_CardProduct_image={props.Three_CardProduct_2_image}
               Three_CardProduct_catagory_name={props.Three_CardProduct_2_catagory_name}
               Three_CardProduct_discount={props.Three_CardProduct_2_discount}


           />
           <ThreeCardProduct 

               Three_CardProduct_link={props.Three_CardProduct_3_link}
               Three_CardProduct_image={props.Three_CardProduct_3_image}
               Three_CardProduct_catagory_name={props.Three_CardProduct_3_catagory_name}
               Three_CardProduct_discount={props.Three_CardProduct_3_discount}


           />
            </div>
        </div>

        </>
    );
}

export default ThreeCards;