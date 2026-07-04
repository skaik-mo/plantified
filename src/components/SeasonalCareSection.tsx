import React from 'react';
import icSun from '../assets/icons/ic_sun.svg';
import icLeaf from '../assets/icons/ic_leaf.svg';
import icWind from '../assets/icons/ic_wind.svg';
import icCloudSnow from '../assets/icons/ic_cloud_snow.svg';
import icDroplet from '../assets/icons/ic_droplet.svg';
import icThermometer from '../assets/icons/ic_thermometer.svg';
import icScissors from '../assets/icons/ic_scissors.svg';
import icShield from '../assets/icons/ic_shield.svg';
import icMoon from '../assets/icons/ic_moon.svg';
import icZap from '../assets/icons/ic_zap.svg';
import imgHangingPlantStart from '../assets/images/img_hangingPlantStart.svg';
import imgHangingPlantEnd from '../assets/images/img_hangingPlantEnd.svg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const SeasonalCareSection: React.FC = () => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const [isStart, setIsStart] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsStart((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const seasons = [
    {
      season: 'Spring',
      months: 'March–May',
      icon: icSun,
      iconBg: 'bg-[#39BB4B]/8',
      iconColor: 'text-[#346E3C]',
      itemIconColor: 'text-[#10B981]',
      items: [
        { icon: icDroplet, text: 'Water every 3 days' },
        { icon: icLeaf, text: 'Add fertilizer' },
        { icon: icZap, text: 'Move to bright light' }
      ]
    },
    {
      season: 'Summer',
      months: 'June–August',
      icon: icSun,
      iconBg: 'bg-[#FAEFC4]',
      iconColor: 'text-[#F59E0B]',
      itemIconColor: 'text-[#F59E0B]',
      items: [
        { icon: icDroplet, text: 'Water daily' },
        { icon: icWind, text: 'Increase air circulation' },
        { icon: icShield, text: 'Protect from heat' }
      ]
    },
    {
      season: 'Autumn',
      months: 'September–November',
      icon: icLeaf,
      iconBg: 'bg-[#FAE8D1]',
      iconColor: 'text-[#F97316]',
      itemIconColor: 'text-[#F97316]',
      items: [
        { icon: icDroplet, text: 'Reduce watering' },
        { icon: icScissors, text: 'Prune old growth' },
        { icon: icThermometer, text: 'Watch temperature' }
      ]
    },
    {
      season: 'Winter',
      months: 'December–February',
      icon: icCloudSnow,
      iconBg: 'bg-[#DCE2FA]',
      iconColor: 'text-[#6366F1]',
      itemIconColor: 'text-[#6366F1]',
      items: [
        { icon: icDroplet, text: 'Water sparingly' },
        { icon: icMoon, text: 'Reduce light' },
        { icon: icShield, text: 'Protect from drafts' }
      ]
    }
  ];

  const renderIcon = (iconUrl: string, colorClass: string, sizeClass: string) => {
    return (
      <div
        className={`${sizeClass} ${colorClass} shrink-0`}
        style={{
          maskImage: `url("${iconUrl}")`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url("${iconUrl}")`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          backgroundColor: 'currentColor'
        }}
      />
    );
  };

  return (
    <section ref={ref} id="seasonal" className="w-full bg-[#FCF7F2] pt-0 pb-24 md:pb-[156px] px-6 md:px-[64px]">
      <div className="w-full bg-[#EBF1E8] rounded-[32px] p-8 sm:p-12 relative">

        <div className={`absolute right-[-32px] top-0 w-36 h-96 select-none pointer-events-none hidden lg:block z-20 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[200ms]`}>
          <img
            src={isStart ? imgHangingPlantStart : imgHangingPlantEnd}
            className="w-full h-full object-contain object-right-top"
            alt=""
            aria-hidden="true"
            width={144}
            height={384}
          />
        </div>

        <div className={`max-w-2xl mb-12 relative z-10 text-left reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
          <h2 className="font-mono font-bold text-[32px] text-[#1F1F1F]/88 tracking-tight leading-tight">
            Care at the Right Time
          </h2>
          <p className="text-[#1F1F1F]/66 text-[16px] mt-2 font-medium font-sans">
            Know exactly when to water, feed, and repot
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {seasons.map((s, idx) => (
            <div
              key={s.season}
              style={{ transitionDelay: `${(idx + 2) * 100}ms` }}
              className={`flex flex-col reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full ${s.iconBg} flex items-center justify-center shrink-0`}>
                  {renderIcon(s.icon, s.iconColor, 'w-6 h-6')}
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-[18px] text-[#1F1F1F]/88 leading-tight">
                    {s.season}
                  </span>
                  <span className="font-sans font-medium text-[12px] text-[#1F1F1F]/66 mt-0.5">
                    {s.months}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {s.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-full py-2.5 px-4 flex items-center gap-3 w-fit shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    {renderIcon(item.icon, s.itemIconColor, 'w-4 h-4')}
                    <span className="font-sans font-medium text-[12px] text-[#1F1F1F]/88 leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
