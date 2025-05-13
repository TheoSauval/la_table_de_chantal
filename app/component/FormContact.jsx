'use client';
import { useState } from 'react';

export default function FormContact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
    alert('Merci pour votre message !');
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl space-y-6 bg-neutral-900 p-8 rounded-xl shadow-lg"
    >
      <div className="flex flex-col">
        <label htmlFor="nom" className="text-sm mb-1 text-emerald-300">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 border border-neutral-600 text-white"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm mb-1 text-emerald-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 border border-neutral-600 text-white"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="sujet" className="text-sm mb-1 text-emerald-300">Sujet</label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
          className="p-3 rounded bg-neutral-800 border border-neutral-600 text-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm mb-1 text-emerald-300">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="p-3 rounded bg-neutral-800 border border-neutral-600 text-white"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition"
      >
        Envoyer
      </button>
    </form>
  );
}