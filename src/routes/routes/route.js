import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage";
import Login from "../../components/Login";
import Main from "../../layout/Main";
import Home from '../../components/Home'
import Category from '../../components/Category'
import Register from "../../components/Register";
import Course from "../../components/Course";
import Blog from "../../components/Blog";
import CheckOut from "../../components/CheckOut";
import PrivetRoute from "./PrivetRoute";
import Courses from "../../components/Courses";
import CourseCard from "../../components/CourseCard";
import LoaderSpinner from "../../components/LoaderSpinner";
import LeftSideNav from "../../components/LeftSideNav";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
        
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('https://assignmnet-server.vercel.app/course')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=>fetch(`https://assignmnet-server.vercel.app/category/${params.id}`)
           },
           {
            path:'/courses/:id',
            element:<Course></Course>,
            loader:({params})=>fetch(`https://assignmnet-server.vercel.app/course/${params.id}`)
           },
           {
            path:'/course-enroll/:id',
            element:<PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
            loader:({params})=>fetch(`https://assignmnet-server.vercel.app/course/${params.id}`)
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
         {
            path:'/coursess',
            
         }
         
           

        ]
    }
]);
export default router