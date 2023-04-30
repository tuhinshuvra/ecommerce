import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import EasyShop from '../../../../assets/logo/logo.PNG'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbg'>
            <div className=' col-10 mx-auto'>

                {/* nav top section menu */}
                <div className=' d-lg-flex justify-content-lg-between justify-content-center py-2'>
                    <form className="d-flex flex-column my-4" >
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder='Search...' aria-describedby="inputGroup-sizing-sm" />
                            <button type="button" className="btn btn-secondary btn-sm"><FaSearch></FaSearch> </button>
                        </div>
                        {/* <span /> */}
                    </form>

                    <Link className="navbar-brand fs-2 fw-bold " href="#">
                        {/* Navbar */}
                        <img className='shopLogo' src={EasyShop} alt="" />
                    </Link>

                    <div>
                        <div className=' d-flex justify-content-between align-items-center'>
                            {/* <button className="nav-item btn btn-secondary btn-sm  "> */}
                            <Link to="/" className="nav-link nabBtn d-flex justify-content-center align-items-center " aria-current="page" href="#">
                                <AiFillHome className=''></AiFillHome> Home</Link>
                            {/* </button> */}
                            {/* <button className="nav-item btn btn-secondary btn-sm mx-2 "> */}
                            <Link to="/account" className="nav-link nabBtn d-flex justify-content-center align-items-center mx-3" href="#"><BiUser></BiUser>  My Account</Link>
                            {/* </button> */}

                            {/* <button className="nav-item btn btn-secondary btn-sm "> */}
                            <Link to="/wishList" className="nav-link nabBtn d-flex justify-content-center align-items-center"> <AiOutlineHeart></AiOutlineHeart>  Wish List</Link>
                            {/* </button> */}
                        </div>

                        <div className=' d-flex justify-content-around my-2'>
                            <div className='nabBtn'><AiOutlineShoppingCart className='shopCart bg-light p-1'>
                            </AiOutlineShoppingCart>
                                <Link className=" fw-bold  text text-decoration-none cartCheck">CART</Link>
                            </div>
                            {/* <span className=' border-1 mx-2 bg-light p-1'>{"0 Items - 10000TK"}</span> */}

                            <div className='nabBtn d-flex justify-content-center align-items-center'>
                                <BsBagCheck className=''></BsBagCheck>
                                <Link className=" fw-bold  text text-decoration-none cartCheck">CHECK OUT</Link>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className=' my-0' />
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* nav bottom section menu */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav    mb-2 mb-lg-0 fw-bold">
                                <li className="nav-item">
                                    <Link to="/" className=" me-3  nabBtn" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products" className=" mx-3  nabBtn" href="#">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className=" mx-3  nabBtn" href="#">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className=" mx-3  nabBtn" href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="  nabBtn" href="#">Contact</Link>
                                </li>
                            </ul>

                            <span className=' border-0 fw-bold ms-auto fs-6'>Call : 0124323424</span>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;