import React, { useState } from "react";

const Slide6 = () => {
  const tabs = [
    "Présentation",
    "Objectifs",
    "Stratégie Marketing",
    "Communication"
  ];
  
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabContent = {
    "Présentation": (
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Apple Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-5 hover:border-red-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-red-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">Apple</h3>
            <p className="text-xs text-red-300 uppercase tracking-wide">Innovation & Design</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Nom:</span> Symbolise simplicité et convivialité
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Création:</span> 1976, États-Unis
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Spécialité:</span> Technologie (iPhone, Mac, iPad)
              </span>
            </li>
          </ul>
        </div>
        
        {/* Samsung Card */}
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-orange-400 mb-1">Samsung</h3>
            <p className="text-xs text-orange-300 uppercase tracking-wide">Diversité & Accessibilité</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Nom:</span> "Trois étoiles" (grandeur et éternité)
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Création:</span> 1938, Corée du Sud
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Spécialité:</span> Électronique diversifiée
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
    "Objectifs": (
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Apple Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-5 hover:border-red-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-red-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">Apple</h3>
            <p className="text-xs text-red-300 uppercase tracking-wide">Objectifs Clés</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Qualité supérieure et style de vie premium
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Écosystème fermé intégré
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Fidélité à la marque absolue
              </span>
            </li>
          </ul>
        </div>
        
        {/* Samsung Card */}
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-orange-400 mb-1">Samsung</h3>
            <p className="text-xs text-orange-300 uppercase tracking-wide">Objectifs Clés</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Innovation technologique constante
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Diversité et accessibilité des produits
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                Large gamme pour tous les budgets
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
    "Stratégie Marketing": (
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Apple Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-5 hover:border-red-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-red-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">Apple</h3>
            <p className="text-xs text-red-300 uppercase tracking-wide">Approche 4P</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Produit:</span> Haut de gamme et performant
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Prix:</span> Tarification premium
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Distribution:</span> Apple Stores exclusifs
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Promotion:</span> Publicités minimalistes
              </span>
            </li>
          </ul>
        </div>
        
        {/* Samsung Card */}
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-orange-400 mb-1">Samsung</h3>
            <p className="text-xs text-orange-300 uppercase tracking-wide">Approche 4P</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Produit:</span> Large gamme variée
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Prix:</span> Large spectre de prix
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Distribution:</span> Réseau de revendeurs
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">
                <span className="font-bold">Promotion:</span> Campagnes massives
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
    "Communication": (
      <div className="grid grid-cols-2 gap-6 h-full">
        {/* Apple Card */}
        <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-5 hover:border-red-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-red-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">Apple</h3>
            <p className="text-xs text-red-300 uppercase tracking-wide">Canaux de Communication</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
              <h4 className="text-red-200 font-semibold text-base">Traditionnel</h4>
            </div>
            <p className="text-gray-300 text-sm ml-4 pl-2">
              TV, panneaux d'affichage, journaux premium
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-2"></div>
              <h4 className="text-red-200 font-semibold text-base">Digital</h4>
            </div>
            <p className="text-gray-300 text-sm ml-4 pl-2">
              SEO, réseaux sociaux, influenceurs, YouTube
            </p>
          </div>
        </div>
        
        {/* Samsung Card */}
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200 h-full">
          <div className="border-l-3 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-orange-400 mb-1">Samsung</h3>
            <p className="text-xs text-orange-300 uppercase tracking-wide">Canaux de Communication</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              <h4 className="text-orange-200 font-semibold text-base">Traditionnel</h4>
            </div>
            <p className="text-gray-300 text-sm ml-4 pl-2">
              TV, magazines, parrainages sportifs/artistiques
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
              <h4 className="text-orange-200 font-semibold text-base">Digital</h4>
            </div>
            <p className="text-gray-300 text-sm ml-4 pl-2">
              YouTube, publicités en ligne, Instagram, TikTok
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-[900px] h-[450px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl relative font-extrabold">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-red-500/5 to-orange-500/5"></div>

      {/* Header */}
      <div className="relative z-10 p-8 pb-6">
        {/* Professional Tab Navigation */}
        <div className="flex justify-center space-x-1 p-1 rounded-xl backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 px-8 pb-8">
        <div className="h-[280px] overflow-y-auto custom-scrollbar">
          <div className="backdrop-blur-sm rounded-xl p-6 h-full">
            {tabContent[activeTab]}
          </div>
        </div>
      </div>

      {/* Professional Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f59e0b, #ea580c);
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #fbbf24, #f97316);
        }
      `}</style>
    </div>
  );
};

export default Slide6;