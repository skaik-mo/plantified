import React from 'react';

export const Navbar = () => {
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [activeLink, setActiveLink] = React.useState('Home');

  const navItems = ['Home', 'Categories', 'Blog', 'Contacts', 'About us'];

  React.useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleLinkClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (item === 'Home') {
      setActiveLink('Home');
    } else {
      setToastMessage('This feature will be enabled in the future.');
    }
  };

  const triggerDemoAlert = () => {
    setToastMessage('This feature will be enabled in the future.');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FCFBF8]/95 backdrop-blur-md w-full h-[65px] px-6 md:px-[64px] flex items-center justify-between border-b-[1px] border-[#819E26]/20 relative box-border">
        <div className="flex items-center h-full">
          <span 
            className="font-ubuntu font-bold text-[24px] text-[#318161] select-none cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Plantified
          </span>

          <nav className="hidden md:flex items-center gap-[20px] ml-[80px] h-full relative">
            {navItems.map((item) => {
              const isActive = activeLink === item;
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleLinkClick(item, e)}
                  className={`relative h-[65px] flex items-center justify-center select-none no-underline whitespace-nowrap ${
                    isActive
                      ? 'font-poppins font-semibold text-[16px] leading-[24px] tracking-[0.5px] text-[#318161]'
                      : 'font-poppins font-medium text-[16px] leading-[24px] tracking-[0.5px] text-[#61665C]'
                  }`}
                >
                  <span>{item}</span>
                  {isActive && (
                    <span className="absolute left-0 right-0 h-[4px] bg-[#318161] -bottom-[2px] rounded-t-full" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-[24px] h-full">
          <button
            onClick={triggerDemoAlert}
            className="p-0 border-0 bg-transparent cursor-pointer flex items-center justify-center w-[45px] h-[45px]"
            aria-label="Notifications"
          >
            <svg className="w-[45px] h-[45px] text-[#346E3C]" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.0199 31.53C20.6899 31.53 18.3599 31.16 16.1499 30.42C15.3099 30.13 14.6699 29.54 14.3899 28.77C14.0999 28 14.1999 27.15 14.6599 26.39L15.8099 24.48C16.0499 24.08 16.2699 23.28 16.2699 22.81V19.92C16.2699 16.2 19.2999 13.17 23.0199 13.17C26.7399 13.17 29.7699 16.2 29.7699 19.92V22.81C29.7699 23.27 29.9899 24.08 30.2299 24.49L31.3699 26.39C31.7999 27.11 31.8799 27.98 31.5899 28.77C31.2999 29.56 30.6699 30.16 29.8799 30.42C27.6799 31.16 25.3499 31.53 23.0199 31.53ZM23.0199 14.67C20.1299 14.67 17.7699 17.02 17.7699 19.92V22.81C17.7699 23.54 17.4699 24.62 17.0999 25.25L15.9499 27.16C15.7299 27.53 15.6699 27.92 15.7999 28.25C15.9199 28.59 16.2199 28.85 16.6299 28.99C20.8099 30.39 25.2399 30.39 29.4199 28.99C29.7799 28.87 30.0599 28.6 30.1899 28.24C30.3199 27.88 30.2899 27.49 30.0899 27.16L28.9399 25.25C28.5599 24.6 28.2699 23.53 28.2699 22.8V19.92C28.2699 17.02 25.9199 14.67 23.0199 14.67Z" fill="currentColor"/>
              <path d="M24.8796 14.94C24.8096 14.94 24.7396 14.93 24.6696 14.91C24.3796 14.83 24.0996 14.77 23.8296 14.73C22.9796 14.62 22.1596 14.68 21.3896 14.91C21.1096 15 20.8096 14.91 20.6196 14.7C20.4296 14.49 20.3696 14.19 20.4796 13.92C20.8896 12.87 21.8896 12.18 23.0296 12.18C24.1696 12.18 25.1696 12.86 25.5796 13.92C25.6796 14.19 25.6296 14.49 25.4396 14.7C25.2896 14.86 25.0796 14.94 24.8796 14.94Z" fill="currentColor"/>
              <path d="M23.0195 33.81C22.0295 33.81 21.0695 33.41 20.3695 32.71C19.6695 32.01 19.2695 31.05 19.2695 30.06H20.7695C20.7695 30.65 21.0095 31.23 21.4295 31.65C21.8495 32.07 22.4295 32.31 23.0195 32.31C24.2595 32.31 25.2695 31.3 25.2695 30.06H26.7695C26.7695 32.13 25.0895 33.81 23.0195 33.81Z" fill="currentColor"/>
              <circle cx="28.5" cy="17.5" r="3" fill="#FF5630" stroke="#FCFBF8" strokeWidth="1"/>
            </svg>
          </button>

          <button
            onClick={triggerDemoAlert}
            className="p-0 border-0 bg-transparent cursor-pointer flex items-center justify-center w-[45px] h-[45px]"
            aria-label="Saved Plants"
          >
            <svg className="w-[45px] h-[45px] text-[#346E3C]" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.62 31.81C23.28 31.93 22.72 31.93 22.38 31.81C19.48 30.82 13 26.69 13 19.69C13 16.6 15.49 14.1 18.56 14.1C20.38 14.1 21.99 14.98 23 16.34C24.01 14.98 25.63 14.1 27.44 14.1C30.51 14.1 33 16.6 33 19.69C33 26.69 26.52 30.82 23.62 31.81Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={triggerDemoAlert}
            className="p-0 border-0 bg-transparent cursor-pointer flex items-center justify-center w-[45px] h-[45px]"
            aria-label="View Shopping Cart"
          >
            <svg className="w-[45px] h-[45px] text-[#346E3C]" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.5 19.63C27.09 19.63 26.75 19.29 26.75 18.88V17.5C26.75 16.45 26.3 15.43 25.52 14.72C24.73 14 23.71 13.67 22.63 13.77C20.83 13.94 19.25 15.78 19.25 17.7V18.67C19.25 19.08 18.91 19.42 18.5 19.42C18.09 19.42 17.75 19.08 17.75 18.67V17.69C17.75 15 19.92 12.52 22.49 12.27C23.99 12.13 25.43 12.6 26.53 13.61C27.62 14.6 28.25 16.02 28.25 17.5V18.88C28.25 19.29 27.91 19.63 27.5 19.63Z" fill="currentColor"/>
              <path d="M25.9998 33.75H19.9998C15.3798 33.75 14.5198 31.6 14.2998 29.51L13.5498 23.52C13.4398 22.44 13.3998 20.89 14.4498 19.73C15.3498 18.73 16.8398 18.25 18.9998 18.25H26.9998C29.1698 18.25 30.6598 18.74 31.5498 19.73C32.5898 20.89 32.5598 22.44 32.4498 23.5L31.6998 29.51C31.4798 31.6 30.6198 33.75 25.9998 33.75ZM18.9998 19.75C17.3098 19.75 16.1498 20.08 15.5598 20.74C15.0698 21.28 14.9098 22.11 15.0398 23.35L15.7898 29.34C15.9598 30.94 16.3998 32.26 19.9998 32.26H25.9998C29.5998 32.26 30.0398 30.95 30.2098 29.36L30.9598 23.35C31.0898 22.13 30.9298 21.3 30.4398 20.75C29.8498 20.08 28.6898 19.75 26.9998 19.75H18.9998Z" fill="currentColor"/>
              <path d="M26.4202 24.15C25.8602 24.15 25.4102 23.7 25.4102 23.15C25.4102 22.6 25.8602 22.15 26.4102 22.15C26.9602 22.15 27.4102 22.6 27.4102 23.15C27.4102 23.7 26.9702 24.15 26.4202 24.15Z" fill="currentColor"/>
              <path d="M19.4202 24.15C18.8602 24.15 18.4102 23.7 18.4102 23.15C18.4102 22.6 18.8602 22.15 19.4102 22.15C19.9602 22.15 20.4102 22.6 20.4102 23.15C20.4102 23.7 19.9702 24.15 19.4202 24.15Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </header>

      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#318161] text-[#FCFBF8] font-poppins font-medium text-sm py-3 px-6 rounded-xl shadow-lg border border-[#819E26]/30 animate-fade-in flex items-center gap-3">
          <svg className="w-5 h-5 text-[#FCFBF8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
};
