import React,{useEffect} from "react";
import Topbar from "./components/Topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar"
const All = (props) => {
    useEffect(() => {
       props.GetUser_Login()
    }, [])
 return (
  <div>
   <Topbar />
   <div className="container">
    <Sidebar />
    {props.children}
   </div>
  
  </div>
 );
};

export default All;
