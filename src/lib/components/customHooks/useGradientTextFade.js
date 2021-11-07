/**
 * Represents a book.
 * @constructor
 * @param {object} title - The Element Your Want to add the gradient too element.
 * @param {number} numberColors - This is the Number of Colors You want from the hook
 */

import { useState, useEffect } from 'react';

export default function useGradientTextFade(element, numberColors = 3) {
  const newArray = [...Array(numberColors).keys()];

  const percentages = newArray.map((percentage, index) => {
    return 0 + 100 * index;
  });

  const [movingColor, setMovingColor] = useState(percentages);

  const calculateBaseNumber = (colorIndex) => (300 / numberColors) * colorIndex;

  const calcTopBottomPercent = (screenHeight, elementTopPosition) =>
    ((screenHeight - elementTopPosition) / screenHeight) * 100;

  const calcGradientPercentage = (
    startBase,
    elementPositionPercentage,
    movement = 2
  ) => {
    return startBase - elementPositionPercentage * movement;
  };

  const scrollTextColorAdjust = () => {
    const box = element.current.getBoundingClientRect();
    if (box && window) {
      const elementInView = box.top < window.innerHeight && box.bottom >= 0;
      const screenHeight = window && window.innerHeight;
      const elementPixelsFromScreenTop = box.top;

      if (elementInView) {
        const currentPositionPercentage = calcTopBottomPercent(
          screenHeight,
          elementPixelsFromScreenTop
        );

        const newArray = Array(numberColors).fill('');
        const gradientPercentages = newArray.map((element, index) => {
          return calcGradientPercentage(
            calculateBaseNumber(index + 1),
            currentPositionPercentage
          );
        });

        setMovingColor(gradientPercentages);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollTextColorAdjust);
    return () => {
      document.removeEventListener('scroll', scrollTextColorAdjust);
    };
  }, []);

  return movingColor; // [100, 200, 300]
}
