import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import FeaturedCollection from '../components/FeaturedCollection';
import Categories from '../components/Categories';
import Brands from '../components/Brands';
import NewArrivals from '../components/NewArrivals';
import Discount from '../components/Discount';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedCollection />
      <Categories />
      <Brands />
      <NewArrivals />
      <Discount />
      <Contact />
    </>
  );
};

export default Home;
