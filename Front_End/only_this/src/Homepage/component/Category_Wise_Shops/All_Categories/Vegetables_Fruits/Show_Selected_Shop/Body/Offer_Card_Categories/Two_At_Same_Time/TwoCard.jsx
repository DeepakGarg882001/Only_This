import React from "react";

import TwoCardProduct from "./TwoCardProduct";

function TwoCard(props){
    return(
        <>
        <div className="two_card">
            <div  className="v_main">
             <TwoCardProduct 

                 TwoCardProduct_link={props.TwoCardProduct_1_link}
                 TwoCardProduct_image={props.TwoCardProduct_1_image}
                 TwoCardProduct_catagory_name={props.TwoCardProduct_1_catagory_name}
                 TwoCardProduct_discount={props.TwoCardProduct_1_discount}
                 TwoCardProduct_discription={props.TwoCardProduct_1_discription}
             />
             <TwoCardProduct 

                 TwoCardProduct_link={props.TwoCardProduct_2_link}
                 TwoCardProduct_image={props.TwoCardProduct_2_image}
                 TwoCardProduct_catagory_name={props.TwoCardProduct_2_catagory_name}
                 TwoCardProduct_discount={props.TwoCardProduct_2_discount}
                 TwoCardProduct_discription={props.TwoCardProduct_2_discription}
             />
             
            </div>
            <div  className="v_main">
             <TwoCardProduct 

                 TwoCardProduct_link={props.TwoCardProduct_3_link}
                 TwoCardProduct_image={props.TwoCardProduct_3_image}
                 TwoCardProduct_catagory_name={props.TwoCardProduct_3_catagory_name}
                 TwoCardProduct_discount={props.TwoCardProduct_3_discount}
                 TwoCardProduct_discription={props.TwoCardProduct_3_discription}
             />
             <TwoCardProduct 

                 TwoCardProduct_link={props.TwoCardProduct_4_link}
                 TwoCardProduct_image={props.TwoCardProduct_4_image}
                 TwoCardProduct_catagory_name={props.TwoCardProduct_4_catagory_name}
                 TwoCardProduct_discount={props.TwoCardProduct_4_discount}
                 TwoCardProduct_discription={props.TwoCardProduct_4_discription}
             />
             
            </div>
        </div>

        </>
    );
}

export default TwoCard;