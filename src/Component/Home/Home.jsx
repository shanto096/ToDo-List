import React, { useEffect, useState } from 'react';
import ToDo from '../ToDo';
import AddToDo from '../AddToDo';

const Home = () => {
   let init;
   if (localStorage.getItem('data')===null) {
      init =[]
   }
   else{
    init = JSON.parse(localStorage.getItem('data'))
   }




    const Delete = (d) =>{
        setData(data.filter((e)=>e!==d))

        localStorage.setItem('data', JSON.stringify(data));

   }



   const addToDo = (title, des)=>{
     let sno;
    if (data.length===0) {
        sno = 1
    }
    else{
      sno = data[data.length -1].sno + 1;
     }
    const myToDo = {
        sno:sno,
        title: title,
        des: des
    }
    setData([...data,myToDo])
  }
  
    const [data, setData]=useState(init);


    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(data));
       },[data])



    return (
        <div>
            <h1 className='text-center text-4xl font-bold text-slate-700'>ToDo List</h1>
            <div className='text-center my-5'>
              <AddToDo addToDo={addToDo}></AddToDo>
            </div>
            
            <ToDo data={data} Delete={Delete}></ToDo>
        </div>
    );
};

export default Home;