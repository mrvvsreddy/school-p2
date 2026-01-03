import React from 'react';
import { HiPlay } from 'react-icons/hi';
import { AlertTriangle } from 'lucide-react';

const CampusSection = ({ data, loading, error }) => {
    // Show error state
    if (error) {
        return (
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Failed to Load Campus Section</h2>
                    <p className="text-gray-600">{error}</p>
                </div>
            </section>
        );
    }

    // If loading or no data, don't render
    if (loading || !data) return null;

    const backgroundImage = data.backgroundImage;
    if (!backgroundImage) return null;

    return (
        <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax effect placeholder (fixed attachment) */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Play Button */}
            {data.showPlayButton && (
                <div className="relative z-10">
                    <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-edu-red shadow-2xl hover:scale-110 transition-transform duration-300 group">
                        <HiPlay size={36} className="ml-2 group-hover:text-black transition-colors" />
                    </button>
                </div>
            )}

        </section>
    );
};

export default CampusSection;
