import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import EasyShop from '../../../../assets/logo/payments_all_logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div className=' col-10 mx-auto'>

            {/* nav top section menu */}
            <div className=' d-lg-flex justify-content-lg-between justify-content-center my-2'>
                {/* 
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <form class="d-flex">
                    <div class="input-group input-group-sm mb-3">
                        <input type="text" class="form-control" placeholder='Search...' aria-describedby="inputGroup-sizing-sm" />
                        <button type="button" class="btn btn-secondary btn-sm"><FaSearch></FaSearch> </button>
                    </div>
                </form>

                <Link className="navbar-brand fs-2 fw-bold " href="#">
                    {/* Navbar */}
                    <img className='shopLogo' src={EasyShop} alt="" />
                </Link>

                <div>
                    <div className=' d-flex justify-content-between'>
                        <button className="nav-item btn btn-secondary btn-sm  ">
                            <Link className="nav-link " aria-current="page" href="#">Home</Link>
                        </button>
                        <button className="nav-item btn btn-secondary btn-sm mx-2 ">
                            <Link className="nav-link" href="#">My Account</Link>
                        </button>

                        <button className="nav-item btn btn-secondary btn-sm ">
                            <Link className="nav-link">Wish List</Link>
                        </button>
                    </div>

                    <div className=' d-flex my-1'>
                        <ImCart className='shopCart'></ImCart>
                        <span className=' border-1 mx-1'>{"0 Items - 10000TK"}</span>
                        <button className="nav-item btn btn-info btn-sm ">
                            <Link className="nav-link ">Check Out</Link>
                        </button>
                    </div>

                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* nav bottom section menu */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav  me-auto  mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Jewllery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>

                        <span className=' border-0 fw-bold ms-auto fs-5'>Call : 0124323424</span>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;