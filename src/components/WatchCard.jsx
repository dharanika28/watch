import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaStar, FaShoppingBag } from 'react-icons/fa';

const WatchCard = ({ watch, onOpenDetails, actionText = "View Details" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const originalPrice = watch.price;
  const hasDiscount = watch.discount > 0;
  const discountedPrice = hasDiscount
    ? Math.round(originalPrice * (1 - watch.discount / 100))
    : originalPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="glassmorphism-card rounded-none group relative overflow-hidden flex flex-col h-full shadow-luxury"
    >
      {/* Card Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {watch.isNew && (
          <span className="bg-gold text-black text-[9px] font-bold tracking-widest uppercase px-3 py-1 font-poppins">
            NEW
          </span>
        )}
        {hasDiscount && (
          <span className="bg-neutral-850 border border-gold/30 text-gold text-[9px] font-bold tracking-widest uppercase px-3 py-1 font-poppins">
            {watch.discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-4 right-4 z-20 text-gold hover:text-white transition-colors duration-300 p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/5 hover:border-gold/30"
        aria-label="Add to Wishlist"
      >
        <motion.div whileTap={{ scale: 1.4 }}>
          {isWishlisted ? (
            <FaHeart className="w-4 h-4 text-red-500" />
          ) : (
            <FaRegHeart className="w-4 h-4" />
          )}
        </motion.div>
      </button>

      {/* Product Image Frame */}
      <div
        className="relative overflow-hidden w-full pt-[100%] bg-neutral-950 flex items-center justify-center cursor-pointer"
        onClick={() => onOpenDetails && onOpenDetails(watch)}
      >
        {/* Soft Gold Ambient Glow Behind Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 z-10" />

        <img
          src={watch.image}
          alt={`${watch.brand} ${watch.name}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 object-contain transition-transform duration-700 ease-out group-hover:scale-110 filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          loading="lazy"
        />
      </div>

      {/* Product Meta details */}
      <div className="p-6 flex flex-col flex-grow bg-neutral-900/40">
        <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase block mb-1">
          {watch.brand}
        </span>
        <h4
          onClick={() => onOpenDetails && onOpenDetails(watch)}
          className="text-lg text-white font-light font-luxury-header mb-2 hover:text-gold transition-colors duration-300 cursor-pointer line-clamp-1"
        >
          {watch.name}
        </h4>

        {/* Ratings display */}
        <div className="flex items-center space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(watch.rating) ? 'text-gold' : 'text-neutral-700'
              }`}
            />
          ))}
          <span className="text-[10px] text-neutral-500 font-light ml-1">
            ({watch.rating})
          </span>
        </div>

        <p className="text-neutral-400 font-light text-xs leading-relaxed mb-4 line-clamp-2">
          {watch.description}
        </p>

        {/* Price & Action button */}
        <div className="mt-auto pt-4 border-t border-neutral-900/60 flex items-center justify-between">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-neutral-500 text-[10px] line-through font-light leading-none">
                ${originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-white text-base font-semibold tracking-wider font-poppins">
              ${discountedPrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => onOpenDetails && onOpenDetails(watch)}
            className="flex items-center gap-1.5 px-4 py-2 border border-gold/40 text-gold text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300 hover:bg-gold hover:text-black hover:border-gold rounded-none"
          >
            <FaShoppingBag className="w-2.5 h-2.5" />
            {actionText}
          </button>
        </div>
      </div>

      {/* Decorative Gold Hover Glow Border bottom */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default WatchCard;
