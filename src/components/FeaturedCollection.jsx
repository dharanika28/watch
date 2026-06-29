import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaStar, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { watches } from '../data/watches';
import WatchCard from './WatchCard';

const FeaturedCollection = () => {
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Filter 6 featured luxury watches
  const featuredWatches = watches.filter(watch => watch.featured).slice(0, 6);

  const handleOpenDetails = (watch) => {
    setSelectedWatch(watch);
    setIsAddedToCart(false);
  };

  const handleCloseDetails = () => {
    setSelectedWatch(null);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
      setSelectedWatch(null);
    }, 1500);
  };

  return (
    <section id="featured" className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Curated Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            Featured <span className="text-gold-gradient font-normal">Collection</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWatches.map((watch) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              onOpenDetails={handleOpenDetails}
              actionText="Details"
            />
          ))}
        </div>
      </div>

      {/* Reusable Premium Details Modal */}
      <AnimatePresence>
        {selectedWatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Overlay Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-neutral-950 border border-gold/25 max-w-4xl w-full p-6 md:p-10 relative z-10 rounded-none shadow-gold-glow flex flex-col md:flex-row gap-8 overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 text-neutral-400 hover:text-gold transition-colors z-20"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              {/* Left Column: Watch Showcase Image */}
              <div className="flex-1 bg-neutral-900/50 flex items-center justify-center p-4 md:p-8 relative border border-white/5 min-h-[300px]">
                <img
                  src={selectedWatch.image}
                  alt={selectedWatch.name}
                  className="w-full h-full object-contain max-h-[380px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* Right Column: Watch details and purchasing prompts */}
              <div className="flex-1 flex flex-col justify-center text-left">
                <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-2 block">
                  {selectedWatch.brand}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white font-luxury-header mb-4 leading-tight">
                  {selectedWatch.name}
                </h3>

                {/* Rating & reviews mock */}
                <div className="flex items-center space-x-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(selectedWatch.rating) ? 'text-gold' : 'text-neutral-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-neutral-400 font-light ml-1">
                    ({selectedWatch.rating} / 5.0 Rating)
                  </span>
                </div>

                <div className="w-full h-[1px] bg-neutral-900 my-4" />

                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6 font-poppins">
                  {selectedWatch.description}
                </p>

                {/* Specs mock list */}
                <div className="grid grid-cols-2 gap-4 text-xs font-light tracking-wide text-neutral-400 mb-8 font-poppins">
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Case diameter</span>
                    <span className="text-white">40 mm</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Material</span>
                    <span className="text-white">18ct Gold / Steel</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Movement</span>
                    <span className="text-white">Swiss Automatic</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Water resistance</span>
                    <span className="text-white">100m (330ft)</span>
                  </div>
                </div>

                {/* Price block and Button */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-neutral-500 text-xs font-light">Price</span>
                    <span className="text-white text-2xl font-semibold tracking-wider font-poppins">
                      ${(selectedWatch.price * (1 - (selectedWatch.discount || 0) / 100)).toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={isAddedToCart}
                    className={`btn-ripple px-8 py-4 text-xs font-bold tracking-widest uppercase rounded-none transition-all duration-300 ${
                      isAddedToCart
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gold hover:bg-gold-light text-black shadow-gold-soft'
                    } flex items-center gap-2`}
                  >
                    {isAddedToCart ? (
                      <>
                        <FaCheck className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <FaShoppingCart className="w-3.5 h-3.5" /> Add To Bag
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedCollection;
