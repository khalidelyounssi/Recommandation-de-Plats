import { Link } from "react-router-dom";

function PlateCard({ id, name, price, is_available }) {
  return (
    <Link to={`/plates/${id}`}>
      <div className="bg-white rounded-2xl shadow hover:shadow-xl hover:scale-105 transition duration-300 p-4">
        
        <img
          src={`https://source.unsplash.com/400x300/?food,${id}`}
          className="rounded-xl h-40 w-full object-cover"
        />

        <h2 className="mt-3 font-bold">{name}</h2>

        <p className="text-orange-600 font-bold">{price} MAD</p>

        <span className={is_available ? "text-green-600" : "text-red-500"}>
          {is_available ? "Disponible" : "Indisponible"}
        </span>

      </div>
    </Link>
  );
}

export default PlateCard;