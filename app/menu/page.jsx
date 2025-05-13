'use client';
import { useState } from 'react';
import PlatCard from '../component/PlatCard';
import Header from '../component/Header/page';
import Footer from '../component/Footer/page';
import ThemeSwitcher from '../component/ThemeSwitcher';
import menuData from '../data/menuData';

export default function MenuPage() {
  const [filtre, setFiltre] = useState('tout');

  const plats = menuData.filter(
    item => item.categorie !== 'boisson' && (filtre === 'tout' || item.categorie === filtre)
  );

  return (
    <div className="min-h-screen bg-white dark:bg-emerald-950 text-black dark:text-white transition-colors">
      <Header />
      <main className="px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-4xl text-rose-400">Notre Carte</h1>
          <ThemeSwitcher />
        </div>

        {/* Boutons de filtre */}
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start mb-8">
          {['tout', 'entrée', 'plat', 'dessert'].map(categorie => (
            <button
              key={categorie}
              onClick={() => setFiltre(categorie)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filtre === categorie
                  ? 'bg-yellow-400 text-black'
                  : 'bg-neutral-800 text-white hover:bg-neutral-700'
              }`}
            >
              {categorie === 'tout' ? 'Tous' : categorie.charAt(0).toUpperCase() + categorie.slice(1)}
            </button>
          ))}
        </div>

        {/* Liste des plats filtrés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plats.map(plat => (
            <PlatCard key={plat.id} plat={plat} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}