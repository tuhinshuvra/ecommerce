import React from 'react';
import './HomeSpecialitySection.css'
import SpecialityOne from '../../../../assets/heroCarousol/sliderOne.png'
import SpecialityTwo from '../../../../assets/heroCarousol/sliderTwo.png'
import SpecialityThree from '../../../../assets/heroCarousol/sliderThree.png'

const HomeSpecialitySection = () => {
    return (
        <div className=' col-10 mx-auto'>
            <div className=' d-flex'>
                <div className=' col-lg-4 justify-content-center align-items-center px-lg-3 py-lg-5'>
                    <h5>WELCOME TO</h5>
                    <h2>ONLINE SHOP</h2>
                </div>
                <div className=' col-lg-8 px-lg-3 py-lg-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  magnam unde in. Quo doloremque maiores dolor tempore, voluptatum pariatur sit rem officiis sint vitae perferendis omnis dicta consequuntur!</p>
                </div>
            </div>
            <div className=' d-flex'>
                <div className=' col-md-4'>
                    <img className='specialityImage img-fluid' src={SpecialityOne} alt="" />
                </div>

                <div className=' col-md-4'>
                    <img className='specialityImage img-fluid' src={SpecialityTwo} alt="" />
                </div>

                <div className=' col-md-4'>
                    <img className='specialityImage img-fluid' src={SpecialityThree} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeSpecialitySection;