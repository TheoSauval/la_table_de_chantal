export default function PlatCard({ plat }) {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
        <img src={plat.image} alt={plat.nom} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg text-rose-400 mb-2">{plat.nom}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{plat.categorie}</p>
          <p className="text-base text-yellow-500 mt-2">{plat.prix} €</p>
        </div>
      </div>
    );
  }