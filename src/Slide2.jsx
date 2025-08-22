import React, { useState } from 'react';

const Slide2 = () => {
    const [activeTab, setActiveTab] = useState('definitions');

    return (
        <div className="w-full h-full flex items-center justify-center p-4 font-bold text-lg">
            <div className="w-full max-w-[1500px] max-h-[1000px] overflow-y-auto">
                {/* Tab Navigation */}
                <div className="flex justify-center mb-6">
                    {['definitions', 'comparison'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-5 py-2 mx-2 rounded-t-lg font-bold text-base transition-all duration-300 ${activeTab === tab
                                ? 'bg-gradient-to-r from-yellow-600 to-orange-700 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === 'definitions' ? 'Définitions' : 'Comparaison'}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className=" bg-opacity-50 rounded-xl p-4 shadow-2xl">
                    {activeTab === 'definitions' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Traditional Marketing Card */}
                            <div className="p-4 rounded-xl bg-yellow-300/10 backdrop-blur-md shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300">
                                <div className="flex items-center justify-center mb-3">
                                    <h2 className="text-xl font-bold text-yellow-400">Marketing Traditionnel</h2>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Actions de communication hors ligne (TV, radio, affichage, presse...) pour promouvoir un produit/service.
                                </p>
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-1">
                                        {['Télévision', 'Radio', 'Journaux', 'Flyers', 'Affiches'].map((item) => (
                                            <span key={item} className="px-2 py-1 bg-yellow-600 bg-opacity-50 rounded-full font-extrabold text-sm">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Digital Marketing Card */}
                            <div className="p-4 rounded-xl bg-red-500/10 backdrop-blur-md shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300">
                                <div className="flex items-center justify-center mb-3">
                                    <h2 className="text-xl font-bold text-red-400">Marketing Digital</h2>
                                </div>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Utilisation d'Internet, réseaux sociaux, moteurs de recherche, emails et sites web pour atteindre les clients.
                                </p>
                                <div className="mt-4">
                                    <div className="flex flex-wrap gap-1">
                                        {['Réseaux sociaux', 'Email', 'SEO', 'YouTube Ads', 'Influenceurs'].map((item) => (
                                            <span key={item} className="px-2 py-1 bg-red-900 bg-opacity-50 rounded-full text-sm">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gradient-to-r from-yellow-700 to-red-700 text-white">
                                        {['Critère', 'Marketing Traditionnel', 'Marketing Digital'].map((header) => (
                                            <th key={header} className="py-3 px-4 border border-yellow-500 border-opacity-30 text-center text-lg">{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className='font-extrabold'>
                                    <tr className="hover:bg-gray-700 transition-colors duration-200">
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 font-bold text-white">Coût</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6">
                                            <span className="text-red-400">Élevé</span>
                                            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                                                <div className="h-2 bg-red-500 rounded-full" style={{ width: '90%' }}></div>
                                            </div>
                                        </td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6">
                                            <span className="text-white">Moins coûteux</span>
                                            <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                                                <div className="h-2 bg-green-500 rounded-full" style={{ width: '40%' }}></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-700 transition-colors duration-200">
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 font-bold text-white">Ciblage</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-red-300">
                                            Large, moins précis
                                            <div className="flex mt-2">
                                                <div className="w-4 h-4 rounded-full bg-red-500 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-red-400 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-gray-500 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-gray-500 mr-1"></div>
                                            </div>
                                        </td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-white">
                                            Très précis (âge, région, intérêts)
                                            <div className="flex mt-2">
                                                <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-green-500 mr-1"></div>
                                                <div className="w-4 h-4 rounded-full bg-gray-500 mr-1"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-700 transition-colors duration-200">
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 font-bold text-white">Interaction client</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-red-300">Faible</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-white">
                                            Élevée (commentaires, likes, DM)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-700 transition-colors duration-200">
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 font-bold text-white">Mesure des résultats</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-red-300">Difficile à mesurer</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-white">
                                            Mesure en temps réel (Google Analytics, KPIs)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-700 transition-colors duration-200">
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 font-bold text-white">Vitesse de diffusion</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-red-300">Lente (impression, diffusion)</td>
                                        <td className="border border-yellow-500 border-opacity-20 py-3 px-6 text-white">
                                            Instantanée (pubs en ligne, stories...)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        table {
          border-collapse: separate;
          border-spacing: 0;
        }
        
        th, td {
          border: 1px solid rgba(245, 158, 11, 0.2);
        }
        
        tr:first-child th:first-child {
          border-top-left-radius: 8px;
        }
        
        tr:first-child th:last-child {
          border-top-right-radius: 8px;
        }
        
        tr:last-child td:first-child {
          border-bottom-left-radius: 8px;
        }
        
        tr:last-child td:last-child {
          border-bottom-right-radius: 8px;
        }
      `}</style>
        </div>
    );
};

export default Slide2;