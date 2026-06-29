import { brands } from '../data/brands';
import BrandCard from './BrandCard';

const Brands = () => {
  return (
    <section id="brands" className="py-24 md:py-32 bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-3 block">
            Elite Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white font-luxury-header uppercase">
            Premium <span className="text-gold-gradient font-normal">Brands</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Brands Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
