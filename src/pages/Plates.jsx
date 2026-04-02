import { useState } from "react";
import PlateCard from "../components/PlateCard";

function Plates() {
  const [search, setSearch] = useState("");

  const plates = [
    { id: 1, name: "Pizza", price: 50, is_available: true },
    { id: 2, name: "Burger", price: 40, is_available: false },
    { id: 3, name: "Tacos", price: 30, is_available: true },
  ];

  const filtered = plates.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        🍽️ Nos Plats
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500">
          Aucun plat trouvé
        </p>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <PlateCard key={p.id} {...p} />
        ))}
      </div>

    </div>
  );
}

export default Plates;