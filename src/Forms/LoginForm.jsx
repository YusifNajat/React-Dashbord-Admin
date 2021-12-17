import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { ProductConsumer } from '../Context'
const LoginForm = () => {
 return (
  <>
   <ProductConsumer>
    {(value) => {
     const { L_email,L_password,OnChange_Handler,Login } = value;
     return (
      <>
       <div class="login-root">
        <div
         class="box-root flex-flex flex-direction--column"
         style={{ minHeight: "100vh", flexGrow: "1" }}
        >
         <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
           <div
            class="box-root flex-flex"
            style={{ gridArea: "top / start / 8 / end" }}
           >
            <div
             class="box-root"
             style={{
              backgroundImage:
               "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
              flexGrow: "1",
             }}
            ></div>
           </div>
          </div>
         </div>
         <div
          class="box-root padding-top--24 flex-flex flex-direction--column"
          style={{ flexgrow: "1", zIndex: "9" }}
         >
          <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
           <h1>
            <a href="http://blog.stackfindover.com/" rel="dofollow">
             Company
            </a>
           </h1>
          </div>
          <div class="formbg-outer">
           <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
             <span class="padding-bottom--15">Sign in to your account</span>
             <form id="stripe-login">
              <div class="field padding-bottom--24">
               <label for="email">Email</label>
               <input type="email" className="input" name="L_email" value={L_email} onChange={OnChange_Handler} />
              </div>
              <div class="field padding-bottom--24">
               <div class="grid--50-50">
                <label for="password">Password</label>
               </div>
               <input type="password" className="input" name="L_password" value={L_password} onChange={OnChange_Handler} />
              </div>
              <div class="field padding-bottom--24">
               <Link to="/dashboard" onClick={Login}>
                {" "}
                <input
                 type="submit"
                 className="input"
                />
               </Link>
              </div>
              <div class="field">
               <Link to="sign-up">
                <a class="ssolink">Sighn Up</a>
               </Link>
              </div>
             </form>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </>
     );
    }}
   </ProductConsumer>
  </>
 );
};

export default LoginForm;
