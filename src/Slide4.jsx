import React, { useState } from 'react';

const MarketingInsights = () => {
    const [activeTab, setActiveTab] = useState('trends');

    return (
        <div className="w-[900px] h-[410px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl relative font-bold">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" ></div>
            </div>
            
            {/* Header */}
            <div className="relative z-10">

                {/* Professional Tab Navigation */}
                <div className="flex justify-center space-x-1 p-1 rounded-xl backdrop-blur-sm">
                    <button
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'trends'
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                        onClick={() => setActiveTab('trends')}
                    >
                        Latest Trends
                    </button>
                    <button
                        className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                            activeTab === 'branding'
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                        }`}
                        onClick={() => setActiveTab('branding')}
                    >
                        Branding Essentials
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative z-10 px-8 pb-8">
                <div className="h-[280px] overflow-y-auto custom-scrollbar">
                    {activeTab === 'trends' ? (
                        <div className="grid grid-cols-3 gap-6">
                            {/* Trend Card 1 - Protector App */}
                            <div className=" backdrop-blur-sm rounded-xl p-6">
                                <div className="border-l-3 border-amber-500 pl-4 mb-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Protector App</h3>
                                    <p className="text-xs text-amber-400 uppercase tracking-wide">Security Service</p>
                                </div>
                                
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Demande d'un garde du corps armé sur mesure</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Personnalisation complète du véhicule et de l'uniforme</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Tarification premium à partir de 1000$/h</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Trend Card 2 - Google Veo 3 */}
                            <div className=" backdrop-blur-sm rounded-xl p-6">
                                <div className="border-l-3 border-blue-500 pl-4 mb-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Google Veo 3</h3>
                                    <p className="text-xs text-blue-400 uppercase tracking-wide">AI Technology</p>
                                </div>
                                
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Génération de vidéos haute définition par IA</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Lunettes intelligentes avec réalité augmentée</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Technologie Beam pour présence virtuelle</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Trend Card 3 - Meta 2026 */}
                            <div className="backdrop-blur-sm rounded-xl p-6">
                                <div className="border-l-3 border-emerald-500 pl-4 mb-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-1">Meta 2026</h3>
                                    <p className="text-xs text-emerald-400 uppercase tracking-wide">Advertising Platform</p>
                                </div>
                                
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">IA publicitaire entièrement automatisée</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Création de campagnes complètes autonomes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-gray-300 text-sm leading-relaxed">Optimisation budgétaire et ciblage précis</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="backdrop-blur-sm rounded-xl p-8 h-full">
                            <div className="text-center mb-8">
                                <h2 className="text-xl font-light text-gray-100 mb-2">
                                    Les 6 Piliers Fondamentaux du Branding
                                </h2>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-lg p-4 hover:border-amber-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Création d'identité visuelle</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-lg p-4 hover:border-orange-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Communication de la valeur</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Connexion émotionnelle</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-lg p-4 hover:border-purple-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Positionnement sur le marché</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Construction de la confiance</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-lg p-4 hover:border-emerald-500/40 transition-all duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full"></div>
                                            <span className="text-gray-100 font-semibold text-xl">Cultiver la fidélité client</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
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

export default MarketingInsights;