import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Discount = () => {
  // Set target countdown date (e.g. 5 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="discount" className="py-24 bg-black border-t border-neutral-900 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gold/20 p-8 md:p-16 text-center relative bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold" />

          {/* Section Header & Badge */}
          <span className="inline-block bg-gold text-black text-[10px] font-bold tracking-[0.3em] uppercase px-5 py-1.5 mb-6 font-poppins">
            Limited Collection Exclusive
          </span>

          <h2 className="text-3xl md:text-5xl font-light text-white font-luxury-header mb-4 uppercase tracking-wide">
            Exclusive Luxury <span className="text-gold-gradient font-normal">Offers</span>
          </h2>
          
          <p className="text-neutral-400 font-light text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-poppins">
            Enjoy premium watches with limited-time offers crafted exclusively for discerning collectors. Elevate your horological investment.
          </p>

          {/* Countdown Clock Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto mb-12">
            {[
              { label: 'Days', val: timeLeft.days },
              { label: 'Hours', val: timeLeft.hours },
              { label: 'Minutes', val: timeLeft.minutes },
              { label: 'Seconds', val: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-white/5 py-4 px-2 flex flex-col justify-center items-center shadow-luxury relative group hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-2xl sm:text-3xl font-light text-gold font-luxury-header mb-1 tracking-wider">
                  {formatNumber(item.val)}
                </span>
                <span className="text-[9px] tracking-widest text-neutral-500 uppercase font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-ripple px-10 py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold tracking-[0.2em] text-xs uppercase shadow-gold-soft rounded-none transition-transform duration-300"
          >
            Claim Offer
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Discount;
