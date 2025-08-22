const Slide00 = () => {
    // Dummy marketing slide names
    const slideNames = [
        "Introduction",
        "Marketing Digital vs Traditionnel",
        "Tendances actuelles & Branding",
        "Apple vs Samsung (Deux entreprises étrangères)",
        "Plan marketing d'une entreprise marocaine (INWI)",
        "Conclusion & Ouverture"
    ];

    return (
        <div className="flex items-center justify-center w-[800px] h-[400px]">
            <div className="grid grid-cols-3 gap-8">
                {slideNames.map((name, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-amber-900/20 via-red-900/15 to-orange-900/25 backdrop-blur-2xl rounded-2xl border border-amber-900/30 relative shadow-[0_0_30px_rgba(255,140,0,0.15)] p-6 h-40 flex flex-col justify-center"
                    >


                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="mb-5">
                            </div>
                            <h2 className="text-2xl font-bold text-gray-100 mb-3">
                                <span className=" bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(245,158,11,0.4)]">
                                    {name}
                                </span>
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide00;