import logo from './logo.svg';
import './App.css';
import './styles/App.css';
import { useState } from 'react';
import Sidebar from './component/sidebar'
import { ReactComponent as Banner } from './images/topBanner.svg';
import { ReactComponent as Heart } from './images/heart.svg';
import { ReactComponent as Arrow } from './images/arrow.svg';

import Appointment from './component/appointment';
import ToDoList from './component/ToDoList';

function App() {
  const [label, setLabel] = useState();
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const changeHandler = e => {
    console.log('jfbvjd', e.target.name);
    setLabel(e.target.name);
  };
  const closeButton = () => {
    setLabel('');
  }
  return (
    <div >
      <div className='grid grid-cols-6 navbar fixed top-0 left-0'>
        <label className="col-start-2 col-end-5">
          Menu2
        </label>
        <label className="switch col-end-7 col-span-2">
          <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
      </div>
      <div className={`overflow-y-auto flex justify-center flex-col bg-white ${darkMode && "dark"}`}>
        <div className={`overflow-y-auto grid grid-cols-9 gap-6 fixed top-10 left-30 w-full h-full `}>
          <div className={`"overflow-y-auto col-span-5 border-5 border-white  ${showSidebar ? "col-start-2 ml-20" : "ml-20" }`}>
            <div className='w-full'>
              <Banner />
            </div>
            <div className='grid grid-cols-4 gap-4 mr-10'>
              <div className=' health-condition'>
                <Heart/>
                <p className='p-2'>Pulse Count</p>
                <p className='p-2'>60 bpm</p>
                <div className='flex p-2'>
                 <Arrow/>
                  <p>Normal</p>
                </div>
              </div>
              <div className=' health-condition'>
                <Heart />
                <p className='p-2'>Pulse Count</p>
                <p className='p-2'>60 bpm</p>
                <div className='flex p-2'>
                  <Arrow />
                  <p>Normal</p>
                </div>
              </div>
              <div className=' health-condition'>
                <Heart />
                <p className='p-2'>Pulse Count</p>
                <p className='p-2'>60 bpm</p>
                <div className='flex p-2'>
                  <Arrow />
                  <p>Normal</p>
                </div>
              </div>
              <div className='health-condition'>
                <Heart />
                <p className='p-2'>Pulse Count</p>
                <p className='p-2'>60 bpm</p>
                <div className='flex p-2'>
                  <Arrow />
                  <p>Normal</p>
                </div>
              </div>
            </div>
            <div className='overflow-y-auto'>
              <ToDoList darkMode={darkMode}></ToDoList>
            </div>
            
          </div>
          <div className="overflow-y-auto col-start-7 col-end-10 border-5 border-white appointment-container">
            <Appointment darkMode = {darkMode} ></Appointment>
          </div>
        </div>
        <div className=" flex flex-col min-h-screen py-2">
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
