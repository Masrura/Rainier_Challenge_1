import React from 'react';
import { ReactComponent as CheckBox } from '../images/checkbox.svg';
import '../styles/App.css'

const ToDoList = ({darkMode}) => {
    return (
        <div className={`p-d ${darkMode ? "to-do-list-dark" : "to-do-list-white" } `}>
            <p className='p-2'>To-Do-List</p>
            <div>
                <div className='flex ml-1 pl-2 '>
                    <textarea className='w-5/6'></textarea>
                    <button class="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add
                    </button>
                </div>
               

                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p>Select All </p>
                </div>
                
                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>

                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='flex p-2'>
                    <CheckBox className='ml-2 mr-1' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;