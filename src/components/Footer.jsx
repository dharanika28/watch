import { Link } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 2500);
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF className="w-3.5 h-3.5" />, link: "#", label: "Facebook" },
    { icon: <FaInstagram className="w-3.5 h-3.5" />, link: "#", label: "Instagram" },
    { icon: <FaTwitter className="w-3.5 h-3.5" />, link: "#", label: "Twitter" },
    { icon: <FaLinkedinIn className="w-3.5 h-3.5" />, link: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black border-t border-neutral-900 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative subtle ambient border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900 text-left">
        {/* Col 1: Branding and Socials */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer flex flex-col mb-6"
          >
            <span className="text-2xl font-light tracking-[0.3em] text-white font-luxury-header">
              LUXYRA
            </span>
            <span className="text-[9px] tracking-[0.55em] text-gold uppercase mt-0.5 font-light">
              Haute Horlogerie
            </span>
          </Link>
          
          <p className="text-neutral-400 font-light text-xs leading-relaxed max-w-sm mb-8 font-poppins">
            Explore meticulously crafted timepieces from the world’s most prestigious watchmakers. We celebrate the legacy of horology with collectors around the globe.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="lg:col-span-2 lg:pl-8">
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6 font-poppins">
            Navigation
          </h4>
          <ul className="space-y-4">
            {[
              { name: 'Home', target: 'hero' },
              { name: 'About', target: 'about' },
              { name: 'Categories', target: 'categories' },
              { name: 'Brands', target: 'brands' }
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer text-xs text-neutral-400 hover:text-white transition-colors tracking-widest uppercase font-light font-poppins"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Assistance / Concierge Info */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6 font-poppins">
            Assistance
          </h4>
          <ul className="space-y-4 text-xs font-light tracking-wide text-neutral-400 font-poppins">
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-85}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors"
              >
                Private Concierge
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Order Tracking</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Warranty & Repairs</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">Boutique Viewings</a>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter */}
        <div className="lg:col-span-4 flex flex-col">
          <h4 className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-6 font-poppins">
            Newsletter
          </h4>
          <p className="text-neutral-400 font-light text-xs leading-relaxed mb-6 font-poppins">
            Subscribe to receive private acquisition announcements, limited model releases, and historical insights from Geneva.
          </p>

          <form onSubmit={handleSubscribe} className="relative flex w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={subscribed ? "Thank you for subscribing" : "Enter your email address"}
              disabled={subscribed}
              className={`w-full bg-neutral-950 border text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none pr-12 font-poppins transition-all duration-300 ${
                subscribed ? 'border-emerald-600 text-emerald-500 placeholder-emerald-500' : 'border-white/10 text-white placeholder-neutral-700'
              }`}
            />
            <button
              type="submit"
              disabled={subscribed}
              className="absolute right-0 top-0 h-full px-4 border-l border-white/10 hover:text-gold transition-colors text-neutral-400"
              aria-label="Subscribe"
            >
              <FaPaperPlane className="w-3.5 h-3.5" />
            </button>
          </form>
          <span className="text-[9px] tracking-wide text-neutral-600 uppercase font-light mt-3 block font-poppins">
            We value your privacy. Unsubscribe at any time.
          </span>
        </div>
      </div>

      {/* Copyright block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-light font-poppins">
          © {currentYear} LUXYRA. All Rights Reserved. Crafted for Watch Collectors.
        </span>
        <div className="flex space-x-6 text-[10px] tracking-widest uppercase font-light text-neutral-500 font-poppins">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
