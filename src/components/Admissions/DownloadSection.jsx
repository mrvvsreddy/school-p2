import React from 'react';
import { Download, FileText, Loader2 } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const DownloadSection = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const documents = data.documents || [];

    if (documents.length === 0) return null;

    const handleDownload = (url) => {
        if (url && url !== '#') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="text-center mb-16">
                    {tagline && <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                    {title && <h2 className="text-4xl font-serif font-bold text-gray-900">{title}</h2>}
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {documents.map((doc, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="group">
                            <div
                                onClick={() => handleDownload(doc.url)}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-start relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-primary/10"></div>

                                <div className="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    <FileText size={28} />
                                </div>

                                {doc.title && <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{doc.title}</h3>}
                                {doc.desc && <p className="text-sm text-gray-500 mb-8 leading-relaxed">{doc.desc}</p>}

                                <div className="mt-auto w-full flex items-center justify-between pt-6 border-t border-gray-100">
                                    {doc.size && <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{doc.size}</span>}
                                    <button
                                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDownload(doc.url);
                                        }}
                                    >
                                        <Download size={18} />
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
