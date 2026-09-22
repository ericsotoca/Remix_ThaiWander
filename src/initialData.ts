import { ItineraryItem, TripSettings } from './types';

export const DEFAULT_TRIP_SETTINGS: TripSettings = {
  title: "Road Trip Camping & Nature - 4 Provinces",
  description: "Un road trip nature exceptionnel à la découverte des parcs nationaux, des chutes d'eau et des montagnes sauvages de Kanchanaburi, Ratchaburi, Saraburi et Nakhon Nayok.",
  startDate: "2026-11-01" // November 1st, 2026 (dry/cool season, perfect for camping!)
};

// Precise coordinates for all default places in the 4 target provinces
export const PLACE_COORDINATES: Record<string, { lat: number; lng: number }> = {
  "123/99 Sarintara 1 Village, Samut Sakhon": { lat: 13.5266, lng: 100.3161 },
  "Bangkok": { lat: 13.7563, lng: 100.5018 },
  "Erawan National Park": { lat: 14.3686, lng: 99.1436 },
  "Sai Yok National Park": { lat: 14.4344, lng: 98.8546 },
  "Srinakarin Dam": { lat: 14.5000, lng: 99.0000 },
  "Sangkhlaburi (Mon Bridge)": { lat: 15.1436, lng: 98.4519 },
  "Pilok Mine & Ban Etong": { lat: 14.6722, lng: 98.3617 },
  "Suan Phueng (Ratchaburi)": { lat: 13.5414, lng: 99.3414 },
  "Khao Bin Cave (Ratchaburi)": { lat: 13.5936, lng: 99.6739 },
  "Namtok Chet Sao Noi (Saraburi)": { lat: 14.7300, lng: 101.1917 },
  "Khao Sam Lan National Park (Saraburi)": { lat: 14.4414, lng: 100.9547 },
  "Muak Lek Waterfall (Saraburi)": { lat: 14.6582, lng: 101.1969 },
  "Khun Dan Prakan Chon Dam (Nakhon Nayok)": { lat: 14.3128, lng: 101.3217 },
  "Sarika Waterfall (Nakhon Nayok)": { lat: 14.2989, lng: 101.2589 },
  "Wang Takrai Park (Nakhon Nayok)": { lat: 14.3256, lng: 101.3012 }
};

export const DEFAULT_ITINERARY: ItineraryItem[] = [
  {
    id: "item-1",
    placeName: "123/99 Sarintara 1 Village, Samut Sakhon",
    day: 1,
    category: "Lodging",
    notes: "Logement chez l'habitant (Gratuit) - Départ du road trip",
    lat: 13.5266,
    lng: 100.3161,
    duration: "1 nuit",
    budget: 0,
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Logement chez l'habitant gratuit. Adresse exacte : 123/99 Sarintara 1 Village, Khok Kham Subdistrict, Mueang Samut Sakhon District, Samut Sakhon 74000. Préparez vos bagages et votre équipement de camping. Assurez-vous d'avoir acheté vos cartouches de gaz à vis chez Decathlon avant de quitter les environs de Bangkok.",
    maxInfo: "Un accueil chaleureux et gratuit chez l'habitant. Idéal pour commencer le road trip en toute sérénité."
  },
  {
    id: "item-2",
    placeName: "Suan Phueng (Ratchaburi)",
    day: 2,
    category: "Camping",
    notes: "Bivouac au frais dans les vallées de Ratchaburi",
    lat: 13.5414,
    lng: 99.3414,
    duration: "2 nuits",
    budget: 300,
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Installez votre campement face aux montagnes de la chaîne de Tenasserim. Le soir, les températures peuvent baisser de manière surprenante, vous offrant une brise très agréable.",
    maxInfo: "Suan Phueng est le paradis vert de la province de Ratchaburi, renommé pour ses fermes d'inspiration européenne, ses ruisseaux cristallins et ses collines brumeuses."
  },
  {
    id: "item-3",
    placeName: "Erawan National Park",
    day: 5,
    category: "Camping",
    notes: "Camping au bord du légendaire cours d'eau aux sept niveaux turquoise",
    lat: 14.3686,
    lng: 99.1436,
    duration: "3 nuits",
    budget: 300,
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Commencez la randonnée tôt à 8h00 pour visiter les niveaux supérieurs (jusqu'au niveau 7) en toute tranquillité avant l'arrivée du public. Les poissons s'amuseront à vous grignoter les pieds, c'est un peeling naturel très amusant !",
    maxInfo: "L'une des cascades les plus emblématiques de Thaïlande. Son eau calcaire bleu turquoise forme de superbes bassins naturels parfaits pour la baignade."
  },
  {
    id: "item-4",
    placeName: "Srinakarin Dam",
    day: 8,
    category: "Camping",
    notes: "Bivouac panoramique au bord de la grande retenue d'eau",
    lat: 14.5000,
    lng: 99.0000,
    duration: "2 nuits",
    budget: 150,
    imageUrl: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Préférez le camping à la cascade Huay Mae Khamin (située près de la retenue), réputée pour sa beauté sauvage préservée et son accès direct au lac.",
    maxInfo: "Le barrage de Srinakarin forme un réservoir grandiose, parfait pour les activités de kayak, les nuitées en cabanes flottantes ou le bivouac sauvage sous les étoiles."
  },
  {
    id: "item-5",
    placeName: "Namtok Chet Sao Noi (Saraburi)",
    day: 10,
    category: "Camping",
    notes: "Camping tranquille au chant des cascades de Saraburi",
    lat: 14.7300,
    lng: 101.1917,
    duration: "2 nuits",
    budget: 200,
    imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Dégustez d'excellents poulets grillés locaux achetés près de l'entrée du parc. Le camping au bord de la rivière est calme et très bien aménagé par l'équipe du parc national.",
    maxInfo: "Chet Sao Noi (la cascade des sept jeunes filles) propose 7 paliers d'eau claire peu profonds, idéaux pour se rafraîchir en toute sécurité."
  },
  {
    id: "item-6",
    placeName: "Khun Dan Prakan Chon Dam (Nakhon Nayok)",
    day: 12,
    category: "Camping",
    notes: "Bivouac face au plus long barrage en béton du monde",
    lat: 14.3128,
    lng: 101.3217,
    duration: "2 nuits",
    budget: 200,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Louez un bateau à longue queue traditionnel à l'aube pour naviguer sur le lac de retenue et visiter les cascades cachées à l'arrière du barrage, une pure merveille !",
    maxInfo: "Ce barrage monumental retient l'eau venant du parc national de Khao Yai, offrant des panoramas splendides sur les plaines de Nakhon Nayok."
  },
  {
    id: "item-7",
    placeName: "Bangkok",
    day: 14,
    category: "Lodging",
    notes: "Fin de l'aventure, retour dans la vibrante capitale",
    lat: 13.7563,
    lng: 100.5018,
    duration: "1 nuit",
    budget: 800,
    imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
    detailedTips: "Profitez-en pour restituer votre matériel de location de voiture, vous détendre avec un massage thaï traditionnel bien mérité après des kilomètres de route, et savourer d'excellents plats de street food.",
    maxInfo: "Fin de votre inoubliable road trip de 2 semaines à travers les joyaux sauvages de Kanchanaburi, Ratchaburi, Saraburi et Nakhon Nayok."
  }
];

// Fallback legacy presets structure to prevent type compilation errors
export const PRESET_ITINERARIES = [
  {
    id: "preset-1",
    nameFr: "L'Ouest & Centre Sauvage",
    nameTh: "ธรรมชาติภาคตะวันตกและภาคกลาง",
    items: DEFAULT_ITINERARY
  }
];
