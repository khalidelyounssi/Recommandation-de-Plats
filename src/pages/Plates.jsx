import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PlateCard from "../components/PlateCard";

function Plates() {
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/api/plats")
      .then(res => {
        setPlates(res.data.data || res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Erreur lors du chargement");
        setLoading(false);
      });
  }, []);

  // 🔄 Loading
  if (loading) {
    return <div className="text-center mt-10">Chargement...</div>;
  }

  // ❌ Error
  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <Navbar />

      <div className="px-16 py-10 grid grid-cols-4 gap-6">
        {plates.map((p) => (
          <PlateCard key={p.id} {...p} />
        ))}
      </div>

    </div>
  );
}

export default Plates;