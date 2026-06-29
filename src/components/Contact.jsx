import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaComments, FaQuestionCircle, FaPaperPlane, FaBoxOpen } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }
  };

  const contactDetails = [
    { icon: <FaPhoneAlt className="w-4 h-4 text-gold" />, title: "Phone", desc: "+1 (800) 589-9721", sub: "Toll free support" },
    { icon: <FaEnvelope className="w-4 h-4 text-gold" />, title: "Email", desc: "concierge@luxyra.com", sub: "Response within 24h" },
    { icon: <FaMapMarkerAlt className="w-4 h-4 text-gold" />, title: "Address", desc: "Rue du Rhône 62, 1204", sub: "Geneva, Switzerland" },
    { icon: <FaClock className="w-4 h-4 text-gold" />, title: "Working Hours", desc: "Mon - Sat: 10:00 - 19:00", sub: "Sunday: Closed" },
  ];

  const serviceCards = [
    { icon: <FaComments className="w-5 h-5 text-gold" />, title: "Feedback", desc: "Help us enhance your horological experience." },
    { icon: <FaQuestionCircle className="w-5 h-5 text-gold" />, title: "Enquiry", desc: "Acquisition parameters for private collections." },
    { icon: <FaEnvelope className="w-5 h-5 text-gold" />, title: "General Contact", desc: "Corporate queries, press, and brand alliances." },
    { icon: <FaBoxOpen className="w-5 h-5 text-gold" />, title: "Online Order", desc: "Shipments, security parameters, and returns." },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            Contact <span className="text-gold-gradient font-normal">LUXYRA</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Top Content: Details vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="text-2xl font-light text-white font-luxury-header mb-4 uppercase tracking-wider">
                Private Concierge
              </h3>
              <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed font-poppins">
                Our luxury advisors are available to answer your enquiries, facilitate personal sizing, or schedule a physical boutique viewing in Geneva.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-neutral-900/30 border border-white/5">
                  <div className="p-3 bg-neutral-950 border border-gold/20 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-neutral-500 uppercase tracking-widest text-[9px] font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-white text-sm font-medium tracking-wide mt-0.5">
                      {item.desc}
                    </p>
                    <span className="text-[10px] text-neutral-400 font-light block mt-0.5">
                      {item.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-neutral-900/20 border border-white/5 p-8 md:p-10 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold" />
            
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mx-auto mb-6 bg-gold/5">
                    <FaPaperPlane className="w-5 h-5 text-gold animate-pulse" />
                  </div>
                  <h3 className="text-xl text-white font-light font-luxury-header tracking-wider uppercase mb-2">
                    Enquiry Received
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm mx-auto font-poppins">
                    Thank you. A luxury watch concierge advisor will contact you within the next business hour.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-2" htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-neutral-950 border border-white/10 text-white placeholder-neutral-700 text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none font-poppins"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-neutral-950 border border-white/10 text-white placeholder-neutral-700 text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none font-poppins"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 019-2834"
                        className="bg-neutral-950 border border-white/10 text-white placeholder-neutral-700 text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none font-poppins"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Interest in Rolex Cosmograph Daytona"
                        className="bg-neutral-950 border border-white/10 text-white placeholder-neutral-700 text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none font-poppins"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[9px] tracking-widest uppercase text-neutral-400 font-semibold mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please include details about your reference criteria..."
                      className="bg-neutral-950 border border-white/10 text-white placeholder-neutral-700 text-xs px-4 py-3.5 focus:outline-none focus:border-gold rounded-none resize-none font-poppins"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-ripple w-full py-4 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold tracking-widest text-xs uppercase shadow-gold-soft transition-transform duration-300 hover:scale-[1.01]"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 bg-neutral-950 border border-white/5 relative group cursor-pointer text-center"
            >
              <div className="w-12 h-12 border border-gold/20 flex items-center justify-center mx-auto mb-4 bg-neutral-900 group-hover:bg-gold group-hover:border-gold transition-colors duration-500">
                <div className="group-hover:text-black transition-colors duration-500">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-sm font-light text-white font-luxury-header tracking-wider uppercase mb-2">
                {service.title}
              </h4>
              <p className="text-neutral-500 font-light text-[11px] leading-relaxed font-poppins">
                {service.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
