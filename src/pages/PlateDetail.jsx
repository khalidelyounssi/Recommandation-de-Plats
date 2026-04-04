import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function PlateDetails() {
  const { id } = useParams();
  const [plate, setPlate] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8001/api/plats/${id}`)
      .then(res => setPlate(res.data.data || res.data));
  }, [id]);

  if (!plate) return <p className="p-10">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <Navbar />

      <div className="px-16 py-10 grid grid-cols-2 gap-10">
        
        <img
          src={`https://source.unsplash.com/500x400/?food,${id}`}
          className="rounded-3xl"
        />

        <div>
          <h1 className="text-4xl font-bold">{plate.name}</h1>
          <p className="text-orange-600 text-2xl">{plate.price} MAD</p>

          <button className="mt-6 bg-orange-600 text-white px-6 py-3 rounded-xl">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default PlateDetails;