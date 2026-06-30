import { motion } from 'framer-motion';
import showroom from '../assets/showroom.jpg';

const BrandIntro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-neutral-900"
    >
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-neutral-900/50 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Title for accessibility and screen readers */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Our Heritage
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            About <span className="text-gold-gradient font-normal">LUXYRA</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Premium Craftsmanship Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              variants={itemVariants}
              className="relative p-3 border border-gold/15"
            >
              {/* Gold borders decoration */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-gold" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-gold" />

              <img
                src={showroom}
                alt="Swiss Watchmaking Craftsmanship"
                className="w-full h-[350px] md:h-[480px] object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right: Narrative & Stats */}
          <motion.div variants={itemVariants} className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light text-white mb-6 font-luxury-header leading-tight">
              Elegance In Every Detail, Precision In Every Second
            </h3>

            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-6 font-poppins">
              LUXYRA is a luxury watch showcase platform that allows users to explore premium watch collections from world-renowned brands. Every timepiece reflects precision engineering, timeless elegance, and exceptional craftsmanship.
            </p>

            <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-10 font-poppins">
              For generations, Swiss watchmakers have pushed the boundaries of micromechanics. We bring these extraordinary horizontal legacies straight to collectors who appreciate the weight of history, the brilliance of design, and the accuracy of automatic movements.
            </p>

            {/* Metrics Display */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-900">
              <div>
                <span className="block text-2xl md:text-3xl font-light text-gold font-luxury-header">100%</span>
                <span className="block text-[10px] tracking-widest text-neutral-500 uppercase mt-1">Swiss Crafted</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-light text-gold font-luxury-header">12+</span>
                <span className="block text-[10px] tracking-widest text-neutral-500 uppercase mt-1">Iconic Models</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-light text-gold font-luxury-header">6</span>
                <span className="block text-[10px] tracking-widest text-neutral-500 uppercase mt-1">Elite Brands</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandIntro;
