'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _semanticUiReact = require('semantic-ui-react');

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyInput = function (_Component) {
  _inherits(FormsyInput, _Component);

  function FormsyInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormsyInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormsyInput.__proto__ || Object.getPrototypeOf(FormsyInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = { allowError: false }, _this.handleChange = function () {
      var _this2;

      return (_this2 = _this).__handleChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleBlur = function () {
      var _this3;

      return (_this3 = _this).__handleBlur__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.showError = function () {
      var _this4;

      return (_this4 = _this).__showError__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormsyInput, [{
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.__showError__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__() {
        return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__() {
        return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            defaultValue = _props.defaultValue,
            setValue = _props.setValue;

        if (defaultValue) setValue(defaultValue);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillReceiveProps',
    value: function () {
      function componentWillReceiveProps(nextProps) {
        if (nextProps.isFormSubmitted()) this.showError();
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__() {
        return this.__handleChange__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleChange__REACT_HOT_LOADER__',
    value: function () {
      function __handleChange__REACT_HOT_LOADER__(e, data) {
        var value = data.value;

        this.props.setValue(value);
        if (this.props.onChange) this.props.onChange(e, data);
        if (this.props.instantValidation) this.showError();
      }

      return __handleChange__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__() {
        return this.__handleBlur__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__handleBlur__REACT_HOT_LOADER__',
    value: function () {
      function __handleBlur__REACT_HOT_LOADER__(e, data) {
        this.showError();
        if (this.props.onBlur) this.props.onBlur(e, data);
      }

      return __handleBlur__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.__showError__REACT_HOT_LOADER__.apply(this, arguments);
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: '__showError__REACT_HOT_LOADER__',
    value: function () {
      function __showError__REACT_HOT_LOADER__() {
        return this.setState({ allowError: true });
      }

      return __showError__REACT_HOT_LOADER__;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props2 = this.props,
            id = _props2.id,
            inputAs = _props2.inputAs,
            inputClassName = _props2.inputClassName,
            required = _props2.required,
            label = _props2.label,
            defaultValue = _props2.defaultValue,
            getValue = _props2.getValue,
            isValid = _props2.isValid,
            isPristine = _props2.isPristine,
            getErrorMessage = _props2.getErrorMessage,
            errorLabel = _props2.errorLabel,
            as = _props2.as,
            width = _props2.width,
            className = _props2.className,
            disabled = _props2.disabled,
            inline = _props2.inline,
            passRequiredToField = _props2.passRequiredToField;
        var allowError = this.state.allowError;

        var error = !isPristine() && !isValid() && allowError;

        var inputProps = _extends({}, (0, _utils.filterSuirElementProps)(this.props), {
          value: getValue() || isPristine() && defaultValue || '',
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          className: inputClassName,
          error: !disabled && error,
          label: label,
          id: id
        });

        var shortHandMode = inputAs === _semanticUiReact.Form.Input || inputAs === _semanticUiReact.Form.TextArea;
        var inputNode = shortHandMode ? (0, _react.createElement)(inputAs).props.control : inputAs;

        if (shortHandMode) {
          delete inputProps.label;
          if (inputAs === _semanticUiReact.Form.TextArea) delete inputProps.error;
        }

        return _react2['default'].createElement(
          _semanticUiReact.Form.Field,
          {
            as: as,
            className: className,
            required: required && passRequiredToField,
            error: !disabled && error,
            width: width,
            inline: inline,
            disabled: disabled
          },
          shortHandMode && _react2['default'].createElement(
            'label',
            { htmlFor: id },
            ' ',
            label,
            ' '
          ),
          (0, _react.createElement)(inputNode, _extends({}, inputProps)),
          !disabled && error && errorLabel && (0, _react.cloneElement)(errorLabel, {}, getErrorMessage())
        );
      }

      return render;
    }()
  }]);

  return FormsyInput;
}(_react.Component);

FormsyInput.propTypes = {
  id: _propTypes2['default'].string,
  name: _propTypes2['default'].string.isRequired,
  as: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].node]),
  width: _propTypes2['default'].number,
  className: _propTypes2['default'].string,
  inputClassName: _propTypes2['default'].string,
  disabled: _propTypes2['default'].bool,
  inline: _propTypes2['default'].bool,
  passRequiredToField: _propTypes2['default'].bool,
  inputAs: _propTypes2['default'].oneOf([_semanticUiReact.Input, _semanticUiReact.TextArea, _semanticUiReact.Form.Input, _semanticUiReact.Form.TextArea]),
  errorLabel: _propTypes2['default'].element,
  required: _propTypes2['default'].bool,
  label: _propTypes2['default'].string,
  instantValidation: _propTypes2['default'].bool,
  defaultValue: _propTypes2['default'].string,
  onBlur: _propTypes2['default'].func,
  isValid: _propTypes2['default'].func.isRequired,
  setValue: _propTypes2['default'].func.isRequired,
  getValue: _propTypes2['default'].func.isRequired,
  onChange: _propTypes2['default'].func,
  isPristine: _propTypes2['default'].func.isRequired,
  getErrorMessage: _propTypes2['default'].func.isRequired,
  validationError: _propTypes2['default'].string,
  validationErrors: _propTypes2['default'].object,
  validations: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object])
};
FormsyInput.defaultProps = {
  inputAs: _semanticUiReact.Input,
  passRequiredToField: true
};
exports['default'] = (0, _formsyReact.withFormsy)(FormsyInput);
