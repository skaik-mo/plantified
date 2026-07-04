import React from 'react';
import icSquiggle1 from '../assets/icons/ic_squiggle_1.svg';
import icSquiggle2 from '../assets/icons/ic_squiggle_2.svg';
import icSquiggle3 from '../assets/icons/ic_squiggle_3.svg';
import icPackage from '../assets/icons/ic_package.svg';
import icRain from '../assets/icons/ic_rain.svg';
import icRecycle from '../assets/icons/ic_recycle.svg';
import icPlant from '../assets/icons/ic_plant.svg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CareJourney: React.FC = () => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const steps = [
    {
      id: 1,
      title: 'Unboxing',
      text: 'Let the leaves settle and acclimate to your light.',
      icon: icPackage
    },
    {
      id: 2,
      title: 'First Mist',
      text: 'Apply a light moisture layer after 48 hours.',
      icon: icRain
    },
    {
      id: 3,
      title: 'Routine',
      text: 'Establish a weekly cadence for feeding and care.',
      icon: icRecycle
    },
    {
      id: 4,
      title: 'Watch it grow',
      text: 'After a short time, your plant will love you because you take care of it.',
      icon: icPlant
    }
  ];

  return (
    <section ref={ref} id="journey" className="w-full bg-[#FCF7F2] pt-0 pb-[156px] px-[64px]">
      <div className="w-full">

        <div className={`text-center max-w-xl mx-auto mb-16 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
          <div className="relative inline-block select-none">
            <div className="absolute bottom-0 left-0 right-0 h-[26px] bg-[#39BB4B]/12 rounded-full" />
            <h2 className="relative z-10 font-sans font-medium text-[24px] tracking-[0.02em] text-[#346E3C] px-6 py-2.5">
              Small Care, Big Rewards
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full relative gap-8 md:gap-0">

          {steps.map((step, idx) => {
            return (
              <React.Fragment key={step.id}>
                <div
                  style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                  className={`flex flex-col items-center text-center relative z-10 max-w-[190px] reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                >
                  <div className="relative mb-5">
                    <div className="w-14 h-14 bg-[#39BB4B]/8 rounded-2xl flex items-center justify-center">
                      <img src={step.icon} className="w-6 h-6 text-primary-green object-contain" alt={step.title} />
                    </div>
                  </div>

                  <h3 className="font-sans font-medium text-[20px] tracking-[0.02em] text-[#1F1F1F]/88 mb-2">
                    {step.title}
                  </h3>

                  <p className="font-sans font-medium text-[14px] tracking-[0.02em] text-[#1F1F1F]/66 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div
                    style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
                    className={`hidden md:block flex-1 mt-[86px] px-2 max-w-[120px] pointer-events-none select-none z-0 reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
                  >
                    <img
                      src={idx === 0 ? icSquiggle1 : idx === 1 ? icSquiggle2 : icSquiggle3}
                      className="w-full object-contain"
                      alt="divider squiggle"
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}

        </div>

      </div>
    </section>
  );
};
