import React, { useState, useEffect } from 'react';
import icArrowRight from '../assets/icons/ic_arrow_right.svg';
import imgDesignReference from '../assets/images/img_design_reference.webp';
import imgHorizontalLeafStart from '../assets/images/img_horizontalLeafStart.svg';
import imgHorizontalLeafEnd from '../assets/images/img_horizontalLeafEnd.svg';
import { PrimaryButton } from './PrimaryButton';

export const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStart((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-[709px] bg-[#FCF7F2] overflow-hidden flex items-center justify-between box-border">
      <img
        src={isStart ? imgHorizontalLeafStart : imgHorizontalLeafEnd}
        className={`absolute left-0 top-[20px] w-[264px] object-contain pointer-events-none select-none z-0 reveal-hidden ${animate ? 'reveal-visible' : ''}`}
        alt=""
        aria-hidden="true"
        width={264}
        height={200}
      />

      <div className="px-6 md:pl-[64px] md:pr-8 py-12 md:py-20 max-w-[620px] z-10 flex flex-col justify-center relative">
        <h1 className={`font-display font-bold text-[32px] text-[#1F1F1F]/88 tracking-tight leading-[1.2] reveal-hidden ${animate ? 'reveal-visible' : ''} delay-[100ms]`}>
          Life is too short,<br />
          Bring a <span className="text-[#346E3C]">green</span> friend
        </h1>

        <p className={`font-sans font-medium text-[16px] text-[#1F1F1F]/66 leading-[24px] mt-7 reveal-hidden ${animate ? 'reveal-visible' : ''} delay-[200ms]`}>
          Your screen shouldn't be the only thing you look at all day. Breathe life back into your workspace with low maintenance desk plants designed for busy minds.
        </p>

        <div className={`flex flex-wrap gap-[8px] mt-6 mb-8 z-10 reveal-hidden ${animate ? 'reveal-visible' : ''} delay-[300ms]`}>
          <div className="inline-flex items-center bg-[#FFFFFF]/66 text-[#346E3C] px-4 py-2 rounded-full font-poppins text-[14px] font-medium">
            <span>A plant won&apos;t interrupt you</span>
          </div>
          <div className="inline-flex items-center bg-[#FFFFFF]/66 text-[#346E3C] px-4 py-2 rounded-full font-poppins text-[14px] font-medium">
            <span>A cute little roommate</span>
          </div>
        </div>

        <div className={`flex flex-wrap gap-4 mt-0 reveal-hidden ${animate ? 'reveal-visible' : ''} delay-[400ms]`}>
          <PrimaryButton
            text="Find Your Plant Friend"
            iconSrc={icArrowRight}
            id="hero-primary-cta"
          />
          <div
            className="px-[32px] bg-transparent hover:bg-[#346E3C]/8 text-[#346E3C] font-medium text-[16px] border border-[#000000]/8 rounded-[100px] text-center flex items-center justify-center cursor-pointer h-[48px] box-border transition-all duration-300 whitespace-nowrap"
            id="hero-care-cta"
          >
            <span>Explore</span>
          </div>
        </div>
      </div>

      <div className={`absolute right-0 top-0 h-[709px] w-[669px] z-0 flex items-start justify-end reveal-hidden ${animate ? 'reveal-visible' : ''} delay-[200ms] opacity-15 md:opacity-100 transition-opacity duration-500`}>
        <img
          src={imgDesignReference}
          className="h-[709px] w-[669px] object-cover pointer-events-none select-none"
          alt="A person holding a beautiful, lush green monstera houseplant"
          width={669}
          height={709}
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
