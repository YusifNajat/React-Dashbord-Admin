import React from "react";
import setToken from "./Util/SetToken";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const ProductContext = React.createContext();

class Context extends React.Component {
 constructor() {
  super();
  this.state = {
   // Register
   R_fullname: "",
   R_username: "",
   R_email: "",
   R_password: "",
   Auth: null,
   // Login
   L_email: "",
   L_password: "",
   // problms
   list_problmes: [],
   list_answers: [],
  };
 }
componentDidMount() {
    this.GetUser_Login()
}
 OnChange_Handler = (e) => {
  this.setState(
   {
    [e.target.name]: e.target.value,
   },
   console.log(e.target.value)
  );
  // this.Clear_Error()
 };
 // Login And Registers
 Register = async (e) => {
     e.preventDefault()
  const config = {
   "content-type": "application/json",
  };
  try {
   const data = {
    fullname: this.state.R_fullname,
    username: this.state.R_username,
    email: this.state.R_email,
    password: this.state.R_password,
   };
   const res = await axios.post(`/api/v1/User/signup`, data, config);
   localStorage.setItem("token", res.data.data.token);
   
   // toast.success("User Created Successfuly")
   this.setState({ Auth: true }, () => {
    this.GetUser_Login();
   });
  } catch (error) {
//    toast.error("Please Check inputs");
  }
 };
 Login = async (e) => {
    e.preventDefault()
  const config = {
   "content-type": "application/json",
  };
 if (this.state.L_email===""||this.state.L_password==="") {
   alert("Please Check Inputs")
 } else {
  try {
    const data = {
     email: this.state.L_email,
     password: this.state.L_password,
    };
    console.log(`res`, data)
    const res = await axios.post(`/api/v1/User/signin`, data, config);
    console.log(`res.data.data.token`, res)
    localStorage.setItem("token", res.data.data.token);
    //    toast.success("Login Done ")
   //  window.location.reload(true);
    this.setState({ Auth: true }, () => {
     this.GetUser_Login();
    });
   } catch (error) {
 //    toast.error("Please Check inputs");
   }
 }
 };
 GetUser_Login = async () => {
  if (localStorage.token) {
   setToken(localStorage.getItem("token"));
  }
  const config = {
   "content-type": "application/json",
  };
  try {
   const res = await axios.get(`/api/v1/User`, config);
   const data = res.data.data;
   this.setState(
    {
     R_fullname: data.fname,
     R_email: data.lname,
     Auth:true
    },
    () => {
     // this.All_shops("Men")
     // this.Wishlist_Show()
    }
   );
  } catch (error) {
   console.log(`error`, error)
  }
 };
 LogOut_User = () => {
  this.setState({ Auth: null });
  localStorage.removeItem("token");
 };
 // Functions
 Create_Problem=async()=>{
    if(localStorage.token){
      setToken(localStorage.token)
    }
    const config={
        "content-type":"application/json"
    }
 try {
  const data={
    //   OrderTable:this.state.A_array,
    //   total:this.state.A_total,
    //   paymentMethod:"Cash",
    //   lat:this.state.markerPosition.lat,
    }
    await axios.post(`/api/v1/newOrder`,data,config)
 } catch (error) {
    //  toast.error("Error")
 }      
}
 Get_List_Problmes = async (id) => {
  if (localStorage.token) {
   setToken(localStorage.token);
  }
  const config = {
   "content-type": "application/json",
  };
  const res = await axios.get(
   `/api/v1/getProductsDukandarMobile/${id}`,
   config
  );
  this.setState({
   list_problmes: res.data.getproducts,
  });
 };
 Get_List_Answers = async (id) => {
  if (localStorage.token) {
   setToken(localStorage.token);
  }
  const config = {
   "content-type": "application/json",
  };
  const res = await axios.get(
   `/api/v1/getProductsDukandarMobile/${id}`,
   config
  );
  this.setState({
   list_answers: res.data.getproducts,
  });
 };

 render() {
  return (
   <>
    <ProductContext.Provider
     value={{
      ...this.state,
      OnChange_Handler:this.OnChange_Handler,
      Register:this.Register,
      Login:this.Login,
      GetUser_Login:this.GetUser_Login,
      LogOut_User:this.LogOut_User,
     }}
    >
     {this.props.children}
    </ProductContext.Provider>
   </>
  );
 }
}

const ProductConsumer = ProductContext.Consumer;

export { Context, ProductConsumer };
