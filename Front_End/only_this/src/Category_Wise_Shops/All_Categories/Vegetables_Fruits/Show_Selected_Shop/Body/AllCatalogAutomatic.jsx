import React from "react";


import ThreeProduct from "./Show_Products_Look/Three_Products_AST/ThreeProduct";
import FourProducts from "./Show_Products_Look/Four_Products_AST/FourProducts";
import TwoCard from "./Offer_Card_Categories/Two_At_Same_Time/TwoCard";
import ThreeCards from "./Offer_Card_Categories/Three_At_Same_Time/ThreeCards";



function AllCatalogAutomatic(props){
return(
    <>
    <div>
        <TwoCard 
         
         TwoCardProduct_1_link={props.TwoCardProduct_1_link}
         TwoCardProduct_1_image={props.TwoCardProduct_1_image}
         TwoCardProduct_1_catagory_name={props.TwoCardProduct_1_catagory_name}
         TwoCardProduct_1_discount={props.TwoCardProduct_1_discount}
         TwoCardProduct_1_discription={props.TwoCardProduct_1_discription}

         TwoCardProduct_2_link={props.TwoCardProduct_2_link}
         TwoCardProduct_2_image={props.TwoCardProduct_2_image}
         TwoCardProduct_2_catagory_name={props.TwoCardProduct_2_catagory_name}
         TwoCardProduct_2_discount={props.TwoCardProduct_2_discount}
         TwoCardProduct_2_discription={props.TwoCardProduct_2_discription}
         
         TwoCardProduct_3_link={props.TwoCardProduct_3_link}
         TwoCardProduct_3_image={props.TwoCardProduct_3_image}
         TwoCardProduct_3_catagory_name={props.TwoCardProduct_3_catagory_name}
         TwoCardProduct_3_discount={props.TwoCardProduct_3_discount}
         TwoCardProduct_3_discription={props.TwoCardProduct_3_discription}
            
         TwoCardProduct_4_link={props.TwoCardProduct_4_link}
         TwoCardProduct_4_image={props.TwoCardProduct_4_image}
         TwoCardProduct_4_catagory_name={props.TwoCardProduct_4_catagory_name}
         TwoCardProduct_4_discount={props.TwoCardProduct_4_discount}
         TwoCardProduct_4_discription={props.TwoCardProduct_4_discription}


        />
       
    </div>
    <div>
    <ThreeProduct 
                  
                three_product_CatalougUpperpart_catagory_name={props.three_product_CatalougUpperpart_catagory_name}
                three_product_CatalougUpperpart_view_all_link={props.three_product_CatalougUpperpart_view_all_link}

                threeproduct_1_link={props.threeproduct_1_link} 
                threeproduct_1_image ={props.threeproduct_1_image}
                threeproduct_1_name={props.threeproduct_1_name}
                threeproduct_1_price ={props.threeproduct_1_price}

                threeproduct_2_link={props.threeproduct_2_link} 
                threeproduct_2_image ={props.threeproduct_2_image}
                threeproduct_2_name={props.threeproduct_2_name}
                threeproduct_2_price ={props.threeproduct_2_price}

                threeproduct_3_link={props.threeproduct_3_link} 
                threeproduct_3_image ={props.threeproduct_3_image}
                threeproduct_3_name={props.threeproduct_3_name}
                threeproduct_3_price ={props.threeproduct_3_price} 

    />
    <FourProducts 
     
                four_product_CatalougUpperpart_view_all_link={props.four_product_CatalougUpperpart_view_all_link}
                four_product_CatalougUpperpart_catagory_name={props.four_product_CatalougUpperpart_catagory_name}


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
    <div>
     <ThreeCards
     
         Three_CardProduct_1_link={props.Three_CardProduct_1_link}
         Three_CardProduct_1_image={props.Three_CardProduct_1_image}
         Three_CardProduct_1_catagory_name={props.Three_CardProduct_1_catagory_name}
         Three_CardProduct_1_discount={props.Three_CardProduct_1_discount}

         Three_CardProduct_2_link={props.Three_CardProduct_2_link}
         Three_CardProduct_2_image={props.Three_CardProduct_2_image}
         Three_CardProduct_2_catagory_name={props.Three_CardProduct_2_catagory_name}
         Three_CardProduct_2_discount={props.Three_CardProduct_2_discount}
         
         Three_CardProduct_3_link={props.Three_CardProduct_3_link}
         Three_CardProduct_3_image={props.Three_CardProduct_3_image}
         Three_CardProduct_3_catagory_name={props.Three_CardProduct_3_catagory_name}
         Three_CardProduct_3_discount={props.Three_CardProduct_3_discount}


     
      />
    </div>

    </>
);
}

export default AllCatalogAutomatic;