import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Error/Error";
import Home from "../Home/Home/Home";
import Instructors from "../Instructors/Instructors";
import Login from "../../Login/Login";
import SignUp from "../SignUp/SignUp";

import Classes from "../Classes/Classes";
import DashboardLayout from "../Layout/DashboardLayout";
import SelectedClass from "../Dashboard/SelectedClass/SelectedClass";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddClass from "../Dashboard/AddClass/AddClass";
import MyClass from "../Dashboard/MyClass/MyClass";
import UpdateClass from "../Dashboard/UpdateClass/UpdateClass";
import PrivateRoute from "../Providers/PrivateRoutes";
import EnrolledClass from "../Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import AdminRoute from "../Providers/AdminRoute";
import ManageCalss from "../Dashboard/ManageClass/ManageCalss";





  const router = createBrowserRouter([
    {
      path: "/",
     element:<Main></Main>,
      errorElement:<Error></Error>,
     
     children:[
        {
           path:'/' ,
           element:<Home></Home>,
        },
        {
          path:'instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'classes',
          element:<Classes></Classes>
        },
        
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
     ]
    },
   {
    path:'dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'selecetedclass',
        element:<SelectedClass></SelectedClass>
      },
      {
        path:'allusers',
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path:'manageclasses',
        element:<AdminRoute><ManageCalss></ManageCalss></AdminRoute>
      },
      {
        path:'addclass',
        element:<PrivateRoute><AddClass></AddClass></PrivateRoute>
      },
      {
        path:'myclass',
        element:<PrivateRoute><MyClass></MyClass></PrivateRoute>
      },
      {
        path:'updateclass/:id',
        element:<PrivateRoute><UpdateClass></UpdateClass></PrivateRoute>,
        loader: ({params}) => fetch(`https://summer-camp-school-server-mirazum.vercel.app/classes/${params.id}`)
      },
      {
        path:'enrolledclass',
        element:<PrivateRoute><EnrolledClass></EnrolledClass></PrivateRoute>,

      },
      {
        path:'payment',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
      }
    ]
   }
  ]);

  export default router;

 