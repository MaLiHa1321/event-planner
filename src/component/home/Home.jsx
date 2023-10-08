import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Ourservice from "../Banner/Ourservice";
import Chooseus from "../Choose/Chooseus";
import Photo from "../photo/Photo";
import Categories from "../Categores/Categories";


const Home = () => {
  const getData = useLoaderData()
  const totalData = getData.products
   console.log(totalData
    )

    return (
        <div>
          <Banner></Banner>
          <Ourservice></Ourservice>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 p-4">
            {
              totalData.map(cates => <Categories key={cates.ID}
                categore={cates}
              ></Categories>)
            }

          </div>
      
          <Photo></Photo>
          <Chooseus></Chooseus>


        </div>
    );
};

export default Home;