import React, { useEffect, useState } from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

function App() {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);
  const [serviceError, setServiceError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/api/services`);
        if (!response.ok) {
          throw new Error('Unable to load service catalog.');
        }

        const result = await response.json();
        setServices(result.data || []);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        setServiceError('Service catalog is temporarily unavailable.');
      } finally {
        setLoadingServices(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0d17] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Background3D />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services services={services} loading={loadingServices} error={serviceError} />
          <Projects />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;