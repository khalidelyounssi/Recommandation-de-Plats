import { useParams, Link } from "react-router-dom";

function PlateDetail() {
  const { id } = useParams();

  const plates = [
    { id: 1, name: "Pizza", price: 50, description: "Delicious Italian pizza " },
    { id: 2, name: "Burger", price: 40, description: "Juicy beef burger " },
    { id: 3, name: "Tacos", price: 30, description: "Mexican tacos " },
  ];

  const plate = plates.find(p => p.id == id);

  if (!plate) return <p className="text-center mt-10">Not found</p>;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {plate.name}
        </h1>

        <p className="text-gray-500 mb-4">
          {plate.description}
        </p>

        <p className="text-xl font-semibold text-blue-500 mb-6">
          {plate.price} MAD
        </p>

        <Link
          to="/plates"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          ⬅ Retour
        </Link>

      </div>

    </div>
  );
}

export default PlateDetail;