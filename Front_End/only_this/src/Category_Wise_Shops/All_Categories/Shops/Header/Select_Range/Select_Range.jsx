import React from "react";




function Select_Range(){
    function show(){
        document.getElementById("popup").style.display ="block";
    }

    function hide(){
        document.getElementById("popup").style.display ="none";
    }

    
    const slider = document.getElementById("myrange");
    const output = document.getElementById("value");
    output.InnerHTML = slider.value;

   slider.oninput = function() {
   output.innerHTML = this.value;
                }
            
 

    return(
        <>
        <div className="range">
            <button className="select" onClick={() =>{show()}}> Select Range </button>
               <div id="popup">
                  <input id="myrange" type="range" min="0.5" max="15" value="2" className="slider" title="Please choose the delivery range area"></input>
                  <p className="forvalue">Value :<span id="value">  </span>Km</p>
                  <button onClick={() =>{hide()}} className="save"> Save </button>
               </div>
        </div>
         
        </>
    );
}
export default Select_Range;