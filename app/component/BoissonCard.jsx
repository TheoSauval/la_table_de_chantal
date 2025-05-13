export default function BoissonCard({ boisson }) {
    return (
      <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
        <img src={boisson.image} alt={boisson.nom} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg  text-emerald-400 mb-2">{boisson.nom}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{boisson.categorie}</p>
          <p className="text-base  text-yellow-500 mt-2">{boisson.prix} €</p>
        </div>
      </div>
    );
  }