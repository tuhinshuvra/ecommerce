import ProductLayout from "../layout/ProductLayout";
import HomeCategorySection from "../views/components/HomeComponents/HomeCategoryAndProductSection/HomeCategorySection/HomeCategorySection";
import HomeProductsSection from "../views/components/HomeComponents/HomeCategoryAndProductSection/HomeProductSection/HomeProductsSection";
import HomeContactSection from "../views/components/HomeComponents/HomeContactSection/HomeContactSection";
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
                path: "/products",
                element: <HomeCategorySection></HomeCategorySection>
            },

            {
                path: "/category/:categoryId",
                element: <HomeProductsSection></HomeProductsSection>,
            },


        ]
    }
]);
export default router;