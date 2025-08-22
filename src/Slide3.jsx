import React from 'react';

const MarketingConclusion = () => {
  return (
    <div className="max-w-[1500px] max-h-[1000px] mx-auto p-8 rounded-3xl bg-orange-700/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,140,0,0.3)] overflow-auto">
      <p className="text-white text-xl mb-6 leading-relaxed">
        Le <strong className="text-amber-400">plan marketing</strong> n'est pas un simple document : c'est un <strong className="text-amber-400">outil stratégique vivant </strong>
        qui oriente toutes les actions marketing en assurant <strong className="text-amber-400">cohérence, efficacité et performance</strong>.
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start">
          <span className="text-amber-500 text-2xl mr-2">•</span>
          <span className="text-white text-lg">Mieux <strong className="text-amber-300">connaître son marché</strong> et ses clients</span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 text-2xl mr-2">•</span>
          <span className="text-white text-lg">Agir de façon <strong className="text-orange-400">structurée et ciblée</strong></span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 text-2xl mr-2">•</span>
          <span className="text-white text-lg">S'adapter rapidement aux <strong className="text-red-400">opportunités</strong> et <strong className="text-red-500">menaces</strong></span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 text-2xl mr-2">•</span>
          <span className="text-white text-lg">Mesurer les résultats pour <strong className="text-orange-300">améliorer continuellement</strong> ses actions</span>
        </li>
      </ul>

      <div className="rounded-xl p-6 text-center mb-8 bg-gradient-to-r from-amber-900/40 via-red-900/30 to-orange-900/40 border border-amber-700/50 shadow-inner">
        <p className="text-2xl italic text-amber-100 leading-normal">
          <strong className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Un bon plan marketing</strong>, c'est plus que des idées : c'est une vision claire,
          des décisions concrètes et des actions mesurables.
        </p>
      </div>
    </div>
  );
};

export default MarketingConclusion;