import React, { useState } from 'react';
import imgLeafDecoration from '../assets/images/img_leaf_decoration.svg';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Newsletter: React.FC = () => {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section ref={ref} className="w-full bg-[#FCF7F2] pt-0 pb-[73px] px-6 md:px-[64px]">
      <div className="w-full bg-[#363D37] rounded-[24px] px-[24px] py-[24px] text-[#FCFBF8] relative overflow-hidden shadow-md">

        <div className={`absolute right-[200px] bottom-0 w-28 h-full pointer-events-none select-none hidden sm:block reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[200ms]`}>
          <img 
            src={imgLeafDecoration} 
            className="w-full h-full object-contain" 
            alt="Leaf decoration graphic" 
            width={112}
            height={200}
          />
        </div>

        <div className="w-full mx-auto text-center relative z-10">

          <h2 className={`font-sans font-medium text-[20px] tracking-tight leading-tight mb-[12px] text-[#ffffff]/88 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[100ms]`}>
            Find the plant that grows with you.
          </h2>

          <p className={`font-sans font-normal text-[18px] w-full mx-auto leading-relaxed mb-[32px] text-[#ffffff]/66 reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[200ms]`}>
            Join 50,000+ urban dwellers who have rediscovered the joy of quiet growth. Delivered with care, straight to your door.
          </p>

          <form 
            onSubmit={handleSubmit}
            className={`max-w-[500px] mx-auto flex flex-col sm:flex-row gap-3 w-full reveal-hidden ${isVisible ? 'reveal-visible' : ''} delay-[300ms]`}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              className="w-full h-[48px] px-5 bg-[#ffffff]/12 border border-[#ffffff]/12 rounded-full text-[#ffffff]/88 text-[16px] focus:outline-none placeholder:text-[#ffffff]/44 transition-all font-sans font-normal"
              id="newsletter-email-input"
            />
            <button
              type="submit"
              className="px-8 h-[48px] bg-[#ffffff]/78 hover:bg-[#ffffff]/90 text-[#346E3C] font-sans font-medium text-[16px] rounded-full shrink-0 transition-colors cursor-pointer shadow-sm flex items-center justify-center"
              id="newsletter-submit-btn"
            >
              <span>Send</span>
            </button>
          </form>

          {subscribed && (
            <p className="text-sm text-green-300 mt-4 font-sans font-medium animate-fade-in">
              Thank you for subscribing to our newsletter!
            </p>
          )}

        </div>
      </div>
    </section>
  );
};
