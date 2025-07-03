import Freska from "../assets/Freska.png";

const locations = ["Jakarta", "Surabaya", "Bandung", "Yogyakarta", "Medan"];
const prices = ["10 Jt", "15 Jt", "20 Jt", "25 Jt", "30 Jt"];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const dataAgency = [
  {
    nameCategory: "Full Service Agenchy",
    description: "A collection of full service agencies.",
    image: "",
    agencies: Array.from({ length: 22 }).map((_, i) => ({
      nameCompany: `Paragon ${i + 1}`,
      description: `Bunga Mekar adalah Event Organizer spesialis pernikahan yang menghadirkan konsep intimate, elegan, hingga megah sesuai impian Anda. Kami percaya bahwa setiap kisah cinta itu unik, dan momen sakral Anda layak dirayakan dengan penuh kehangatan, keindahan, dan kesempurnaan.`,
      image: Freska,
      address: getRandomElement(locations),
      amountRiview: 2000,
      category: "Full Service Agenchy",
      price: getRandomElement(prices),
      rating: i % 2 === 0 ? 5 : 4,
    })),
  },
  {
    nameCategory: "Wedding Organizers",
    description: "A collection of wedding organizers.",
    image: Freska,
    agencies: Array.from({ length: 25 }).map((_, i) => ({
      nameCompany: `Agency ${i + 1}`,
      description: `Bunga Mekar adalah Event Organizer spesialis pernikahan yang menghadirkan konsep intimate, elegan, hingga megah sesuai impian Anda. Kami percaya bahwa setiap kisah cinta itu unik, dan momen sakral Anda layak dirayakan dengan penuh kehangatan, keindahan, dan kesempurnaan.`,
      image: Freska,
      address: getRandomElement(locations),
      amountRiview: 2000,
      category: "Wedding Organizers",
      price: getRandomElement(prices),
      rating: i % 2 === 0 ? 5 : 4,
    })),
  },
  {
    nameCategory: "EO Spesialis MICE",
    description: "A collection of EO Spesialis MICE.",
    image: Freska,
    agencies: Array.from({ length: 20 }).map((_, i) => ({
      nameCompany: `Agency ${i + 1}`,
      description: `Bunga Mekar adalah Event Organizer spesialis pernikahan yang menghadirkan konsep intimate, elegan, hingga megah sesuai impian Anda. Kami percaya bahwa setiap kisah cinta itu unik, dan momen sakral Anda layak dirayakan dengan penuh kehangatan, keindahan, dan kesempurnaan.`,
      image: Freska,
      address: getRandomElement(locations),
      amountRiview: 2000,
      category: "EO Spesialis MICE",
      price: getRandomElement(prices),
      rating: i % 2 === 0 ? 5 : 4,
    })),
  },
  {
    nameCategory: "Brand Activation Agency",
    description: "A collection of Brand Activation Agency.",
    image: Freska,
    agencies: Array.from({ length: 17 }).map((_, i) => ({
      nameCompany: `Agency ${i + 1}`,
      description: `Bunga Mekar adalah Event Organizer spesialis pernikahan yang menghadirkan konsep intimate, elegan, hingga megah sesuai impian Anda. Kami percaya bahwa setiap kisah cinta itu unik, dan momen sakral Anda layak dirayakan dengan penuh kehangatan, keindahan, dan kesempurnaan.`,
      image: Freska,
      address: getRandomElement(locations),
      amountRiview: 2000,
      category: "Brand Activation Agency",
      price: getRandomElement(prices),
      rating: i % 2 === 0 ? 5 : 4,
    })),
  },
  {
    nameCategory: "EO Virtual & Hybrid",
    description: "A collection of EO Virtual & Hybrid.",
    image: Freska,
    agencies: Array.from({ length: 20 }).map((_, i) => ({
      nameCompany: `Agency ${i + 1}`,
      description: `Bunga Mekar adalah Event Organizer spesialis pernikahan yang menghadirkan konsep intimate, elegan, hingga megah sesuai impian Anda. Kami percaya bahwa setiap kisah cinta itu unik, dan momen sakral Anda layak dirayakan dengan penuh kehangatan, keindahan, dan kesempurnaan.`,
      image: Freska,
      address: getRandomElement(locations),
      amountRiview: 2000,
      category: "EO Virtual & Hybrid",
      price: getRandomElement(prices),
      rating: i % 2 === 0 ? 5 : 4,
    })),
  },
];
