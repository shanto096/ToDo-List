import React, { useState } from 'react';
import ToDoLIst from '../ToDoList/ToDoLIst';
import NoToDO from './NoToDO';

const ToDo = ({data, Delete}) => {
    

    
    return (
        <>
        <div className='grid md:grid-cols-3'> 
        
            {
              data.length ===0 ? <NoToDO></NoToDO> :  data.map(d => <ToDoLIst key={d.sno} d ={d} Delete={Delete}></ToDoLIst>)
            }
        </div>
        </>
    );
};

export default ToDo;