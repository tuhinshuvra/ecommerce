import React, { useEffect, useState } from 'react';
import './HomeProductSection.css';
import HomeProductDisplaySection from './HomeProductDisplaySection/HomeProductDisplaySection';

const HomeProductSection = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        fetch("../../../../fake_api/category_list.json")
            .then(res => res.json())
            .then(data => {
                // console.log("All Category : ", data)
                setCategoryList(data);
            })
    }, [])

    useEffect(() => {
        fetch("../../../../fake_api/product_list.json")
            .then(response => response.json())
            .then(data => {
                // console.log("All Products:", data)
                setCategoryProduct(data)
            })
    }, [])


    return (
        <div className='productbg'>
            <div className='col-10 mx-auto my-4'>
                {/* <h2>All product of this category {productNo} </h2> */}
                {
                    categoryList.map((categories) =>
                        <HomeProductDisplaySection
                            key={categories.id}
                            categories={categories}
                        ></HomeProductDisplaySection>
                    )}
            </div>
        </div>
    );
};

export default HomeProductSection;