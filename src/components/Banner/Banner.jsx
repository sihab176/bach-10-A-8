import React from 'react';
import BannerImg from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <section  className='mb-[500px]'>
          <div className='w-full bg-[#9538E2] h-[650px] rounded-2xl relative'>
          <h1 className='text-5xl text-center font-bold pt-32 text-white'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className=' text-center  pt-12 text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className='text-center items-center'>
            <button className='btn mt-8 rounded-full text-[#9538E2] '>Shop Now</button>
            </div>
          </div>
          <div className="absolute top-[500px] right-[300px] border rounded-2xl p-4">
            <img className='w-[800px] h-[500px]' src={BannerImg} alt="" />
          </div>

         

        </section>
    );
};

export default Banner;