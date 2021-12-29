import React from "react";

import CatalougUpperpart from "../catalaug-3-product/CatalougUpperpart";
import FourPLowerpart from "./FourPLowerpart";


function FourProducts(props){
    return(
        <>
        <div className="catalaug">

          <CatalougUpperpart

          CatalougUpperpart_catagory_name={props.four_product_CatalougUpperpart_catagory_name}
          CatalougUpperpart_view_all_link={props.four_product_CatalougUpperpart_view_all_link}
          />

          <FourPLowerpart


fourproduct_1_link={props.fourproduct_1_link} 
                fourproduct_1_image ={props.fourproduct_1_image}
                fourproduct_1_name={props.fourproduct_1_name}
                fourproduct_1_price ={props.fourproduct_1_price}

                fourproduct_2_link={props.fourproduct_2_link} 
                fourproduct_2_image ={props.fourproduct_2_image}
                fourproduct_2_name={props.fourproduct_2_name}
                fourproduct_2_price ={props.fourproduct_2_price}

                fourproduct_3_link={props.fourproduct_3_link} 
                fourproduct_3_image ={props.fourproduct_3_image}
                fourproduct_3_name={props.fourproduct_3_name}
                fourproduct_3_price ={props.fourproduct_3_price} 

                fourproduct_4_link={props.fourproduct_4_link} 
                fourproduct_4_image ={props.fourproduct_4_image}
                fourproduct_4_name={props.fourproduct_4_name}
                fourproduct_4_price ={props.fourproduct_4_price}

          />          

        </div>
        
         </>
    );

}

export default FourProducts;