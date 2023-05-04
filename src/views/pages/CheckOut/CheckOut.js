import React from 'react';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className=' col-10 mx-auto my-4'>
            <p className=' d-flex justify-content-between'><span> 1. QUICK CHECKOUT FOR  <b> 01518916266</b></span> <span> EDIT</span></p>
            <p className=' fw-bold'>  2. BILLING & SHIPPING INFORMATION (Call ******* from 9 am to 9 pm if you have any difficulties saving your address).</p>
            <form className=' my-3'>
                <p className=' fw-bold'>SHIPPING ADDRESS</p>
                <div className='row'>
                    <div className=' col-6'>
                        <input class="form-control" type="text" placeholder="Mohammad Harun" aria-label="default input example" />
                    </div>
                    <div className=' col-6'>
                        <input class="form-control" type="text" placeholder="Address" aria-label="default input example" />
                    </div>
                    <div className=' col-6'>
                        <input class="form-control my-1" type="text" placeholder="Loyalty Code" aria-label="default input example" />
                    </div>
                    <div className=' col-6'>
                        <input class="form-control my-1" type="text" placeholder="Khulna" aria-label="default input example" />
                    </div>
                    <div className=' col-6'>
                        <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                    </div>
                    <div className=' col-6'>
                        <input class="form-control" type="text" placeholder="01423423455" aria-label="default input example" />
                    </div>
                </div>

                <div class="form-check my-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I would like to be informed of new collections and promotional offers
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                    <label class="form-check-label" for="flexCheckChecked">
                        Save the Contact info in my profile
                    </label>
                </div>
                <button className=' btn btn-primary w-25 my-3'>CONTINUE</button>
            </form>
            <p className=' fw-bold'>  3. ORDER SUMMARY & LOGISTICS</p>
            <p className=' fw-bold'>  4. PAYMENT OPTIONS</p>
        </div>
    );
};

export default CheckOut;