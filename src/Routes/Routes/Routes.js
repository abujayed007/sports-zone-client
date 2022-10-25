import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Sports from "../../Pages/Sports/Sports";

export const routes = createBrowserRouter([
    {path:'/', element:<Home></Home>, children:[
        {
            path:'/sports',
            element:<Sports></Sports>,
            loader: () => {
            return fetch('http://localhost:5000/sports')
        },

            
        }
    ]}
])