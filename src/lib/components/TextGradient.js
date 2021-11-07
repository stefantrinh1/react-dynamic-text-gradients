import React, { useRef } from 'react';
import useGradientTextFade from './customHooks/useGradientTextFade';
import guidGenerator from './helpers/guidGenerator'; // important for rerendering the new gradient position

export default function TextGradient(props) {
  const { text, as, colors, gradientAngle, style, className } = props;

  const heading = useRef();
  const gradients = useGradientTextFade(heading, colors.length);

  const colorsString = colors.map((color, index) => {
    return `${color} ${gradients[index]}%`;
  });

  const createMovingGradientStyle = {
    background: `linear-gradient(${gradientAngle}deg, ${colorsString})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    transition: 'all ease-in-out 0.2s',
  };

  const titleProps = {
    className: `gradientText ${className}`,
    ref: heading,
    style: { ...style, ...createMovingGradientStyle },
  };

  const renderText = () => {
    switch (as) {
      case 'h1':
        return (
          <h1 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </h6>
        );

      case 'p':
        return (
          <p {...titleProps} key={guidGenerator()} ref={heading}>
            {text}
          </p>
        );

      default:
        return (
          <h1 {...titleProps} ref={heading} key={guidGenerator()}>
            {text}
          </h1>
        );
        break;
    }
  };

  return renderText();
}

TextGradient.defaultProps = {
  as: 'h1',
  text: 'Sample Text Here',
  colors: ['rgb(100, 37, 160)', 'rgb(137, 59, 172)', 'red', 'orange', 'blue'],
  style: {},
  className: '',
  gradientAngle: 130,
};
