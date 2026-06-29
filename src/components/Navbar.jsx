import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHeart, FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Categories', target: 'categories' },
    { name: 'Brands', target: 'brands' },
    { name: 'New Arrivals', target: 'new-arrivals' },
    { name: 'Discount', target: 'discount' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'glassmorphism py-4 shadow-luxury'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="cursor-pointer group flex flex-col"
        >
          <span className="text-2xl md:text-3xl font-light tracking-[0.3em] text-white group-hover:text-gold transition-colors duration-300 font-luxury-header">
            LUXYRA
          </span>
          <span className="text-[9px] tracking-[0.55em] text-gold uppercase mt-0.5 font-light">
            Haute Horlogerie
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  activeClass="text-gold active-link"
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={500}
                  className="cursor-pointer text-sm text-neutral-300 hover:text-gold tracking-widest uppercase transition-colors duration-300 relative py-2 group font-light"
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center space-x-6 pl-4 border-l border-neutral-800">
            <button
              className="text-neutral-300 hover:text-gold transition-colors relative"
              aria-label="Wishlist"
            >
              <FaHeart className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 bg-gold text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button
              className="text-neutral-300 hover:text-gold transition-colors relative"
              aria-label="Cart"
            >
              <FaShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 bg-gold text-black text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            className="text-neutral-300 hover:text-gold transition-colors relative"
            aria-label="Wishlist Mobile"
          >
            <FaHeart className="w-[17px] h-[17px]" />
          </button>
          <button
            className="text-neutral-300 hover:text-gold transition-colors relative"
            aria-label="Cart Mobile"
          >
            <FaShoppingBag className="w-[17px] h-[17px]" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gold transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-neutral-950/95 border-b border-gold/10 backdrop-blur-lg overflow-hidden absolute top-full left-0"
          >
            <ul className="flex flex-col space-y-6 px-8 py-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    activeClass="text-gold"
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-base tracking-widest text-neutral-300 hover:text-gold uppercase transition-colors font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
