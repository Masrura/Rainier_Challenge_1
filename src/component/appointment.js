import React from 'react';
import { ReactComponent as Ellipse } from '../images/ellipse.svg';
import './../styles/App.css';
const Appointment = ({ darkMode }) => {
    return (
        <div className={` ${darkMode} ? "appointment-dark" : "appointment-white" `}>
            <p className='pb-4'>Upcoming Appointments</p>
            <div className='flex items-center p-4'>
                <Ellipse style={{ background: '#FF9898' }} className='p-2 rounded-full mr-3'  />
                <div className='date'>
                    <p>2022</p>
                    <p>13</p>
                    <p>Sept</p>
                </div>
                <div className='docInfo'>
                    <p>Dr Momenul Haque</p>
                    <p>Cardiologist</p>
                    <div className='flex time'>
                        <p>Slot: Morning</p>
                        <p> Time: 10.00am</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center p-4'>
                <Ellipse style={{ background: '#FFF598' }} className='p-2 rounded-full mr-3' />
                <div className='date'>
                    <p>2022</p>
                    <p>13</p>
                    <p>Sept</p>
                </div>
                <div className='docInfo'>
                    <p>Dr Momenul Haque</p>
                    <p>Cardiologist</p>
                    <div className='flex time'>
                        <p>Slot: Morning</p>
                        <p> Time: 10.00am</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center p-4'>
                <Ellipse style={{ background: '#98FFC1' }} className='p-2 rounded-full mr-3' />
                <div className='date'>
                    <p>2022</p>
                    <p>13</p>
                    <p>Sept</p>
                </div>
                <div className='docInfo'>
                    <p>Dr Momenul Haque</p>
                    <p>Cardiologist</p>
                    <div className='flex time'>
                        <p>Slot: Morning</p>
                        <p> Time: 10.00am</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center p-4'>
                <Ellipse style={{ background: '#98C7FF' }} className='p-2 rounded-full mr-3' />
                <div className='date'>
                    <p>2022</p>
                    <p>13</p>
                    <p>Sept</p>
                </div>
                <div className='docInfo'>
                    <p>Dr Momenul Haque</p>
                    <p>Cardiologist</p>
                    <div className='flex time'>
                        <p>Slot: Morning</p>
                        <p> Time: 10.00am</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;