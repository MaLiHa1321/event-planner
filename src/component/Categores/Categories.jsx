import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categore}) => {
   const {Category,Image,Price,ShortDescription,ID} = categore;
    return (
        <div>
            
 <div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-2xl mt-12">
  <figure><img src={Image} className='w-[300px] h-[300px]' alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{Category}</h2>
    <p>{ShortDescription}</p>
    <p className='mt-0'>Price: {Price}</p>
    <div className="card-actions ">
        <Link to={`/categore/${ID}`}>
        <button className="btn btn-error text-white w-full">See Deatils</button>
        </Link>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default Categories;