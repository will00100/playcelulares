
import React from 'react';

type IconProps = {
    className?: string;
};

export const PhoneCrackIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0l-1.5 3 3 3-1.5 3 3 3-1.5 3" />
  </svg>
);

export const BatteryEmptyIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5v3M3.375 12h1.125" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 18.375c-1.035 1.035-2.488 1.625-4.125 1.625s-3.09-.59-4.125-1.625m8.25 0c1.035-1.035 1.625-2.488 1.625-4.125s-.59-3.09-1.625-4.125m-8.25 0c-1.035 1.035-2.488 1.625-4.125 1.625S5.25 6.44 6.285 5.415m8.25 0c1.035-1.035 2.488-1.625 4.125-1.625S19.75 6.44 18.715 5.415" />
  </svg>
);

export const WaterDropIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.187 0-9.407 4.22-9.407 9.407 0 5.187 7.055 11.08 8.657 12.352a.938.938 0 001.5 0c1.602-1.272 8.657-7.165 8.657-12.352C21.407 6.47 17.187 2.25 12 2.25z" />
  </svg>
);

export const PowerOffIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>
);
