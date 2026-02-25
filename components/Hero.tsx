import React, { useState } from 'react';
import { USER_INFO } from '../constants';
import { Download, ChevronsDown } from 'lucide-react';

const Hero: React.FC = () => {
  // The direct link provided by the user
  const googlePhotoUrl = "https://photos.fife.usercontent.google.com/pw/AP1GczMa3WTydCf2atHER26Pa6KMeiY_GUNeyKEpyL1il47TvNOoS7GbO7g=w1098-h607-s-no-gm?authuser=0";
  
  // Fallback placeholder
  const fallbackUrl = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  const [imgSrc, setImgSrc] = useState(googlePhotoUrl);

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center overflow-hidden">
      
      {/* 
        Background Image 
        Using an <img> tag with referrerPolicy="no-referrer" is crucial for 
        loading content from Google Photos links on external sites.
      */}
      <img 
        src={imgSrc}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        referrerPolicy="no-referrer"
        onError={() => {
          // If the link fails (403/404), switch to the professional fallback
          if (imgSrc !== fallbackUrl) {
            console.warn("Google Photo link failed to load. Switching to fallback.");
            setImgSrc(fallbackUrl);
          }
        }}
      />

      {/* Dark Overlay for text readability - Increased to 50% for better contrast */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20 text-center lg:text-left lg:px-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
          Hi! <br />
          I'm {USER_INFO.name}
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-sans mb-8 max-w-lg mx-auto lg:mx-0 font-light animate-fade-in-up delay-100">
          {USER_INFO.description}
        </p>
        <div className="animate-fade-in-up delay-200">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white uppercase tracking-widest text-xs font-medium hover:bg-white hover:text-black transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-0 w-full z-20 flex justify-center animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <ChevronsDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;