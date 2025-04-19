import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import { data, useLoaderData } from 'react-router';
import Card from '../../components/Card/Card';

const productBtn=['AllProduct','Mobile','Watch','Laptop','bluetooth','Jeans','Shoes','Tshirts','Hoody']



const Home = () => {
    const [items,setItems]=useState("AllProduct")
    const loaderData=useLoaderData()
    const [product,setProduct]=useState(loaderData)
    const [searchTesx,setSearchText]=useState("")
    
   
    useEffect(()=>{
        if(items!='AllProduct'){
            const filterProduct=loaderData.filter(singleData=>singleData.type===items)
            setProduct(filterProduct)

        }
        else{
            setProduct(loaderData)
        }
       
    },[items,loaderData])
    // setProduct(filterProduct)
    const hendelSurch=(e,text)=>{
        e.preventDefault()
        if(text==="") return setProduct(loaderData)
        console.log(text)
        const searchProducts=loaderData.filter(
            singleData=>
                singleData.brand.toLowerCase().includes(text) ||
                singleData.model.toLowerCase().includes(text)
        )
        setProduct(searchProducts)
        // console.log(searchProducts)
    }

    
    return (
        <>
        <Banner/>


        <section >
            <div>
                <h1 className='text-center font-bold mb-6 text-4xl'>Explore Cutting-Edge Gadgets</h1>
            </div>
        <div className='mb-[100px] flex justify-center'>
            <form onSubmit={e=>{
                hendelSurch(e,searchTesx)
                setSearchText("")
            }}>

              <input type="text" value={searchTesx} onChange={e=>setSearchText(e.target.value)} className='w-[500px] h-12 px-4 border focus: outline-0 bg-white'/>
              <input type="submit" value="submit" className='bg-purple-600 px-8 py-3 rounded-r-xl' />
             </form>
         </div>
        
            <div className='flex gap-20'>
                <div className='border rounded-2xl p-5 h-[490px] bg-white ml-10'>
                <div className='flex flex-col'>
                    {
                        productBtn.map(product=> <button onClick={()=>setItems(product)} className={`btn w-28 rounded-full mb-3 ${items===product ? 'bg-[#9538E2] text-white':""}`}>{product}</button>)
                    }

                </div>
                </div>

                <div className='grid grid-cols-3 gap-8'>
                  {
                    product.map(data=><Card data={data}/>)
                  }
                </div>
            </div>
                
        </section>
        
        </>
    );
};

export default Home;