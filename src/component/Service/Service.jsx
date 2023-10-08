import { useLoaderData, useParams } from "react-router-dom";


const Service = () => {
    const service = useLoaderData();
    const serviceData = service.products
    const {ID} = useParams();
    const getService = serviceData.find(cate => cate.ID == ID)

  
  
    
    return (
        <div className="container w-10/12 mx-auto p-4">
            <img src={getService.Image} alt="" />
            <p className="flex justify-start m-5 text-2xl font-bold">{getService.Category}</p>
            <p className="mb-20">{getService.Description}</p>
         

           
            
        </div>
    );
};

export default Service;