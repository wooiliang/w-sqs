'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WSQS = function () {
  function WSQS(awsDefaultRegion) {
    _classCallCheck(this, WSQS);

    _awsSdk2.default.config.update({
      region: awsDefaultRegion
    });

    this.sqs = new _awsSdk2.default.SQS();
  }

  _createClass(WSQS, [{
    key: 'sendMessage',
    value: function sendMessage(params) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.sqs.sendMessage(params, function (error, data) {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        });
      });
    }
  }]);

  return WSQS;
}();

exports.default = WSQS;