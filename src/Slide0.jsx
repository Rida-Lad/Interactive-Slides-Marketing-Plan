const Slide0 = () => {
    return (
        <div className="text-left max-w-5xl space-y-8 font-bold">
            <div className="bg-gradient-to-br from-amber-900/20 via-red-900/15 to-orange-900/25 backdrop-blur-2xl p-8 rounded-2xl border border-amber-900/30 relative shadow-[0_0_30px_rgba(255,140,0,0.15)]">

                <p className="text-xl leading-relaxed text-gray-100">
                    Un <span className="text-amber-300 font-bold drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]">plan marketing</span> est un document stratégique qui fixe les{" "}
                    <span className="text-orange-300 font-bold drop-shadow-[0_0_5px_rgba(251,146,60,0.3)]">objectifs marketing</span> d'une entreprise, les{" "}
                    <span className="text-red-300 font-bold drop-shadow-[0_0_5px_rgba(252,165,165,0.3)]">stratégies et tactiques</span> pour les atteindre, ainsi que les{" "}
                    <span className="text-amber-400 font-bold drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">ressources nécessaires</span> sur une période définie.
                </p>
            </div>

            <div className="bg-gradient-to-br from-amber-900/20 via-red-900/15 to-orange-900/25 backdrop-blur-2xl p-8 rounded-2xl border border-amber-900/30 relative shadow-[0_0_30px_rgba(255,140,0,0.15)]">
                {/* Decorative particles */}
                <div className="absolute top-6 left-4 w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-4 right-6 w-3 h-3 bg-red-500 rounded-full opacity-30"></div>

                <div className="grid grid-cols-2 gap-6 text-lg">
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <span className="text-amber-400 font-bold text-xl">•</span>
                            <span className="text-gray-200">Atteindre les objectifs commerciaux</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-orange-400 font-bold text-xl">•</span>
                            <span className="text-gray-200">Définir les marchés cibles</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-amber-300 font-bold text-xl">•</span>
                            <span className="text-gray-200">Positionner les produits/services</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                            <span className="text-red-400 font-bold text-xl">•</span>
                            <span className="text-gray-200">Allouer les ressources efficacement</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-orange-300 font-bold text-xl">•</span>
                            <span className="text-gray-200">Mettre en place des KPI</span>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="text-red-300 font-bold text-xl">•</span>
                            <span className="text-gray-200">Anticiper & saisir les opportunités</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slide0;