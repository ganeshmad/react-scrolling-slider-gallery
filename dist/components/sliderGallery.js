var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import "./SliderGallery.css";
var timer = 0;

var SliderGallery = function (_React$Component) {
  _inherits(SliderGallery, _React$Component);

  function SliderGallery(props) {
    _classCallCheck(this, SliderGallery);

    var _this = _possibleConstructorReturn(this, (SliderGallery.__proto__ || Object.getPrototypeOf(SliderGallery)).call(this, props));

    _this.state = { imagesItems: [], timeInterval: 10, direction: 'right', sourceLen: 0 };
    return _this;
  }

  _createClass(SliderGallery, [{
    key: 'setSateProperties',
    value: function setSateProperties() {

      if (this.isValid(this.props.itemSource)) {
        this.setState({ sourceLen: this.props.itemSource.length });
      }

      if (this.isValid(this.props.slidingDirection)) {
        this.setState({ direction: this.props.slidingDirection });
      }

      if (this.isValid(this.props.slideInterval) && this.props.slideInterval > 10) {
        this.setState({ timeInterval: this.props.slideInterval });
      }
    }
  }, {
    key: 'isValid',
    value: function isValid(property) {
      if (property !== undefined && property != null) {
        return true;
      }
      return false;
    }
  }, {
    key: 'slider',
    value: function slider(bool) {
      if (this.state.sourceLen !== 1) {
        if (bool) {
          var cloneItems = [].concat(_toConsumableArray(this.state.imagesItems));
          var lastItemLeftBound = cloneItems[cloneItems.length - 1].positionProperty;
          timer = setInterval(function () {
            for (var index = 0; index < cloneItems.length; index++) {
              var eachImageElement = document.querySelector('#image_container_' + index.toString());
              var directionAttribute = cloneItems[index].direction;
              var position = eachImageElement.style[directionAttribute];
              var isPisxelExist = position.includes("px");
              if (isPisxelExist) {
                position = position.split('px');
                position = parseInt(position[0], 10);
              }

              if (position > -201) {
                position = position - 1;
                eachImageElement.style[directionAttribute] = position + 'px';
                eachImageElement.style.display = 'block';
              } else {
                eachImageElement.style.display = 'none';
                eachImageElement.style[directionAttribute] = lastItemLeftBound + 'px';
              }
            }
          }, this.state.timeInterval);
        } else {
          clearInterval(timer);
        }
      }
    }
  }, {
    key: 'bindingGallery',
    value: function bindingGallery() {
      var _this2 = this;

      if (this.state.sourceLen > 0) {
        var temp = [];
        var sliderDirection = this.state.direction;
        var positionValue = 0;
        var gallerywrapper = document.querySelector("#gallerywrapper");
        var container = document.querySelector("#container");
        var containerWidth = 200;

        switch (this.state.sourceLen) {
          case 1:
            gallerywrapper.style.width = 1 * containerWidth + 25 + "px";;
            container.style.width = 1 * containerWidth + "px";break;
          case 2:
            gallerywrapper.style.width = 1 * containerWidth + 5 + "px";;
            container.style.width = 1 * containerWidth + 5 + "px";break;
          case 3:
            gallerywrapper.style.width = 2 * containerWidth + "px";
            container.style.width = 2 * containerWidth + "px";break;
          case 4:
            gallerywrapper.style.width = 3 * containerWidth + "px";
            container.style.width = 3 * containerWidth + "px";break;
          case 5:
            gallerywrapper.style.width = 4 * containerWidth + "px";
            container.style.width = 4 * containerWidth + "px";break;
          case 6:
            gallerywrapper.style.width = 5 * containerWidth + "px";
            container.style.width = 5 * containerWidth + "px";break;
          case 7:
            gallerywrapper.style.width = 6 * containerWidth + "px";
            container.style.width = 6 * containerWidth + "px";break;
          default:
            gallerywrapper.style.width = "auto";
            container.style.width = "auto";
        }

        for (var i = 0; i < this.props.itemSource.length; i++) {
          var element = { 'direction': sliderDirection, 'imagePath': this.props.itemSource[i].imageUrl, 'positionProperty': positionValue, 'mouseout': this.mouseOut.bind(this), 'mouseover': this.mouseOver.bind(this) };
          temp.push(element);
          positionValue = positionValue + 201;
        }

        this.setState({ imagesItems: temp, isOpen: false });
        setTimeout(function () {
          _this2.slider(true);
        }, 50);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        _this3.setSateProperties();
        _this3.bindingGallery();
      }, 100);
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      this.slider(true);
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      this.slider(false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.slider(false);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'gallerywrapper', className: 'gallery-wrapper' },
        React.createElement(
          'div',
          { id: 'container', className: 'gallery-container' },
          React.createElement('div', { className: 'left-paper' }),
          this.state.imagesItems.map(function (item, key) {
            var pimgid = 'image_container_' + key;
            var directionStyles = item.direction === 'left' ? { direction: { left: item.positionProperty } } : { direction: { right: item.positionProperty } };

            return React.createElement(
              'div',
              { className: 'image-paper', id: pimgid, key: key, style: directionStyles.direction },
              React.createElement(
                'div',
                { onMouseOut: function onMouseOut() {
                    return item.mouseout();
                  }, onMouseOver: function onMouseOver() {
                    return item.mouseover();
                  } },
                React.createElement('img', { className: 'gallery-img', src: item.imagePath, alt: 'loading' })
              )
            );
          }),
          React.createElement('div', { className: 'right-paper' })
        )
      );
    }
  }]);

  return SliderGallery;
}(React.Component);

export default SliderGallery;