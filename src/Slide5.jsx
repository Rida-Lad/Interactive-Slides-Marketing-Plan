import React, { useState } from "react";

const tabs = ["SWOT", "Cibles", "Chiffres Clés"];

const Slide5 = () => {
  const [activeTab, setActiveTab] = useState("SWOT");

  const tabContent = {
    SWOT: (
      <div className="grid grid-cols-2 gap-6 h-full font-extrabold">
        {/* Strengths */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-5 hover:border-emerald-500/40 transition-all duration-200">
          <div className="border-l-3 border-emerald-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-emerald-400 mb-1">Forces</h3>
            <p className="text-xs text-emerald-300 uppercase tracking-wide">Strengths</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Image jeune et dynamique</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Tarifs compétitifs</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Forte présence digitale</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Innovation en services numériques</span>
            </li>
          </ul>
        </div>

        {/* Weaknesses */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200">
          <div className="border-l-3 border-orange-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-orange-400 mb-1">Faiblesses</h3>
            <p className="text-xs text-orange-300 uppercase tracking-wide">Weaknesses</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Moins de couverture en zones rurales</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Moins de notoriété à l'international</span>
            </li>
          </ul>
        </div>

        {/* Opportunities */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-5 hover:border-blue-500/40 transition-all duration-200">
          <div className="border-l-3 border-blue-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-1">Opportunités</h3>
            <p className="text-xs text-blue-300 uppercase tracking-wide">Opportunities</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Expansion fibre et services cloud</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">5G et services numériques</span>
            </li>
          </ul>
        </div>

        {/* Threats */}
        <div className="bg-gradient-to-br from-red-500/10 to-rose-600/10 backdrop-blur-sm rounded-xl border border-red-500/20 p-5 hover:border-red-500/40 transition-all duration-200">
          <div className="border-l-3 border-red-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-red-400 mb-1">Menaces</h3>
            <p className="text-xs text-red-300 uppercase tracking-wide">Threats</p>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Concurrence forte d'IAM et Orange</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-gray-300 text-sm leading-relaxed">Réglementations strictes</span>
            </li>
          </ul>
        </div>
      </div>
    ),

    Cibles: (
      <div className="space-y-6 h-full">
        {/* Primary Target */}
        <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-200">
          <div className="border-l-3 border-purple-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-purple-400 mb-1">Cible Principale</h3>
            <p className="text-xs text-purple-300 uppercase tracking-wide">Primary Target</p>
          </div>
          <p className="text-gray-300 leading-relaxed text-xl">
            Jeunes de 15–35 ans utilisateurs d'internet et réseaux sociaux, sensibles aux innovations technologiques et aux offres digitales.
          </p>
        </div>

        {/* Secondary Targets */}
        <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 backdrop-blur-sm rounded-xl border border-amber-500/20 p-6 hover:border-amber-500/40 transition-all duration-200">
          <div className="border-l-3 border-amber-500 pl-4 mb-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-1">Cibles Secondaires</h3>
            <p className="text-xs text-amber-300 uppercase tracking-wide">Secondary Targets</p>
          </div>
          <p className="text-gray-300 leading-relaxed mb-4 text-xl">
            Familles et entreprises recherchant des solutions fibre, cloud et offres professionnelles.
          </p>

        </div>
      </div>
    ),

    "Chiffres Clés": (
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Market Share */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm rounded-xl border border-emerald-500/20 p-5 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-emerald-300 font-medium text-sm mb-2 uppercase tracking-wide">Part de marché</p>
            <div className="text-3xl font-bold text-emerald-400">~24%</div>
          </div>
        </div>

        {/* Mobile Subscribers */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 backdrop-blur-sm rounded-xl border border-blue-500/20 p-5 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-blue-300 font-medium text-sm mb-2 uppercase tracking-wide">Abonnés mobile</p>
            <div className="text-3xl font-bold text-blue-400">+10M</div>
          </div>
        </div>

        {/* 4G Coverage */}
        <div className="bg-gradient-to-br from-orange-500/10 to-red-600/10 backdrop-blur-sm rounded-xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all duration-200 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-orange-300 font-medium text-sm mb-2 uppercase tracking-wide">Couverture 4G</p>
            <div className="text-3xl font-bold text-orange-400">98%</div>
          </div>
        </div>

        {/* My Inwi Users */}
        <div className="bg-gradient-to-br from-purple-500/10 to-indigo-600/10 backdrop-blur-sm rounded-xl border border-purple-500/20 p-5 hover:border-purple-500/40 transition-all duration-200 flex flex-col justify-between">
          <div className="text-center">
            <p className="text-purple-300 font-medium text-sm mb-2 uppercase tracking-wide">Utilisateurs My Inwi</p>
            <div className="text-3xl font-bold text-purple-400">+1M</div>
          </div>
        </div>

        {/* Market Ranking */}
        <div className="bg-gradient-to-br from-amber-500/10 to-yellow-600/10 backdrop-blur-sm rounded-xl border border-amber-500/20 p-5 hover:border-amber-500/40 transition-all duration-200 col-span-2 flex flex-col justify-center">
          <div className="text-center">
            <p className="text-amber-300 font-medium text-sm mb-2 uppercase tracking-wide">Classement National</p>
            <div className="text-xl font-bold text-amber-400">Top 3 des télécoms au Maroc</div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="w-[900px] h-[450px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl relative font-extrabold">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-8 pb-6">


        {/* Professional Tab Navigation */}
        <div className="flex justify-center space-x-1 p-1 rounded-xl backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 ${activeTab === tab
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

export default Slide5;