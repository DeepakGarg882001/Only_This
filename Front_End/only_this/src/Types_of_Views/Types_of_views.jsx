import React from "react";
import "./Types_of_views.css";

function Types_of_views() {
  return (
    <>
      <div className="main_1">
        <div className="heading">
          <h2 className="welcome">
            {" "}
            Hi , Garg <br></br> Welcome to ****
          </h2>
        </div>
        <h5 className="choose"> Please choose any one type of view </h5>

        <div className="view">
          <div className="no">
            <h3> Map </h3>
          </div>

          <div className="no">
            <h3> Shop </h3>
          </div>

          <div className="no">
            <h3> Product </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Types_of_views;