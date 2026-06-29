import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      {/* Outer Rotating Gold Ring */}
      <motion.div
        className="w-24 h-24 border-2 border-transparent border-t-gold rounded-full mb-8"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear"
        }}
      />

      {/* Inner Pulsing Brand Logo */}
      <div className="absolute flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: [0, 1, 0.5, 1], letterSpacing: "0.4em" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="text-white text-3xl md:text-4xl font-light tracking-[0.4em] font-luxury-header select-none"
        >
          LUXYRA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gold text-xs tracking-[0.6em] uppercase mt-2 select-none"
        >
          Haute Horlogerie
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
