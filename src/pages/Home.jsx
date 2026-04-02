import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        🍔 Food App
      </h1>

      <p className="text-gray-500 mb-6">
        Découvrez les meilleurs plats
      </p>

      <Link
        to="/plates"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
      >
        Voir les plats
      </Link>

    </div>
  );
}

export default Home;