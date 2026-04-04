import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      <Navbar />

      <div className="px-16 py-20 grid grid-cols-2 items-center">
        
        <div>
          <h1 className="text-6xl font-bold">
            L'art de la <span className="text-orange-600">gastronomie</span>
          </h1>

          <p className="text-gray-600 mt-6">
            Découvrez les meilleurs plats de la ville.
          </p>

          <div className="mt-6 flex bg-white rounded-full shadow overflow-hidden w-96">
            <input className="flex-1 px-4 py-3 outline-none" placeholder="Search..." />
            <button className="bg-orange-600 text-white px-6">Chercher</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://source.unsplash.com/400x400/?food"
            className="rounded-full w-80 h-80 object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;