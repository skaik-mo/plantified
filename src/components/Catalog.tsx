import React, { useState } from 'react';
import { PLANTS } from '../data';

import icFavouriteOutlineBlack from '../assets/icons/ic_favouriteOutlineBlack.svg';
import icRuler from '../assets/icons/ic_ruler.svg';
import icWaterPump from '../assets/icons/ic_water_pump.svg';
import icBasketAdd from '../assets/icons/ic_basket_add.svg';
import imgWavePattern from '../assets/images/img_wave_pattern.svg';
import { PrimaryButton } from './PrimaryButton';
import { useScrollReveal } from '../hooks/useScrollReveal';

import imgPlantCactus from '../assets/images/img_plant1.webp';
import imgPlantAloe from '../assets/images/img_plant2.webp';
import imgPlantSnake from '../assets/images/img_plant3.webp';
import imgPlantPothos from '../assets/images/img_plant4.webp';
import imgPlantMonstera from '../assets/images/img_plant5.webp';
import imgPlantPilea from '../assets/images/img_plant6.webp';

const getPlantImage = (id: string) => {
  switch (id) {
    case 'cactus': return imgPlantCactus;
    case 'aloe': return imgPlantAloe;
    case 'snake': return imgPlantSnake;
    case 'pothos': return imgPlantPothos;
    case 'monstera': return imgPlantMonstera;
    case 'pilea': return imgPlantPilea;
    default: return imgPlantMonstera;
  }
};

const renderPlantVector = (
  id: string,
  sizeClass: string = "w-44 h-44",
  altText?: string,
  width?: number,
  height?: number
) => {
  return (
    <img
      src={getPlantImage(id)}
      className={`${sizeClass} object-contain`}
      alt={altText || `${id} desk plant`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export const Catalog = () => {
  const [selectedPlantId, setSelectedPlantId] = useState<string>('cactus');
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();

  const addToCart = (plant: any) => {
    window.dispatchEvent(new CustomEvent('add-to-cart', { detail: plant }));
  };

  const activePlant = PLANTS.find(p => p.id === selectedPlantId) || PLANTS[0];
  const formattedPrice = activePlant.price.replace('$', '') + '$';

  return (
    <section id="categories" ref={ref} className="relative w-full pt-0 pb-28 bg-[#39BB4B]/8 border-t border-[#E8EFDF]/10">

      <div className={`absolute right-0 top-0 w-[676px] h-[260px] pointer-events-none select-none z-0 hidden lg:block reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}>
        <img
          src={imgWavePattern}
          className="w-full h-full object-contain object-right-top"
          alt="Wave pattern decoration"
          width={676}
          height={260}
        />
      </div>

      <div className="w-full px-6 md:px-[64px] pt-16 relative z-10">

        <h2 className="sr-only">Choose Your Green Companion</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className={`lg:col-span-5 flex flex-col items-center justify-center relative p-4 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center transition-transform duration-500 hover:scale-102">
              {renderPlantVector(
                activePlant.id,
                "w-[340px] h-[340px] md:w-[380px] md:h-[380px]",
                `${activePlant.name} - low maintenance indoor desk plant`,
                380,
                380
              )}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between relative z-10">
            <div>
              <h3 className={`font-mono font-bold text-[32px] text-[#1F1F1F]/88 mt-5 leading-none reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[200ms]`}>
                {activePlant.name}
              </h3>

              <p className={`font-sans font-medium text-[18px] text-[#1F1F1F]/66 leading-relaxed mt-4 max-w-none relative z-10 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[300ms]`}>
                {activePlant.description}
              </p>
            </div>

            <div className={`flex flex-wrap items-center gap-6 sm:gap-14 my-8 py-4 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[400ms]`}>
              <div className="flex items-center space-x-2.5">
                <span className="text-[#23482A] shrink-0 flex items-center justify-center">
                  <img src={icFavouriteOutlineBlack} width={24} height={24} className="w-6 h-6" alt="Lifespan" />
                </span>
                <div>
                  <p className="font-sans font-medium text-[14px] text-[#1F1F1F]/50 leading-none">Lifespan</p>
                  <p className="font-sans font-medium text-[16px] text-[#1F1F1F]/80 mt-1">{activePlant.lifespan}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <span className="text-[#23482A] shrink-0 flex items-center justify-center">
                  <img src={icRuler} width={24} height={24} className="w-6 h-6" alt="Avg Height" />
                </span>
                <div>
                  <p className="font-sans font-medium text-[14px] text-[#1F1F1F]/50 leading-none">Avg Height</p>
                  <p className="font-sans font-medium text-[16px] text-[#1F1F1F]/80 mt-1">{activePlant.avgHeight}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <span className="text-[#23482A] shrink-0 flex items-center justify-center">
                  <img src={icWaterPump} width={24} height={24} className="w-6 h-6 filter brightness-90" alt="Watering" />
                </span>
                <div>
                  <p className="font-sans font-medium text-[14px] text-[#1F1F1F]/50 leading-none">Watering</p>
                  <p className="font-sans font-medium text-[16px] text-[#1F1F1F]/80 mt-1">{activePlant.watering}</p>
                </div>
              </div>
            </div>

            <div className={`flex flex-row items-center reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[500ms]`}>
              <PrimaryButton
                onClick={() => addToCart(activePlant)}
                text="Add to my desk"
                price={formattedPrice}
                iconSrc={icBasketAdd}
              />
            </div>

          </div>

        </div>

      </div>

      <div className={`absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 flex justify-center reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[600ms]`}>
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          {PLANTS.map((plant) => {
            const isActive = plant.id === selectedPlantId;

            // Dynamically balance visual weight of different aspect ratios (tall/narrow vs wide/circular)
            let scaleClass = 'scale-[0.95]';
            if (plant.id === 'cactus' || plant.id === 'monstera') {
              scaleClass = 'scale-[1.18]';
            } else if (plant.id === 'snake') {
              scaleClass = 'scale-[1.25]';
            } else if (plant.id === 'pothos' || plant.id === 'pilea') {
              scaleClass = 'scale-[0.88]';
            }

            return (
              <button
                key={plant.id}
                onClick={() => setSelectedPlantId(plant.id)}
                className={`p-1.5 rounded-[12px] bg-[#FCF7F2] transition-all duration-300 flex items-center justify-center w-20 h-20 md:w-22 md:h-22 cursor-pointer border-[1.5px] ${isActive
                  ? 'border-[#346E3C] scale-105 shadow-md'
                  : 'border-transparent'
                  }`}
                aria-label={`Select ${plant.name}`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className={scaleClass}>
                    {renderPlantVector(
                      plant.id,
                      "w-16 h-16",
                      `${plant.name} thumbnail selection preview`,
                      64,
                      64
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};

