import React from 'react';
import Navbar from '../views/components/CommonComponents/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../views/components/CommonComponents/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=' container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;