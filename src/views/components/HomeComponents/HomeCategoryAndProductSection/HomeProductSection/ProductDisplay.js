import React from "react";
import './ProductDisplay.css'
import { Link } from "react-router-dom";

const ProductDisplay = ({ item }) => {

    return (
        <div className=" col-lg-10 mx-auto">
            <div className="row">
                <div className="product my-3">
                    {item.map((Val) => {
                        return (
                            <div className="" key={Val.id}>
                                <div className="" >
                                    <div className="">
                                        <img src={Val.img} alt={Val.title} className=" productImg rounded-2 " />
                                        <p className="title m-0 fw-bold">{Val.title}</p>
                                        <p className="title m-0 fw-bold">{Val.price}</p>
                                    </div>
                                    <div className=" d-flex justify-content-around ">
                                        <Link to="/" className=" text-decoration-none "> <small className=" text-secondary"> +Compare</small></Link>
                                        <Link to="/" className=" text-decoration-none"> <small className=" text-success"> Add To Cart </small></Link>

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
