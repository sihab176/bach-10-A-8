import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getItemsFromLocalStorage } from '../../Utility/markRead';
import DeshProductShower from '../DeshproductShower/DeshProductShower';

const Dashboard = () => {
    const data=useLoaderData()
    const strId=getItemsFromLocalStorage()
    const convId=strId.map(id=>parseInt(id))
    const arrayOfProduct=data.filter(d=>convId.includes(d.id))
    const [elemet,setData]=useState(arrayOfProduct)

    const [makecart,setMakeCart]=useState(false)
  
    return (
        <div>
             <div className='flex my-8 gap-8'>
                <button onClick={()=>setMakeCart(!makecart)} className='btn bg-purple-500'>cart</button>
                <button className='btn bg-pink-500'>wishList</button>
            </div>
            <div>
                {
                   makecart && elemet.map(product=><DeshProductShower arrayOfProduct={product} elemet={elemet} setData={setData}/>)
                }
            </div>
        </div>
    );
};

export default Dashboard;