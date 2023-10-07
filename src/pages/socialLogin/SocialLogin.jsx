import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)

    const handleGoogle = (media) =>{
        media()
        .then(res=>{
            console.log(res.user)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
        <div className=''>
            <h2>Continue with</h2>
           <button onClick={() => handleGoogle(googleLogin)} className='btn btn-primary'>Google</button>
           </div>
            
        </div>
    );
};

export default SocialLogin;