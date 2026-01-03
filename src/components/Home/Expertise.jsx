import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { AlertTriangle } from 'lucide-react';

const Expertise = ({ data, loading, error }) => {
    // Show error state
    if (error) {
        return (
            <section className="py-24 bg-edu-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Failed to Load Expertise Section</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </section>
        );
    }

    // If loading or no data, don't render
    if (loading || !data) return null;

    const categories = data.categories;
    const partners = data.partners;
    if (!categories || categories.length === 0) return null;

    const [activeId, setActiveId] = useState(categories[1]?.id || categories[0]?.id);

    return (
        <section className="py-24 bg-edu-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    {data.tagline && (
                        <span className="text-edu-red font-bold uppercase tracking-widest text-xs">{data.tagline}</span>
                    )}
                    {data.title && (
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-edu-dark mt-4">
                            {data.title}
                        </h2>
                    )}
                </div>

                <div className="space-y-2">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className={`border-b border-gray-200 transition-colors duration-300 ${activeId === item.id ? 'bg-edu-red text-white' : 'bg-white hover:bg-gray-50'}`}
                            onMouseEnter={() => setActiveId(item.id)}
                        >
                            <div className="flex items-center justify-between p-8 cursor-pointer">
                                <div className="flex items-center gap-8">
                                    <span className={`text-4xl font-serif font-bold opacity-30 ${activeId === item.id ? 'text-white' : 'text-gray-300'}`}>{item.id}</span>
                                    <h3 className="text-xl lg:text-2xl font-bold font-serif">{item.title}</h3>
                                </div>
                                <div className="hidden md:block">
                                    {activeId === item.id ? <HiMinus size={24} /> : <HiPlus size={24} />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-8 pb-8 pl-[6.5rem] text-sm lg:text-base opacity-80 max-w-2xl">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Logos underneath */}
                {partners && partners.length > 0 && (
                    <div className="mt-20 flex flex-wrap justify-between items-center gap-8 grayscale opacity-50">
                        {partners.map((partner, index) => (
                            <img key={index} src={partner.logo} alt={partner.name} className="h-8 md:h-10" />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Expertise;
