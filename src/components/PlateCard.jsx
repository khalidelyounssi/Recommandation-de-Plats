import { Link } from "react-router-dom";

function PlateCard({ id, name, price, is_available }) {
  return (
    <Link to={`/plates/${id}`}>
      <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300 mb-4 border cursor-pointer">
        
        <h2 className="text-xl font-semibold text-gray-800">
          {name}
        </h2>

        <p className="text-gray-500 mt-1">
          {price} MAD
        </p>

        {is_available ? (
          <span className="inline-block mt-3 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
            Disponible
          </span>
        ) : (
          <span className="inline-block mt-3 px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
            Indisponible
          </span>
        )}

      </div>
    </Link>
  );
}

export default PlateCard;