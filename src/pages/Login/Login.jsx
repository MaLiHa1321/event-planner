import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../socialLogin/SocialLogin';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email,password)
        .then(res => {
            toast.success('Successfully Loggedin!')

            navigate(location?.state ? location.state : '/')

        })
        .catch(err =>{
            toast.error("Invalid email or password")
        })


    }

   




    return (
        <div>
 <Toaster
  position="top-right"
  reverseOrder={false}
/>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-3xl font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-[250px] md:w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
           
          
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Does not have an account? <span>  <Link to="/register" className='text-blue-700'>Register</Link></span></p>

         
      </form>
       <div className='p-4'>

     <SocialLogin></SocialLogin>
       </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;