import React from "react";
import './login.css';

function Log_in(){
    return (
        <>
           <div className="main_1">

<div className="main_2">

  <h3 className="name"> * * * * * </h3>

  <div className="under_1">
      <form>
          <label htmlFor="id" ></label>
          <input className="id_password" placeholder="User ID ..." type="phone" name="id" size="10" maxLength="10"></input>
           <br></br>

           <label htmlFor="password"></label>
           <input className="id_password" placeholder="Password...." type="password" name="password"  size="16" maxLength="16" ></input>
      </form>

  </div>
<button className="login"> Login </button>
<h5 className="new_account"> Create a <a href="##" id="new_account"> New Account  </a> here...</h5>
</div>

</div>
<br></br><br></br><br></br>
        </>
    );
}

export default Log_in;            