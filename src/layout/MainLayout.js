import React from 'react';
import Navbar from '../views/components/CommonComponents/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../views/components/CommonComponents/Footer/Footer';
import Messeenger from '../assets/messenger.png';
import './MainLayout.css'


const MainLayout = () => {
    return (
        <div className=' container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <img className="messgengerIcon" src={Messeenger} alt="" />
        </div>
    );
};

export default MainLayout;