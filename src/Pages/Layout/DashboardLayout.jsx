import {
  FaHome,
  FaUsers,
  FaWallet
  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
 

  
const DashboardLayout = () => {
// 
const [isAdmin]= useAdmin()
const[isInstructor]= useInstructor()
console.log(isAdmin)

console.log(isInstructor,"isInstructor")
// const isInstructor= null
  
    return (
     
<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side bg-slate-600">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
              <>
               <li>
                  <NavLink to="/dashboard/manageclasses" >
                    Manage Classes
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : 
            isInstructor?<>
             <li>
                  <NavLink to="/dashboard/addclass">
                    Add a Class
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/dashboard/myclass">
                    My classes
                  </NavLink>
                </li>
            </>: 
            (
              <>
                <li>
                  <NavLink to="/dashboard/selecetedclass">
                   Selected Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledclass">
                  Enrolled Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    < FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  
                </li>
              </>
            )}
  
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>{" "}
            </li>
           
        </ul>
  </div>
</div>
    );
  };
  
  export default DashboardLayout;

 
  