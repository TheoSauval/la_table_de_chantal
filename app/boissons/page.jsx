'use client';
import BoissonCard from '../component/BoissonCard';
import Header from '../component/Header/page';
import Footer from '../component/Footer/page';
import ThemeSwitcher from '../component/ThemeSwitcher';
import menuData from '../data/menuData';

export default function BoissonsPage() {
  const boissons = menuData.filter(item => item.categorie === 'boisson');

  return (
    <div className="min-h-screen bg-white dark:bg-emerald-950 text-black dark:text-white transition-colors">
      <Header />
      <main className="px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-yellow-400">Nos Boissons</h1>
          <ThemeSwitcher />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {boissons.map(boisson => (
            <BoissonCard key={boisson.id} boisson={boisson} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}