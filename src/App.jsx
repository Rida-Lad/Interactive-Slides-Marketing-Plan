import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slide0 from './Slide0.jsx';
import Slide00 from './Slide00.jsx';
import Slide1 from './Slide1.jsx';
import Slide2 from './Slide2.jsx';
import Slide4 from './Slide4.jsx';
import Slide5 from './Slide5.jsx';
import Slide6 from './Slide6.jsx';
import MarketingConclusion from './Slide3.jsx';
import BgAnimation from './BgAnimation.jsx';
import Slide7 from './Slide7.jsx';


const MarketingSlides = () => {
  const slides = [
    {
      title: "Plan Marketing",
      content: <Slide7 />,

    },
    {
      title: "Liste des axes",
      subtitle: "Un aperçu des thèmes abordés",
      accent: "Un plan marketing est essentiel pour guider les actions d'une entreprise vers ses objectifs.",
      content: <Slide00 />,
    },
    {
      title: "Définition & Objectifs",
      content: <Slide0 />,
    },
    {
      title: "Composantes clés",
      subtitle: "Les piliers d'un plan marketing efficace",
      content: <Slide1 />,
      accent: "Il doit être mis à jour régulièrement pour s'adapter aux évolutions du marché et aux performances de l'entreprise",
    },
    {
      title: "Marketing Digital vs Traditionnel",
      content: <Slide2 />,
    },
    {
      title: "Tendances actuelles & Branding",
      subtitle: "L'importance de l'image de marque dans le marketing moderne",
      content: <Slide4 />
    },
    {
      title: "Apple vs Samsung",
      subtitle: "Comparaison des stratégies marketing de deux géants technologiques",
      content: <Slide6 />
    },
    {
      title: "Cas d'étude : INWI",
      subtitle: "Analyse du plan marketing d'une entreprise marocaine",
      content: <Slide5 />
    },
    {
      title: "Conclusion",
      content: <MarketingConclusion />,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;


  return (
    <>
      <BgAnimation />
      <div className="w-full h-screen text-white overflow-hidden relative">
        <style jsx="true">{`
        .slide-container {
          transform: translateX(-${currentSlide * 100}%);
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .slide {
            animation: slideIn 0.8s ease-out;
            }
            
            .slide.active .slide-title {
              animation: titleSlideUp 1s ease-out 0.2s both;
              }
        
            .slide.active .slide-subtitle {
              animation: subtitleFadeIn 1s ease-out 0.4s both;
              }
      
              .slide.active .slide-content {
            animation: contentSlideIn 1s ease-out 0.6s both;
            }
        
        .slide.active .slide-accent {
          animation: accentGlow 1s ease-out 0.8s both;
          }
          
          @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes titleSlideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes subtitleFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
          }
        
          @keyframes contentSlideIn {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
            }
            
            @keyframes accentGlow {
              from { 
                opacity: 0; 
                transform: scale(0.8);
                text-shadow: 0 0 0 #ffd700;
                }
                to { 
                  opacity: 1; 
                  transform: scale(1);
            text-shadow: 0 0 20px #ffd700;
            }
        }
        
        .nav-btn {
          backdrop-filter: blur(10px);
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
          }
          
        .nav-btn:hover {
          background: rgba(255, 215, 0, 0.2);
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
          }
          
          .dot {
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.3);
          }
          
          .dot.active {
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
            transform: scale(1.2);
            }

            .progress-fill {
              width: ${progressPercentage}%;
              transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .progress-container {
              backdrop-filter: blur(10px);
              background: rgba(0, 0, 0, 0.2);
            }

            
            `}</style>
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="progress-container h-0.5 rounded-b-lg mx-4 mt-4 overflow-hidden">
            <div className="h-full relative">
              <div className="progress-fill h-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 relative">
                <div className="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-white/30 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mx-4 mt-2 text-sm">
            <span className="text-yellow-400 font-medium">
              Slide {currentSlide + 1} of {totalSlides}
            </span>
          </div>
        </div>
        {/* Slides Container */}
        <div className="flex h-full slide-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide flex-shrink-0 w-full h-full flex items-center justify-center ${index === currentSlide ? 'active' : ''
                }`}
            >
              <div className="text-center max-w-4xl px-8">
                <h3 style={{ fontFamily: 'Outfit' }} className="slide-title text-6xl font-bold mb-6 text-yellow-100 ">
                  {slide.title}
                </h3>
                <p className="slide-subtitle text-2xl mb-12 text-gray-300">
                  {slide.subtitle}
                </p>
                <div className="slide-content text-4xl mb-8 text-white">
                  {slide.content}
                </div>
                <div className="slide-accent text-xl font-semibold text-yellow-400">
                  {slide.accent}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="nav-btn absolute left-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full"
        >
          <ChevronLeft size={32} className="text-yellow-400" />
        </button>

        <button
          onClick={nextSlide}
          className="nav-btn absolute right-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full"
        >
          <ChevronRight size={32} className="text-yellow-400" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot w-4 h-4 rounded-full ${index === currentSlide ? 'active' : ''
                }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MarketingSlides;