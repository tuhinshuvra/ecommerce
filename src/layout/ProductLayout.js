import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProductLayout = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('../../src/fake_api/category_list.json')
            .then(res => res.json())
            .then(data => console.log("All Category : ", data))
    }, [])

    return (
        <div>
            <div className="row">
                <div className=" col-lg-3 mt-md-5">
                    <ul className=" list-group">

                        <li className="list-group-item ">
                            <Link className=" nav_btn" to="/dashboard/admin">  All User </Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" nav_btn" to="/dashboard/jobseekerList">Job Seeker List</Link>
                        </li>
                        <li className="list-group-item  my-1">
                            <Link className=" nav_btn" to="/dashboard/jobSeekerList">Employers List</Link>
                        </li>
                        <li className="list-group-item  my-1">
                            <Link className=" nav_btn" to="/dashboard/subscriberList">Subscriber List</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" nav_btn" to="/dashboard/JobCategoryEntry">Job Category Entry</Link>
                        </li>
                        <li className="list-group-item ">
                            <Link className=" nav_btn" to="/dashboard/JobCategoryList">Job Category List</Link>
                        </li>


                    </ul>
                </div>

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductLayout;