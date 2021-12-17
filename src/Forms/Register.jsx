import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from '../Context'
const Register = () => {
 return (
  <>
   <ProductConsumer>
    {(value) => {
     const { R_fullname,R_email,R_password,OnChange_Handler,Register ,R_username} = value;
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
            <a rel="dofollow">
             Sighn Up
            </a>
           </h1>
          </div>
          <div class="formbg-outer">
           <div class="formbg">
            <div class="formbg-inner padding-horizontal--48">
             <span class="padding-bottom--15">Sign in to your account</span>
             <form id="stripe-login">
              <div class="field padding-bottom--24">
               <label for="fullname">Full Name</label>
               <input type="text" className="input" name="R_fullname" value={R_fullname} onChange={OnChange_Handler} />
              </div>
              <div class="field padding-bottom--24">
               <label for="fullname">User Name</label>
               <input type="text" className="input" name="R_username" value={R_username} onChange={OnChange_Handler} />
              </div>
              <div class="field padding-bottom--24">
               <label for="email">Email</label>
               <input type="email" className="input" name="R_email"value={R_email} onChange={OnChange_Handler}  />
              </div>
              <div class="field padding-bottom--24">
               <div class="grid--50-50">
                <label for="password">Password</label>
               </div>
               <input type="password" className="input" name="R_password" value={R_password} onChange={OnChange_Handler}  />
              </div>
              <div class="field padding-bottom--24">
               <input
                type="submit"
                className="input"
                onClick={Register}
               />
              </div>
              <div class="field">
               <Link to="/">
                {" "}
                <a class="ssolink">Sighn In</a>
               </Link>
              </div>
             </form>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <br/>
       <br/>
      </>
     );
    }}
   </ProductConsumer>
  </>
 );
};

export default Register;
