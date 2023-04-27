import React, { useState } from 'react';
import './HomeProductDisplaySection.css';
import { Link, Outlet } from 'react-router-dom';
import CategoryProducts from '../CategoryProducts/CategoryProducts';

const HomeProductDisplaySection = ({ categories }) => {
    const [productId, setProductId] = useState([])

    const { id, category } = categories;
    return (
        <div>
            <Link to={`/category/${id}`}>
                <button
                    onClick={setProductId(id)}
                    className=' btn btn-outline-primary mb-1'
                > &#10148;{category}
                </button>
            </Link>


            <Outlet></Outlet>


        </div>
    );
};

export default HomeProductDisplaySection;