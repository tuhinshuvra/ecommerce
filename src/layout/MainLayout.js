import React from 'react';
import Navbar from '../views/components/CommonComponents/Header/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../views/components/CommonComponents/Footer/Footer';
import Messeenger from '../assets/messenger.png';
import './MainLayout.css'


const MainLayout = () => {
    return (
        <div className=' container'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Link to="/chat"> <img className="messgengerIcon" src={Messeenger} alt="" /></Link>
        </div>
    );
};

export default MainLayout;