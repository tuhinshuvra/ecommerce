import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../contextProvider/ContextProvider';
import Loader from '../../../Shared/Loader/Loader';
import HomeCategoryDisplaySection from './HomeCategoryDisplaySection';
import HomeProductsSection from '../HomeProductSection/HomeProductsSection';
import { GiBigDiamondRing } from 'react-icons/gi';
import { Outlet } from 'react-router-dom';
import ProductList from '../../../../../fake_api/ProductList';
import Buttons from '../HomeProductSection/Buttons';
import ProductDisplay from '../HomeProductSection/ProductDisplay';
import './HomeCategorySection.css';

const HomeCategorySection = () => {
    const newProductDisplay = ProductList.slice(0, 10);
    const [item, setItem] = useState(newProductDisplay);

    const menuItems = [...new Set(ProductList.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = ProductList.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <div className='productArea'>
            <div className='col-10 mx-auto py-4'>
                <div className="row ">
                    <div className=' col-lg-2'>
                        <p className="fw-bold "><GiBigDiamondRing className="diamondRing mx-0"></GiBigDiamondRing> ITEM CATEGORIES</p>
                        <Buttons
                            filterItem={filterItem}
                            setItem={setItem}
                            menuItems={menuItems}
                        />
                    </div>
                    <div className=' col-lg-10'>
                        <ProductDisplay item={item} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategorySection;