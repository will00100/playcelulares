export const WHATSAPP_NUMBER = "3497139438";
export const WHATSAPP_MESSAGE = "Olá! Vim pelo site e preciso de um orçamento.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const ADDRESS = "Av. José Solé Filho, 185 - Jardim Uberaba, Uberaba - MG, 38057-570";
const encodedAddress = encodeURIComponent(ADDRESS);

export const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
export const GOOGLE_MAPS_EMBED_LINK = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;