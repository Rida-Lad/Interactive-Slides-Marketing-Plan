import { useRef, useState, useEffect } from "react";
import { Target, TrendingUp, Users, Lightbulb, Zap, DollarSign, BarChart3 } from "lucide-react";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const components = [
    {
      title: "Résumé analytique",
      description: "Vue d'ensemble du plan et des grandes lignes stratégiques",
      accent: "emerald",
      icon: Target,
      pattern: "dots"
    },
    {
      title: "Analyse de la situation",
      description: "Interne : forces/faiblesses | Externe : PESTEL, SWOT, concurrents, clients",
      accent: "violet",
      icon: TrendingUp,
      pattern: "grid"
    },
    {
      title: "Objectifs SMART",
      description: "Clairs, mesurables, atteignables, réalistes, temporels",
      accent: "cyan",
      icon: Target,
      pattern: "waves"
    },
    {
      title: "Stratégies marketing",
      description: "STP : Segmentation, ciblage, positionnement | Mix marketing (4P)",
      accent: "rose",
      icon: Users,
      pattern: "dots"
    },
    {
      title: "Tactiques & actions",
      description: "Campagnes, promotions, actions concrètes à mettre en œuvre",
      accent: "amber",
      icon: Lightbulb,
      pattern: "grid"
    },
    {
      title: "Budget marketing",
      description: "Répartition des ressources financières",
      accent: "indigo",
      icon: DollarSign,
      pattern: "waves"
    },
    {
      title: "Contrôle & KPI",
      description: "Mesure des résultats et ajustements nécessaires",
      accent: "teal",
      icon: BarChart3,
      pattern: "dots"
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % components.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [components.length]);

  const getAccentClasses = (accent) => {
    const classes = {
      emerald: {
        bg: "from-emerald-400/20 via-emerald-500/10 to-emerald-600/20",
        border: "border-emerald-400/30",
        text: "text-emerald-300",
        icon: "from-emerald-400 to-emerald-600",
        accent: "from-emerald-400 via-emerald-500 to-emerald-600",
        glow: "shadow-emerald-500/20"
      },
      violet: {
        bg: "from-violet-400/20 via-violet-500/10 to-violet-600/20",
        border: "border-violet-400/30",
        text: "text-violet-300",
        icon: "from-violet-400 to-violet-600",
        accent: "from-violet-400 via-violet-500 to-violet-600",
        glow: "shadow-violet-500/20"
      },
      cyan: {
        bg: "from-cyan-400/20 via-cyan-500/10 to-cyan-600/20",
        border: "border-cyan-400/30",
        text: "text-cyan-300",
        icon: "from-cyan-400 to-cyan-600",
        accent: "from-cyan-400 via-cyan-500 to-cyan-600",
        glow: "shadow-cyan-500/20"
      },
      rose: {
        bg: "from-rose-400/20 via-rose-500/10 to-rose-600/20",
        border: "border-rose-400/30",
        text: "text-rose-300",
        icon: "from-rose-400 to-rose-600",
        accent: "from-rose-400 via-rose-500 to-rose-600",
        glow: "shadow-rose-500/20"
      },
      amber: {
        bg: "from-amber-400/20 via-amber-500/10 to-amber-600/20",
        border: "border-amber-400/30",
        text: "text-amber-300",
        icon: "from-amber-400 to-amber-600",
        accent: "from-amber-400 via-amber-500 to-amber-600",
        glow: "shadow-amber-500/20"
      },
      indigo: {
        bg: "from-indigo-400/20 via-indigo-500/10 to-indigo-600/20",
        border: "border-indigo-400/30",
        text: "text-indigo-300",
        icon: "from-indigo-400 to-indigo-600",
        accent: "from-indigo-400 via-indigo-500 to-indigo-600",
        glow: "shadow-indigo-500/20"
      },
      teal: {
        bg: "from-teal-400/20 via-teal-500/10 to-teal-600/20",
        border: "border-teal-400/30",
        text: "text-teal-300",
        icon: "from-teal-400 to-teal-600",
        accent: "from-teal-400 via-teal-500 to-teal-600",
        glow: "shadow-teal-500/20"
      }
    };
    return classes[accent] || classes.emerald;
  };

  const getPatternSVG = (pattern, accent) => {
    const color = accent === 'emerald' ? '#10b981' : 
                  accent === 'violet' ? '#8b5cf6' :
                  accent === 'cyan' ? '#06b6d4' :
                  accent === 'rose' ? '#f43f5e' :
                  accent === 'amber' ? '#f59e0b' :
                  accent === 'indigo' ? '#6366f1' : '#14b8a6';

    if (pattern === 'dots') {
      return `data:image/svg+xml,${encodeURIComponent(`
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="30" cy="10" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="50" cy="10" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="10" cy="30" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="30" cy="30" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="50" cy="30" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="10" cy="50" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="30" cy="50" r="1.5" fill="${color}" opacity="0.1"/>
          <circle cx="50" cy="50" r="1.5" fill="${color}" opacity="0.1"/>
        </svg>
      `)}`;
    }
    
    if (pattern === 'grid') {
      return `data:image/svg+xml,${encodeURIComponent(`
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20h40M20 0v40" stroke="${color}" stroke-width="0.5" opacity="0.1"/>
        </svg>
      `)}`;
    }
    
    return `data:image/svg+xml,${encodeURIComponent(`
      <svg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10c10-5 20-5 30 0s20 5 30 0s20-5 30 0s20 5 30 0" stroke="${color}" stroke-width="1" fill="none" opacity="0.1"/>
      </svg>
    `)}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto relative p-4 rounded-3xl">
      {/* Carousel container */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar scroll-smooth space-x-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {components.map((component, index) => {
          const IconComponent = component.icon;
          const accentClasses = getAccentClasses(component.accent);
          
          return (
            <div
              key={index}
              className="flex-shrink-0 w-72 snap-start"
            >
              <div
                className={`
                  relative
                  p-6 
                  rounded-2xl 
                  backdrop-blur-lg
                  bg-gradient-to-br ${accentClasses.bg}
                  h-64
                  transition-colors 
                  duration-300
                  shadow-lg ${accentClasses.glow}
                  overflow-hidden
                `}
                style={{
                  backgroundImage: `url("${getPatternSVG(component.pattern, component.accent)}")`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: component.pattern === 'waves' ? '100px 20px' : '40px 40px'
                }}
              >
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg"></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`
                    w-12 h-12 rounded-xl 
                    bg-gradient-to-br ${accentClasses.icon}
                    flex items-center justify-center 
                    shadow-md
                    rotate-6
                  `}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`
                    px-3 py-1 
                    rounded-full 
                    bg-gradient-to-r ${accentClasses.accent}
                    text-white text-xs font-semibold
                    shadow-md
                  `}>
                    {index + 1}/7
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className={`
                    text-xl font-bold leading-tight
                    ${accentClasses.text}
                  `}>
                    {component.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {component.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className={`
                        h-full bg-gradient-to-r ${accentClasses.accent}
                        rounded-full
                      `}
                      style={{ width: `${((index + 1) / components.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom accent */}
      <div className="mt-4 flex justify-center">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Carousel;