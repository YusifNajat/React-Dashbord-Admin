import React from 'react';
import {Link} from 'react-router-dom';

import  './Sidebar.css';
import  { 
  LineStyle, 
  Timeline,
  TrendingUp,
  PersonOutline,
  Store,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  LocalMallOutlined,
  ErrorOutlined

} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
<<<<<<< HEAD
           <Link to="/dashboard" className="link"> <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>  
            </Link>      
=======
            
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon"/>
                Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>           
>>>>>>> 849982f13b5bab88150f3a44615444463147add9
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon"/>
                List Problems
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
              List Answers
              </li>
            </Link> 
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>
              Reports
            </li>         
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"/>
              Mail
            </li>

           

            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
              Messages
            </li>           
          </ul>
        </div>
{/* 
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/>
              Home
            </li>

            <li className="sidebarListItem">
              <LocalMallOutlined className="sidebarIcon"/>
              Manage
            </li>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Analytics
            </li>     
            <li className="sidebarListItem">
              <ErrorOutlined className="sidebarIcon"/>
              Reports
            </li>         
          </ul>
        </div> */}
      </div>
    </div>
  )
   
}

export default Sidebar;