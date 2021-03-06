import React from "react";
import "./login.css";
import {Link} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Types_of_views from "../../Types_of_Views/TypesofViews";


const LogIn= () => {
  return (
    <>
    <Routes>
        <Route exact path="/login" component={Types_of_views}></Route>
        <Route exact path="/createAccount" ></Route>
    </Routes>
    
      <div className="main_1">
        <div className="main_2">
          <h3 className="name"> * * * * * </h3>

          <div className="under_1">
            <form>
              <label htmlFor="id"></label>
              <input
                className="id_password"
                placeholder="User ID ..."
                type="phone"
                name="id"
                size="10"
                maxLength="10"
              ></input>
              <br></br>

              <label htmlFor="password"></label>
              <input
                className="id_password"
                placeholder="Password...."
                type="password"
                name="password"
                size="16"
                maxLength="16"
              ></input>
            </form>
          </div>
          <Link to="/login">
            <button className="login"> Login </button>
          </Link>
          <Link to="/createAccount">
            <h5 className="new_account">Create a New Account here...</h5>
          </Link>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      
    </>

  );
}

export default LogIn;
