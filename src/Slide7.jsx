import React, { useState, useEffect } from "react";
import { SiGoogle,SiOpenai } from 'react-icons/si';
import { GoCopilot } from "react-icons/go";

const Slide7 = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentNameIndex, setCurrentNameIndex] = useState(0);

    const teamMembers = [
        { name: "Insaf Dakne", role: "Marketing Traditionnel vs Digital" },
        { name: "Lamiae Ait-Zidane", role: "Dernieres tendances & Branding" },
        { name: "Meriem Anlouf", role: "Apple vs Samsung" },
        { name: "Hajar Bensika", role: "Plan marketing chez INWI" }
    ];

    // Animate on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Cycle through names for transition effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNameIndex((prev) => (prev + 1) % teamMembers.length);
        }, 2500); // Change every 2.5 seconds

        return () => clearInterval(interval);
    }, [teamMembers.length]);

    return (
        <div className="w-[900px] h-[550px] rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl relative font-extrabold text-6xl">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>

            {/* Content Container */}
            <div className="relative z-10 p-8 h-full flex flex-col">

                {/* Team Grid - Animated Cards */}
                <div className="grid grid-cols-2 gap-6 mb-8 flex-grow">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl border transition-all duration-700 transform hover:scale-[1.02] ${index === currentNameIndex
                                ? "border-amber-400/60 shadow-lg shadow-amber-500/20 scale-[1.01]"
                                : "border-amber-500/20"
                                } ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-500 ${index === currentNameIndex
                                        ? "bg-gradient-to-r from-amber-300 to-orange-400 scale-110"
                                        : "bg-gradient-to-r from-amber-400 to-orange-500"
                                        }`}>
                                        <span className="text-white font-bold text-xl">
                                            {member.name.split(" ").map(n => n[0]).join("")}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-amber-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-amber-400/80 mt-1">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                                <div className={`h-px w-full bg-gradient-to-r from-transparent to-transparent my-3 transition-all duration-500 ${index === currentNameIndex
                                    ? "via-amber-400/50"
                                    : "via-amber-500/30"
                                    }`}></div>

                                {/* Highlight indicator */}
                                <div className={`w-full h-1 bg-gradient-to-r from-amber-400/20 via-amber-300/40 to-amber-400/20 rounded-full transition-all duration-500 ${index === currentNameIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                    }`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Name Display */}
                <div className="mb-4 text-center">
                    <div className="relative h-8 overflow-hidden">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${index === currentNameIndex
                                    ? "transform translate-y-0 opacity-100"
                                    : index === (currentNameIndex + teamMembers.length - 1) % teamMembers.length
                                        ? "transform -translate-y-8 opacity-0"
                                        : "transform translate-y-8 opacity-0"
                                    }`}
                            >
                                <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                                    En vedette: {member.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Section */}
                <div className="grid grid-cols-3 gap-4">
                    {/* Professor */}
                    <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 backdrop-blur-sm rounded-lg border border-amber-500/20 p-4 justify-center items-center flex flex-col">
                        <p className="text-sm text-amber-400/80 mb-2">Encadré par</p>
                        <p className="text-base font-bold text-amber-300">Prof. Mohamed RADI</p>
                    </div>

                    {/* Date */}
                    <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 backdrop-blur-sm rounded-lg border border-amber-500/20 p-4 flex flex-col items-center justify-center">
                        <p className="text-sm text-amber-400/80 mb-2">Présenté le</p>
                        <p className="text-base font-bold text-amber-300">10 Juin 2025</p>
                    </div>

                    {/* AI Tools */}

                    <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 backdrop-blur-sm rounded-lg border border-amber-500/20 p-4">
                        <p className="text-sm text-amber-400/80 mb-3 text-center">Assisté par</p>
                        <div className="flex justify-center space-x-4">
                            <div className="flex flex-col items-center">
                                <SiGoogle className="w-10 h-10 text-amber-400" />
                                <span className="text-xs text-amber-300/80 mt-1">Gemini</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <GoCopilot  className="w-10 h-10 text-amber-400" />
                                <span className="text-xs text-amber-300/80 mt-1">Copilot</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiOpenai className="w-10 h-10 text-amber-400" />
                                <span className="text-xs text-amber-300/80 mt-1">OpenAI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide7;