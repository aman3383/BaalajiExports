"use client";
import React, { useState, useEffect } from 'react';

const NutJourneyCarousel: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log("NutJourneyCarousel mounted");
  }, []);

  useEffect(() => {
    console.log("Active step:", step);
  }, [step]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 5); // 5 steps for demo
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: 32, textAlign: 'center', margin: 40 }}>
      Minimal Carousel Step: {step + 1}
    </div>
  );
};

export default NutJourneyCarousel; 