import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import menswatches from "../assets/menswatches.jpg";
import womenswatches from "../assets/womenswatches.jpg";

const Categories = () => {
  const categories = [
    {
      id: 'men',
      title: "Men's Watches",
      subtitle: "Bold & Mechanical",
      description: "Designed for strength, accuracy, and presence. Discover engineered chronographs, dive timepieces, and automatic movements.",
<<<<<<< HEAD
      image: menswatches,
=======
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=800",
>>>>>>> 1bf5aaed763024024fddf3c3d944bac6daef4b6e
      target: "new-arrivals",
    },
    {
      id: 'women',
      title: "Women's Watches",
      subtitle: "Grace & Elegance",
      description: "Refining elegance with precious stones and jewelry-grade rose gold finishes. Timepieces crafted to grace any occasion.",
<<<<<<< HEAD
      image: womenswatches,
=======
      image: "https://images.unsplash.com/photo-1772442366425-62a79caca681?auto=format&fit=crop&q=80&w=800",
>>>>>>> 1bf5aaed763024024fddf3c3d944bac6daef4b6e
      target: "new-arrivals",
    }
  ];

  return (
    <section id="categories" className="py-24 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Curated Categories
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            Shop By <span className="text-gold-gradient font-normal">Category</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Two-Column split cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group h-[450px] sm:h-[500px] overflow-hidden border border-white/5 cursor-pointer"
            >
              {/* Image Frame */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-90"
                  loading="lazy"
                />
                {/* Dark Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/25 z-10 transition-colors duration-500 group-hover:bg-black/10" />
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 z-20 flex flex-col items-start justify-end text-left h-full">
                <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-semibold mb-2">
                  {category.subtitle}
                </span>
                <h3 className="text-3xl font-light text-white font-luxury-header mb-3 uppercase tracking-wider">
                  {category.title}
                </h3>
                <p className="text-neutral-300 font-light text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-poppins">
                  {category.description}
                </p>

                <Link
                  to={category.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  <button className="flex items-center gap-2 border-b border-gold/40 pb-2 text-gold text-xs tracking-[0.2em] font-semibold uppercase hover:text-white hover:border-white transition-all duration-300">
                    Explore Collection <FaArrowRight className="w-3 h-3" />
                  </button>
                </Link>
              </div>

              {/* Inner Decorative Borders */}
              <div className="absolute inset-4 border border-white/5 pointer-events-none group-hover:border-gold/20 transition-all duration-500 z-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
