import Header from "./component/Header/page.jsx";
import InfiniteCarousel from "./component/Carousel/carousel-infini";
import InfiniteCarousel2 from "./component/Carousel/carousel-infini-full";
import Footer from "./component/Footer/page.jsx";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-emerald-950 min-h-screen font-erica text-white">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-20 gap-12 relative">
        {/* Texte */}
        <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
          <p className="text-sm text-emerald-300 mb-4">Ouvert tous les jours dès 18h</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-rose-400 leading-tight mb-6">
            La Table<br />de Chantal
          </h1>
          <p className="text-base sm:text-lg text-neutral-100 mb-8">
            Bienvenue à La Table de Chantal ! Savourez nos recettes uniques et nos délices culinaires. Découvrez un menu où tradition et innovation se rencontrent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-yellow-300 text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-yellow-400 transition cursor-pointer">
              Réserver une table
            </button>
            <Link
              href="/menu"
              className="text-rose-400 text-base font-medium hover:underline cursor-pointer flex items-center justify-center sm:justify-start"
            >
              Voir le menu
            </Link>
          </div>
        </div>

        {/* Carrousel */}
        <div className="w-full md:w-1/2 max-w-xl">
          <InfiniteCarousel />
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-12 sm:bottom-4 left-1/2 transform -translate-x-1/2">
          <a href="#next-section" className="flex flex-col items-center text-emerald-300 hover:text-emerald-400 transition">
            <span className="text-lg mb-2">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section avec texte long + carousel */}
      <main className="flex flex-col items-center justify-center px-4 sm:px-10 pt-28" id="next-section">
        <InfiniteCarousel2 />
        <div className="flex flex-col items-center mt-10 px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl text-rose-400 mb-8 text-center max-w-4xl leading-relaxed">
            Bienvenue à La Table de Chantal, un lieu où la passion pour la cuisine se mêle à la convivialité.
            Installé au cœur de la ville, notre restaurant vous invite à découvrir une cuisine généreuse, faite maison, inspirée des saveurs d’ici et d’ailleurs.
            Chez nous, chaque plat raconte une histoire, chaque assiette est pensée avec soin pour éveiller vos papilles et vous faire sentir comme à la maison.

            Que vous veniez pour un dîner en amoureux, un déjeuner entre collègues ou une soirée entre amis, La Table de Chantal vous accueille dans une ambiance chaleureuse et authentique.
            Laissez-vous tenter par notre carte de saison, élaborée à partir de produits frais et locaux.
          </h2>
        </div>

        {/* Section Chef */}
        <section className="pb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 sm:px-10 py-16 bg-neutral-900 rounded-xl shadow-inner mt-10 w-full max-w-6xl">
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center animate-fadeInLeft">
              <img
                src="/img/Guy_Savoy.jpg"
                alt="Chef Chantal"
                className="rounded-xl shadow-2xl w-64 sm:w-80 md:w-96 object-cover"
              />
            </div>

            {/* Texte */}
            <div className="w-full md:w-1/2 animate-fadeInUp text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-rose-400 font-bold mb-6">
                Rencontrez Chef Chantal
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-neutral-100 leading-relaxed">
                Chef Chantal est l'âme de notre restaurant. Avec des années d'expérience et une passion inégalée pour la cuisine,
                elle crée des plats où <span className="text-emerald-300 font-semibold">tradition</span> et <span className="text-yellow-300 font-semibold">innovation</span> s'entrelacent harmonieusement.
                Chaque recette est pensée comme une œuvre d'art culinaire, conçue pour émerveiller vos papilles et faire de chaque repas une expérience mémorable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}