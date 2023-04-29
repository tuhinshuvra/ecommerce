import React, { useContext, useEffect, useState } from 'react';
import './HomeCategorySection.css';
import { ProductContext } from '../../../contextProvider/ContextProvider';
import Loader from '../../../Shared/Loader/Loader';
import HomeCategoryDisplaySection from './HomeCategoryDisplaySection';
import HomeProductsSection from '../HomeProductSection/HomeProductsSection';
import { Outlet } from 'react-router-dom';

const HomeCategorySection = () => {
    const { loading, setLoading } = useContext(ProductContext);

    const [categories, setCategories] = useState([]);
    const [categoryProduct, setCategoryProduct] = useState([]);

    // const sliceCategories = categories.slice(0, 16);

    if (loading) {
        <Loader></Loader>
    }

    useEffect(() => {
        fetch("../../../../fake_api/category_list.json")
            .then(res => res.json())
            .then(data => {
                // console.log("All Category : ", data)
                setCategories(data);
                setLoading(false);
            })
    }, [setLoading])

    useEffect(() => {
        fetch("../../../../fake_api/product_list.json")
            .then(response => response.json())
            .then(data => {
                // console.log("All Products:", data)
                setCategoryProduct(data);
                setLoading(false);
            })
    }, [setLoading])

    return (
        <div className='productbg'>
            <div className='col-10 mx-auto my-4'>


                {categories.map((category) => (
                    <HomeCategoryDisplaySection
                        key={category.id}
                        category={category}
                    ></HomeCategoryDisplaySection>
                ))}



            </div>
        </div>
    );
};

export default HomeCategorySection;