import React from 'react';

interface PrimaryButtonProps {
  onClick?: () => void;
  text: string;
  price?: string;
  iconSrc: string;
  id?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  text,
  price,
  iconSrc,
  id,
}) => {
  const content = (
    <>
      <span>
        {text}
        {price && (
          <>
            {' '}
            <span className="text-white/44">•</span>{' '}
            {price}
          </>
        )}
      </span>
      <div className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center box-border shrink-0 transition-transform duration-300 group-hover:-rotate-[40deg]">
        <img src={iconSrc} className="w-[24px] h-[24px]" alt="Icon" />
      </div>
    </>
  );

  const buttonClasses = "group pl-7 pr-[4px] bg-[#346E3C] hover:bg-[#285A2E] text-white font-medium text-[16px] rounded-full text-center inline-flex items-center justify-between gap-3 cursor-pointer h-[48px] box-border transition-all duration-300 shadow-md hover:shadow-lg select-none";

  return (
    <button onClick={onClick} className={buttonClasses} id={id}>
      {content}
    </button>
  );
};
