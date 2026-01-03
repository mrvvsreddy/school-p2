import React, { useState, useEffect } from 'react';
import { ChevronRight, AlertTriangle } from 'lucide-react';

const Academies = ({ data, loading, error }) => {
    // Show error state
    if (error) {
        return (
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Failed to Load Academies Section</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </section>
        );
    }

    // If loading or no data, don't render
    if (loading || !data) return null;

    const academies = data.academies;
    if (!academies || academies.length === 0) return null;

    const [activeId, setActiveId] = useState(academies[1]?.id || academies[0]?.id);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotation logic
    useEffect(() => {
        if (isPaused || academies.length === 0) return;

        const interval = setInterval(() => {
            setActiveId(prevId => {
                const currentIndex = academies.findIndex(a => a.id === prevId);
                const nextIndex = (currentIndex + 1) % academies.length;
                return academies[nextIndex].id;
            });
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, academies]);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content List */}
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {data.tagline && (
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{data.tagline}</span>
                        )}
                        {data.title && (
                            <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900">
                                {data.title}
                            </h2>
                        )}

                        <div className="space-y-4">
                            {academies.map((academy) => (
                                <div
                                    key={academy.id}
                                    className={`group flex items-center justify-between p-6 border-b transition-all duration-300 cursor-pointer ${activeId === academy.id ? 'bg-white shadow-lg border-l-4 border-l-primary rounded-sm' : 'border-gray-200 hover:bg-white hover:pl-8'}`}
                                    onClick={() => setActiveId(academy.id)}
                                >
                                    <div className="flex flex-col">
                                        <div className="flex items-baseline gap-6">
                                            <span className={`text-xl font-serif font-bold transition-colors ${activeId === academy.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>{academy.id}.</span>
                                            <h3 className={`text-xl font-bold font-serif ${activeId === academy.id ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                                {academy.name}
                                            </h3>
                                        </div>
                                        {/* Brief Description on Active */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === academy.id ? 'max-h-20 opacity-100 mt-2 ml-12' : 'max-h-0 opacity-0'}`}>
                                            <p className="text-sm text-gray-500 font-medium">{academy.description}</p>
                                        </div>
                                    </div>

                                    <div className={`transition-transform duration-300 ${activeId === academy.id ? 'rotate-90 text-primary' : 'text-gray-300 group-hover:text-primary'}`}>
                                        <ChevronRight size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Images (Dynamic with Fade) */}
                    <div className="relative h-[600px] hidden lg:block rounded-sm overflow-hidden shadow-2xl">
                        {academies.map((academy) => (
                            <div
                                key={academy.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeId === academy.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <img
                                    src={academy.image}
                                    alt={academy.name}
                                    className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 max-w-xs shadow-xl border-l-4 border-accent animate-fade-in-up">
                                    <h4 className="text-lg font-serif font-bold text-gray-900 mb-1">{academy.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold text-primary">Department</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Academies;
