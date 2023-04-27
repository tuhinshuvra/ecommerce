import ProductLayout from "../layout/ProductLayout";
import HomeContactSection from "../views/components/HomeComponents/HomeContactSection/HomeContactSection";
import CategoryProducts from "../views/components/HomeComponents/HomeProductSection/CategoryProducts/CategoryProducts";
import HomeProductSection from "../views/components/HomeComponents/HomeProductSection/HomeProductSection";
import HomeServiceSection from "../views/components/HomeComponents/HomeServiceSection/HomeServiceSection";
import Account from "../views/pages/Account/Account";
import Login from "../views/pages/Authentication/Login/Login";
import Signup from "../views/pages/Authentication/SignUP/Signup";
import WishList from "../views/pages/WishList/WishList";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layout/MainLayout");
const { default: Home } = require("../views/pages/Home/Home");
const { default: About } = require("../views/pages/About/About");

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/products",
                element: <HomeProductSection></HomeProductSection>
            },
            {
                path: "/services",
                element: <HomeServiceSection></HomeServiceSection>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <HomeContactSection></HomeContactSection>
            },
            {
                path: "/account",
                element: <Account></Account>
            },
            {
                path: "/wishList",
                element: <WishList></WishList>
            },
            {
                path: "/contact",
                element: <HomeContactSection></HomeContactSection>
            },
            {
                path: "/category/:categoryId",
                element: <CategoryProducts></CategoryProducts>,
            },
        ]
    },
    {
        path: "/catetory",
        element: <ProductLayout></ProductLayout>,
        children: [
            {
                path: "/catetory",
                element: <HomeProductSection></HomeProductSection>,
                // loader: async ({ params }) => await fetch(`${"../fake_api/category_list.json"}/category/${params.categoryId}`)
            },
            // {
            //     path: "/jobs/:categoryId",
            //     element: <FindJobsByCategory></FindJobsByCategory>,
            //     loader: async ({ params }) => await fetch(`${process.env.REACT_APP_CABD_server_address}/jobbycategory?category=${params.categoryId}`),
            // },
        ]

    }
]);
export default router;