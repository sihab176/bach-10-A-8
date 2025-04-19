import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addItemsToLocalStorage } from '../../Utility/markRead';

const ProductDetails = () => {
    const productdetails=useLoaderData()
    const {id}=useParams()
    const covId=parseInt(id)
    const singleProduct=productdetails.find(product=>product.id===covId)
    const {price,model,img,description,brand}=singleProduct
    console.log(singleProduct)

    const hendleMakeRead=(id)=>{
        addItemsToLocalStorage(id)
    }

    
    return (
        <section className='mt-16 mb-16 flex flex-col md:flex-row  justify-center'>
        <div className='bg-gray-600 p-16 rounded-3xl '>
            <img className='w-[320px] h-[h-550px]' src={img} alt="" />
        </div>
        <div className='w-[550px] px-10'> 
            <h1 className='text-3xl font-bold'>{model}</h1>
            
            <div className='border-b border-gray-400 p-3'></div>
            <p className='p-3'>{brand}</p>
            <div className='border-b border-gray-400 '></div>
            <p><span className='font-bold'>Reviwe</span> {description}
            </p>
            <div className='flex gap-16 mt-6 items-center'>
                <p className='font-bold'>Taka: <span className='text-orange-500'>{price}</span> </p>
              
            </div>
            <div className='border-b border-gray-400 p-3 '></div>
           
            
           <div className='mt-8'>
           <button onClick={()=>hendleMakeRead(id)} className="btn btn-outline btn-secondary mr-4 ">Mark as read</button>
           <button  className="btn btn-outline btn-accent">Add to wishList</button>
           </div>
        </div>
    </section>
    );
};

export default ProductDetails;