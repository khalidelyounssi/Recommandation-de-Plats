import { useState } from "react";
import PlateCard from "./components/PlateCard";

function App() {

  const [search, setSearch] = useState("");

  const plates = [
    { id: 1, name: "Pizza", price: 50, is_available: true },
    { id: 2, name: "Burger", price: 40, is_available: false },
    { id: 3, name: "Tacos", price: 30, is_available: true }
  ];

  const filtered = plates.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((p) => (
        <PlateCard key={p.id} {...p} />
      ))}
    </>
  );
}

export default App;