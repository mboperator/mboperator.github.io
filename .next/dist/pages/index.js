'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3255395819' + ' ' + 'root'
      }, _react2.default.createElement(_style2.default, {
        styleId: '1320473124',
        css: ['body{margin:0;padding:0;font-family:\'Pontano Sans\',sans-serif;}']
      }), _react2.default.createElement(_style2.default, {
        styleId: '3982025574',
        css: ['.root.jsx-3255395819{height:100vh;background-image:url(\'/static/korea.jpg\');background-size:cover;background-position:center;}', '.overlay.jsx-3255395819{background:radial-gradient(transparent,rgba(0,0,0,0.7)),rgba(0,0,0,0);height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.subtitle.jsx-3255395819{color:white;background-color:black;mix-blend-mode:overlay;font-size:1.5em;}', '.hero.jsx-3255395819 h1.jsx-3255395819{display:inline;background-color:#000;mix-blend-mode:overlay;color:white;mix-blend-mode:overlay;}', '.hero.jsx-3255395819{font-size:2em;margin:.5em 0;}', '.links.jsx-3255395819{padding:0;margin:1.5em 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}', '.links.jsx-3255395819 li.jsx-3255395819{-webkit-flex:1;-ms-flex:1;flex:1;margin:.5em;list-style-type:none;text-align:center;}', '.links.jsx-3255395819 li.jsx-3255395819 i.jsx-3255395819{font-size:30px;}', 'h1.jsx-3255395819{margin:0.2em 0;}', 'a.jsx-3255395819:visited{color:black;}']
      }), _react2.default.createElement('div', {
        className: 'jsx-3255395819' + ' ' + 'overlay'
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        className: 'jsx-3255395819'
      }, 'Marcus Bernales'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-3255395819'
      }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet', className: 'jsx-3255395819'
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Pontano+Sans', rel: 'stylesheet', className: 'jsx-3255395819'
      })), _react2.default.createElement('div', {
        className: 'jsx-3255395819' + ' ' + 'content'
      }, _react2.default.createElement('div', {
        className: 'jsx-3255395819' + ' ' + 'hero'
      }, _react2.default.createElement('h1', {
        className: 'jsx-3255395819'
      }, 'I\'m Marcus')), _react2.default.createElement('div', {
        className: 'jsx-3255395819' + ' ' + 'subtitle'
      }, 'I create tools and products that make people more effective'), _react2.default.createElement('ul', {
        className: 'jsx-3255395819' + ' ' + 'links'
      }, _react2.default.createElement('li', {
        className: 'jsx-3255395819'
      }, _react2.default.createElement('a', { href: '/blog', className: 'jsx-3255395819'
      }, _react2.default.createElement('i', {
        className: 'jsx-3255395819' + ' ' + 'fa fa-book'
      }))), _react2.default.createElement('li', {
        className: 'jsx-3255395819'
      }, _react2.default.createElement('a', { target: '_blank', href: 'https://github.com/mboperator', className: 'jsx-3255395819'
      }, _react2.default.createElement('i', {
        className: 'jsx-3255395819' + ' ' + 'fa fa-github'
      }))), _react2.default.createElement('li', {
        className: 'jsx-3255395819'
      }, _react2.default.createElement('a', { target: '_blank', href: 'https://www.linkedin.com/in/marcus-bernales-71b2284b', className: 'jsx-3255395819'
      }, _react2.default.createElement('i', {
        className: 'jsx-3255395819' + ' ' + 'fa fa-linkedin'
      }))), _react2.default.createElement('li', {
        className: 'jsx-3255395819'
      }, _react2.default.createElement('a', { target: '_blank', href: 'https://twitter.com/mpowered__', className: 'jsx-3255395819'
      }, _react2.default.createElement('i', {
        className: 'jsx-3255395819' + ' ' + 'fa fa-twitter'
      }))), _react2.default.createElement('li', {
        className: 'jsx-3255395819'
      }, _react2.default.createElement('a', { target: '_blank', href: 'https://www.instagram.com/mpowered__/', className: 'jsx-3255395819'
      }, _react2.default.createElement('i', {
        className: 'jsx-3255395819' + ' ' + ' fa fa-instagram'
      })))))));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;