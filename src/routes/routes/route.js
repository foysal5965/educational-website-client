import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage";
import Login from "../../components/Login";
import Main from "../../layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);
export default router