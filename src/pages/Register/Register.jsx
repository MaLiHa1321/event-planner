import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../socialLogin/SocialLogin";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const {createUser,user,handleUpdateprofile} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if(password.length < 6){
            toast.error('password must be atleast 6 character');
            return;
        }
        else if(!/[A-Z]/.test(password) ){
            toast.error('password must be atleast capital character');
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)){
            toast.error('password must be atleast special character');
            return;
        }
       
        createUser(email,password)
        .then(res =>{
            handleUpdateprofile(name,photo)
            .then(() =>{
                toast.success('Registration Successful!')
                navigate('/')
                
            })
        })
        .catch(err =>{
            toast.error('regsitration Incomplete')
        })
    }











    return (
        <div>
             <Toaster
  position="top-right"
  reverseOrder={false}
/>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? <span>  <Link to="/login" className="text-blue-700">Login</Link></span></p>
      </form>
      <div className="p-4">

      <SocialLogin></SocialLogin>
      </div>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;