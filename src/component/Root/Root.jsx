import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";


const Root = () => {
    return (
        <>
         <div className="container w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
          
        </div>
        <Footer></Footer>
        </>
       
    );
};

export default Root;