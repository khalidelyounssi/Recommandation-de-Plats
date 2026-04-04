import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8001/api/profile")
      .then(res => setUser(res.data));
  }, []);

  if (!user) return <p className="p-10">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <Navbar />

      <div className="p-10">
        
        <div className="bg-white p-8 rounded-3xl shadow flex items-center gap-6">
          
          <img
            src="https://i.pravatar.cc/100"
            className="rounded-full"
          />

          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;