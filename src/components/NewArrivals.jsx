import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { watches } from '../data/watches';
import WatchCard from './WatchCard';
import { FaTimes, FaStar, FaShoppingCart, FaCheck } from 'react-icons/fa';

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Filter watches that are marked as new arrivals
  const newArrivals = watches.filter(watch => watch.isNew);

  // Filter based on active category tab
  const filteredArrivals = activeTab === 'All'
    ? newArrivals
    : newArrivals.filter(watch => watch.category === activeTab);

  const tabs = ['All', 'Men', 'Women'];

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
    <section id="new-arrivals" className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Latest Releases
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            New <span className="text-gold-gradient font-normal">Arrivals</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center space-x-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none relative border ${
                activeTab === tab
                  ? 'border-gold text-gold bg-gold/5'
                  : 'border-transparent text-neutral-400 hover:text-white hover:border-neutral-800'
              }`}
            >
              {tab === 'All' ? 'All Releases' : `${tab}'s Collection`}
            </button>
          ))}
        </div>

        {/* Cards Grid with layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredArrivals.map((watch) => (
              <motion.div
                layout
                key={watch.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <WatchCard
                  watch={watch}
                  onOpenDetails={handleOpenDetails}
                  actionText="Buy Now"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details/Buy Modal for New Arrivals */}
      <AnimatePresence>
        {selectedWatch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseDetails}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-neutral-950 border border-gold/25 max-w-4xl w-full p-6 md:p-10 relative z-10 rounded-none shadow-gold-glow flex flex-col md:flex-row gap-8 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={handleCloseDetails}
                className="absolute top-4 right-4 text-neutral-400 hover:text-gold transition-colors z-20"
                aria-label="Close modal"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="flex-1 bg-neutral-900/50 flex items-center justify-center p-4 md:p-8 relative border border-white/5 min-h-[300px]">
                <img
                  src={selectedWatch.image}
                  alt={selectedWatch.name}
                  className="w-full h-full object-contain max-h-[380px] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>

              <div className="flex-1 flex flex-col justify-center text-left">
                <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-2 block">
                  {selectedWatch.brand}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white font-luxury-header mb-4 leading-tight">
                  {selectedWatch.name}
                </h3>

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

                <div className="grid grid-cols-2 gap-4 text-xs font-light tracking-wide text-neutral-400 mb-8 font-poppins">
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Case diameter</span>
                    <span className="text-white">39 mm</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Material</span>
                    <span className="text-white">Everose Gold / Steel</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Movement</span>
                    <span className="text-white">Automatic Chronometer</span>
                  </div>
                  <div>
                    <span className="text-neutral-600 block uppercase text-[9px] tracking-widest">Power reserve</span>
                    <span className="text-white">70 Hours</span>
                  </div>
                </div>

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
                        <FaCheck className="w-3.5 h-3.5" /> Ordered
                      </>
                    ) : (
                      <>
                        <FaShoppingCart className="w-3.5 h-3.5" /> Purchase Now
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

export default NewArrivals;
