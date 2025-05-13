'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-emerald-950 text-rose-400 px-4 py-4 ">
      <div className="flex items-center justify-between mx-auto">
        {/* Logo / Titre */}
        <h1 className="text-xl sm:text-2xl font-bold">La Table de Chantal</h1>

        {/* Bouton burger */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-rose-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu navigation - desktop */}
        <nav className="hidden sm:flex space-x-6 text-base font-medium">
          <Link href="/" className="hover:text-yellow-300">Accueil</Link>
          <Link href="/menu" className="hover:text-yellow-300">Menu</Link>
          <Link href="/boissons" className="hover:text-yellow-300">Boissons</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
      </div>

      {/* Menu navigation - mobile */}
      {isOpen && (
        <div className="sm:hidden mt-4 space-y-2 text-center">
          <Link href="/" className="block hover:text-yellow-300">Accueil</Link>
          <Link href="/menu" className="block hover:text-yellow-300">Menu</Link>
          <Link href="/boissons" className="block hover:text-yellow-300">Boissons</Link>
          <Link href="/contact" className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </header>
  );
}