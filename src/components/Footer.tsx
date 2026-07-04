import React from 'react';
import icSocialTwitter from '../assets/icons/ic_social_twitter.svg';
import icSocialWhatsapp from '../assets/icons/ic_social_whatsapp.svg';
import icSocialInstagram from '../assets/icons/ic_social_instagram.svg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#363D37] px-[64px] h-[78px] w-full flex items-center select-none">
      <div className="w-full flex flex-row items-center justify-between">
        
        <p className="font-sans font-medium text-[14px] text-[#FFFFFF]/80">
          © 2026 Plantified, Grown with care.
        </p>

        <div className="flex items-center space-x-6">
          <a 
            href="#twitter" 
            className="flex items-center justify-center"
            aria-label="Twitter"
          >
            <img src={icSocialTwitter} className="w-8 h-8 brightness-0 invert" alt="Twitter X logo" />
          </a>
          <a 
            href="#whatsapp" 
            className="flex items-center justify-center"
            aria-label="Whatsapp"
          >
            <img src={icSocialWhatsapp} className="w-8 h-8 brightness-0 invert" alt="Whatsapp logo" />
          </a>
          <a 
            href="#instagram" 
            className="flex items-center justify-center"
            aria-label="Instagram"
          >
            <img src={icSocialInstagram} className="w-8 h-8 brightness-0 invert" alt="Instagram logo" />
          </a>
        </div>

      </div>
    </footer>
  );
};
