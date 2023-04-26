import React from 'react';
import SpecialityOne from '../../../../assets/heroCarousol/sliderOne.png'
import SpecialityTwo from '../../../../assets/heroCarousol/sliderTwo.png'
import SpecialityThree from '../../../../assets/heroCarousol/sliderThree.png'

const HomeOfferSection = () => {
    return (
        <div className=' col-10 mx-auto'>
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

export default HomeOfferSection;