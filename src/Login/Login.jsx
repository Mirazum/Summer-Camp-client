import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState} from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from "../Pages/Providers/AuthProviders";
import SocialLogin from "../Pages/SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const Login = () => {
  const [show, setShow] = useState(false)
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  
  const onSubmit = (data) => {
   
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

 

  return (
    <div>
  
      <div className="min-h-screen  flex  justify-center items-center">
        <div className="relative sm:max-w-xl sm:mx-auto">
         
          <div className="card relative bg-slate-200  md:mx-0 shadow-2xl sm:rounded-3xl sm:p-20 mt-12">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show? 'text':'password'} name="password"
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                <p onClick={() => setShow(!show)} className=' cursor-pointer'><small>
                    {
                        show ? <span>Hide Password</span>: <span>Show Password</span>
                    }
                    </small></p>
               
                </div>
            
              <div className="form-control mt-6">
                <input
                
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="p-4 m-4">
              <small>
                New Here? <Link to="/signup">Create an account</Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


