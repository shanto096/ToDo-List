import React, { useState } from 'react';

const AddToDo = ({addToDo}) => {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const submit =(e)=>{
        e.preventDefault()
        if (!title || !des) {
            alert('Please Add Title and Description')
        }
        else{
        addToDo(title,des)
        setTitle('')
        setDes('')
        }

    }
    return (
        <form onSubmit={submit}  className='md:mx-96 mx-5'>
            <div className='grid grid-cols-1'>
                <label className='font-bold text-xl text-slate-700'>Title</label>
                <input value={title} onChange={(e)=> {setTitle(e.target.value)}} className='border-2 border-slate-700 p-2' type="text" id='title' />
            </div>
            <div className='grid grid-cols-1'>
                <label className='font-bold text-xl text-slate-700'>Description</label>
                <input value={des} onChange={(e)=> {setDes(e.target.value)}} className='border-2 border-slate-700 p-2 ' type="text" id='description' />
            </div>
            <button  type ="submit" className='bg-green-500 px-10 py-2 text-xl text-white font-bold mt-5 rounded '>Add</button>
        </form>
    );
};

export default AddToDo;