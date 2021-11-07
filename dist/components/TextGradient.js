"use strict";

require("core-js/modules/es.object.assign.js");

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextGradient;

var _react = _interopRequireWildcard(require("react"));

var _useGradientTextFade = _interopRequireDefault(require("./customHooks/useGradientTextFade"));

var _guidGenerator = _interopRequireDefault(require("./helpers/guidGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// important for rerendering the new gradient position
function TextGradient(props) {
  const {
    text,
    as,
    colors,
    gradientAngle,
    style,
    className
  } = props;
  const heading = (0, _react.useRef)();
  const gradients = (0, _useGradientTextFade.default)(heading, colors.length);
  const colorsString = colors.map((color, index) => {
    return "".concat(color, " ").concat(gradients[index], "%");
  });
  const createMovingGradientStyle = {
    background: "linear-gradient(".concat(gradientAngle, "deg, ").concat(colorsString, ")"),
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    transition: 'all ease-in-out 0.2s'
  };
  const titleProps = {
    className: "gradientText ".concat(className),
    ref: heading,
    style: _objectSpread(_objectSpread({}, style), createMovingGradientStyle)
  };

  const renderText = () => {
    switch (as) {
      case 'h1':
        return /*#__PURE__*/_react.default.createElement("h1", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'h2':
        return /*#__PURE__*/_react.default.createElement("h2", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'h3':
        return /*#__PURE__*/_react.default.createElement("h3", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'h4':
        return /*#__PURE__*/_react.default.createElement("h4", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'h5':
        return /*#__PURE__*/_react.default.createElement("h5", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'h6':
        return /*#__PURE__*/_react.default.createElement("h6", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      case 'p':
        return /*#__PURE__*/_react.default.createElement("p", _extends({}, titleProps, {
          key: (0, _guidGenerator.default)(),
          ref: heading
        }), text);

      default:
        return /*#__PURE__*/_react.default.createElement("h1", _extends({}, titleProps, {
          ref: heading,
          key: (0, _guidGenerator.default)()
        }), text);
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
  gradientAngle: 130
};