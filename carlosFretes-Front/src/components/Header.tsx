import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_CONTENT } from '../data/content';
import { openWhatsApp } from '../utils/whatsapp';

interface HeaderProps {
  onOpenSimulator: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSimulator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Áreas', href: '#area-atendida' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#simulador') {
      onOpenSimulator();
    } else {
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs py-3.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group"
          id="header-logo-link"
        >
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-black">
            Carlos<span className="font-medium text-gray-500">Fretes</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => {
              onOpenSimulator();
            }}
            className="text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-full transition-all cursor-pointer border border-gray-200/60"
            id="header-simular-btn"
          >
            <span>Simular Orçamento</span>
          </button>

          <button
            onClick={() => openWhatsApp()}
            className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-xs cursor-pointer active:scale-98"
            id="header-whatsapp-btn"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => {
              onOpenSimulator();
            }}
            className="sm:hidden bg-black text-white text-xs font-semibold px-3 py-2 rounded-full"
            id="mobile-header-quick-btn"
          >
            Orçamento
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Abrir menu de navegação"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-white/98 border-b border-gray-100 px-4 py-5 shadow-xl animate-in slide-in-from-top duration-200"
          id="mobile-drawer"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full mb-2">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Atendimento em Curitiba e Região Metropolitana</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-gray-800 hover:text-black py-2.5 px-3 rounded-xl hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-full text-center text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Calcular Orçamento Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 font-semibold py-3 px-4 rounded-full text-center text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-gray-700" />
                <span>Chamar no WhatsApp ({HERO_CONTENT.whatsappFormatted})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
