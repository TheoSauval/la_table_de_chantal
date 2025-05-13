import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0e1c0f] text-neutral-100 py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-emerald-800 pt-12">
        
        {/* Colonne 1 : Liens */}
        <div>
          <h4 className="text-rose-400 text-xl font-bold mb-4">La Table de Chantal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#menu" className="hover:underline">Notre menu</a></li>
            <li><a href="#galerie" className="hover:underline">Galerie</a></li>
            <li><a href="#evenements" className="hover:underline">Événements</a></li>
            <li><a href="#groupes" className="hover:underline">Groupes & Réservations</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
            <li><a href="#contact" className="hover:underline">Presse & Contact</a></li>
          </ul>
        </div>

        {/* Colonne 2 : Horaires */}
        <div>
          <h4 className="text-emerald-300 text-xl font-bold mb-4">Horaires</h4>
          <ul className="space-y-1 text-sm">
            <li>Lundi : Fermé</li>
            <li>Mardi : Fermé</li>
            <li>Mercredi : Fermé</li>
            <li>Jeudi : 18:00 – 22:00</li>
            <li>Vendredi : 18:00 – 22:00</li>
            <li>Samedi : 15:00 – 22:00</li>
            <li>Dimanche : 15:00 – 22:00</li>
          </ul>
        </div>

        {/* Colonne 3 : Contact + réseaux */}
        <div>
          <h4 className="text-yellow-300 text-xl font-bold mb-4">Restons en contact</h4>
          <p className="text-sm mb-2">123 Rue du Gourmet<br />59000 Lille</p>
          <ul className="text-sm mb-4 space-y-1">
            <li><a href="#jobs" className="hover:underline">Rejoindre notre équipe</a></li>
            <li><a href="#contact" className="hover:underline">Nous contacter</a></li>
            <li><a href="#mentions" className="hover:underline">Mentions légales</a></li>
          </ul>
          <div className="flex items-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-emerald-300 hover:text-emerald-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="text-center text-xs text-neutral-500 mt-12">
        © {new Date().getFullYear()} La Table de Chantal. Tous droits réservés.
      </div>
    </footer>
  );
}