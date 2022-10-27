import { createBrowserRouter } from "react-router-dom";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login and Register/Login/Login";
import Register from "../../Pages/Login and Register/Register/Register";
import Main from "../../Pages/Main/Main";
import Sports from "../../Pages/Sports/Sports";
import SportsDetails from "../../Pages/SportsDetails/SportsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {
            path:'/sports',
            element:<PrivateRoute><Sports></Sports></PrivateRoute>,
            loader: () => {
            return fetch('http://localhost:5000/sports')
        }
        },
        {
            path:'/', element:<Home></Home>
        },
        {
            path:'/sports/:name', 
            element:<PrivateRoute><SportsDetails></SportsDetails></PrivateRoute>,
            loader: ({params}) => {
                return fetch(`http://localhost:5000/sports/${params.name}`)
            }
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },

    ]},
    {
        path:'*',
        element:<Error></Error>
    }


])