"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useGradientTextFade;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

/**
 * Represents a book.
 * @constructor
 * @param {object} title - The Element Your Want to add the gradient too element.
 * @param {number} numberColors - This is the Number of Colors You want from the hook
 */
function useGradientTextFade(element) {
  let numberColors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  const newArray = [...Array(numberColors).keys()];
  const percentages = newArray.map((percentage, index) => {
    return 0 + 100 * index;
  });
  const [movingColor, setMovingColor] = (0, _react.useState)(percentages);

  const calculateBaseNumber = colorIndex => 300 / numberColors * colorIndex;

  const calcTopBottomPercent = (screenHeight, elementTopPosition) => (screenHeight - elementTopPosition) / screenHeight * 100;

  const calcGradientPercentage = function calcGradientPercentage(startBase, elementPositionPercentage) {
    let movement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return startBase - elementPositionPercentage * movement;
  };

  const scrollTextColorAdjust = () => {
    const box = element.current.getBoundingClientRect();

    if (box && window) {
      const elementInView = box.top < window.innerHeight && box.bottom >= 0;
      const screenHeight = window && window.innerHeight;
      const elementPixelsFromScreenTop = box.top;

      if (elementInView) {
        const currentPositionPercentage = calcTopBottomPercent(screenHeight, elementPixelsFromScreenTop);
        const newArray = Array(numberColors).fill('');
        const gradientPercentages = newArray.map((element, index) => {
          return calcGradientPercentage(calculateBaseNumber(index + 1), currentPositionPercentage);
        });
        setMovingColor(gradientPercentages);
      }
    }
  };

  (0, _react.useEffect)(() => {
    document.addEventListener('scroll', scrollTextColorAdjust);
    return () => {
      document.removeEventListener('scroll', scrollTextColorAdjust);
    };
  }, []);
  return movingColor; // [100, 200, 300]
}