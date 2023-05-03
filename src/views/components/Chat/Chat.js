import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiMessenger } from 'react-icons/si';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import Logo from '../../../assets/logo/logo.PNG'
import { BsDashLg } from 'react-icons/bs';
import Messeenger from '../../../assets/messenger.png';
import './Chat.css'

const Chat = () => {
    const [show, setShow] = useState();

    function toggleShow() {
        setShow(!show);
    }

    return (
        <div className=''>
            <Link onClick={toggleShow}> <img className="messgengerIcon" src={Messeenger} alt="" /></Link>

            {show &&
                <div className='chatLoginArea'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <img className='logo' src={Logo} alt="logo" />
                        </div>
                        <div>
                            <HiOutlineDotsHorizontal className='chatIcons'></HiOutlineDotsHorizontal>
                            <BsDashLg className='chatIcons'></BsDashLg>
                        </div>
                    </div>
                    <h5 className=' my-3'>Chat with Palash Jewelers</h5>
                    <p>Hi! How can we help you?</p>
                    <div className=' text-center startChat'>
                        <btn className="btn btn-primary w-100 btn-lg fw-bold ">Start Chat</btn>
                    </div>
                    <p className=' text-center my-2'><SiMessenger></SiMessenger> Powered by Messenger</p>
                </div>
            }
        </div>
    );
};

export default Chat;