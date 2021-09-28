import React from 'react';
import './topbar.css';
import {NotificationsNone, Language, Settings} from '@material-ui/icons';


export  default function Topbar(){
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dyotech ADM</span>
        </div>
        <div className="topRigth">
          <div className="topbarIconsContainer">
             <NotificationsNone/>
             <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
             <Language/>
             <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
             <Settings/>             
          </div>
          <img src="https://avatars.githubusercontent.com/u/48848963?v=4" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}


