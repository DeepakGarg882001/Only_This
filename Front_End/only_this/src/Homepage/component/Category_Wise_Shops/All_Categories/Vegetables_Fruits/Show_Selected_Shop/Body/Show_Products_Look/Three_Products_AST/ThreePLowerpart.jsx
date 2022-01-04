import React from "react";

import ThreePLeft from "./ThreePLeft";
import ThreePRight from "./ThreePRight";

function ThreePLowerpart(props){
    return(
        <>
        <div className="lower_part">
            <div >
                 <ThreePLeft
                threeproduct_1_link={props.threeproduct_1_link} 
                threeproduct_1_image ={props.threeproduct_1_image}
                threeproduct_1_name={props.threeproduct_1_name}
                threeproduct_1_price ={props.threeproduct_1_price} 

                 />

                 <ThreePRight

                threeproduct_2_link={props.threeproduct_2_link} 
                threeproduct_2_image ={props.threeproduct_2_image}
                threeproduct_2_name={props.threeproduct_2_name}
                threeproduct_2_price ={props.threeproduct_2_price}

                threeproduct_3_link={props.threeproduct_3_link} 
                threeproduct_3_image ={props.threeproduct_3_image}
                threeproduct_3_name={props.threeproduct_3_name}
                threeproduct_3_price ={props.threeproduct_3_price} 

                 />
            </div>
        </div>

        </>
    );
}

export default ThreePLowerpart; 