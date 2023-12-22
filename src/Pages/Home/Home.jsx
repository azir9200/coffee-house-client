
import { useLoaderData } from 'react-router-dom'
import HouseCard from '../HouseCard/HouseCard';
import { useState } from 'react';

const Home = () => {
  const loadHouse = useLoaderData();
  const [ahouses, setAhouses] = useState(loadHouse);


  return (
    <div>
      <h2>Home components: {loadHouse.length} </h2>

      <div className='grid sm:grid-cols-1 md:grid-cols-2' >
        {
          loadHouse.map(houses => <HouseCard
            key={houses} houses={houses}
            ahouses={ahouses}
            setAhouses={setAhouses}
          ></HouseCard>)
        }
      </div>
    </div>
  );
};

export default Home;