import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar/>
            <div className='w-11/12 mx-auto '>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;