import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutMe from "../../Pages/Home/AboutMe/AboutMe";
import Home from "../../Pages/Home/Home/Home";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<AboutMe></AboutMe>
            }
        ]
    }
])