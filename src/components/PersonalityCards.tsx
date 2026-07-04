import React from 'react';
import imgPlant7 from '../assets/images/img_plant7.webp';
import imgPlant8 from '../assets/images/img_plant8.webp';
import imgPlant9 from '../assets/images/img_plant9.webp';
import imgLeafPattern from '../assets/images/img_leaf_pattern.svg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const PersonalityCards = () => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const cards = [
    {
      id: 1,
      plantType: 'pothos',
      heading: 'Always you Busy?',
      subheading: 'Meet Ivy',
      price: '24.99$',
      image: imgPlant7
    },
    {
      id: 2,
      plantType: 'pilea',
      heading: 'Need for inspiration?',
      subheading: 'Meet mint',
      price: '5.99$',
      image: imgPlant9
    },
    {
      id: 3,
      plantType: 'cactus',
      heading: 'Always on the move?',
      subheading: 'Meet Spike',
      price: '16.99$',
      image: imgPlant8
    }
  ];

  return (
    <section ref={ref} className="w-full pt-20 pb-20 md:pt-[156px] md:pb-[156px] bg-[#FCF7F2] relative overflow-visible select-none">

      <div className="relative mx-6 md:mx-[64px] pt-16 pb-[38px] overflow-visible w-auto">

        <div className={`absolute left-0 right-0 bottom-0 top-[250px] pointer-events-none select-none z-0 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-full text-[#39BB4B]/8 fill-current"
            preserveAspectRatio="none"
          >
            <path d="M 0,60 Q 0,30 32,28 L 470,3 Q 500,0 530,3 L 968,28 Q 1000,30 1000,60 L 1000,370 Q 1000,400 968,400 L 32,400 Q 0,400 0,370 Z" />
          </svg>
        </div>

        <h2 className="sr-only">Find Your Match</h2>

        <div className={`absolute left-[-27px] bottom-0 w-[110px] pointer-events-none select-none z-10 hidden lg:block reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
          <img
            src={imgLeafPattern}
            className="w-full object-contain"
            alt="Leaf pattern decoration"
            width={110}
            height={110}
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-[960px] mx-auto w-full">
          {cards.map((card, idx) => {
            return (
              <div
                key={card.id}
                style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                className={`bg-[#FCFBF9] p-[14px] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col gap-2 relative overflow-hidden group hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] hover:scale-[1.01] transition-all duration-300 border border-[#39BB4B]/5 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
              >

                <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#F4F8F4] flex items-center justify-center">

                  <span className="absolute top-2 left-2 bg-[#346E3C] text-white font-sans font-semibold text-[14px] px-3.5 py-1.5 rounded-full border border-white/24 z-10">
                    {card.price}
                  </span>

                  <img
                    src={card.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                    alt={`${card.subheading} (${card.plantType}) - low maintenance desk plant for people who are ${card.heading.toLowerCase().replace('?', '')}`}
                    width={280}
                    height={280}
                    loading="lazy"
                  />
                </div>

                <h3 className="font-sans font-medium text-[18px] leading-tight text-[#1F1F1F]/88 px-2">
                  {card.heading}
                </h3>

                <p className="font-sans font-medium text-[18px] leading-tight text-[#1F1F1F]/88 px-2">
                  {card.subheading}
                </p>

                <span
                  className="font-sans font-medium text-[14px] text-[#346E3C] w-fit flex items-center px-2"
                  id={`view-details-${card.id}`}
                >
                  <span>View Details</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-12 relative z-10 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[500ms]`}>
          <p className="font-sans font-medium text-[16px] tracking-[0.02em] text-[#346E3C]/88 mt-0.5">
            Different plants, Different personalities.
          </p>
          <p className="font-sans font-medium text-[16px] tracking-[0.02em] text-[#346E3C]/88 mt-0.5">
            Find the one that feels most like you.
          </p>
        </div>

      </div>
    </section>
  );
};
