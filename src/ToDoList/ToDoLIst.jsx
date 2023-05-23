import React from 'react';

const ToDoLIst = ({d , Delete}) => {
    return (
        <div className='border-2 border-gray-800  m-10 rounded-lg px-5 py-5 bg-amber-400'>
            <h1 className='text-2xl font-bold text-slate-700'>{d.title}</h1>
            <p className='text-slate-700'>{d.des}</p>
            <button onClick={()=>{Delete(d)}} className='bg-red-500 px-4 mt-3 text-white rounded-md'>Delete</button>
        </div>
    );
};

export default ToDoLIst;