import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate premium resource loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
