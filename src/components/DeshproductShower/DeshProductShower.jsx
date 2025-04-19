import React from 'react';
import { removeFromLocalStorage } from '../../Utility/markRead';

const DeshProductShower = ({arrayOfProduct,elemet,setData}) => {
    const {description,price,model,img,id}=arrayOfProduct ||{} 
    console.log(elemet)
    
    const hendleRemove=(productId)=>{
        
        console.log(productId)
        removeFromLocalStorage(productId)
        const remainingCard=elemet.filter(storedId=>storedId.id !=productId)
        console.log(remainingCard)
        setData(remainingCard)
    }
    return (
        <section >
           
            <div className='flex gap-32 justify-center bg-white mb-5 py-16 rounded-2xl'>
                <div><img className='w-[100px]' src={img}  alt="" /></div>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl '>{model}</h1>
                        <p>{description}</p>
                        <h2>price: {price}</h2>
                    </div>
                    <div className='pl-10'>
                        <button onClick={()=>hendleRemove(id)} className='btn'>remove</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DeshProductShower;