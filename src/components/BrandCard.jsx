import { motion } from 'framer-motion';

const BrandCard = ({ brand }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="glassmorphism-card p-8 text-center flex flex-col justify-center items-center h-full relative group cursor-pointer"
    >
      {/* Decorative inner border */}
      <div className="absolute inset-2 border border-white/5 pointer-events-none group-hover:border-gold/15 transition-all duration-300" />

      {/* Brand Emblem Logo representation */}
      <div className="w-16 h-16 rounded-full border border-gold/15 flex items-center justify-center text-gold text-2xl font-light font-luxury-header mb-6 bg-neutral-950 group-hover:border-gold group-hover:text-black group-hover:bg-gold transition-all duration-500">
        <span className="tracking-normal select-none">{brand.logo}</span>
      </div>

      {/* Brand Name */}
      <h3 className="text-xl text-white font-light font-luxury-header mb-3 tracking-widest uppercase">
        {brand.name}
      </h3>

      {/* Brand description text */}
      <p className="text-neutral-400 font-light text-xs leading-relaxed max-w-[240px] font-poppins">
        {brand.description}
      </p>

      {/* Bottom Gold Accent Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gold/30 group-hover:w-24 group-hover:bg-gold transition-all duration-500" />
    </motion.div>
  );
};

export default BrandCard;
