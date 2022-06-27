import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/solid'
import { HomeIcon } from '@heroicons/react/solid'
import { CogIcon } from '@heroicons/react/solid'
import { CalendarIcon } from '@heroicons/react/solid'
import { RefreshIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import './sidebar.css' 
const Sidebar = (props) => {
    const { showSidebar, setShowSidebar, darkMode } = props;
    return (
        <>
            <div id="mySidebar" className={`sidebar ${showSidebar && darkMode ? "sidebar-dark sidebar-open" : showSidebar && !darkMode ? "sidebar-white sidebar-open" : !showSidebar && darkMode ? "sidebar-dark sidebar-close" : "sidebar-white sidebar-close"}`}>
                <div>
                    <a href="#" className="closebtn" onClick={() => setShowSidebar(!showSidebar)}><MenuIcon className="h-5 w-5" /></a>
                </div>

                <div className='mt-10'>
                    <div className={`${showSidebar ? "flex flex-row" : ""}`}>
                        <HomeIcon className={`h-5 w-5 ${showSidebar ? "openedIcon" : "closedIcon"}`} />
                        <a href="#" className={`${showSidebar ? "textDisplayTrue" : "textDisplayFalse"}`}>Home</a>
                    </div>

                    <div className={`${showSidebar ? "flex flex-row" : ""}`}>
                        <UserIcon className={`h-5 w-5 ${showSidebar ? "openedIcon" : "closedIcon"}`} />
                        <a href="#" className={`${showSidebar ? "textDisplayTrue" : "textDisplayFalse"}`}>Patient Profile</a>
                    </div>

                    <div className={`${showSidebar ? "flex flex-row" : ""}`}>
                        <CalendarIcon className={`h-5 w-5 ${showSidebar ? "openedIcon" : "closedIcon"}`} />
                        <a href="#" className={`${showSidebar ? "textDisplayTrue" : "textDisplayFalse"}`}>Appointments</a>
                    </div>

                    <div className={`${showSidebar ? "flex flex-row" : ""}`}>
                        <RefreshIcon className={`h-5 w-5 ${showSidebar ? "openedIcon" : "closedIcon"}`} />
                        <a href="#" className={`${showSidebar ? "textDisplayTrue" : "textDisplayFalse"}`}>Medical History</a>
                    </div>

                    <div className={`${showSidebar ? "flex flex-row" : ""}`}>
                        <CogIcon className={`h-5 w-5 ${showSidebar ? "openedIcon" : "closedIcon"}`} />
                        <a href="#" className={`${showSidebar ? "textDisplayTrue" : "textDisplayFalse"}`}>Settings</a>
                    </div>
                </div>
               
                
            </div>
        </>

    );
};

export default Sidebar;