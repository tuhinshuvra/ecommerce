import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
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
                        <div className=' d-flex justify-content-between'>
                            <div className="vr "></div>
                            {/* <button className="nav-item btn btn-secondary btn-sm  "> */}
                            <Link to="/" className="nav-link " aria-current="page" href="#">Home</Link>
                            {/* </button> */}
                            <div className="vr"></div>
                            {/* <button className="nav-item btn btn-secondary btn-sm mx-2 "> */}
                            <Link to="/account" className="nav-link" href="#">My Account</Link>
                            {/* </button> */}
                            <div className="vr"></div>

                            {/* <button className="nav-item btn btn-secondary btn-sm "> */}
                            <Link to="/wishList" className="nav-link">Wish List</Link>
                            {/* </button> */}
                            <div className="vr"></div>
                        </div>

                        <div className=' d-flex my-2 justify-content-center align-items-center'>
                            <ImCart className='shopCart bg-light p-1'></ImCart>
                            <span className=' border-1 mx-2 bg-light p-1'>{"0 Items - 10000TK"}</span>
                            <button className="nav-item btn btn-success btn-sm ">
                                <Link className="nav-link  ">CHECK OUT</Link>
                            </button>
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
                                    <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link" href="#">Jewllery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" href="#">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" href="#">Contact</Link>
                                </li>
                            </ul>

                            <span className=' border-0 fw-bold ms-auto fs-5'>Call : 0124323424</span>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;