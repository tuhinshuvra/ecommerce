import React from 'react';
import OperationImage from '../../../../assets/paymentsAllOperation.png';
import { FaAnchor } from 'react-icons/fa';
import { BsFillHddStackFill, BsHandThumbsUpFill } from 'react-icons/bs';
import { GiConvergenceTarget } from 'react-icons/gi';

import './HomeServiceSection.css';

const HomeServiceSection = () => {
    return (
        <div className='servicesArea'>
            <div className='col-10 mx-auto'>
                <div className='row'>

                    {/* operation  image section */}
                    <div className=' col-lg-6 d-flex justify-content-center align-items-center animate_left'>
                        <img className='opertionImage  d-none d-md-block' src={OperationImage} alt="" />
                    </div>

                    {/* operation text section */}
                    <div className='col-lg-6 animate_right'>
                        <h1 className='paymentsAllTitle mt-lg-0 my-sm-4 mt-0 text-center text-lg-start'>The Easiest Way to Operate and Use by You</h1>
                        {/* <p className='securityRightSubTitle my-4 text-center text-md-start '>By using the cradit card, you can improve your financial life by building credit, earning rewards and saving money.</p> */}


                        {/* operation segments */}
                        <div className=' row text-center text-md-start'>
                            <div className=' col-md-6'>
                                <FaAnchor className='operationIcon'></FaAnchor>
                                <p className='fw-bold'>Integration</p>
                                <p className=' col-md-10'>Easy to register, user-friendly app interface, fast money transfer, lightweight. One-stop solution to all financial needs.</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsFillHddStackFill className='operationIcon'></BsFillHddStackFill>
                                <p className='fw-bold'>Analysis</p>
                                <p className=' col-md-10'>Fastest payment, every transaction has a printable document, the easiest transaction with QR code scan and more useful features.</p>
                            </div>

                            <div className=' col-md-6'>
                                <BsHandThumbsUpFill className='operationIcon'></BsHandThumbsUpFill>
                                <p className='fw-bold'>Solutions</p>
                                <p className=' col-md-10'>This gives the solutions to many problems like salary payment and travel cards. By using this app anyone can easily travel to any country.</p>
                            </div>

                            <div className=' col-md-6'>
                                <GiConvergenceTarget className='operationIcon'></GiConvergenceTarget>
                                <p className='fw-bold'>Support</p>
                                <p className=' col-md-10'> We provide 24.7 customer support to ensure the best service experience and solve transaction issues as soon as possible.</p>
                            </div>


                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServiceSection;