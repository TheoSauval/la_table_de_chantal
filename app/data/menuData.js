import { v4 as uuidv4 } from 'uuid';

const menuData = [
  // Entrées
  {
    id: uuidv4(),
    categorie: 'entrée',
    nom: 'Salade de chèvre chaud',
    image: '/img/salade-de-chevre-chaud.jpg',
    prix: 8,
  },
  {
    id: uuidv4(),
    categorie: 'entrée',
    nom: 'Tartare de saumon à l’aneth',
    image: '/img/entree2.webp',
    prix: 9,
  },
  {
    id: uuidv4(),
    categorie: 'entrée',
    nom: 'Velouté de potimarron',
    image: '/img/entree3.jpeg',
    prix: 7,
  },
  {
    id: uuidv4(),
    categorie: 'entrée',
    nom: 'Oeuf parfait et champignons',
    image: '/img/entree4.webp',
    prix: 8,
  },
  {
    id: uuidv4(),
    categorie: 'entrée',
    nom: 'Carpaccio de bœuf au parmesan',
    image: '/img/entree5.webp',
    prix: 10,
  },

  // Plats
  {
    id: uuidv4(),
    categorie: 'plat',
    nom: 'Bœuf bourguignon',
    image: '/img/plat1.jpg',
    prix: 16,
  },
  {
    id: uuidv4(),
    categorie: 'plat',
    nom: 'Saumon rôti et purée de patates douces',
    image: '/img/plat2.jpeg',
    prix: 18,
  },
  {
    id: uuidv4(),
    categorie: 'plat',
    nom: 'Poulet fermier aux herbes',
    image: '/img/plat3.jpg',
    prix: 15,
  },
  {
    id: uuidv4(),
    categorie: 'plat',
    nom: 'Risotto aux champignons',
    image: '/img/plat4.webp',
    prix: 14,
  },
  {
    id: uuidv4(),
    categorie: 'plat',
    nom: 'Filet mignon et légumes glacés',
    image: '/img/plat5.webp',
    prix: 17,
  },

  // Desserts
  {
    id: uuidv4(),
    categorie: 'dessert',
    nom: 'Tarte Tatin',
    image: '/img/dessert1.webp',
    prix: 6,
  },
  {
    id: uuidv4(),
    categorie: 'dessert',
    nom: 'Mousse au chocolat',
    image: '/img/dessert2.webp',
    prix: 5,
  },
  {
    id: uuidv4(),
    categorie: 'dessert',
    nom: 'Cheesecake fruits rouges',
    image: '/img/dessert3.webp',
    prix: 6,
  },
  {
    id: uuidv4(),
    categorie: 'dessert',
    nom: 'Tiramisu maison',
    image: '/img/dessert4.jpeg',
    prix: 5,
  },
  {
    id: uuidv4(),
    categorie: 'dessert',
    nom: 'Crème brûlée à la vanille',
    image: '/img/dessert5.webp',
    prix: 6,
  },

  // Boissons
  {
    id: uuidv4(),
    categorie: 'boisson',
    nom: 'Eau plate 50cl',
    image: '/img/boisson1.png',
    prix: 2,
  },
  {
    id: uuidv4(),
    categorie: 'boisson',
    nom: 'Eau gazeuse 50cl',
    image: '/img/boisson2.png',
    prix: 2.5,
  },
  {
    id: uuidv4(),
    categorie: 'boisson',
    nom: 'Verre de vin rouge',
    image: '/img/boisson3.jpg',
    prix: 4,
  },
  {
    id: uuidv4(),
    categorie: 'boisson',
    nom: 'Verre de vin blanc',
    image: '/img/boisson4.png',
    prix: 4,
  },
  {
    id: uuidv4(),
    categorie: 'boisson',
    nom: 'Limonade artisanale',
    image: '/img/boisson5.png',
    prix: 3,
  },
];

export default menuData;