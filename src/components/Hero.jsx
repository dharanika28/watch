import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=1600"
          alt="Luxury Watch Background"
          className="w-full h-full object-cover opacity-35 object-center transform scale-105 filter blur-[2px]"
          loading="eager"
        />
        {/* Gradients to darken background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        {/* Pulsing subtle gold ambient glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[120px] animate-pulse-gold pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-24 pb-12 w-full">
        
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs md:text-sm font-semibold tracking-[0.4em] uppercase mb-4 block">
              Luxury Redefined
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight font-luxury-header tracking-wide"
          >
            Precision <br className="hidden md:inline" />
            <span className="text-gold-gradient font-normal italic">Perfected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-300 font-light text-sm md:text-base max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed font-poppins"
          >
            Discover timeless craftsmanship, premium collections, and iconic luxury watches engineered for elegance and excellence. Designed for those who command their own hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10"
          >
            <Link
              to="featured"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto btn-ripple px-8 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-semibold tracking-wider text-xs uppercase rounded-none transition-transform duration-300 hover:scale-105 shadow-gold-soft flex items-center justify-center gap-2">
                Explore Collection <FaArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>

            <Link
              to="new-arrivals"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:border-gold hover:text-gold transition-colors duration-300 font-semibold tracking-wider text-xs uppercase rounded-none">
                Shop Now
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Floating Product Image */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] flex items-center justify-center"
          >
            {/* Background Decorative Gold Ring */}
            <div className="absolute inset-0 rounded-full border border-gold/10 animate-pulse-gold pointer-events-none scale-90" />
            <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />

            {/* Glowing Backdrop */}
            <div className="absolute w-[200px] h-[200px] rounded-full bg-gold/10 filter blur-[60px]" />

            {/* Floating Luxury Watch Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800"
              alt="Featured Rolex Cosmograph Daytona"
              className="w-[85%] h-[85%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter select-none pointer-events-none rounded-full border border-gold/20 p-2 animate-float"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase font-light mb-2">
            Scroll Down
          </span>
          <div className="w-[20px] h-[35px] border border-neutral-600 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
