import React from "react";
import Shop from "../Shop/Shop";

function Allshops(val){
    return(
        <Shop
           shopimage={val.shopimage}
           shopname={val.shopname}
           shopaddress={val.shopaddress}

            q_start1={val.q_start1}
            q_start2={val.q_start2}
            q_start3={val.q_start3}
            q_start4={val.q_start4}
            q_start5={val.q_start5}

            p_start1={val.p_start1}
            p_start2={val.p_start2}
            p_start3={val.p_start3}
            p_start4={val.p_start4}
            p_start5={val.p_start5}

        />
    );
}

export default Allshops;