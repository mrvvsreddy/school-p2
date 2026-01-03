import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const NewsSection = ({ data, loading, error }) => {
    // Show error state
    if (error) {
        return (
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Failed to Load News Section</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </section>
        );
    }

    // If loading or no data, don't render
    if (loading || !data) return null;

    const news = data.items;
    if (!news || news.length === 0) return null;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    {data.tagline && (
                        <span className="text-edu-red font-bold uppercase tracking-widest text-xs">{data.tagline}</span>
                    )}
                    {data.title && (
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-edu-dark mt-4">
                            {data.title}
                        </h2>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.div
                            key={item.id || index}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden mb-6 rounded-sm h-64">
                                {item.image && (
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                )}
                                {item.date && item.month && (
                                    <div className="absolute top-4 left-4 bg-white p-3 text-center shadow-lg rounded-sm">
                                        <span className="block text-2xl font-bold font-serif leading-none">{item.date}</span>
                                        <span className="block text-xs uppercase font-bold text-gray-400">{item.month}</span>
                                    </div>
                                )}
                            </div>
                            {item.title && (
                                <h3 className="text-xl font-bold font-serif text-edu-dark mb-2 group-hover:text-edu-red transition-colors">{item.title}</h3>
                            )}
                            {item.desc && (
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
