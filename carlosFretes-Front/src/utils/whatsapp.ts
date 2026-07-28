import { HERO_CONTENT } from '../data/content';

export function openWhatsApp(encodedMessageText?: string) {
  const phone = HERO_CONTENT.whatsappNumber;
  const defaultMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para frete em Curitiba.");
  const messageParam = encodedMessageText ? `text=${encodedMessageText}` : `text=${defaultMessage}`;
  
  const whatsappUrl = `https://wa.me/${phone}?${messageParam}`;
  
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
