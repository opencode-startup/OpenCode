import './animation.css';

import clsx from 'clsx';
import React from 'react';

import { SpinnerProps } from './types';

const ANIMATION_DURATION = 1200;
const LINES_COUNT = 12;

const Spinner: React.FC<SpinnerProps> = ({ size = 32, className, style, ...props }) => {
  const renderLines = () => {
    return Array.from({ length: LINES_COUNT }, (_, index) => {
      const angle = (index * 360) / LINES_COUNT;
      const delay = -((LINES_COUNT - index) * (ANIMATION_DURATION / LINES_COUNT));

      return (
        <div
          key={index}
          className="spinner-line absolute top-[-3.9%] left-[-10%] h-[8%] w-[24%] bg-gray-700"
          style={
            {
              '--animation-delay': `${delay}ms`,
              '--animation-duration': `${ANIMATION_DURATION}ms`,
              transform: `rotate(${angle}deg) translate(146%)`,
            } as React.CSSProperties
          }
        />
      );
    });
  };

  return (
    <div
      className={clsx('inline-block', className)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        ...style,
      }}
      role="status"
      aria-label="Loading"
      data-geist-spinner=""
      data-version="v1"
      {...props}
    >
      <div
        className="relative top-1/2 left-1/2 text-gray-700"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        {renderLines()}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
