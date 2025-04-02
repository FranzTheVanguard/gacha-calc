import React, { useState, useEffect } from 'react';
import lightBg from '../../../assets/gbf_bg.jpg';
import darkBg from '../../../assets/gbf_bg_dark_1.jpg';

const BackgroundImage = () => {
  const [bgImage, setBgImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');

  // Listen for theme changes
  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setCurrentTheme(newTheme);
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom theme change event
    window.addEventListener('themeChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChange', handleStorageChange);
    };
  }, []);

  // Load image when theme changes
  useEffect(() => {
    setIsLoading(true);
    const loadImage = async () => {
      try {
        const imageUrl = currentTheme === 'dark' ? darkBg : lightBg;
        const img = new Image();
        img.src = imageUrl;
        
        await new Promise((resolve) => {
          img.onload = resolve;
        });
        
        setBgImage(imageUrl);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading background:', error);
        setIsLoading(false);
      }
    };

    loadImage();
  }, [currentTheme]);

  return (
    <div
      className={`background-wrapper ${isLoading ? 'loading' : 'loaded'}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: currentTheme === 'dark' ? '#131313' : '#ffffff',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default BackgroundImage;
