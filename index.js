webpackJsonp([8],{

/***/ 1:
/***/ function(module, exports) {

module.exports = vendor;

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(0);


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProdSpecRowTpl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

var _labelfield = __webpack_require__(27);

var _labelfield2 = _interopRequireDefault(_labelfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProdSpecRowTpl = exports.ProdSpecRowTpl = function ProdSpecRowTpl(name) {
  return '\n  <div class="js-prodspecrow row">\n    <div class="grid width--2">\n      <div class="spec-namefield-container">\n        <input name="specname" type="text" class="spce-namefield js-prodspecrow-name" value="' + (name || '规格') + '" />\n      </div>\n    </div>\n    <div class="grid width--9">\n      <div class="spce-labelfield js-prodspecrow-labelfield js-labelfield">\n        <div class="spec-labelfield-labels js-labelfield-container"></div>\n        <input type="text" name="labelfield" class="spce-labelfield-field js-labelfield-input" />\n        <div class="js-labelfield-autocomplete">\n          <div class="js-labelfield-creator"></div>\n          <ul class="labelfield-memolist js-labelfield-memolist"></ul>\n        </div>\n      </div>\n    </div>\n\n    <div class="grid width--1">\n      <div class="spec-closed js-prodspecrow-close">\n        <span class="ic ion-ios-close-outline"></span>\n      </div>\n    </div>\n  </div>\n';
};

/**
 * Components/ProdSpecRow.
 */

var ProdSpecRow = function () {
  function ProdSpecRow(_ref) {
    var $el = _ref.$el;
    var _ref$name = _ref.name;
    var name = _ref$name === undefined ? '' : _ref$name;

    _classCallCheck(this, ProdSpecRow);

    this.$el = $el;
    this.name = name;

    this.datastate = {};
    this.init();
  }

  _createClass(ProdSpecRow, [{
    key: 'init',
    value: function init() {
      var $el = this.$el;
      var datastate = this.datastate;
      var name = this.name;

      $el.append(ProdSpecRowTpl(name));

      this.lf = _labelfield2.default.of({ $el: $el.find('.js-prodspecrow-labelfield') });

      this.$close = $el.find('.js-prodspecrow-close');
      this.$input = $el.find('.js-prodspecrow-name');

      this.trigger = $el.trigger.bind($el);
      this.on = $el.on.bind($el);

      datastate.name = name;
      datastate.labels = this.lf.getVal();

      this.event();
    }
  }, {
    key: 'getVal',
    value: function getVal() {
      var datastate = this.datastate;
      var labels = datastate.labels;
      var name = datastate.name;


      return Object.assign({}, {
        name: name,
        labels: labels
      });
    }
  }, {
    key: 'event',
    value: function event() {
      var $el = this.$el;
      var $input = this.$input;
      var $close = this.$close;
      var name = this.name;
      var lf = this.lf;
      var trigger = this.trigger;
      var datastate = this.datastate;

      /**
       * Components/ProdSpecRow NameField Changed.
       */

      $input.on('keyup', function () {
        var val = (0, _jquery2.default)(this).val().trim();
        datastate.name = val;
        trigger('prodspecrow.export', datastate);
      });

      /**
       * Components/ProdSpecRow Send Remove Event.
       */

      $close.on('click', function () {
        trigger('prodspecrow.removerow');
      });

      /**
       * Components/ProdSpecRow Connect LabelField.
       */
      lf.on('labelfield.export', function () {
        datastate.labels = lf.getVal();
        trigger('prodspecrow.export', datastate);
      });
    }
  }]);

  return ProdSpecRow;
}();

exports.default = ProdSpecRow;


ProdSpecRow.of = function (opt) {
  return new ProdSpecRow(opt);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGVtby1zeXNcXHNjcmlwdHNcXHByb2RzcGVjcm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sSUFBTSwwQ0FBaUIsU0FBakIsY0FBaUI7QUFBQSxpT0FJaUUsUUFBUSxJQUp6RTtBQUFBLENBQXZCOzs7Ozs7SUE4QmMsVztBQUNuQiw2QkFBZ0M7QUFBQSxRQUFsQixHQUFrQixRQUFsQixHQUFrQjtBQUFBLHlCQUFiLElBQWE7QUFBQSxRQUFiLElBQWEsNkJBQU4sRUFBTTs7QUFBQTs7QUFDOUIsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEsU0FBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBSyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFBQSxVQUNDLEdBREQsR0FDMEIsSUFEMUIsQ0FDQyxHQUREO0FBQUEsVUFDTSxTQUROLEdBQzBCLElBRDFCLENBQ00sU0FETjtBQUFBLFVBQ2lCLElBRGpCLEdBQzBCLElBRDFCLENBQ2lCLElBRGpCOztBQUVMLFVBQUksTUFBSixDQUFXLGVBQWUsSUFBZixDQUFYOztBQUVBLFdBQUssRUFBTCxHQUFVLHFCQUFXLEVBQVgsQ0FBYyxFQUFFLEtBQUssSUFBSSxJQUFKLENBQVMsNEJBQVQsQ0FBUCxFQUFkLENBQVY7O0FBRUEsV0FBSyxNQUFMLEdBQWMsSUFBSSxJQUFKLENBQVMsdUJBQVQsQ0FBZDtBQUNBLFdBQUssTUFBTCxHQUFjLElBQUksSUFBSixDQUFTLHNCQUFULENBQWQ7O0FBRUEsV0FBSyxPQUFMLEdBQWUsSUFBSSxPQUFKLENBQVksSUFBWixDQUFpQixHQUFqQixDQUFmO0FBQ0EsV0FBSyxFQUFMLEdBQVUsSUFBSSxFQUFKLENBQU8sSUFBUCxDQUFZLEdBQVosQ0FBVjs7QUFFQSxnQkFBVSxJQUFWLEdBQWlCLElBQWpCO0FBQ0EsZ0JBQVUsTUFBVixHQUFtQixLQUFLLEVBQUwsQ0FBUSxNQUFSLEVBQW5COztBQUVBLFdBQUssS0FBTDtBQUNEOzs7NkJBRVE7QUFBQSxVQUNELFNBREMsR0FDYSxJQURiLENBQ0QsU0FEQztBQUFBLFVBRUQsTUFGQyxHQUVnQixTQUZoQixDQUVELE1BRkM7QUFBQSxVQUVPLElBRlAsR0FFZ0IsU0FGaEIsQ0FFTyxJQUZQOzs7QUFJUCxhQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0I7QUFDdkIsY0FBTSxJQURpQjtBQUV2QixnQkFBUTtBQUZlLE9BQWxCLENBQVA7QUFJRDs7OzRCQUVPO0FBQUEsVUFHSixHQUhJLEdBVUYsSUFWRSxDQUdKLEdBSEk7QUFBQSxVQUlKLE1BSkksR0FVRixJQVZFLENBSUosTUFKSTtBQUFBLFVBS0osTUFMSSxHQVVGLElBVkUsQ0FLSixNQUxJO0FBQUEsVUFNSixJQU5JLEdBVUYsSUFWRSxDQU1KLElBTkk7QUFBQSxVQU9KLEVBUEksR0FVRixJQVZFLENBT0osRUFQSTtBQUFBLFVBUUosT0FSSSxHQVVGLElBVkUsQ0FRSixPQVJJO0FBQUEsVUFTSixTQVRJLEdBVUYsSUFWRSxDQVNKLFNBVEk7Ozs7OztBQWdCTixhQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFlBQVc7QUFDNUIsWUFBSSxNQUFNLHNCQUFFLElBQUYsRUFBUSxHQUFSLEdBQWMsSUFBZCxFQUFWO0FBQ0Esa0JBQVUsSUFBVixHQUFpQixHQUFqQjtBQUNBLGdCQUFRLG9CQUFSLEVBQThCLFNBQTlCO0FBQ0QsT0FKRDs7Ozs7O0FBV0EsYUFBTyxFQUFQLENBQVUsT0FBVixFQUFtQixZQUFXO0FBQzVCLGdCQUFRLHVCQUFSO0FBQ0QsT0FGRDs7Ozs7QUFRQSxTQUFHLEVBQUgsQ0FBTSxtQkFBTixFQUEyQixZQUFXO0FBQ3BDLGtCQUFVLE1BQVYsR0FBbUIsR0FBRyxNQUFILEVBQW5CO0FBQ0EsZ0JBQVEsb0JBQVIsRUFBOEIsU0FBOUI7QUFDRCxPQUhEO0FBS0Q7Ozs7OztrQkE3RWtCLFc7OztBQWlGckIsWUFBWSxFQUFaLEdBQWlCLFVBQVMsR0FBVCxFQUFjO0FBQzdCLFNBQU8sSUFBSSxXQUFKLENBQWdCLEdBQWhCLENBQVA7QUFDRCxDQUZEIiwiZmlsZSI6InByb2RzcGVjcm93LmpzIiwic291cmNlUm9vdCI6IkY6L2F0bGFudGlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IExhYmVsRmllbGQsIHsgTGFiZWxGaWVsZFRwbCB9IGZyb20gJy4vbGFiZWxmaWVsZC5qcydcblxuZXhwb3J0IGNvbnN0IFByb2RTcGVjUm93VHBsID0gbmFtZSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJqcy1wcm9kc3BlY3JvdyByb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3aWR0aC0tMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNwZWMtbmFtZWZpZWxkLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInNwZWNuYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cInNwY2UtbmFtZWZpZWxkIGpzLXByb2RzcGVjcm93LW5hbWVcIiB2YWx1ZT1cIiR7bmFtZSB8fCAn6KeE5qC8J31cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdyaWQgd2lkdGgtLTlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGNlLWxhYmVsZmllbGQganMtcHJvZHNwZWNyb3ctbGFiZWxmaWVsZCBqcy1sYWJlbGZpZWxkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLWxhYmVsZmllbGQtbGFiZWxzIGpzLWxhYmVsZmllbGQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYWJlbGZpZWxkXCIgY2xhc3M9XCJzcGNlLWxhYmVsZmllbGQtZmllbGQganMtbGFiZWxmaWVsZC1pbnB1dFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWF1dG9jb21wbGV0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWNyZWF0b3JcIj48L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJsYWJlbGZpZWxkLW1lbW9saXN0IGpzLWxhYmVsZmllbGQtbWVtb2xpc3RcIj48L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImdyaWQgd2lkdGgtLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLWNsb3NlZCBqcy1wcm9kc3BlY3Jvdy1jbG9zZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljIGlvbi1pb3MtY2xvc2Utb3V0bGluZVwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmBcblxuLyoqXG4gKiBDb21wb25lbnRzL1Byb2RTcGVjUm93LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2RTcGVjUm93IHtcbiAgY29uc3RydWN0b3IoeyAkZWwsIG5hbWUgPSAnJyB9KSB7XG4gICAgdGhpcy4kZWwgPSAkZWxcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG5cbiAgICB0aGlzLmRhdGFzdGF0ZSA9IHt9XG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHsgJGVsLCBkYXRhc3RhdGUsIG5hbWUgfSA9IHRoaXNcbiAgICAkZWwuYXBwZW5kKFByb2RTcGVjUm93VHBsKG5hbWUpKVxuXG4gICAgdGhpcy5sZiA9IExhYmVsRmllbGQub2YoeyAkZWw6ICRlbC5maW5kKCcuanMtcHJvZHNwZWNyb3ctbGFiZWxmaWVsZCcpIH0pXG5cbiAgICB0aGlzLiRjbG9zZSA9ICRlbC5maW5kKCcuanMtcHJvZHNwZWNyb3ctY2xvc2UnKVxuICAgIHRoaXMuJGlucHV0ID0gJGVsLmZpbmQoJy5qcy1wcm9kc3BlY3Jvdy1uYW1lJylcblxuICAgIHRoaXMudHJpZ2dlciA9ICRlbC50cmlnZ2VyLmJpbmQoJGVsKVxuICAgIHRoaXMub24gPSAkZWwub24uYmluZCgkZWwpXG5cbiAgICBkYXRhc3RhdGUubmFtZSA9IG5hbWVcbiAgICBkYXRhc3RhdGUubGFiZWxzID0gdGhpcy5sZi5nZXRWYWwoKVxuXG4gICAgdGhpcy5ldmVudCgpXG4gIH1cblxuICBnZXRWYWwoKSB7XG4gICAgbGV0IHsgZGF0YXN0YXRlIH0gPSB0aGlzXG4gICAgbGV0IHsgbGFiZWxzLCBuYW1lIH0gPSBkYXRhc3RhdGVcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgbGFiZWxzOiBsYWJlbHNcbiAgICB9KVxuICB9XG5cbiAgZXZlbnQoKSB7XG5cbiAgICBsZXQge1xuICAgICAgJGVsLFxuICAgICAgJGlucHV0LFxuICAgICAgJGNsb3NlLFxuICAgICAgbmFtZSxcbiAgICAgIGxmLFxuICAgICAgdHJpZ2dlcixcbiAgICAgIGRhdGFzdGF0ZVxuICAgIH0gPSB0aGlzXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnRzL1Byb2RTcGVjUm93IE5hbWVGaWVsZCBDaGFuZ2VkLlxuICAgICAqL1xuXG4gICAgJGlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHZhbCA9ICQodGhpcykudmFsKCkudHJpbSgpXG4gICAgICBkYXRhc3RhdGUubmFtZSA9IHZhbFxuICAgICAgdHJpZ2dlcigncHJvZHNwZWNyb3cuZXhwb3J0JywgZGF0YXN0YXRlKVxuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudHMvUHJvZFNwZWNSb3cgU2VuZCBSZW1vdmUgRXZlbnQuXG4gICAgICovXG5cbiAgICAkY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICB0cmlnZ2VyKCdwcm9kc3BlY3Jvdy5yZW1vdmVyb3cnKVxuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudHMvUHJvZFNwZWNSb3cgQ29ubmVjdCBMYWJlbEZpZWxkLlxuICAgICAqL1xuICAgIGxmLm9uKCdsYWJlbGZpZWxkLmV4cG9ydCcsIGZ1bmN0aW9uKCkge1xuICAgICAgZGF0YXN0YXRlLmxhYmVscyA9IGxmLmdldFZhbCgpXG4gICAgICB0cmlnZ2VyKCdwcm9kc3BlY3Jvdy5leHBvcnQnLCBkYXRhc3RhdGUpXG4gICAgfSlcblxuICB9XG59XG5cblxuUHJvZFNwZWNSb3cub2YgPSBmdW5jdGlvbihvcHQpIHtcbiAgcmV0dXJuIG5ldyBQcm9kU3BlY1JvdyhvcHQpXG59XG4iXX0=

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelFieldTpl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelFieldTpl = exports.LabelFieldTpl = function LabelFieldTpl(_) {
  return '\n  <div class="js-labelfield">\n    <input type="text" name="label" class="js-labelfield-input" />\n    <div class="js-labelfield-container"></div>\n    <div class="js-labelfield-autocomplete">\n      <div class="js-labelfield-creator"></div>\n      <ul class="js-labelfield-memolist"></ul>\n    </div>\n  </div>\n';
};

var LabelFieldLabelTpl = function LabelFieldLabelTpl(data) {
  return '\n<div class="labelfield-label js-labelfield-label">\n  <div class="labelfield-label-close js-labelfield-close">\n    <span class="ic ion-ios-close-outline"></span>\n  </div>\n  ' + data + '\n</div>\n';
};

var LabelFieldListCreateTpl = function LabelFieldListCreateTpl(data) {
  return '\n<div class="labelfield-createor js-labelfield-creator-container">\n  新增规格：\n  <span class="js-labelfield-creator-content">\n    ' + data + '\n  </span>\n</div>\n';
};

var LabelFieldMemoTpl = function LabelFieldMemoTpl(data) {
  return '\n<li>\n  <div class="labelfield-memolistitem js-labelfield-memolistitem">' + data + '</div>\n</li>\n';
};

/**
 * Components/LabelField.
 */

var LabelField = function () {
  function LabelField(_ref) {
    var $el = _ref.$el;

    _classCallCheck(this, LabelField);

    this.$el = $el;

    this.datastate = {};
    this.memorizelist = [];

    this.init();
  }

  _createClass(LabelField, [{
    key: 'init',
    value: function init() {
      var $el = this.$el;


      this.$input = $el.find('.js-labelfield-input');
      this.$list = $el.find('.js-labelfield-memolist');
      this.$container = $el.find('.js-labelfield-container');
      this.$creator = $el.find('.js-labelfield-creator');
      this.$ac = $el.find('.js-labelfield-autocomplete');

      this.trigger = $el.trigger.bind($el);
      this.on = $el.on.bind($el);

      this.event();
    }
  }, {
    key: 'getVal',
    value: function getVal() {
      return Object.values(this.datastate);
    }
  }, {
    key: 'event',
    value: function event() {
      var $el = this.$el;
      var $input = this.$input;
      var $container = this.$container;
      var $list = this.$list;
      var $creator = this.$creator;
      var $ac = this.$ac;
      var datastate = this.datastate;
      var memorizelist = this.memorizelist;


      function dropActived(n) {
        return Object.values(datastate).indexOf(n) === -1;
      }

      function checkLabelExisting(data) {
        var out = false;

        for (var k in datastate) {
          if (datastate[k] === data) out = true;
        }

        return out;
      }

      function checkMemoExisting(data) {
        var out = false;

        for (var i = 0; i < memorizelist.length; i++) {
          if (memorizelist[i] === data) out = true;
        }

        return out;
      }

      /**
       * Components/LabelField InputField Changed.
       */

      $input.on('keyup', function (evt) {
        var isEnterKey = evt.which === 9 || evt.which === 13;
        var isDirectionKey = evt.which === 38 || evt.which === 40;
        var val = (0, _jquery2.default)(this).val().trim();

        if (isEnterKey && val) $el.trigger('labelfield.create', val);
        if (isDirectionKey) {
          $el.trigger('labelfield.activelist', evt.which);
        } else {
          $el.trigger('labelfield.buildmemolist');
        }

        $el.trigger('labelfield.creator', val);
      });

      /**
       * Components/LabelField Toggle Autocomplete.
       */

      $input.on('focusin focusout', function (evt) {
        setTimeout(function (_) {
          $ac.css('display', evt.type === 'focusin' ? 'block' : 'none');
        }, 100);
      });

      /**
       * Components/LabelField Toggle & Update Creator.
       */

      $el.on('labelfield.creator', function (evt, data) {
        $creator.css('display', data ? 'block' : 'none');
        $creator.html((0, _jquery2.default)(LabelFieldListCreateTpl(data)));
      });

      /**
       * Components/LabelField Create Datastate.
       */

      $el.on('labelfield.create', function (evt, data) {

        $input.val('');
        setTimeout(function (_) {
          $el.trigger('labelfield.creator', '');
        }, 0);

        if (checkLabelExisting(data)) return;

        var label = {
          id: Date.now(),
          data: data
        };

        (0, _jquery2.default)(LabelFieldLabelTpl(data)).on('click', '.js-labelfield-close', function (evt) {
          (0, _jquery2.default)(evt.delegateTarget).remove();
          $el.trigger('labelfield.remove', label);
        }).appendTo($container);

        datastate[label.id] = label.data;

        if (!checkMemoExisting(label.data)) memorizelist.push(label.data);

        $el.trigger('labelfield.export');
      });

      /**
       * Components/LabelField Remove Datastate.
       */

      $el.on('labelfield.remove', function (evt, data) {

        delete datastate[data.id];

        $el.trigger('labelfield.export');
      });

      /**
       * Components/LabelField Trun Active ListItem.
       */

      $el.on('labelfield.activelist', function (evt, key) {
        var li = $list.find('li');
        var curr = $list.find('li.active').index();

        li.removeClass('active');

        if (key === 38) (0, _jquery2.default)(li).eq(Math.max(0, curr - 1)).addClass('active');
        if (key === 40) (0, _jquery2.default)(li).eq(Math.min(li.length - 1, curr + 1)).addClass('active');
      });

      /**
       * Components/LabelField ReBuild MemoList.
       */

      $el.on('labelfield.buildmemolist', function () {
        $list.html(memorizelist.filter(dropActived).map(LabelFieldMemoTpl));
      });

      /**
       * Components/LabelField Trigger Click.
       */

      $el.on('click', '.js-labelfield-memolistitem', function () {
        $el.trigger('labelfield.create', (0, _jquery2.default)(this).text().trim());
      });

      $el.on('click', '.js-labelfield-creator-container', function () {
        var $ctx = (0, _jquery2.default)(this).find('.js-labelfield-creator-content');
        $el.trigger('labelfield.create', $ctx.text().trim());
      });
    }
  }]);

  return LabelField;
}();

LabelField.of = function (opt) {
  return new LabelField(opt);
};

exports.default = LabelField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGVtby1zeXNcXHNjcmlwdHNcXGxhYmVsZmllbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRU8sSUFBTSx3Q0FBZ0IsU0FBaEIsYUFBZ0I7QUFBQTtBQUFBLENBQXRCOztBQVdQLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQjtBQUFBLGdNQUt2QixJQUx1QjtBQUFBLENBQTNCOztBQVNBLElBQU0sMEJBQTBCLFNBQTFCLHVCQUEwQjtBQUFBLGdKQUkxQixJQUowQjtBQUFBLENBQWhDOztBQVNBLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQjtBQUFBLHdGQUUwQyxJQUYxQztBQUFBLENBQTFCOzs7Ozs7SUFVTSxVO0FBQ0osNEJBQXFCO0FBQUEsUUFBUCxHQUFPLFFBQVAsR0FBTzs7QUFBQTs7QUFDbkIsU0FBSyxHQUFMLEdBQVcsR0FBWDs7QUFFQSxTQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLLFlBQUwsR0FBb0IsRUFBcEI7O0FBRUEsU0FBSyxJQUFMO0FBQ0Q7Ozs7MkJBRU07QUFBQSxVQUNDLEdBREQsR0FDUyxJQURULENBQ0MsR0FERDs7O0FBR0wsV0FBSyxNQUFMLEdBQWMsSUFBSSxJQUFKLENBQVMsc0JBQVQsQ0FBZDtBQUNBLFdBQUssS0FBTCxHQUFhLElBQUksSUFBSixDQUFTLHlCQUFULENBQWI7QUFDQSxXQUFLLFVBQUwsR0FBa0IsSUFBSSxJQUFKLENBQVMsMEJBQVQsQ0FBbEI7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsSUFBSSxJQUFKLENBQVMsd0JBQVQsQ0FBaEI7QUFDQSxXQUFLLEdBQUwsR0FBVyxJQUFJLElBQUosQ0FBUyw2QkFBVCxDQUFYOztBQUVBLFdBQUssT0FBTCxHQUFlLElBQUksT0FBSixDQUFZLElBQVosQ0FBaUIsR0FBakIsQ0FBZjtBQUNBLFdBQUssRUFBTCxHQUFVLElBQUksRUFBSixDQUFPLElBQVAsQ0FBWSxHQUFaLENBQVY7O0FBRUEsV0FBSyxLQUFM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LEVBQU0sRUFBTixDQUFTLEtBQUssR0FBTCxDQUFTLEdBQUcsTUFBSCxHQUFZLENBQXJCLEVBQXdCLE9BQU8sQ0FBL0IsQ0FBVCxFQUE0QyxRQUE1QyxDQUFxRCxRQUFyRDtBQUNoQixPQVJEOzs7Ozs7QUFlQSxVQUFJLEVBQUosQ0FBTywwQkFBUCxFQUFtQyxZQUFXO0FBQzVDLGNBQU0sSUFBTixDQUFXLGFBQWEsTUFBYixDQUFvQixXQUFwQixFQUFpQyxHQUFqQyxDQUFxQyxpQkFBckMsQ0FBWDtBQUNELE9BRkQ7Ozs7OztBQVNBLFVBQUksRUFBSixDQUFPLE9BQVAsRUFBZ0IsNkJBQWhCLEVBQStDLFlBQVc7QUFDeEQsWUFBSSxPQUFKLENBQVksbUJBQVosRUFBaUMsc0JBQUUsSUFBRixFQUFRLElBQVIsR0FBZSxJQUFmLEVBQWpDO0FBQ0QsT0FGRDs7QUFJQSxVQUFJLEVBQUosQ0FBTyxPQUFQLEVBQWdCLGtDQUFoQixFQUFvRCxZQUFXO0FBQzdELFlBQUksT0FBTyxzQkFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLGdDQUFiLENBQVg7QUFDQSxZQUFJLE9BQUosQ0FBWSxtQkFBWixFQUFpQyxLQUFLLElBQUwsR0FBWSxJQUFaLEVBQWpDO0FBQ0QsT0FIRDtBQU1EOzs7Ozs7QUFJSCxXQUFXLEVBQVgsR0FBZ0IsVUFBUyxHQUFULEVBQWM7QUFDNUIsU0FBTyxJQUFJLFVBQUosQ0FBZSxHQUFmLENBQVA7QUFDRCxDQUZEOztrQkFLZSxVIiwiZmlsZSI6ImxhYmVsZmllbGQuanMiLCJzb3VyY2VSb290IjoiRjovYXRsYW50aXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbmV4cG9ydCBjb25zdCBMYWJlbEZpZWxkVHBsID0gXyA9PiBgXG4gIDxkaXYgY2xhc3M9XCJqcy1sYWJlbGZpZWxkXCI+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhYmVsXCIgY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWlucHV0XCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwianMtbGFiZWxmaWVsZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwianMtbGFiZWxmaWVsZC1hdXRvY29tcGxldGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWNyZWF0b3JcIj48L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImpzLWxhYmVsZmllbGQtbWVtb2xpc3RcIj48L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmBcblxuY29uc3QgTGFiZWxGaWVsZExhYmVsVHBsID0gZGF0YSA9PiBgXG48ZGl2IGNsYXNzPVwibGFiZWxmaWVsZC1sYWJlbCBqcy1sYWJlbGZpZWxkLWxhYmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJsYWJlbGZpZWxkLWxhYmVsLWNsb3NlIGpzLWxhYmVsZmllbGQtY2xvc2VcIj5cbiAgICA8c3BhbiBjbGFzcz1cImljIGlvbi1pb3MtY2xvc2Utb3V0bGluZVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG4gICR7ZGF0YX1cbjwvZGl2PlxuYFxuXG5jb25zdCBMYWJlbEZpZWxkTGlzdENyZWF0ZVRwbCA9IGRhdGEgPT4gYFxuPGRpdiBjbGFzcz1cImxhYmVsZmllbGQtY3JlYXRlb3IganMtbGFiZWxmaWVsZC1jcmVhdG9yLWNvbnRhaW5lclwiPlxuICDmlrDlop7op4TmoLzvvJpcbiAgPHNwYW4gY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWNyZWF0b3ItY29udGVudFwiPlxuICAgICR7ZGF0YX1cbiAgPC9zcGFuPlxuPC9kaXY+XG5gXG5cbmNvbnN0IExhYmVsRmllbGRNZW1vVHBsID0gZGF0YSA9PiBgXG48bGk+XG4gIDxkaXYgY2xhc3M9XCJsYWJlbGZpZWxkLW1lbW9saXN0aXRlbSBqcy1sYWJlbGZpZWxkLW1lbW9saXN0aXRlbVwiPiR7ZGF0YX08L2Rpdj5cbjwvbGk+XG5gXG5cbi8qKlxuICogQ29tcG9uZW50cy9MYWJlbEZpZWxkLlxuICovXG5cbmNsYXNzIExhYmVsRmllbGQge1xuICBjb25zdHJ1Y3Rvcih7ICRlbCB9KSB7XG4gICAgdGhpcy4kZWwgPSAkZWxcblxuICAgIHRoaXMuZGF0YXN0YXRlID0ge31cbiAgICB0aGlzLm1lbW9yaXplbGlzdCA9IFtdXG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBsZXQgeyAkZWwgfSA9IHRoaXNcblxuICAgIHRoaXMuJGlucHV0ID0gJGVsLmZpbmQoJy5qcy1sYWJlbGZpZWxkLWlucHV0JylcbiAgICB0aGlzLiRsaXN0ID0gJGVsLmZpbmQoJy5qcy1sYWJlbGZpZWxkLW1lbW9saXN0JylcbiAgICB0aGlzLiRjb250YWluZXIgPSAkZWwuZmluZCgnLmpzLWxhYmVsZmllbGQtY29udGFpbmVyJylcbiAgICB0aGlzLiRjcmVhdG9yID0gJGVsLmZpbmQoJy5qcy1sYWJlbGZpZWxkLWNyZWF0b3InKVxuICAgIHRoaXMuJGFjID0gJGVsLmZpbmQoJy5qcy1sYWJlbGZpZWxkLWF1dG9jb21wbGV0ZScpXG5cbiAgICB0aGlzLnRyaWdnZXIgPSAkZWwudHJpZ2dlci5iaW5kKCRlbClcbiAgICB0aGlzLm9uID0gJGVsLm9uLmJpbmQoJGVsKVxuXG4gICAgdGhpcy5ldmVudCgpXG4gIH1cblxuICBnZXRWYWwoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5kYXRhc3RhdGUpXG4gIH1cblxuICBldmVudCgpIHtcblxuXG4gICAgbGV0IHtcbiAgICAgICRlbCxcbiAgICAgICRpbnB1dCxcbiAgICAgICRjb250YWluZXIsXG4gICAgICAkbGlzdCxcbiAgICAgICRjcmVhdG9yLFxuICAgICAgJGFjLFxuICAgICAgZGF0YXN0YXRlLFxuICAgICAgbWVtb3JpemVsaXN0XG4gICAgfSA9IHRoaXNcblxuXG4gICAgZnVuY3Rpb24gZHJvcEFjdGl2ZWQobikge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YXN0YXRlKS5pbmRleE9mKG4pID09PSAtMVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTGFiZWxFeGlzdGluZyhkYXRhKSB7XG4gICAgICBsZXQgb3V0ID0gZmFsc2VcblxuICAgICAgZm9yKGxldCBrIGluIGRhdGFzdGF0ZSkge1xuICAgICAgICBpZihkYXRhc3RhdGVba10gPT09IGRhdGEpIG91dCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrTWVtb0V4aXN0aW5nKGRhdGEpIHtcbiAgICAgIGxldCBvdXQgPSBmYWxzZVxuXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWVtb3JpemVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1lbW9yaXplbGlzdFtpXSA9PT0gZGF0YSkgb3V0ID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgSW5wdXRGaWVsZCBDaGFuZ2VkLlxuICAgICAqL1xuXG4gICAgJGlucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgbGV0IGlzRW50ZXJLZXkgPSBldnQud2hpY2ggPT09IDkgfHwgZXZ0LndoaWNoID09PSAxM1xuICAgICAgbGV0IGlzRGlyZWN0aW9uS2V5ID0gZXZ0LndoaWNoID09PSAzOCB8fCBldnQud2hpY2ggPT09IDQwXG4gICAgICBsZXQgdmFsID0gJCh0aGlzKS52YWwoKS50cmltKClcblxuICAgICAgaWYoaXNFbnRlcktleSAmJiB2YWwpICRlbC50cmlnZ2VyKCdsYWJlbGZpZWxkLmNyZWF0ZScsIHZhbClcbiAgICAgIGlmKGlzRGlyZWN0aW9uS2V5KSB7XG4gICAgICAgICRlbC50cmlnZ2VyKCdsYWJlbGZpZWxkLmFjdGl2ZWxpc3QnLCBldnQud2hpY2gpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkZWwudHJpZ2dlcignbGFiZWxmaWVsZC5idWlsZG1lbW9saXN0JylcbiAgICAgIH1cblxuICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuY3JlYXRvcicsIHZhbClcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgVG9nZ2xlIEF1dG9jb21wbGV0ZS5cbiAgICAgKi9cblxuICAgICRpbnB1dC5vbignZm9jdXNpbiBmb2N1c291dCcsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgc2V0VGltZW91dChfID0+IHtcbiAgICAgICAgJGFjLmNzcygnZGlzcGxheScsIGV2dC50eXBlID09PSAnZm9jdXNpbicgPyAnYmxvY2snIDogJ25vbmUnKVxuICAgICAgfSwgMTAwKVxuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudHMvTGFiZWxGaWVsZCBUb2dnbGUgJiBVcGRhdGUgQ3JlYXRvci5cbiAgICAgKi9cblxuICAgICRlbC5vbignbGFiZWxmaWVsZC5jcmVhdG9yJywgZnVuY3Rpb24oZXZ0LCBkYXRhKSB7XG4gICAgICAkY3JlYXRvci5jc3MoJ2Rpc3BsYXknLCBkYXRhID8gJ2Jsb2NrJyA6ICdub25lJylcbiAgICAgICRjcmVhdG9yLmh0bWwoJChMYWJlbEZpZWxkTGlzdENyZWF0ZVRwbChkYXRhKSkpXG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50cy9MYWJlbEZpZWxkIENyZWF0ZSBEYXRhc3RhdGUuXG4gICAgICovXG5cbiAgICAkZWwub24oJ2xhYmVsZmllbGQuY3JlYXRlJywgZnVuY3Rpb24oZXZ0LCBkYXRhKSB7XG5cbiAgICAgICRpbnB1dC52YWwoJycpXG4gICAgICBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgICAkZWwudHJpZ2dlcignbGFiZWxmaWVsZC5jcmVhdG9yJywgJycpXG4gICAgICB9LCAwKVxuXG4gICAgICBpZihjaGVja0xhYmVsRXhpc3RpbmcoZGF0YSkpIHJldHVyblxuXG4gICAgICBsZXQgbGFiZWwgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9XG5cbiAgICAgICQoTGFiZWxGaWVsZExhYmVsVHBsKGRhdGEpKS5vbignY2xpY2snLCAnLmpzLWxhYmVsZmllbGQtY2xvc2UnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgJChldnQuZGVsZWdhdGVUYXJnZXQpLnJlbW92ZSgpXG4gICAgICAgICRlbC50cmlnZ2VyKCdsYWJlbGZpZWxkLnJlbW92ZScsIGxhYmVsKVxuICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcilcblxuICAgICAgZGF0YXN0YXRlW2xhYmVsLmlkXSA9IGxhYmVsLmRhdGFcblxuICAgICAgaWYoIWNoZWNrTWVtb0V4aXN0aW5nKGxhYmVsLmRhdGEpKSBtZW1vcml6ZWxpc3QucHVzaChsYWJlbC5kYXRhKVxuXG4gICAgICAkZWwudHJpZ2dlcignbGFiZWxmaWVsZC5leHBvcnQnKVxuXG4gICAgfSlcblxuXG4gICAgLyoqXG4gICAgICogQ29tcG9uZW50cy9MYWJlbEZpZWxkIFJlbW92ZSBEYXRhc3RhdGUuXG4gICAgICovXG5cbiAgICAkZWwub24oJ2xhYmVsZmllbGQucmVtb3ZlJywgZnVuY3Rpb24oZXZ0LCBkYXRhKSB7XG5cbiAgICAgIGRlbGV0ZSBkYXRhc3RhdGVbZGF0YS5pZF1cblxuICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuZXhwb3J0JylcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgVHJ1biBBY3RpdmUgTGlzdEl0ZW0uXG4gICAgICovXG5cbiAgICAkZWwub24oJ2xhYmVsZmllbGQuYWN0aXZlbGlzdCcsIGZ1bmN0aW9uKGV2dCwga2V5KSB7XG4gICAgICBsZXQgbGkgPSAkbGlzdC5maW5kKCdsaScpXG4gICAgICBsZXQgY3VyciA9ICRsaXN0LmZpbmQoJ2xpLmFjdGl2ZScpLmluZGV4KClcblxuICAgICAgbGkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG5cbiAgICAgIGlmKGtleSA9PT0gMzgpICQobGkpLmVxKE1hdGgubWF4KDAsIGN1cnIgLSAxKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICBpZihrZXkgPT09IDQwKSAkKGxpKS5lcShNYXRoLm1pbihsaS5sZW5ndGggLSAxLCBjdXJyICsgMSkpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH0pXG5cblxuICAgIC8qKlxuICAgICAqIENvbXBvbmVudHMvTGFiZWxGaWVsZCBSZUJ1aWxkIE1lbW9MaXN0LlxuICAgICAqL1xuXG4gICAgJGVsLm9uKCdsYWJlbGZpZWxkLmJ1aWxkbWVtb2xpc3QnLCBmdW5jdGlvbigpIHtcbiAgICAgICRsaXN0Lmh0bWwobWVtb3JpemVsaXN0LmZpbHRlcihkcm9wQWN0aXZlZCkubWFwKExhYmVsRmllbGRNZW1vVHBsKSlcbiAgICB9KVxuXG5cbiAgICAvKipcbiAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgVHJpZ2dlciBDbGljay5cbiAgICAgKi9cblxuICAgICRlbC5vbignY2xpY2snLCAnLmpzLWxhYmVsZmllbGQtbWVtb2xpc3RpdGVtJywgZnVuY3Rpb24oKSB7XG4gICAgICAkZWwudHJpZ2dlcignbGFiZWxmaWVsZC5jcmVhdGUnLCAkKHRoaXMpLnRleHQoKS50cmltKCkpXG4gICAgfSlcblxuICAgICRlbC5vbignY2xpY2snLCAnLmpzLWxhYmVsZmllbGQtY3JlYXRvci1jb250YWluZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCAkY3R4ID0gJCh0aGlzKS5maW5kKCcuanMtbGFiZWxmaWVsZC1jcmVhdG9yLWNvbnRlbnQnKVxuICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuY3JlYXRlJywgJGN0eC50ZXh0KCkudHJpbSgpKVxuICAgIH0pXG5cblxuICB9XG59XG5cblxuTGFiZWxGaWVsZC5vZiA9IGZ1bmN0aW9uKG9wdCkge1xuICByZXR1cm4gbmV3IExhYmVsRmllbGQob3B0KVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsRmllbGRcbiJdfQ==

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

var _prodspecrow = __webpack_require__(21);

var _prodspecrow2 = _interopRequireDefault(_prodspecrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProdSpecViewTpl = function ProdSpecViewTpl(id) {
  return '\n<div data-id=' + id + ' class="spec-row js-prodspecview-row"></div>\n';
};

var ProdSpecView = function () {
  function ProdSpecView(_ref) {
    var $el = _ref.$el;
    var _ref$row = _ref.row;
    var row = _ref$row === undefined ? 3 : _ref$row;
    var _ref$enabled = _ref.enabled;
    var enabled = _ref$enabled === undefined ? false : _ref$enabled;

    _classCallCheck(this, ProdSpecView);

    this.$el = $el;
    this.row = row;
    this.enabled = enabled;

    this.datastate = {};

    this.init();
  }

  _createClass(ProdSpecView, [{
    key: 'createRow',
    value: function createRow(len) {
      var id = Date.now();

      var $row = (0, _jquery2.default)(ProdSpecViewTpl(id)).appendTo(this.$body);

      var replace = '';
      switch (len) {
        case 1:
          replace = '二';
          break;
        case 2:
          replace = '三';
          break;
        default:
          replace = '一';
          break;
      }

      var data = {
        $row: $row,
        row: _prodspecrow2.default.of({ $el: $row, name: '规格' + replace })
      };

      this.datastate.rows[id] = data;
    }
  }, {
    key: 'getVal',
    value: function getVal() {
      var datastate = this.datastate;


      var datarows = [];

      for (var k in datastate.rows) {
        var row = datastate.rows[k].row;

        datarows.push(row.getVal());
      }

      return Object.assign({}, {
        enable: datastate.checked,
        data: datarows
      });
    }
  }, {
    key: 'init',
    value: function init() {
      var $el = this.$el;
      var datastate = this.datastate;
      var createRow = this.createRow;
      var enabled = this.enabled;


      this.$create = $el.find('.js-prodspecview-createrow');
      this.$enable = $el.find('.js-prodspecview-enable');
      this.$body = $el.find('.js-prodspecview-body');

      this.datastate.rows = {};
      this.datastate.checked = enabled;
      createRow.bind(this)(0);

      this.on = $el.on.bind($el);
      this.trigger = $el.trigger.bind($el);

      this.event();
    }
  }, {
    key: 'event',
    value: function event() {
      var $el = this.$el;
      var $create = this.$create;
      var $enable = this.$enable;
      var $body = this.$body;
      var row = this.row;
      var datastate = this.datastate;
      var createRow = this.createRow;
      var trigger = this.trigger;
      var on = this.on;
      var getVal = this.getVal;


      createRow = createRow.bind(this);
      getVal = getVal.bind(this);

      $create.on('click', function () {
        var len = Object.keys(datastate.rows).length;
        if (len >= 3) return;
        createRow(len);

        trigger('prodspecview.export', getVal());
      });

      $el.on('prodspecrow.removerow', '.js-prodspecview-row', function () {
        if (Object.keys(datastate.rows).length <= 1) return;

        var id = (0, _jquery2.default)(this).data('id');
        datastate.rows[id].$row.remove();
        delete datastate.rows[id];

        trigger('prodspecview.export', getVal());
      });

      $el.on('prodspecrow.export', '.js-prodspecview-row', function () {
        trigger('prodspecview.export', getVal());
      });

      $enable.on('change', function () {
        datastate.checked = (0, _jquery2.default)(this).prop('checked');

        trigger('prodspecview.export', getVal());
      });
    }
  }]);

  return ProdSpecView;
}();

exports.default = ProdSpecView;


ProdSpecView.of = function (opt) {
  return new ProdSpecView(opt);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGVtby1zeXNcXHNjcmlwdHNcXHByb2RzcGVjdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0I7QUFBQSw2QkFDVCxFQURTO0FBQUEsQ0FBeEI7O0lBS3FCLFk7QUFDbkIsOEJBQStDO0FBQUEsUUFBakMsR0FBaUMsUUFBakMsR0FBaUM7QUFBQSx3QkFBNUIsR0FBNEI7QUFBQSxRQUE1QixHQUE0Qiw0QkFBdEIsQ0FBc0I7QUFBQSw0QkFBbkIsT0FBbUI7QUFBQSxRQUFuQixPQUFtQixnQ0FBVCxLQUFTOztBQUFBOztBQUM3QyxTQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEsU0FBSyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBLFNBQUssSUFBTDtBQUNEOzs7OzhCQUVTLEcsRUFBSztBQUNiLFVBQUksS0FBSyxLQUFLLEdBQUwsRUFBVDs7QUFFQSxVQUFJLE9BQU8sc0JBQUUsZ0JBQWdCLEVBQWhCLENBQUYsRUFBdUIsUUFBdkIsQ0FBZ0MsS0FBSyxLQUFyQyxDQUFYOztBQUVBLFVBQUksVUFBVSxFQUFkO0FBQ0EsY0FBTyxHQUFQO0FBQ0EsYUFBSyxDQUFMO0FBQ0Usb0JBQVUsR0FBVjtBQUNBO0FBQ0YsYUFBSyxDQUFMO0FBQ0Usb0JBQVUsR0FBVjtBQUNBO0FBQ0Y7QUFDRSxvQkFBVSxHQUFWO0FBQ0E7QUFURjs7QUFZQSxVQUFJLE9BQU87QUFDVCxjQUFNLElBREc7QUFFVCxhQUFLLHNCQUFZLEVBQVosQ0FBZSxFQUFFLEtBQUssSUFBUCxFQUFhLE1BQU0sT0FBTyxPQUExQixFQUFmO0FBRkksT0FBWDs7QUFLQSxXQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEVBQXBCLElBQTBCLElBQTFCO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0QsU0FEQyxHQUNh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UUFBL0I7QUFDRCxPQUZEOztBQUtBLGNBQVEsRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBVztBQUM5QixrQkFBVSxPQUFWLEdBQW9CLHNCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsU0FBYixDQUFwQjs7QUFFQSxnQkFBUSxxQkFBUixFQUErQixRQUEvQjtBQUNELE9BSkQ7QUFNRDs7Ozs7O2tCQXpIa0IsWTs7O0FBNEhyQixhQUFhLEVBQWIsR0FBa0IsVUFBUyxHQUFULEVBQWM7QUFDOUIsU0FBTyxJQUFJLFlBQUosQ0FBaUIsR0FBakIsQ0FBUDtBQUNELENBRkQiLCJmaWxlIjoicHJvZHNwZWN2aWV3LmpzIiwic291cmNlUm9vdCI6IkY6L2F0bGFudGlzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFByb2RTcGVjUm93IGZyb20gJy4vcHJvZHNwZWNyb3cuanMnXG5cblxuY29uc3QgUHJvZFNwZWNWaWV3VHBsID0gaWQgPT4gYFxuPGRpdiBkYXRhLWlkPSR7aWR9IGNsYXNzPVwic3BlYy1yb3cganMtcHJvZHNwZWN2aWV3LXJvd1wiPjwvZGl2PlxuYFxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2RTcGVjVmlldyB7XG4gIGNvbnN0cnVjdG9yKHsgJGVsLCByb3cgPSAzLCBlbmFibGVkID0gZmFsc2UgfSkge1xuICAgIHRoaXMuJGVsID0gJGVsXG4gICAgdGhpcy5yb3cgPSByb3dcbiAgICB0aGlzLmVuYWJsZWQgPSBlbmFibGVkXG5cbiAgICB0aGlzLmRhdGFzdGF0ZSA9IHt9XG5cbiAgICB0aGlzLmluaXQoKVxuICB9XG5cbiAgY3JlYXRlUm93KGxlbikge1xuICAgIGxldCBpZCA9IERhdGUubm93KClcblxuICAgIGxldCAkcm93ID0gJChQcm9kU3BlY1ZpZXdUcGwoaWQpKS5hcHBlbmRUbyh0aGlzLiRib2R5KVxuXG4gICAgbGV0IHJlcGxhY2UgPSAnJ1xuICAgIHN3aXRjaChsZW4pIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXBsYWNlID0gJ+S6jCdcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHJlcGxhY2UgPSAn5LiJJ1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcGxhY2UgPSAn5LiAJ1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAkcm93OiAkcm93LFxuICAgICAgcm93OiBQcm9kU3BlY1Jvdy5vZih7ICRlbDogJHJvdywgbmFtZTogJ+inhOagvCcgKyByZXBsYWNlIH0pXG4gICAgfVxuXG4gICAgdGhpcy5kYXRhc3RhdGUucm93c1tpZF0gPSBkYXRhXG4gIH1cblxuICBnZXRWYWwoKSB7XG4gICAgbGV0IHsgZGF0YXN0YXRlIH0gPSB0aGlzXG5cbiAgICBsZXQgZGF0YXJvd3MgPSBbXVxuXG4gICAgZm9yKGxldCBrIGluIGRhdGFzdGF0ZS5yb3dzKSB7XG4gICAgICBsZXQgeyByb3cgfSA9IGRhdGFzdGF0ZS5yb3dzW2tdXG4gICAgICBkYXRhcm93cy5wdXNoKHJvdy5nZXRWYWwoKSlcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgZW5hYmxlOiBkYXRhc3RhdGUuY2hlY2tlZCxcbiAgICAgIGRhdGE6IGRhdGFyb3dzXG4gICAgfSlcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICBsZXQgeyAkZWwsIGRhdGFzdGF0ZSwgY3JlYXRlUm93LCBlbmFibGVkIH0gPSB0aGlzXG5cbiAgICB0aGlzLiRjcmVhdGUgPSAkZWwuZmluZCgnLmpzLXByb2RzcGVjdmlldy1jcmVhdGVyb3cnKVxuICAgIHRoaXMuJGVuYWJsZSA9ICRlbC5maW5kKCcuanMtcHJvZHNwZWN2aWV3LWVuYWJsZScpXG4gICAgdGhpcy4kYm9keSA9ICRlbC5maW5kKCcuanMtcHJvZHNwZWN2aWV3LWJvZHknKVxuXG4gICAgdGhpcy5kYXRhc3RhdGUucm93cyA9IHt9XG4gICAgdGhpcy5kYXRhc3RhdGUuY2hlY2tlZCA9IGVuYWJsZWRcbiAgICBjcmVhdGVSb3cuYmluZCh0aGlzKSgwKVxuXG4gICAgdGhpcy5vbiA9ICRlbC5vbi5iaW5kKCRlbClcbiAgICB0aGlzLnRyaWdnZXIgPSAkZWwudHJpZ2dlci5iaW5kKCRlbClcblxuICAgIHRoaXMuZXZlbnQoKVxuICB9XG5cbiAgZXZlbnQoKSB7XG5cbiAgICBsZXQge1xuICAgICAgJGVsLFxuICAgICAgJGNyZWF0ZSxcbiAgICAgICRlbmFibGUsXG4gICAgICAkYm9keSxcbiAgICAgIHJvdyxcbiAgICAgIGRhdGFzdGF0ZSxcbiAgICAgIGNyZWF0ZVJvdyxcbiAgICAgIHRyaWdnZXIsXG4gICAgICBvbixcbiAgICAgIGdldFZhbFxuICAgIH0gPSB0aGlzXG5cbiAgICBjcmVhdGVSb3cgPSBjcmVhdGVSb3cuYmluZCh0aGlzKVxuICAgIGdldFZhbCA9IGdldFZhbC5iaW5kKHRoaXMpXG5cblxuICAgICRjcmVhdGUub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgbGVuID0gT2JqZWN0LmtleXMoZGF0YXN0YXRlLnJvd3MpLmxlbmd0aFxuICAgICAgaWYobGVuID49IDMpIHJldHVyblxuICAgICAgY3JlYXRlUm93KGxlbilcblxuICAgICAgdHJpZ2dlcigncHJvZHNwZWN2aWV3LmV4cG9ydCcsIGdldFZhbCgpKVxuICAgIH0pXG5cblxuICAgICRlbC5vbigncHJvZHNwZWNyb3cucmVtb3Zlcm93JywgJy5qcy1wcm9kc3BlY3ZpZXctcm93JywgZnVuY3Rpb24oKSB7XG4gICAgICBpZihPYmplY3Qua2V5cyhkYXRhc3RhdGUucm93cykubGVuZ3RoIDw9IDEpIHJldHVyblxuXG4gICAgICBsZXQgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJylcbiAgICAgIGRhdGFzdGF0ZS5yb3dzW2lkXS4kcm93LnJlbW92ZSgpXG4gICAgICBkZWxldGUgZGF0YXN0YXRlLnJvd3NbaWRdXG5cbiAgICAgIHRyaWdnZXIoJ3Byb2RzcGVjdmlldy5leHBvcnQnLCBnZXRWYWwoKSlcbiAgICB9KVxuXG5cbiAgICAkZWwub24oJ3Byb2RzcGVjcm93LmV4cG9ydCcsICcuanMtcHJvZHNwZWN2aWV3LXJvdycsIGZ1bmN0aW9uKCkge1xuICAgICAgdHJpZ2dlcigncHJvZHNwZWN2aWV3LmV4cG9ydCcsIGdldFZhbCgpKVxuICAgIH0pXG5cblxuICAgICRlbmFibGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgZGF0YXN0YXRlLmNoZWNrZWQgPSAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnKVxuXG4gICAgICB0cmlnZ2VyKCdwcm9kc3BlY3ZpZXcuZXhwb3J0JywgZ2V0VmFsKCkpXG4gICAgfSlcblxuICB9XG59XG5cblByb2RTcGVjVmlldy5vZiA9IGZ1bmN0aW9uKG9wdCkge1xuICByZXR1cm4gbmV3IFByb2RTcGVjVmlldyhvcHQpXG59XG4iXX0=

/***/ },

/***/ 32:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function xprod1(a) {
  if (a.length === 0) a = [''];
  var i = 0;
  var ilen = a.length;
  var result = [];
  while (i < ilen) {
    result[result.length] = [a[i]];
    i += 1;
  }
  return result;
}

function xprod2(a, b) {
  if (a.length === 0) a = [''];
  if (b.length === 0) b = [''];
  var i = 0;
  var ilen = a.length;
  var j = void 0;
  var jlen = b.length;
  var result = [];
  while (i < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[i], b[j]];
      j += 1;
    }
    i += 1;
  }
  return result;
}

function xprod3(a, b, c) {
  if (a.length === 0) a = [''];
  if (b.length === 0) b = [''];
  if (c.length === 0) c = [''];
  var i = 0;
  var ilen = a.length;
  var j = void 0;
  var jlen = b.length;
  var k = void 0;
  var klen = c.length;
  var result = [];
  while (i < ilen) {
    j = 0;
    while (j < jlen) {
      k = 0;
      while (k < klen) {
        result[result.length] = [a[i], b[j], c[k]];
        k += 1;
      }
      j += 1;
    }
    i += 1;
  }
  return result;
}

var ThumbnailTableViewTbodyRowTpl = function ThumbnailTableViewTbodyRowTpl(row, idx) {
  return '\n<tr>\n  <td>' + idx + '</td>\n  <td><div class="js-thumbnailtableview-upload">*</div></td>\n  ' + row.map(function (n) {
    return '<td>' + n + '</td>';
  }) + '\n  <td>ZH2829' + (idx < 100 ? '0' + idx < 10 ? '00' + idx : idx : idx) + '</td>\n  <td><input type="text" name="barcode" class="spec-table-field" /></td>\n  <td><input type="text" name="price" class="spec-table-field" /></td>\n  <td><span class="js-thumbnailtableview-action">删除</span></td>\n</tr>\n';
};

var ThumbnailTableViewTheaderPlaceholderBeforeTpl = function ThumbnailTableViewTheaderPlaceholderBeforeTpl(_) {
  return '\n<th class="spec-table-n1"></th>\n<th class="spec-table-n2 js-thumbnailtableview-upload">略图</th>\n';
};

var ThumbnailTableViewTheaderPlaceholderAfterTpl = function ThumbnailTableViewTheaderPlaceholderAfterTpl(_) {
  return '\n<th class="spec-table-n3">商品编码</th>\n<th class="spec-table-n4">条形码</th>\n<th class="spec-table-n5">售价</th>\n<th class="spec-table-n6">操作</th>\n';
};

var ThumbnailTableViewTheaderTpl = function ThumbnailTableViewTheaderTpl(header) {
  return '\n<th>' + (header || '') + '</th>\n';
};

var ThumbnailTableView = function () {
  function ThumbnailTableView(_ref) {
    var $el = _ref.$el;
    var data = _ref.data;

    _classCallCheck(this, ThumbnailTableView);

    this.$el = $el;
    this.data = data;

    this.init();
  }

  _createClass(ThumbnailTableView, [{
    key: 'init',
    value: function init() {
      var $el = this.$el;


      this.$table = $el.find('.js-thumbnailtableview-table');
      this.$body = $el.find('.js-thumbnailtableview-body');
      this.$header = $el.find('.js-thumbnailtableview-header');

      this.event();
    }
  }, {
    key: 'normalized',
    value: function normalized() {
      var data = this.data;


      var len = data.data.length;
      var rows = data.data.map(function (n) {
        return n.labels;
      });
      var names = data.data.map(function (n) {
        return n.name;
      });

      function exportData(nr) {
        return {
          headers: names,
          rows: nr
        };
      }

      switch (len) {
        case 1:
          return exportData(xprod1.apply(null, rows));
        case 2:
          return exportData(xprod2.apply(null, rows));
        case 3:
          return exportData(xprod3.apply(null, rows));
        default:
          throw new Error('Error Data Length.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var normalized = this.normalized;
      var $body = this.$body;
      var $header = this.$header;

      var _normalized = this.normalized();

      var headers = _normalized.headers;
      var rows = _normalized.rows;


      var header = '\n' + ThumbnailTableViewTheaderPlaceholderBeforeTpl() + '\n' + headers.map(ThumbnailTableViewTheaderTpl).join('') + '\n' + ThumbnailTableViewTheaderPlaceholderAfterTpl() + '\n';
      var body = rows.map(ThumbnailTableViewTbodyRowTpl).join('');

      $header.html(header);
      $body.html(body);
    }
  }, {
    key: 'event',
    value: function event() {
      var $el = this.$el;


      $el.on('thumbnailtableview.checked', '.js-thumbnailtableview-action', function (evt) {});

      $el.on('thumbnailtableview.upload', '.js-thumbnailtableview-uploade', function (evt) {});
    }
  }]);

  return ThumbnailTableView;
}();

ThumbnailTableView.of = function (opt) {
  return new ThumbnailTableView(opt);
};

exports.default = ThumbnailTableView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGVtby1zeXNcXHNjcmlwdHNcXHRodW1ibmFpbHRhYmxldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CO0FBQ2pCLE1BQUcsRUFBRSxNQUFGLEtBQWEsQ0FBaEIsRUFBbUIsSUFBSSxDQUFDLEVBQUQsQ0FBSjtBQUNuQixNQUFJLElBQUksQ0FBUjtBQUNBLE1BQUksT0FBTyxFQUFFLE1BQWI7QUFDQSxNQUFJLFNBQVMsRUFBYjtBQUNBLFNBQU8sSUFBSSxJQUFYLEVBQWlCO0FBQ2YsV0FBTyxPQUFPLE1BQWQsSUFBd0IsQ0FBQyxFQUFFLENBQUYsQ0FBRCxDQUF4QjtBQUNBLFNBQUssQ0FBTDtBQUNEO0FBQ0QsU0FBTyxNQUFQO0FBQ0Q7O0FBRUQsU0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCO0FBQ3BCLE1BQUcsRUFBRSxNQUFGLEtBQWEsQ0FBaEIsRUFBbUIsSUFBSSxDQUFDLEVBQUQsQ0FBSjtBQUNuQixNQUFHLEVBQUUsTUFBRixLQUFhLENBQWhCLEVBQW1CLElBQUksQ0FBQyxFQUFELENBQUo7QUFDbkIsTUFBSSxJQUFJLENBQVI7QUFDQSxNQUFJLE9BQU8sRUFBRSxNQUFiO0FBQ0EsTUFBSSxVQUFKO0FBQ0EsTUFBSSxPQUFPLEVBQUUsTUFBYjtBQUNBLE1BQUksU0FBUyxFQUFiO0FBQ0EsU0FBTyxJQUFJLElBQVgsRUFBaUI7QUFDZixRQUFJLENBQUo7QUFDQSxXQUFPLElBQUksSUFBWCxFQUFpQjtBQUNmLGFBQU8sT0FBTyxNQUFkLElBQXdCLENBQUMsRUFBRSxDQUFGLENBQUQsRUFBTyxFQUFFLENBQUYsQ0FBUCxDQUF4QjtBQUNBLFdBQUssQ0FBTDtBQUNEO0FBQ0QsU0FBSyxDQUFMO0FBQ0Q7QUFDRCxTQUFPLE1BQVA7QUFDRDs7QUFHRCxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIs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c291cmNlUm9vdCI6IkY6L2F0bGFudGlzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24geHByb2QxKGEpIHtcbiAgaWYoYS5sZW5ndGggPT09IDApIGEgPSBbJyddXG4gIGxldCBpID0gMFxuICBsZXQgaWxlbiA9IGEubGVuZ3RoXG4gIGxldCByZXN1bHQgPSBbXVxuICB3aGlsZSAoaSA8IGlsZW4pIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBbYVtpXV1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIHhwcm9kMihhLCBiKSB7XG4gIGlmKGEubGVuZ3RoID09PSAwKSBhID0gWycnXVxuICBpZihiLmxlbmd0aCA9PT0gMCkgYiA9IFsnJ11cbiAgbGV0IGkgPSAwXG4gIGxldCBpbGVuID0gYS5sZW5ndGhcbiAgbGV0IGpcbiAgbGV0IGpsZW4gPSBiLmxlbmd0aFxuICBsZXQgcmVzdWx0ID0gW11cbiAgd2hpbGUgKGkgPCBpbGVuKSB7XG4gICAgaiA9IDBcbiAgICB3aGlsZSAoaiA8IGpsZW4pIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IFthW2ldLCBiW2pdXVxuICAgICAgaiArPSAxXG4gICAgfVxuICAgIGkgKz0gMVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5mdW5jdGlvbiB4cHJvZDMoYSwgYiwgYykge1xuICBpZihhLmxlbmd0aCA9PT0gMCkgYSA9IFsnJ11cbiAgaWYoYi5sZW5ndGggPT09IDApIGIgPSBbJyddXG4gIGlmKGMubGVuZ3RoID09PSAwKSBjID0gWycnXVxuICBsZXQgaSA9IDBcbiAgbGV0IGlsZW4gPSBhLmxlbmd0aFxuICBsZXQgalxuICBsZXQgamxlbiA9IGIubGVuZ3RoXG4gIGxldCBrXG4gIGxldCBrbGVuID0gYy5sZW5ndGhcbiAgbGV0IHJlc3VsdCA9IFtdXG4gIHdoaWxlIChpIDwgaWxlbikge1xuICAgIGogPSAwXG4gICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICBrID0gMFxuICAgICAgd2hpbGUgKGsgPCBrbGVuKSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IFthW2ldLCBiW2pdLCBjW2tdXVxuICAgICAgICBrICs9IDFcbiAgICAgIH1cbiAgICAgIGogKz0gMVxuICAgIH1cbiAgICBpICs9IDFcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cblxuY29uc3QgVGh1bWJuYWlsVGFibGVWaWV3VGJvZHlSb3dUcGwgPSAocm93LCBpZHgpID0+IGBcbjx0cj5cbiAgPHRkPiR7aWR4fTwvdGQ+XG4gIDx0ZD48ZGl2IGNsYXNzPVwianMtdGh1bWJuYWlsdGFibGV2aWV3LXVwbG9hZFwiPio8L2Rpdj48L3RkPlxuICAke3Jvdy5tYXAobiA9PiBgPHRkPiR7bn08L3RkPmApfVxuICA8dGQ+WkgyODI5JHtpZHggPCAxMDAgPyAnMCcgKyBpZHggPCAxMCA/ICcwMCcgKyBpZHggOiBpZHggOiBpZHh9PC90ZD5cbiAgPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJiYXJjb2RlXCIgY2xhc3M9XCJzcGVjLXRhYmxlLWZpZWxkXCIgLz48L3RkPlxuICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJzcGVjLXRhYmxlLWZpZWxkXCIgLz48L3RkPlxuICA8dGQ+PHNwYW4gY2xhc3M9XCJqcy10aHVtYm5haWx0YWJsZXZpZXctYWN0aW9uXCI+5Yig6ZmkPC9zcGFuPjwvdGQ+XG48L3RyPlxuYFxuXG5jb25zdCBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyUGxhY2Vob2xkZXJCZWZvcmVUcGwgPSBfID0+IGBcbjx0aCBjbGFzcz1cInNwZWMtdGFibGUtbjFcIj48L3RoPlxuPHRoIGNsYXNzPVwic3BlYy10YWJsZS1uMiBqcy10aHVtYm5haWx0YWJsZXZpZXctdXBsb2FkXCI+55Wl5Zu+PC90aD5cbmBcblxuY29uc3QgVGh1bWJuYWlsVGFibGVWaWV3VGhlYWRlclBsYWNlaG9sZGVyQWZ0ZXJUcGwgPSBfID0+IGBcbjx0aCBjbGFzcz1cInNwZWMtdGFibGUtbjNcIj7llYblk4HnvJbnoIE8L3RoPlxuPHRoIGNsYXNzPVwic3BlYy10YWJsZS1uNFwiPuadoeW9oueggTwvdGg+XG48dGggY2xhc3M9XCJzcGVjLXRhYmxlLW41XCI+5ZSu5Lu3PC90aD5cbjx0aCBjbGFzcz1cInNwZWMtdGFibGUtbjZcIj7mk43kvZw8L3RoPlxuYFxuXG5jb25zdCBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyVHBsID0gKGhlYWRlcikgPT4gYFxuPHRoPiR7aGVhZGVyIHx8ICcnfTwvdGg+XG5gXG5cblxuY2xhc3MgVGh1bWJuYWlsVGFibGVWaWV3IHtcbiAgY29uc3RydWN0b3IoeyAkZWwsIGRhdGEgfSkge1xuICAgIHRoaXMuJGVsID0gJGVsXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgbGV0IHsgJGVsIH0gPSB0aGlzXG5cbiAgICB0aGlzLiR0YWJsZSA9ICRlbC5maW5kKCcuanMtdGh1bWJuYWlsdGFibGV2aWV3LXRhYmxlJylcbiAgICB0aGlzLiRib2R5ID0gJGVsLmZpbmQoJy5qcy10aHVtYm5haWx0YWJsZXZpZXctYm9keScpXG4gICAgdGhpcy4kaGVhZGVyID0gJGVsLmZpbmQoJy5qcy10aHVtYm5haWx0YWJsZXZpZXctaGVhZGVyJylcblxuICAgIHRoaXMuZXZlbnQoKVxuICB9XG5cbiAgbm9ybWFsaXplZCgpIHtcbiAgICBsZXQgeyBkYXRhIH0gPSB0aGlzXG5cbiAgICBsZXQgbGVuID0gZGF0YS5kYXRhLmxlbmd0aFxuICAgIGxldCByb3dzID0gZGF0YS5kYXRhLm1hcChuID0+IG4ubGFiZWxzKVxuICAgIGxldCBuYW1lcyA9IGRhdGEuZGF0YS5tYXAobiA9PiBuLm5hbWUpXG5cbiAgICBmdW5jdGlvbiBleHBvcnREYXRhKG5yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXJzOiBuYW1lcyxcbiAgICAgICAgcm93czogbnJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2gobGVuKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZXhwb3J0RGF0YSh4cHJvZDEuYXBwbHkobnVsbCwgcm93cykpXG4gICAgY2FzZSAyOiByZXR1cm4gZXhwb3J0RGF0YSh4cHJvZDIuYXBwbHkobnVsbCwgcm93cykpXG4gICAgY2FzZSAzOiByZXR1cm4gZXhwb3J0RGF0YSh4cHJvZDMuYXBwbHkobnVsbCwgcm93cykpXG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdFcnJvciBEYXRhIExlbmd0aC4nKVxuICAgIH1cblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IG5vcm1hbGl6ZWQsICRib2R5LCAkaGVhZGVyIH0gPSB0aGlzXG5cbiAgICBsZXQgeyBoZWFkZXJzLCByb3dzIH0gPSB0aGlzLm5vcm1hbGl6ZWQoKVxuXG4gICAgbGV0IGhlYWRlciA9IGBcbiR7VGh1bWJuYWlsVGFibGVWaWV3VGhlYWRlclBsYWNlaG9sZGVyQmVmb3JlVHBsKCl9XG4ke2hlYWRlcnMubWFwKFRodW1ibmFpbFRhYmxlVmlld1RoZWFkZXJUcGwpLmpvaW4oJycpfVxuJHtUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyUGxhY2Vob2xkZXJBZnRlclRwbCgpfVxuYFxuICAgIGxldCBib2R5ID0gcm93cy5tYXAoVGh1bWJuYWlsVGFibGVWaWV3VGJvZHlSb3dUcGwpLmpvaW4oJycpXG5cbiAgICAkaGVhZGVyLmh0bWwoaGVhZGVyKVxuICAgICRib2R5Lmh0bWwoYm9keSlcbiAgfVxuXG4gIGV2ZW50KCkge1xuICAgIGxldCB7ICRlbCB9ID0gdGhpc1xuXG4gICAgJGVsLm9uKCd0aHVtYm5haWx0YWJsZXZpZXcuY2hlY2tlZCcsICcuanMtdGh1bWJuYWlsdGFibGV2aWV3LWFjdGlvbicsIGZ1bmN0aW9uKGV2dCkge1xuXG4gICAgfSlcblxuICAgICRlbC5vbigndGh1bWJuYWlsdGFibGV2aWV3LnVwbG9hZCcsICcuanMtdGh1bWJuYWlsdGFibGV2aWV3LXVwbG9hZGUnLCBmdW5jdGlvbihldnQpIHtcblxuICAgIH0pXG4gIH1cbn1cblxuVGh1bWJuYWlsVGFibGVWaWV3Lm9mID0gZnVuY3Rpb24ob3B0KSB7XG4gIHJldHVybiBuZXcgVGh1bWJuYWlsVGFibGVWaWV3KG9wdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsVGFibGVWaWV3XG4iXX0=

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(133);

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _jquery = __webpack_require__(5);

var _jquery2 = _interopRequireDefault(_jquery);

var _prodspecview = __webpack_require__(31);

var _prodspecview2 = _interopRequireDefault(_prodspecview);

var _thumbnailtableview = __webpack_require__(32);

var _thumbnailtableview2 = _interopRequireDefault(_thumbnailtableview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var psv = _prodspecview2.default.of({ $el: (0, _jquery2.default)('.js-prodspecview') });

psv.on('prodspecview.export', function (evt, data) {
  var ttv = new _thumbnailtableview2.default({ $el: (0, _jquery2.default)('.js-thumbnailtableview'), data: data });
  console.log(data, ttv.normalized());
  ttv.render();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcZGVtby1zeXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFJLE1BQU0sdUJBQWEsRUFBYixDQUFnQixFQUFFLEtBQUssc0JBQUUsa0JBQUYsQ0FBUCxFQUFoQixDQUFWOztBQUVBLElBQUksRUFBSixDQUFPLHFCQUFQLEVBQThCLFVBQVMsR0FBVCxFQUFjLElBQWQsRUFBb0I7QUFDaEQsTUFBSSxNQUFNLGlDQUF1QixFQUFFLEtBQUssc0JBQUUsd0JBQUYsQ0FBUCxFQUFvQyxNQUFNLElBQTFDLEVBQXZCLENBQVY7QUFDQSxVQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQUksVUFBSixFQUFsQjtBQUNBLE1BQUksTUFBSjtBQUNELENBSkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRjovYXRsYW50aXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUHJvZFNwZWNWaWV3IGZyb20gJy4vc2NyaXB0cy9wcm9kc3BlY3ZpZXcuanMnXG5pbXBvcnQgVGh1bWJuYWlsVGFibGVWaWV3IGZyb20gJy4vc2NyaXB0cy90aHVtYm5haWx0YWJsZXZpZXcuanMnXG5cblxubGV0IHBzdiA9IFByb2RTcGVjVmlldy5vZih7ICRlbDogJCgnLmpzLXByb2RzcGVjdmlldycpIH0pXG5cbnBzdi5vbigncHJvZHNwZWN2aWV3LmV4cG9ydCcsIGZ1bmN0aW9uKGV2dCwgZGF0YSkge1xuICBsZXQgdHR2ID0gbmV3IFRodW1ibmFpbFRhYmxlVmlldyh7ICRlbDogJCgnLmpzLXRodW1ibmFpbHRhYmxldmlldycpLCBkYXRhOiBkYXRhIH0pXG4gIGNvbnNvbGUubG9nKGRhdGEsIHR0di5ub3JtYWxpemVkKCkpXG4gIHR0di5yZW5kZXIoKVxufSlcblxuIl19

/***/ }

},[102]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JcIiIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1zeXMvc2NyaXB0cy9wcm9kc3BlY3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1zeXMvc2NyaXB0cy9sYWJlbGZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9kZW1vLXN5cy9zY3JpcHRzL3Byb2RzcGVjdmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1zeXMvc2NyaXB0cy90aHVtYm5haWx0YWJsZXZpZXcuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvciIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby1zeXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsOENBQThDOztBQUV2RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFD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O0FBQ2pIO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLCtuQyIsImZpbGUiOiJkZW1vLXN5c1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHZlbmRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTcgMTgiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlByb2RTcGVjUm93VHBsID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2pxdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG52YXIgX2pxdWVyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcXVlcnkpO1xuXG52YXIgX2xhYmVsZmllbGQgPSByZXF1aXJlKCcuL2xhYmVsZmllbGQuanMnKTtcblxudmFyIF9sYWJlbGZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xhYmVsZmllbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUHJvZFNwZWNSb3dUcGwgPSBleHBvcnRzLlByb2RTcGVjUm93VHBsID0gZnVuY3Rpb24gUHJvZFNwZWNSb3dUcGwobmFtZSkge1xuICByZXR1cm4gJ1xcbiAgPGRpdiBjbGFzcz1cImpzLXByb2RzcGVjcm93IHJvd1wiPlxcbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3aWR0aC0tMlwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLW5hbWVmaWVsZC1jb250YWluZXJcIj5cXG4gICAgICAgIDxpbnB1dCBuYW1lPVwic3BlY25hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwic3BjZS1uYW1lZmllbGQganMtcHJvZHNwZWNyb3ctbmFtZVwiIHZhbHVlPVwiJyArIChuYW1lIHx8ICfop4TmoLwnKSArICdcIiAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImdyaWQgd2lkdGgtLTlcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVwic3BjZS1sYWJlbGZpZWxkIGpzLXByb2RzcGVjcm93LWxhYmVsZmllbGQganMtbGFiZWxmaWVsZFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwZWMtbGFiZWxmaWVsZC1sYWJlbHMganMtbGFiZWxmaWVsZC1jb250YWluZXJcIj48L2Rpdj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYWJlbGZpZWxkXCIgY2xhc3M9XCJzcGNlLWxhYmVsZmllbGQtZmllbGQganMtbGFiZWxmaWVsZC1pbnB1dFwiIC8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtbGFiZWxmaWVsZC1hdXRvY29tcGxldGVcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImpzLWxhYmVsZmllbGQtY3JlYXRvclwiPjwvZGl2PlxcbiAgICAgICAgICA8dWwgY2xhc3M9XCJsYWJlbGZpZWxkLW1lbW9saXN0IGpzLWxhYmVsZmllbGQtbWVtb2xpc3RcIj48L3VsPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCB3aWR0aC0tMVwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XCJzcGVjLWNsb3NlZCBqcy1wcm9kc3BlY3Jvdy1jbG9zZVwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpYyBpb24taW9zLWNsb3NlLW91dGxpbmVcIj48L3NwYW4+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuJztcbn07XG5cbi8qKlxuICogQ29tcG9uZW50cy9Qcm9kU3BlY1Jvdy5cbiAqL1xuXG52YXIgUHJvZFNwZWNSb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFByb2RTcGVjUm93KF9yZWYpIHtcbiAgICB2YXIgJGVsID0gX3JlZi4kZWw7XG4gICAgdmFyIF9yZWYkbmFtZSA9IF9yZWYubmFtZTtcbiAgICB2YXIgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmJG5hbWU7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZFNwZWNSb3cpO1xuXG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcblxuICAgIHRoaXMuZGF0YXN0YXRlID0ge307XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJvZFNwZWNSb3csIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWw7XG4gICAgICB2YXIgZGF0YXN0YXRlID0gdGhpcy5kYXRhc3RhdGU7XG4gICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZTtcblxuICAgICAgJGVsLmFwcGVuZChQcm9kU3BlY1Jvd1RwbChuYW1lKSk7XG5cbiAgICAgIHRoaXMubGYgPSBfbGFiZWxmaWVsZDIuZGVmYXVsdC5vZih7ICRlbDogJGVsLmZpbmQoJy5qcy1wcm9kc3BlY3Jvdy1sYWJlbGZpZWxkJykgfSk7XG5cbiAgICAgIHRoaXMuJGNsb3NlID0gJGVsLmZpbmQoJy5qcy1wcm9kc3BlY3Jvdy1jbG9zZScpO1xuICAgICAgdGhpcy4kaW5wdXQgPSAkZWwuZmluZCgnLmpzLXByb2RzcGVjcm93LW5hbWUnKTtcblxuICAgICAgdGhpcy50cmlnZ2VyID0gJGVsLnRyaWdnZXIuYmluZCgkZWwpO1xuICAgICAgdGhpcy5vbiA9ICRlbC5vbi5iaW5kKCRlbCk7XG5cbiAgICAgIGRhdGFzdGF0ZS5uYW1lID0gbmFtZTtcbiAgICAgIGRhdGFzdGF0ZS5sYWJlbHMgPSB0aGlzLmxmLmdldFZhbCgpO1xuXG4gICAgICB0aGlzLmV2ZW50KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsKCkge1xuICAgICAgdmFyIGRhdGFzdGF0ZSA9IHRoaXMuZGF0YXN0YXRlO1xuICAgICAgdmFyIGxhYmVscyA9IGRhdGFzdGF0ZS5sYWJlbHM7XG4gICAgICB2YXIgbmFtZSA9IGRhdGFzdGF0ZS5uYW1lO1xuXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGxhYmVsczogbGFiZWxzXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdldmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV2ZW50KCkge1xuICAgICAgdmFyICRlbCA9IHRoaXMuJGVsO1xuICAgICAgdmFyICRpbnB1dCA9IHRoaXMuJGlucHV0O1xuICAgICAgdmFyICRjbG9zZSA9IHRoaXMuJGNsb3NlO1xuICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICB2YXIgbGYgPSB0aGlzLmxmO1xuICAgICAgdmFyIHRyaWdnZXIgPSB0aGlzLnRyaWdnZXI7XG4gICAgICB2YXIgZGF0YXN0YXRlID0gdGhpcy5kYXRhc3RhdGU7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9uZW50cy9Qcm9kU3BlY1JvdyBOYW1lRmllbGQgQ2hhbmdlZC5cbiAgICAgICAqL1xuXG4gICAgICAkaW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsID0gKDAsIF9qcXVlcnkyLmRlZmF1bHQpKHRoaXMpLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgZGF0YXN0YXRlLm5hbWUgPSB2YWw7XG4gICAgICAgIHRyaWdnZXIoJ3Byb2RzcGVjcm93LmV4cG9ydCcsIGRhdGFzdGF0ZSk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL1Byb2RTcGVjUm93IFNlbmQgUmVtb3ZlIEV2ZW50LlxuICAgICAgICovXG5cbiAgICAgICRjbG9zZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyaWdnZXIoJ3Byb2RzcGVjcm93LnJlbW92ZXJvdycpO1xuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9uZW50cy9Qcm9kU3BlY1JvdyBDb25uZWN0IExhYmVsRmllbGQuXG4gICAgICAgKi9cbiAgICAgIGxmLm9uKCdsYWJlbGZpZWxkLmV4cG9ydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YXN0YXRlLmxhYmVscyA9IGxmLmdldFZhbCgpO1xuICAgICAgICB0cmlnZ2VyKCdwcm9kc3BlY3Jvdy5leHBvcnQnLCBkYXRhc3RhdGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb2RTcGVjUm93O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9kU3BlY1JvdztcblxuXG5Qcm9kU3BlY1Jvdy5vZiA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgcmV0dXJuIG5ldyBQcm9kU3BlY1JvdyhvcHQpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WTF4Y1pHVnRieTF6ZVhOY1hITmpjbWx3ZEhOY1hIQnliMlJ6Y0dWamNtOTNMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3TzBGQlJVOHNTVUZCVFN3d1EwRkJhVUlzVTBGQmFrSXNZMEZCYVVJN1FVRkJRU3hwVDBGSmFVVXNVVUZCVVN4SlFVcDZSVHRCUVVGQkxFTkJRWFpDT3pzN096czdTVUU0UW1Nc1Z6dEJRVU51UWl3MlFrRkJaME03UVVGQlFTeFJRVUZzUWl4SFFVRnJRaXhSUVVGc1FpeEhRVUZyUWp0QlFVRkJMSGxDUVVGaUxFbEJRV0U3UVVGQlFTeFJRVUZpTEVsQlFXRXNOa0pCUVU0c1JVRkJUVHM3UVVGQlFUczdRVUZET1VJc1UwRkJTeXhIUVVGTUxFZEJRVmNzUjBGQldEdEJRVU5CTEZOQlFVc3NTVUZCVEN4SFFVRlpMRWxCUVZvN08wRkJSVUVzVTBGQlN5eFRRVUZNTEVkQlFXbENMRVZCUVdwQ08wRkJRMEVzVTBGQlN5eEpRVUZNTzBGQlEwUTdPenM3TWtKQlJVMDdRVUZCUVN4VlFVTkRMRWRCUkVRc1IwRkRNRUlzU1VGRU1VSXNRMEZEUXl4SFFVUkVPMEZCUVVFc1ZVRkRUU3hUUVVST0xFZEJRekJDTEVsQlJERkNMRU5CUTAwc1UwRkVUanRCUVVGQkxGVkJRMmxDTEVsQlJHcENMRWRCUXpCQ0xFbEJSREZDTEVOQlEybENMRWxCUkdwQ096dEJRVVZNTEZWQlFVa3NUVUZCU2l4RFFVRlhMR1ZCUVdVc1NVRkJaaXhEUVVGWU96dEJRVVZCTEZkQlFVc3NSVUZCVEN4SFFVRlZMSEZDUVVGWExFVkJRVmdzUTBGQll5eEZRVUZGTEV0QlFVc3NTVUZCU1N4SlFVRktMRU5CUVZNc05FSkJRVlFzUTBGQlVDeEZRVUZrTEVOQlFWWTdPMEZCUlVFc1YwRkJTeXhOUVVGTUxFZEJRV01zU1VGQlNTeEpRVUZLTEVOQlFWTXNkVUpCUVZRc1EwRkJaRHRCUVVOQkxGZEJRVXNzVFVGQlRDeEhRVUZqTEVsQlFVa3NTVUZCU2l4RFFVRlRMSE5DUVVGVUxFTkJRV1E3TzBGQlJVRXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJTU3hQUVVGS0xFTkJRVmtzU1VGQldpeERRVUZwUWl4SFFVRnFRaXhEUVVGbU8wRkJRMEVzVjBGQlN5eEZRVUZNTEVkQlFWVXNTVUZCU1N4RlFVRktMRU5CUVU4c1NVRkJVQ3hEUVVGWkxFZEJRVm9zUTBGQlZqczdRVUZGUVN4blFrRkJWU3hKUVVGV0xFZEJRV2xDTEVsQlFXcENPMEZCUTBFc1owSkJRVlVzVFVGQlZpeEhRVUZ0UWl4TFFVRkxMRVZCUVV3c1EwRkJVU3hOUVVGU0xFVkJRVzVDT3p0QlFVVkJMRmRCUVVzc1MwRkJURHRCUVVORU96czdOa0pCUlZFN1FVRkJRU3hWUVVORUxGTkJSRU1zUjBGRFlTeEpRVVJpTEVOQlEwUXNVMEZFUXp0QlFVRkJMRlZCUlVRc1RVRkdReXhIUVVWblFpeFRRVVpvUWl4RFFVVkVMRTFCUmtNN1FVRkJRU3hWUVVWUExFbEJSbEFzUjBGRlowSXNVMEZHYUVJc1EwRkZUeXhKUVVaUU96czdRVUZKVUN4aFFVRlBMRTlCUVU4c1RVRkJVQ3hEUVVGakxFVkJRV1FzUlVGQmEwSTdRVUZEZGtJc1kwRkJUU3hKUVVScFFqdEJRVVYyUWl4blFrRkJVVHRCUVVabExFOUJRV3hDTEVOQlFWQTdRVUZKUkRzN096UkNRVVZQTzBGQlFVRXNWVUZIU2l4SFFVaEpMRWRCVlVZc1NVRldSU3hEUVVkS0xFZEJTRWs3UVVGQlFTeFZRVWxLTEUxQlNra3NSMEZWUml4SlFWWkZMRU5CU1Vvc1RVRktTVHRCUVVGQkxGVkJTMG9zVFVGTVNTeEhRVlZHTEVsQlZrVXNRMEZMU2l4TlFVeEpPMEZCUVVFc1ZVRk5TaXhKUVU1SkxFZEJWVVlzU1VGV1JTeERRVTFLTEVsQlRrazdRVUZCUVN4VlFVOUtMRVZCVUVrc1IwRlZSaXhKUVZaRkxFTkJUMG9zUlVGUVNUdEJRVUZCTEZWQlVVb3NUMEZTU1N4SFFWVkdMRWxCVmtVc1EwRlJTaXhQUVZKSk8wRkJRVUVzVlVGVFNpeFRRVlJKTEVkQlZVWXNTVUZXUlN4RFFWTktMRk5CVkVrN096czdPenRCUVdkQ1RpeGhRVUZQTEVWQlFWQXNRMEZCVlN4UFFVRldMRVZCUVcxQ0xGbEJRVmM3UVVGRE5VSXNXVUZCU1N4TlFVRk5MSE5DUVVGRkxFbEJRVVlzUlVGQlVTeEhRVUZTTEVkQlFXTXNTVUZCWkN4RlFVRldPMEZCUTBFc2EwSkJRVlVzU1VGQlZpeEhRVUZwUWl4SFFVRnFRanRCUVVOQkxHZENRVUZSTEc5Q1FVRlNMRVZCUVRoQ0xGTkJRVGxDTzBGQlEwUXNUMEZLUkRzN096czdPMEZCVjBFc1lVRkJUeXhGUVVGUUxFTkJRVlVzVDBGQlZpeEZRVUZ0UWl4WlFVRlhPMEZCUXpWQ0xHZENRVUZSTEhWQ1FVRlNPMEZCUTBRc1QwRkdSRHM3T3pzN1FVRlJRU3hUUVVGSExFVkJRVWdzUTBGQlRTeHRRa0ZCVGl4RlFVRXlRaXhaUVVGWE8wRkJRM0JETEd0Q1FVRlZMRTFCUVZZc1IwRkJiVUlzUjBGQlJ5eE5RVUZJTEVWQlFXNUNPMEZCUTBFc1owSkJRVkVzYjBKQlFWSXNSVUZCT0VJc1UwRkJPVUk3UVVGRFJDeFBRVWhFTzBGQlMwUTdPenM3T3p0clFrRTNSV3RDTEZjN096dEJRV2xHY2tJc1dVRkJXU3hGUVVGYUxFZEJRV2xDTEZWQlFWTXNSMEZCVkN4RlFVRmpPMEZCUXpkQ0xGTkJRVThzU1VGQlNTeFhRVUZLTEVOQlFXZENMRWRCUVdoQ0xFTkJRVkE3UVVGRFJDeERRVVpFSWl3aVptbHNaU0k2SW5CeWIyUnpjR1ZqY205M0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklrWTZMMkYwYkdGdWRHbHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ1FnWm5KdmJTQW5hbkYxWlhKNUoxeHVhVzF3YjNKMElFeGhZbVZzUm1sbGJHUXNJSHNnVEdGaVpXeEdhV1ZzWkZSd2JDQjlJR1p5YjIwZ0p5NHZiR0ZpWld4bWFXVnNaQzVxY3lkY2JseHVaWGh3YjNKMElHTnZibk4wSUZCeWIyUlRjR1ZqVW05M1ZIQnNJRDBnYm1GdFpTQTlQaUJnWEc0Z0lEeGthWFlnWTJ4aGMzTTlYQ0pxY3kxd2NtOWtjM0JsWTNKdmR5QnliM2RjSWo1Y2JpQWdJQ0E4WkdsMklHTnNZWE56UFZ3aVozSnBaQ0IzYVdSMGFDMHRNbHdpUGx4dUlDQWdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0luTndaV010Ym1GdFpXWnBaV3hrTFdOdmJuUmhhVzVsY2x3aVBseHVJQ0FnSUNBZ0lDQThhVzV3ZFhRZ2JtRnRaVDFjSW5Od1pXTnVZVzFsWENJZ2RIbHdaVDFjSW5SbGVIUmNJaUJqYkdGemN6MWNJbk53WTJVdGJtRnRaV1pwWld4a0lHcHpMWEJ5YjJSemNHVmpjbTkzTFc1aGJXVmNJaUIyWVd4MVpUMWNJaVI3Ym1GdFpTQjhmQ0FuNktlRTVxQzhKMzFjSWlBdlBseHVJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdQQzlrYVhZK1hHNGdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltZHlhV1FnZDJsa2RHZ3RMVGxjSWo1Y2JpQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnpjR05sTFd4aFltVnNabWxsYkdRZ2FuTXRjSEp2WkhOd1pXTnliM2N0YkdGaVpXeG1hV1ZzWkNCcWN5MXNZV0psYkdacFpXeGtYQ0krWEc0Z0lDQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnpjR1ZqTFd4aFltVnNabWxsYkdRdGJHRmlaV3h6SUdwekxXeGhZbVZzWm1sbGJHUXRZMjl1ZEdGcGJtVnlYQ0krUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHhwYm5CMWRDQjBlWEJsUFZ3aWRHVjRkRndpSUc1aGJXVTlYQ0pzWVdKbGJHWnBaV3hrWENJZ1kyeGhjM005WENKemNHTmxMV3hoWW1Wc1ptbGxiR1F0Wm1sbGJHUWdhbk10YkdGaVpXeG1hV1ZzWkMxcGJuQjFkRndpSUM4K1hHNGdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pxY3kxc1lXSmxiR1pwWld4a0xXRjFkRzlqYjIxd2JHVjBaVndpUGx4dUlDQWdJQ0FnSUNBZ0lEeGthWFlnWTJ4aGMzTTlYQ0pxY3kxc1lXSmxiR1pwWld4a0xXTnlaV0YwYjNKY0lqNDhMMlJwZGo1Y2JpQWdJQ0FnSUNBZ0lDQThkV3dnWTJ4aGMzTTlYQ0pzWVdKbGJHWnBaV3hrTFcxbGJXOXNhWE4wSUdwekxXeGhZbVZzWm1sbGJHUXRiV1Z0YjJ4cGMzUmNJajQ4TDNWc1BseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lEd3ZaR2wyUGx4dVhHNGdJQ0FnUEdScGRpQmpiR0Z6Y3oxY0ltZHlhV1FnZDJsa2RHZ3RMVEZjSWo1Y2JpQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnpjR1ZqTFdOc2IzTmxaQ0JxY3kxd2NtOWtjM0JsWTNKdmR5MWpiRzl6WlZ3aVBseHVJQ0FnSUNBZ0lDQThjM0JoYmlCamJHRnpjejFjSW1saklHbHZiaTFwYjNNdFkyeHZjMlV0YjNWMGJHbHVaVndpUGp3dmMzQmhiajVjYmlBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUR3dlpHbDJQbHh1SUNBOEwyUnBkajVjYm1CY2JseHVMeW9xWEc0Z0tpQkRiMjF3YjI1bGJuUnpMMUJ5YjJSVGNHVmpVbTkzTGx4dUlDb3ZYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnliMlJUY0dWalVtOTNJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9leUFrWld3c0lHNWhiV1VnUFNBbkp5QjlLU0I3WEc0Z0lDQWdkR2hwY3k0a1pXd2dQU0FrWld4Y2JpQWdJQ0IwYUdsekxtNWhiV1VnUFNCdVlXMWxYRzVjYmlBZ0lDQjBhR2x6TG1SaGRHRnpkR0YwWlNBOUlIdDlYRzRnSUNBZ2RHaHBjeTVwYm1sMEtDbGNiaUFnZlZ4dVhHNGdJR2x1YVhRb0tTQjdYRzRnSUNBZ2JHVjBJSHNnSkdWc0xDQmtZWFJoYzNSaGRHVXNJRzVoYldVZ2ZTQTlJSFJvYVhOY2JpQWdJQ0FrWld3dVlYQndaVzVrS0ZCeWIyUlRjR1ZqVW05M1ZIQnNLRzVoYldVcEtWeHVYRzRnSUNBZ2RHaHBjeTVzWmlBOUlFeGhZbVZzUm1sbGJHUXViMllvZXlBa1pXdzZJQ1JsYkM1bWFXNWtLQ2N1YW5NdGNISnZaSE53WldOeWIzY3RiR0ZpWld4bWFXVnNaQ2NwSUgwcFhHNWNiaUFnSUNCMGFHbHpMaVJqYkc5elpTQTlJQ1JsYkM1bWFXNWtLQ2N1YW5NdGNISnZaSE53WldOeWIzY3RZMnh2YzJVbktWeHVJQ0FnSUhSb2FYTXVKR2x1Y0hWMElEMGdKR1ZzTG1acGJtUW9KeTVxY3kxd2NtOWtjM0JsWTNKdmR5MXVZVzFsSnlsY2JseHVJQ0FnSUhSb2FYTXVkSEpwWjJkbGNpQTlJQ1JsYkM1MGNtbG5aMlZ5TG1KcGJtUW9KR1ZzS1Z4dUlDQWdJSFJvYVhNdWIyNGdQU0FrWld3dWIyNHVZbWx1WkNna1pXd3BYRzVjYmlBZ0lDQmtZWFJoYzNSaGRHVXVibUZ0WlNBOUlHNWhiV1ZjYmlBZ0lDQmtZWFJoYzNSaGRHVXViR0ZpWld4eklEMGdkR2hwY3k1c1ppNW5aWFJXWVd3b0tWeHVYRzRnSUNBZ2RHaHBjeTVsZG1WdWRDZ3BYRzRnSUgxY2JseHVJQ0JuWlhSV1lXd29LU0I3WEc0Z0lDQWdiR1YwSUhzZ1pHRjBZWE4wWVhSbElIMGdQU0IwYUdselhHNGdJQ0FnYkdWMElIc2diR0ZpWld4ekxDQnVZVzFsSUgwZ1BTQmtZWFJoYzNSaGRHVmNibHh1SUNBZ0lISmxkSFZ5YmlCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCN1hHNGdJQ0FnSUNCdVlXMWxPaUJ1WVcxbExGeHVJQ0FnSUNBZ2JHRmlaV3h6T2lCc1lXSmxiSE5jYmlBZ0lDQjlLVnh1SUNCOVhHNWNiaUFnWlhabGJuUW9LU0I3WEc1Y2JpQWdJQ0JzWlhRZ2UxeHVJQ0FnSUNBZ0pHVnNMRnh1SUNBZ0lDQWdKR2x1Y0hWMExGeHVJQ0FnSUNBZ0pHTnNiM05sTEZ4dUlDQWdJQ0FnYm1GdFpTeGNiaUFnSUNBZ0lHeG1MRnh1SUNBZ0lDQWdkSEpwWjJkbGNpeGNiaUFnSUNBZ0lHUmhkR0Z6ZEdGMFpWeHVJQ0FnSUgwZ1BTQjBhR2x6WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGIyMXdiMjVsYm5SekwxQnliMlJUY0dWalVtOTNJRTVoYldWR2FXVnNaQ0JEYUdGdVoyVmtMbHh1SUNBZ0lDQXFMMXh1WEc0Z0lDQWdKR2x1Y0hWMExtOXVLQ2RyWlhsMWNDY3NJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnYkdWMElIWmhiQ0E5SUNRb2RHaHBjeWt1ZG1Gc0tDa3VkSEpwYlNncFhHNGdJQ0FnSUNCa1lYUmhjM1JoZEdVdWJtRnRaU0E5SUhaaGJGeHVJQ0FnSUNBZ2RISnBaMmRsY2lnbmNISnZaSE53WldOeWIzY3VaWGh3YjNKMEp5d2daR0YwWVhOMFlYUmxLVnh1SUNBZ0lIMHBYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJYQnZibVZ1ZEhNdlVISnZaRk53WldOU2IzY2dVMlZ1WkNCU1pXMXZkbVVnUlhabGJuUXVYRzRnSUNBZ0lDb3ZYRzVjYmlBZ0lDQWtZMnh2YzJVdWIyNG9KMk5zYVdOckp5d2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0IwY21sbloyVnlLQ2R3Y205a2MzQmxZM0p2ZHk1eVpXMXZkbVZ5YjNjbktWeHVJQ0FnSUgwcFhHNWNibHh1SUNBZ0lDOHFLbHh1SUNBZ0lDQXFJRU52YlhCdmJtVnVkSE12VUhKdlpGTndaV05TYjNjZ1EyOXVibVZqZENCTVlXSmxiRVpwWld4a0xseHVJQ0FnSUNBcUwxeHVJQ0FnSUd4bUxtOXVLQ2RzWVdKbGJHWnBaV3hrTG1WNGNHOXlkQ2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ1pHRjBZWE4wWVhSbExteGhZbVZzY3lBOUlHeG1MbWRsZEZaaGJDZ3BYRzRnSUNBZ0lDQjBjbWxuWjJWeUtDZHdjbTlrYzNCbFkzSnZkeTVsZUhCdmNuUW5MQ0JrWVhSaGMzUmhkR1VwWEc0Z0lDQWdmU2xjYmx4dUlDQjlYRzU5WEc1Y2JseHVVSEp2WkZOd1pXTlNiM2N1YjJZZ1BTQm1kVzVqZEdsdmJpaHZjSFFwSUh0Y2JpQWdjbVYwZFhKdUlHNWxkeUJRY205a1UzQmxZMUp2ZHlodmNIUXBYRzU5WEc0aVhYMD1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZW1vLXN5cy9zY3JpcHRzL3Byb2RzcGVjcm93LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDggMTIgMTQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLkxhYmVsRmllbGRUcGwgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfanF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbnZhciBfanF1ZXJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pxdWVyeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBMYWJlbEZpZWxkVHBsID0gZXhwb3J0cy5MYWJlbEZpZWxkVHBsID0gZnVuY3Rpb24gTGFiZWxGaWVsZFRwbChfKSB7XG4gIHJldHVybiAnXFxuICA8ZGl2IGNsYXNzPVwianMtbGFiZWxmaWVsZFwiPlxcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFiZWxcIiBjbGFzcz1cImpzLWxhYmVsZmllbGQtaW5wdXRcIiAvPlxcbiAgICA8ZGl2IGNsYXNzPVwianMtbGFiZWxmaWVsZC1jb250YWluZXJcIj48L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cImpzLWxhYmVsZmllbGQtYXV0b2NvbXBsZXRlXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cImpzLWxhYmVsZmllbGQtY3JlYXRvclwiPjwvZGl2PlxcbiAgICAgIDx1bCBjbGFzcz1cImpzLWxhYmVsZmllbGQtbWVtb2xpc3RcIj48L3VsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbic7XG59O1xuXG52YXIgTGFiZWxGaWVsZExhYmVsVHBsID0gZnVuY3Rpb24gTGFiZWxGaWVsZExhYmVsVHBsKGRhdGEpIHtcbiAgcmV0dXJuICdcXG48ZGl2IGNsYXNzPVwibGFiZWxmaWVsZC1sYWJlbCBqcy1sYWJlbGZpZWxkLWxhYmVsXCI+XFxuICA8ZGl2IGNsYXNzPVwibGFiZWxmaWVsZC1sYWJlbC1jbG9zZSBqcy1sYWJlbGZpZWxkLWNsb3NlXCI+XFxuICAgIDxzcGFuIGNsYXNzPVwiaWMgaW9uLWlvcy1jbG9zZS1vdXRsaW5lXCI+PC9zcGFuPlxcbiAgPC9kaXY+XFxuICAnICsgZGF0YSArICdcXG48L2Rpdj5cXG4nO1xufTtcblxudmFyIExhYmVsRmllbGRMaXN0Q3JlYXRlVHBsID0gZnVuY3Rpb24gTGFiZWxGaWVsZExpc3RDcmVhdGVUcGwoZGF0YSkge1xuICByZXR1cm4gJ1xcbjxkaXYgY2xhc3M9XCJsYWJlbGZpZWxkLWNyZWF0ZW9yIGpzLWxhYmVsZmllbGQtY3JlYXRvci1jb250YWluZXJcIj5cXG4gIOaWsOWinuinhOagvO+8mlxcbiAgPHNwYW4gY2xhc3M9XCJqcy1sYWJlbGZpZWxkLWNyZWF0b3ItY29udGVudFwiPlxcbiAgICAnICsgZGF0YSArICdcXG4gIDwvc3Bhbj5cXG48L2Rpdj5cXG4nO1xufTtcblxudmFyIExhYmVsRmllbGRNZW1vVHBsID0gZnVuY3Rpb24gTGFiZWxGaWVsZE1lbW9UcGwoZGF0YSkge1xuICByZXR1cm4gJ1xcbjxsaT5cXG4gIDxkaXYgY2xhc3M9XCJsYWJlbGZpZWxkLW1lbW9saXN0aXRlbSBqcy1sYWJlbGZpZWxkLW1lbW9saXN0aXRlbVwiPicgKyBkYXRhICsgJzwvZGl2PlxcbjwvbGk+XFxuJztcbn07XG5cbi8qKlxuICogQ29tcG9uZW50cy9MYWJlbEZpZWxkLlxuICovXG5cbnZhciBMYWJlbEZpZWxkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMYWJlbEZpZWxkKF9yZWYpIHtcbiAgICB2YXIgJGVsID0gX3JlZi4kZWw7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGFiZWxGaWVsZCk7XG5cbiAgICB0aGlzLiRlbCA9ICRlbDtcblxuICAgIHRoaXMuZGF0YXN0YXRlID0ge307XG4gICAgdGhpcy5tZW1vcml6ZWxpc3QgPSBbXTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKExhYmVsRmllbGQsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWw7XG5cblxuICAgICAgdGhpcy4kaW5wdXQgPSAkZWwuZmluZCgnLmpzLWxhYmVsZmllbGQtaW5wdXQnKTtcbiAgICAgIHRoaXMuJGxpc3QgPSAkZWwuZmluZCgnLmpzLWxhYmVsZmllbGQtbWVtb2xpc3QnKTtcbiAgICAgIHRoaXMuJGNvbnRhaW5lciA9ICRlbC5maW5kKCcuanMtbGFiZWxmaWVsZC1jb250YWluZXInKTtcbiAgICAgIHRoaXMuJGNyZWF0b3IgPSAkZWwuZmluZCgnLmpzLWxhYmVsZmllbGQtY3JlYXRvcicpO1xuICAgICAgdGhpcy4kYWMgPSAkZWwuZmluZCgnLmpzLWxhYmVsZmllbGQtYXV0b2NvbXBsZXRlJyk7XG5cbiAgICAgIHRoaXMudHJpZ2dlciA9ICRlbC50cmlnZ2VyLmJpbmQoJGVsKTtcbiAgICAgIHRoaXMub24gPSAkZWwub24uYmluZCgkZWwpO1xuXG4gICAgICB0aGlzLmV2ZW50KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5kYXRhc3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2V2ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXZlbnQoKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWw7XG4gICAgICB2YXIgJGlucHV0ID0gdGhpcy4kaW5wdXQ7XG4gICAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMuJGNvbnRhaW5lcjtcbiAgICAgIHZhciAkbGlzdCA9IHRoaXMuJGxpc3Q7XG4gICAgICB2YXIgJGNyZWF0b3IgPSB0aGlzLiRjcmVhdG9yO1xuICAgICAgdmFyICRhYyA9IHRoaXMuJGFjO1xuICAgICAgdmFyIGRhdGFzdGF0ZSA9IHRoaXMuZGF0YXN0YXRlO1xuICAgICAgdmFyIG1lbW9yaXplbGlzdCA9IHRoaXMubWVtb3JpemVsaXN0O1xuXG5cbiAgICAgIGZ1bmN0aW9uIGRyb3BBY3RpdmVkKG4pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YXN0YXRlKS5pbmRleE9mKG4pID09PSAtMTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2hlY2tMYWJlbEV4aXN0aW5nKGRhdGEpIHtcbiAgICAgICAgdmFyIG91dCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGsgaW4gZGF0YXN0YXRlKSB7XG4gICAgICAgICAgaWYgKGRhdGFzdGF0ZVtrXSA9PT0gZGF0YSkgb3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrTWVtb0V4aXN0aW5nKGRhdGEpIHtcbiAgICAgICAgdmFyIG91dCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWVtb3JpemVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG1lbW9yaXplbGlzdFtpXSA9PT0gZGF0YSkgb3V0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9uZW50cy9MYWJlbEZpZWxkIElucHV0RmllbGQgQ2hhbmdlZC5cbiAgICAgICAqL1xuXG4gICAgICAkaW5wdXQub24oJ2tleXVwJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFbnRlcktleSA9IGV2dC53aGljaCA9PT0gOSB8fCBldnQud2hpY2ggPT09IDEzO1xuICAgICAgICB2YXIgaXNEaXJlY3Rpb25LZXkgPSBldnQud2hpY2ggPT09IDM4IHx8IGV2dC53aGljaCA9PT0gNDA7XG4gICAgICAgIHZhciB2YWwgPSAoMCwgX2pxdWVyeTIuZGVmYXVsdCkodGhpcykudmFsKCkudHJpbSgpO1xuXG4gICAgICAgIGlmIChpc0VudGVyS2V5ICYmIHZhbCkgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuY3JlYXRlJywgdmFsKTtcbiAgICAgICAgaWYgKGlzRGlyZWN0aW9uS2V5KSB7XG4gICAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuYWN0aXZlbGlzdCcsIGV2dC53aGljaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuYnVpbGRtZW1vbGlzdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuY3JlYXRvcicsIHZhbCk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgVG9nZ2xlIEF1dG9jb21wbGV0ZS5cbiAgICAgICAqL1xuXG4gICAgICAkaW5wdXQub24oJ2ZvY3VzaW4gZm9jdXNvdXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKF8pIHtcbiAgICAgICAgICAkYWMuY3NzKCdkaXNwbGF5JywgZXZ0LnR5cGUgPT09ICdmb2N1c2luJyA/ICdibG9jaycgOiAnbm9uZScpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ29tcG9uZW50cy9MYWJlbEZpZWxkIFRvZ2dsZSAmIFVwZGF0ZSBDcmVhdG9yLlxuICAgICAgICovXG5cbiAgICAgICRlbC5vbignbGFiZWxmaWVsZC5jcmVhdG9yJywgZnVuY3Rpb24gKGV2dCwgZGF0YSkge1xuICAgICAgICAkY3JlYXRvci5jc3MoJ2Rpc3BsYXknLCBkYXRhID8gJ2Jsb2NrJyA6ICdub25lJyk7XG4gICAgICAgICRjcmVhdG9yLmh0bWwoKDAsIF9qcXVlcnkyLmRlZmF1bHQpKExhYmVsRmllbGRMaXN0Q3JlYXRlVHBsKGRhdGEpKSk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgQ3JlYXRlIERhdGFzdGF0ZS5cbiAgICAgICAqL1xuXG4gICAgICAkZWwub24oJ2xhYmVsZmllbGQuY3JlYXRlJywgZnVuY3Rpb24gKGV2dCwgZGF0YSkge1xuXG4gICAgICAgICRpbnB1dC52YWwoJycpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuY3JlYXRvcicsICcnKTtcbiAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgaWYgKGNoZWNrTGFiZWxFeGlzdGluZyhkYXRhKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBsYWJlbCA9IHtcbiAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKExhYmVsRmllbGRMYWJlbFRwbChkYXRhKSkub24oJ2NsaWNrJywgJy5qcy1sYWJlbGZpZWxkLWNsb3NlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KShldnQuZGVsZWdhdGVUYXJnZXQpLnJlbW92ZSgpO1xuICAgICAgICAgICRlbC50cmlnZ2VyKCdsYWJlbGZpZWxkLnJlbW92ZScsIGxhYmVsKTtcbiAgICAgICAgfSkuYXBwZW5kVG8oJGNvbnRhaW5lcik7XG5cbiAgICAgICAgZGF0YXN0YXRlW2xhYmVsLmlkXSA9IGxhYmVsLmRhdGE7XG5cbiAgICAgICAgaWYgKCFjaGVja01lbW9FeGlzdGluZyhsYWJlbC5kYXRhKSkgbWVtb3JpemVsaXN0LnB1c2gobGFiZWwuZGF0YSk7XG5cbiAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuZXhwb3J0Jyk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgUmVtb3ZlIERhdGFzdGF0ZS5cbiAgICAgICAqL1xuXG4gICAgICAkZWwub24oJ2xhYmVsZmllbGQucmVtb3ZlJywgZnVuY3Rpb24gKGV2dCwgZGF0YSkge1xuXG4gICAgICAgIGRlbGV0ZSBkYXRhc3RhdGVbZGF0YS5pZF07XG5cbiAgICAgICAgJGVsLnRyaWdnZXIoJ2xhYmVsZmllbGQuZXhwb3J0Jyk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgVHJ1biBBY3RpdmUgTGlzdEl0ZW0uXG4gICAgICAgKi9cblxuICAgICAgJGVsLm9uKCdsYWJlbGZpZWxkLmFjdGl2ZWxpc3QnLCBmdW5jdGlvbiAoZXZ0LCBrZXkpIHtcbiAgICAgICAgdmFyIGxpID0gJGxpc3QuZmluZCgnbGknKTtcbiAgICAgICAgdmFyIGN1cnIgPSAkbGlzdC5maW5kKCdsaS5hY3RpdmUnKS5pbmRleCgpO1xuXG4gICAgICAgIGxpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBpZiAoa2V5ID09PSAzOCkgKDAsIF9qcXVlcnkyLmRlZmF1bHQpKGxpKS5lcShNYXRoLm1heCgwLCBjdXJyIC0gMSkpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGtleSA9PT0gNDApICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KShsaSkuZXEoTWF0aC5taW4obGkubGVuZ3RoIC0gMSwgY3VyciArIDEpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb21wb25lbnRzL0xhYmVsRmllbGQgUmVCdWlsZCBNZW1vTGlzdC5cbiAgICAgICAqL1xuXG4gICAgICAkZWwub24oJ2xhYmVsZmllbGQuYnVpbGRtZW1vbGlzdCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJGxpc3QuaHRtbChtZW1vcml6ZWxpc3QuZmlsdGVyKGRyb3BBY3RpdmVkKS5tYXAoTGFiZWxGaWVsZE1lbW9UcGwpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvKipcbiAgICAgICAqIENvbXBvbmVudHMvTGFiZWxGaWVsZCBUcmlnZ2VyIENsaWNrLlxuICAgICAgICovXG5cbiAgICAgICRlbC5vbignY2xpY2snLCAnLmpzLWxhYmVsZmllbGQtbWVtb2xpc3RpdGVtJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwudHJpZ2dlcignbGFiZWxmaWVsZC5jcmVhdGUnLCAoMCwgX2pxdWVyeTIuZGVmYXVsdCkodGhpcykudGV4dCgpLnRyaW0oKSk7XG4gICAgICB9KTtcblxuICAgICAgJGVsLm9uKCdjbGljaycsICcuanMtbGFiZWxmaWVsZC1jcmVhdG9yLWNvbnRhaW5lcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRjdHggPSAoMCwgX2pxdWVyeTIuZGVmYXVsdCkodGhpcykuZmluZCgnLmpzLWxhYmVsZmllbGQtY3JlYXRvci1jb250ZW50Jyk7XG4gICAgICAgICRlbC50cmlnZ2VyKCdsYWJlbGZpZWxkLmNyZWF0ZScsICRjdHgudGV4dCgpLnRyaW0oKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGFiZWxGaWVsZDtcbn0oKTtcblxuTGFiZWxGaWVsZC5vZiA9IGZ1bmN0aW9uIChvcHQpIHtcbiAgcmV0dXJuIG5ldyBMYWJlbEZpZWxkKG9wdCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMYWJlbEZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZMXhjWkdWdGJ5MXplWE5jWEhOamNtbHdkSE5jWEd4aFltVnNabWxsYkdRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJRVUU3T3pzN096czdPMEZCUlU4c1NVRkJUU3gzUTBGQlowSXNVMEZCYUVJc1lVRkJaMEk3UVVGQlFUdEJRVUZCTEVOQlFYUkNPenRCUVZkUUxFbEJRVTBzY1VKQlFYRkNMRk5CUVhKQ0xHdENRVUZ4UWp0QlFVRkJMR2ROUVV0MlFpeEpRVXgxUWp0QlFVRkJMRU5CUVROQ096dEJRVk5CTEVsQlFVMHNNRUpCUVRCQ0xGTkJRVEZDTEhWQ1FVRXdRanRCUVVGQkxHZEtRVWt4UWl4SlFVb3dRanRCUVVGQkxFTkJRV2hET3p0QlFWTkJMRWxCUVUwc2IwSkJRVzlDTEZOQlFYQkNMR2xDUVVGdlFqdEJRVUZCTEhkR1FVVXdReXhKUVVZeFF6dEJRVUZCTEVOQlFURkNPenM3T3pzN1NVRlZUU3hWTzBGQlEwb3NORUpCUVhGQ08wRkJRVUVzVVVGQlVDeEhRVUZQTEZGQlFWQXNSMEZCVHpzN1FVRkJRVHM3UVVGRGJrSXNVMEZCU3l4SFFVRk1MRWRCUVZjc1IwRkJXRHM3UVVGRlFTeFRRVUZMTEZOQlFVd3NSMEZCYVVJc1JVRkJha0k3UVVGRFFTeFRRVUZMTEZsQlFVd3NSMEZCYjBJc1JVRkJjRUk3TzBGQlJVRXNVMEZCU3l4SlFVRk1PMEZCUTBRN096czdNa0pCUlUwN1FVRkJRU3hWUVVORExFZEJSRVFzUjBGRFV5eEpRVVJVTEVOQlEwTXNSMEZFUkRzN08wRkJSMHdzVjBGQlN5eE5RVUZNTEVkQlFXTXNTVUZCU1N4SlFVRktMRU5CUVZNc2MwSkJRVlFzUTBGQlpEdEJRVU5CTEZkQlFVc3NTMEZCVEN4SFFVRmhMRWxCUVVrc1NVRkJTaXhEUVVGVExIbENRVUZVTEVOQlFXSTdRVUZEUVN4WFFVRkxMRlZCUVV3c1IwRkJhMElzU1VGQlNTeEpRVUZLTEVOQlFWTXNNRUpCUVZRc1EwRkJiRUk3UVVGRFFTeFhRVUZMTEZGQlFVd3NSMEZCWjBJc1NVRkJTU3hKUVVGS0xFTkJRVk1zZDBKQlFWUXNRMEZCYUVJN1FVRkRRU3hYUVVGTExFZEJRVXdzUjBGQlZ5eEpRVUZKTEVsQlFVb3NRMEZCVXl3MlFrRkJWQ3hEUVVGWU96dEJRVVZCTEZkQlFVc3NUMEZCVEN4SFFVRmxMRWxCUVVrc1QwRkJTaXhEUVVGWkxFbEJRVm9zUTBGQmFVSXNSMEZCYWtJc1EwRkJaanRCUVVOQkxGZEJRVXNzUlVGQlRDeEhRVUZWTEVsQlFVa3NSVUZCU2l4RFFVRlBMRWxCUVZBc1EwRkJXU3hIUVVGYUxFTkJRVlk3TzBGQlJVRXNWMEZCU3l4TFFVRk1PMEZCUTBRN096czJRa0ZGVVR0QlFVTlFMR0ZCUVU4c1QwRkJUeXhOUVVGUUxFTkJRV01zUzBGQlN5eFRRVUZ1UWl4RFFVRlFPMEZCUTBRN096czBRa0ZGVHp0QlFVRkJMRlZCU1Vvc1IwRktTU3hIUVZsR0xFbEJXa1VzUTBGSlNpeEhRVXBKTzBGQlFVRXNWVUZMU2l4TlFVeEpMRWRCV1VZc1NVRmFSU3hEUVV0S0xFMUJURWs3UVVGQlFTeFZRVTFLTEZWQlRra3NSMEZaUml4SlFWcEZMRU5CVFVvc1ZVRk9TVHRCUVVGQkxGVkJUMG9zUzBGUVNTeEhRVmxHTEVsQldrVXNRMEZQU2l4TFFWQkpPMEZCUVVFc1ZVRlJTaXhSUVZKSkxFZEJXVVlzU1VGYVJTeERRVkZLTEZGQlVrazdRVUZCUVN4VlFWTktMRWRCVkVrc1IwRlpSaXhKUVZwRkxFTkJVMG9zUjBGVVNUdEJRVUZCTEZWQlZVb3NVMEZXU1N4SFFWbEdMRWxCV2tVc1EwRlZTaXhUUVZaSk8wRkJRVUVzVlVGWFNpeFpRVmhKTEVkQldVWXNTVUZhUlN4RFFWZEtMRmxCV0VrN096dEJRV1ZPTEdWQlFWTXNWMEZCVkN4RFFVRnhRaXhEUVVGeVFpeEZRVUYzUWp0QlFVTjBRaXhsUVVGUExFOUJRVThzVFVGQlVDeERRVUZqTEZOQlFXUXNSVUZCZVVJc1QwRkJla0lzUTBGQmFVTXNRMEZCYWtNc1RVRkJkME1zUTBGQlF5eERRVUZvUkR0QlFVTkVPenRCUVVWRUxHVkJRVk1zYTBKQlFWUXNRMEZCTkVJc1NVRkJOVUlzUlVGQmEwTTdRVUZEYUVNc1dVRkJTU3hOUVVGTkxFdEJRVlk3TzBGQlJVRXNZVUZCU1N4SlFVRkpMRU5CUVZJc1NVRkJZU3hUUVVGaUxFVkJRWGRDTzBGQlEzUkNMR05CUVVjc1ZVRkJWU3hEUVVGV0xFMUJRV2xDTEVsQlFYQkNMRVZCUVRCQ0xFMUJRVTBzU1VGQlRqdEJRVU16UWpzN1FVRkZSQ3hsUVVGUExFZEJRVkE3UVVGRFJEczdRVUZGUkN4bFFVRlRMR2xDUVVGVUxFTkJRVEpDTEVsQlFUTkNMRVZCUVdsRE8wRkJReTlDTEZsQlFVa3NUVUZCVFN4TFFVRldPenRCUVVWQkxHRkJRVWtzU1VGQlNTeEpRVUZKTEVOQlFWb3NSVUZCWlN4SlFVRkpMR0ZCUVdFc1RVRkJhRU1zUlVGQmQwTXNSMEZCZUVNc1JVRkJOa003UVVGRE0wTXNZMEZCUnl4aFFVRmhMRU5CUVdJc1RVRkJiMElzU1VGQmRrSXNSVUZCTmtJc1RVRkJUU3hKUVVGT08wRkJRemxDT3p0QlFVVkVMR1ZCUVU4c1IwRkJVRHRCUVVORU96czdPenM3UVVGUFJDeGhRVUZQTEVWQlFWQXNRMEZCVlN4UFFVRldMRVZCUVcxQ0xGVkJRVk1zUjBGQlZDeEZRVUZqTzBGQlF5OUNMRmxCUVVrc1lVRkJZU3hKUVVGSkxFdEJRVW9zUzBGQll5eERRVUZrTEVsQlFXMUNMRWxCUVVrc1MwRkJTaXhMUVVGakxFVkJRV3hFTzBGQlEwRXNXVUZCU1N4cFFrRkJhVUlzU1VGQlNTeExRVUZLTEV0QlFXTXNSVUZCWkN4SlFVRnZRaXhKUVVGSkxFdEJRVW9zUzBGQll5eEZRVUYyUkR0QlFVTkJMRmxCUVVrc1RVRkJUU3h6UWtGQlJTeEpRVUZHTEVWQlFWRXNSMEZCVWl4SFFVRmpMRWxCUVdRc1JVRkJWanM3UVVGRlFTeFpRVUZITEdOQlFXTXNSMEZCYWtJc1JVRkJjMElzU1VGQlNTeFBRVUZLTEVOQlFWa3NiVUpCUVZvc1JVRkJhVU1zUjBGQmFrTTdRVUZEZEVJc1dVRkJSeXhqUVVGSUxFVkJRVzFDTzBGQlEycENMR05CUVVrc1QwRkJTaXhEUVVGWkxIVkNRVUZhTEVWQlFYRkRMRWxCUVVrc1MwRkJla003UVVGRFJDeFRRVVpFTEUxQlJVODdRVUZEVEN4alFVRkpMRTlCUVVvc1EwRkJXU3d3UWtGQldqdEJRVU5FT3p0QlFVVkVMRmxCUVVrc1QwRkJTaXhEUVVGWkxHOUNRVUZhTEVWQlFXdERMRWRCUVd4RE8wRkJRMFFzVDBGaVJEczdPenM3TzBGQmIwSkJMR0ZCUVU4c1JVRkJVQ3hEUVVGVkxHdENRVUZXTEVWQlFUaENMRlZCUVZNc1IwRkJWQ3hGUVVGak8wRkJRekZETEcxQ1FVRlhMR0ZCUVVzN1FVRkRaQ3hqUVVGSkxFZEJRVW9zUTBGQlVTeFRRVUZTTEVWQlFXMUNMRWxCUVVrc1NVRkJTaXhMUVVGaExGTkJRV0lzUjBGQmVVSXNUMEZCZWtJc1IwRkJiVU1zVFVGQmRFUTdRVUZEUkN4VFFVWkVMRVZCUlVjc1IwRkdTRHRCUVVkRUxFOUJTa1E3T3pzN096dEJRVmRCTEZWQlFVa3NSVUZCU2l4RFFVRlBMRzlDUVVGUUxFVkJRVFpDTEZWQlFWTXNSMEZCVkN4RlFVRmpMRWxCUVdRc1JVRkJiMEk3UVVGREwwTXNhVUpCUVZNc1IwRkJWQ3hEUVVGaExGTkJRV0lzUlVGQmQwSXNUMEZCVHl4UFFVRlFMRWRCUVdsQ0xFMUJRWHBETzBGQlEwRXNhVUpCUVZNc1NVRkJWQ3hEUVVGakxITkNRVUZGTEhkQ1FVRjNRaXhKUVVGNFFpeERRVUZHTEVOQlFXUTdRVUZEUkN4UFFVaEVPenM3T3pzN1FVRlZRU3hWUVVGSkxFVkJRVW9zUTBGQlR5eHRRa0ZCVUN4RlFVRTBRaXhWUVVGVExFZEJRVlFzUlVGQll5eEpRVUZrTEVWQlFXOUNPenRCUVVVNVF5eGxRVUZQTEVkQlFWQXNRMEZCVnl4RlFVRllPMEZCUTBFc2JVSkJRVmNzWVVGQlN6dEJRVU5rTEdOQlFVa3NUMEZCU2l4RFFVRlpMRzlDUVVGYUxFVkJRV3RETEVWQlFXeERPMEZCUTBRc1UwRkdSQ3hGUVVWSExFTkJSa2c3TzBGQlNVRXNXVUZCUnl4dFFrRkJiVUlzU1VGQmJrSXNRMEZCU0N4RlFVRTJRanM3UVVGRk4wSXNXVUZCU1N4UlFVRlJPMEZCUTFZc1kwRkJTU3hMUVVGTExFZEJRVXdzUlVGRVRUdEJRVVZXTEdkQ1FVRk5PMEZCUmtrc1UwRkJXanM3UVVGTFFTdzRRa0ZCUlN4dFFrRkJiVUlzU1VGQmJrSXNRMEZCUml4RlFVRTBRaXhGUVVFMVFpeERRVUVyUWl4UFFVRXZRaXhGUVVGM1F5eHpRa0ZCZUVNc1JVRkJaMFVzVlVGQlV5eEhRVUZVTEVWQlFXTTdRVUZETlVVc1owTkJRVVVzU1VGQlNTeGpRVUZPTEVWQlFYTkNMRTFCUVhSQ08wRkJRMEVzWTBGQlNTeFBRVUZLTEVOQlFWa3NiVUpCUVZvc1JVRkJhVU1zUzBGQmFrTTdRVUZEUkN4VFFVaEVMRVZCUjBjc1VVRklTQ3hEUVVkWkxGVkJTRm83TzBGQlMwRXNhMEpCUVZVc1RVRkJUU3hGUVVGb1FpeEpRVUZ6UWl4TlFVRk5MRWxCUVRWQ096dEJRVVZCTEZsQlFVY3NRMEZCUXl4clFrRkJhMElzVFVGQlRTeEpRVUY0UWl4RFFVRktMRVZCUVcxRExHRkJRV0VzU1VGQllpeERRVUZyUWl4TlFVRk5MRWxCUVhoQ096dEJRVVZ1UXl4WlFVRkpMRTlCUVVvc1EwRkJXU3h0UWtGQldqdEJRVVZFTEU5QmVrSkVPenM3T3pzN1FVRm5RMEVzVlVGQlNTeEZRVUZLTEVOQlFVOHNiVUpCUVZBc1JVRkJORUlzVlVGQlV5eEhRVUZVTEVWQlFXTXNTVUZCWkN4RlFVRnZRanM3UVVGRk9VTXNaVUZCVHl4VlFVRlZMRXRCUVVzc1JVRkJaaXhEUVVGUU96dEJRVVZCTEZsQlFVa3NUMEZCU2l4RFFVRlpMRzFDUVVGYU8wRkJRMFFzVDBGTVJEczdPenM3TzBGQldVRXNWVUZCU1N4RlFVRktMRU5CUVU4c2RVSkJRVkFzUlVGQlowTXNWVUZCVXl4SFFVRlVMRVZCUVdNc1IwRkJaQ3hGUVVGdFFqdEJRVU5xUkN4WlFVRkpMRXRCUVVzc1RVRkJUU3hKUVVGT0xFTkJRVmNzU1VGQldDeERRVUZVTzBGQlEwRXNXVUZCU1N4UFFVRlBMRTFCUVUwc1NVRkJUaXhEUVVGWExGZEJRVmdzUlVGQmQwSXNTMEZCZUVJc1JVRkJXRHM3UVVGRlFTeFhRVUZITEZkQlFVZ3NRMEZCWlN4UlFVRm1PenRCUVVWQkxGbEJRVWNzVVVGQlVTeEZRVUZZTEVWQlFXVXNjMEpCUVVVc1JVRkJSaXhGUVVGTkxFVkJRVTRzUTBGQlV5eExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1QwRkJUeXhEUVVGdVFpeERRVUZVTEVWQlFXZERMRkZCUVdoRExFTkJRWGxETEZGQlFYcERPMEZCUTJZc1dVRkJSeXhSUVVGUkxFVkJRVmdzUlVGQlpTeHpRa0ZCUlN4RlFVRkdMRVZCUVUwc1JVRkJUaXhEUVVGVExFdEJRVXNzUjBGQlRDeERRVUZUTEVkQlFVY3NUVUZCU0N4SFFVRlpMRU5CUVhKQ0xFVkJRWGRDTEU5QlFVOHNRMEZCTDBJc1EwRkJWQ3hGUVVFMFF5eFJRVUUxUXl4RFFVRnhSQ3hSUVVGeVJEdEJRVU5vUWl4UFFWSkVPenM3T3pzN1FVRmxRU3hWUVVGSkxFVkJRVW9zUTBGQlR5d3dRa0ZCVUN4RlFVRnRReXhaUVVGWE8wRkJRelZETEdOQlFVMHNTVUZCVGl4RFFVRlhMR0ZCUVdFc1RVRkJZaXhEUVVGdlFpeFhRVUZ3UWl4RlFVRnBReXhIUVVGcVF5eERRVUZ4UXl4cFFrRkJja01zUTBGQldEdEJRVU5FTEU5QlJrUTdPenM3T3p0QlFWTkJMRlZCUVVrc1JVRkJTaXhEUVVGUExFOUJRVkFzUlVGQlowSXNOa0pCUVdoQ0xFVkJRU3RETEZsQlFWYzdRVUZEZUVRc1dVRkJTU3hQUVVGS0xFTkJRVmtzYlVKQlFWb3NSVUZCYVVNc2MwSkJRVVVzU1VGQlJpeEZRVUZSTEVsQlFWSXNSMEZCWlN4SlFVRm1MRVZCUVdwRE8wRkJRMFFzVDBGR1JEczdRVUZKUVN4VlFVRkpMRVZCUVVvc1EwRkJUeXhQUVVGUUxFVkJRV2RDTEd0RFFVRm9RaXhGUVVGdlJDeFpRVUZYTzBGQlF6ZEVMRmxCUVVrc1QwRkJUeXh6UWtGQlJTeEpRVUZHTEVWQlFWRXNTVUZCVWl4RFFVRmhMR2REUVVGaUxFTkJRVmc3UVVGRFFTeFpRVUZKTEU5QlFVb3NRMEZCV1N4dFFrRkJXaXhGUVVGcFF5eExRVUZMTEVsQlFVd3NSMEZCV1N4SlFVRmFMRVZCUVdwRE8wRkJRMFFzVDBGSVJEdEJRVTFFT3pzN096czdRVUZKU0N4WFFVRlhMRVZCUVZnc1IwRkJaMElzVlVGQlV5eEhRVUZVTEVWQlFXTTdRVUZETlVJc1UwRkJUeXhKUVVGSkxGVkJRVW9zUTBGQlpTeEhRVUZtTEVOQlFWQTdRVUZEUkN4RFFVWkVPenRyUWtGTFpTeFZJaXdpWm1sc1pTSTZJbXhoWW1Wc1ptbGxiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pUmpvdllYUnNZVzUwYVhNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0pDQm1jbTl0SUNkcWNYVmxjbmtuWEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JNWVdKbGJFWnBaV3hrVkhCc0lEMGdYeUE5UGlCZ1hHNGdJRHhrYVhZZ1kyeGhjM005WENKcWN5MXNZV0psYkdacFpXeGtYQ0krWEc0Z0lDQWdQR2x1Y0hWMElIUjVjR1U5WENKMFpYaDBYQ0lnYm1GdFpUMWNJbXhoWW1Wc1hDSWdZMnhoYzNNOVhDSnFjeTFzWVdKbGJHWnBaV3hrTFdsdWNIVjBYQ0lnTHo1Y2JpQWdJQ0E4WkdsMklHTnNZWE56UFZ3aWFuTXRiR0ZpWld4bWFXVnNaQzFqYjI1MFlXbHVaWEpjSWo0OEwyUnBkajVjYmlBZ0lDQThaR2wySUdOc1lYTnpQVndpYW5NdGJHRmlaV3htYVdWc1pDMWhkWFJ2WTI5dGNHeGxkR1ZjSWo1Y2JpQWdJQ0FnSUR4a2FYWWdZMnhoYzNNOVhDSnFjeTFzWVdKbGJHWnBaV3hrTFdOeVpXRjBiM0pjSWo0OEwyUnBkajVjYmlBZ0lDQWdJRHgxYkNCamJHRnpjejFjSW1wekxXeGhZbVZzWm1sbGJHUXRiV1Z0YjJ4cGMzUmNJajQ4TDNWc1BseHVJQ0FnSUR3dlpHbDJQbHh1SUNBOEwyUnBkajVjYm1CY2JseHVZMjl1YzNRZ1RHRmlaV3hHYVdWc1pFeGhZbVZzVkhCc0lEMGdaR0YwWVNBOVBpQmdYRzQ4WkdsMklHTnNZWE56UFZ3aWJHRmlaV3htYVdWc1pDMXNZV0psYkNCcWN5MXNZV0psYkdacFpXeGtMV3hoWW1Wc1hDSStYRzRnSUR4a2FYWWdZMnhoYzNNOVhDSnNZV0psYkdacFpXeGtMV3hoWW1Wc0xXTnNiM05sSUdwekxXeGhZbVZzWm1sbGJHUXRZMnh2YzJWY0lqNWNiaUFnSUNBOGMzQmhiaUJqYkdGemN6MWNJbWxqSUdsdmJpMXBiM010WTJ4dmMyVXRiM1YwYkdsdVpWd2lQand2YzNCaGJqNWNiaUFnUEM5a2FYWStYRzRnSUNSN1pHRjBZWDFjYmp3dlpHbDJQbHh1WUZ4dVhHNWpiMjV6ZENCTVlXSmxiRVpwWld4a1RHbHpkRU55WldGMFpWUndiQ0E5SUdSaGRHRWdQVDRnWUZ4dVBHUnBkaUJqYkdGemN6MWNJbXhoWW1Wc1ptbGxiR1F0WTNKbFlYUmxiM0lnYW5NdGJHRmlaV3htYVdWc1pDMWpjbVZoZEc5eUxXTnZiblJoYVc1bGNsd2lQbHh1SUNEbWxyRGxvcDdvcDRUbW9MenZ2SnBjYmlBZ1BITndZVzRnWTJ4aGMzTTlYQ0pxY3kxc1lXSmxiR1pwWld4a0xXTnlaV0YwYjNJdFkyOXVkR1Z1ZEZ3aVBseHVJQ0FnSUNSN1pHRjBZWDFjYmlBZ1BDOXpjR0Z1UGx4dVBDOWthWFkrWEc1Z1hHNWNibU52Ym5OMElFeGhZbVZzUm1sbGJHUk5aVzF2VkhCc0lEMGdaR0YwWVNBOVBpQmdYRzQ4YkdrK1hHNGdJRHhrYVhZZ1kyeGhjM005WENKc1lXSmxiR1pwWld4a0xXMWxiVzlzYVhOMGFYUmxiU0JxY3kxc1lXSmxiR1pwWld4a0xXMWxiVzlzYVhOMGFYUmxiVndpUGlSN1pHRjBZWDA4TDJScGRqNWNiand2YkdrK1hHNWdYRzVjYmk4cUtseHVJQ29nUTI5dGNHOXVaVzUwY3k5TVlXSmxiRVpwWld4a0xseHVJQ292WEc1Y2JtTnNZWE56SUV4aFltVnNSbWxsYkdRZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2loN0lDUmxiQ0I5S1NCN1hHNGdJQ0FnZEdocGN5NGtaV3dnUFNBa1pXeGNibHh1SUNBZ0lIUm9hWE11WkdGMFlYTjBZWFJsSUQwZ2UzMWNiaUFnSUNCMGFHbHpMbTFsYlc5eWFYcGxiR2x6ZENBOUlGdGRYRzVjYmlBZ0lDQjBhR2x6TG1sdWFYUW9LVnh1SUNCOVhHNWNiaUFnYVc1cGRDZ3BJSHRjYmlBZ0lDQnNaWFFnZXlBa1pXd2dmU0E5SUhSb2FYTmNibHh1SUNBZ0lIUm9hWE11SkdsdWNIVjBJRDBnSkdWc0xtWnBibVFvSnk1cWN5MXNZV0psYkdacFpXeGtMV2x1Y0hWMEp5bGNiaUFnSUNCMGFHbHpMaVJzYVhOMElEMGdKR1ZzTG1acGJtUW9KeTVxY3kxc1lXSmxiR1pwWld4a0xXMWxiVzlzYVhOMEp5bGNiaUFnSUNCMGFHbHpMaVJqYjI1MFlXbHVaWElnUFNBa1pXd3VabWx1WkNnbkxtcHpMV3hoWW1Wc1ptbGxiR1F0WTI5dWRHRnBibVZ5SnlsY2JpQWdJQ0IwYUdsekxpUmpjbVZoZEc5eUlEMGdKR1ZzTG1acGJtUW9KeTVxY3kxc1lXSmxiR1pwWld4a0xXTnlaV0YwYjNJbktWeHVJQ0FnSUhSb2FYTXVKR0ZqSUQwZ0pHVnNMbVpwYm1Rb0p5NXFjeTFzWVdKbGJHWnBaV3hrTFdGMWRHOWpiMjF3YkdWMFpTY3BYRzVjYmlBZ0lDQjBhR2x6TG5SeWFXZG5aWElnUFNBa1pXd3VkSEpwWjJkbGNpNWlhVzVrS0NSbGJDbGNiaUFnSUNCMGFHbHpMbTl1SUQwZ0pHVnNMbTl1TG1KcGJtUW9KR1ZzS1Z4dVhHNGdJQ0FnZEdocGN5NWxkbVZ1ZENncFhHNGdJSDFjYmx4dUlDQm5aWFJXWVd3b0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUU5aWFtVmpkQzUyWVd4MVpYTW9kR2hwY3k1a1lYUmhjM1JoZEdVcFhHNGdJSDFjYmx4dUlDQmxkbVZ1ZENncElIdGNibHh1WEc0Z0lDQWdiR1YwSUh0Y2JpQWdJQ0FnSUNSbGJDeGNiaUFnSUNBZ0lDUnBibkIxZEN4Y2JpQWdJQ0FnSUNSamIyNTBZV2x1WlhJc1hHNGdJQ0FnSUNBa2JHbHpkQ3hjYmlBZ0lDQWdJQ1JqY21WaGRHOXlMRnh1SUNBZ0lDQWdKR0ZqTEZ4dUlDQWdJQ0FnWkdGMFlYTjBZWFJsTEZ4dUlDQWdJQ0FnYldWdGIzSnBlbVZzYVhOMFhHNGdJQ0FnZlNBOUlIUm9hWE5jYmx4dVhHNGdJQ0FnWm5WdVkzUnBiMjRnWkhKdmNFRmpkR2wyWldRb2Jpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlFOWlhbVZqZEM1MllXeDFaWE1vWkdGMFlYTjBZWFJsS1M1cGJtUmxlRTltS0c0cElEMDlQU0F0TVZ4dUlDQWdJSDFjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR05vWldOclRHRmlaV3hGZUdsemRHbHVaeWhrWVhSaEtTQjdYRzRnSUNBZ0lDQnNaWFFnYjNWMElEMGdabUZzYzJWY2JseHVJQ0FnSUNBZ1ptOXlLR3hsZENCcklHbHVJR1JoZEdGemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppaGtZWFJoYzNSaGRHVmJhMTBnUFQwOUlHUmhkR0VwSUc5MWRDQTlJSFJ5ZFdWY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUc5MWRGeHVJQ0FnSUgxY2JseHVJQ0FnSUdaMWJtTjBhVzl1SUdOb1pXTnJUV1Z0YjBWNGFYTjBhVzVuS0dSaGRHRXBJSHRjYmlBZ0lDQWdJR3hsZENCdmRYUWdQU0JtWVd4elpWeHVYRzRnSUNBZ0lDQm1iM0lvYkdWMElHa2dQU0F3T3lCcElEd2diV1Z0YjNKcGVtVnNhWE4wTG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR2xtS0cxbGJXOXlhWHBsYkdsemRGdHBYU0E5UFQwZ1pHRjBZU2tnYjNWMElEMGdkSEoxWlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMFhHNGdJQ0FnZlZ4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRiMjF3YjI1bGJuUnpMMHhoWW1Wc1JtbGxiR1FnU1c1d2RYUkdhV1ZzWkNCRGFHRnVaMlZrTGx4dUlDQWdJQ0FxTDF4dVhHNGdJQ0FnSkdsdWNIVjBMbTl1S0NkclpYbDFjQ2NzSUdaMWJtTjBhVzl1S0dWMmRDa2dlMXh1SUNBZ0lDQWdiR1YwSUdselJXNTBaWEpMWlhrZ1BTQmxkblF1ZDJocFkyZ2dQVDA5SURrZ2ZId2daWFowTG5kb2FXTm9JRDA5UFNBeE0xeHVJQ0FnSUNBZ2JHVjBJR2x6UkdseVpXTjBhVzl1UzJWNUlEMGdaWFowTG5kb2FXTm9JRDA5UFNBek9DQjhmQ0JsZG5RdWQyaHBZMmdnUFQwOUlEUXdYRzRnSUNBZ0lDQnNaWFFnZG1Gc0lEMGdKQ2gwYUdsektTNTJZV3dvS1M1MGNtbHRLQ2xjYmx4dUlDQWdJQ0FnYVdZb2FYTkZiblJsY2t0bGVTQW1KaUIyWVd3cElDUmxiQzUwY21sbloyVnlLQ2RzWVdKbGJHWnBaV3hrTG1OeVpXRjBaU2NzSUhaaGJDbGNiaUFnSUNBZ0lHbG1LR2x6UkdseVpXTjBhVzl1UzJWNUtTQjdYRzRnSUNBZ0lDQWdJQ1JsYkM1MGNtbG5aMlZ5S0Nkc1lXSmxiR1pwWld4a0xtRmpkR2wyWld4cGMzUW5MQ0JsZG5RdWQyaHBZMmdwWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FrWld3dWRISnBaMmRsY2lnbmJHRmlaV3htYVdWc1pDNWlkV2xzWkcxbGJXOXNhWE4wSnlsY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0pHVnNMblJ5YVdkblpYSW9KMnhoWW1Wc1ptbGxiR1F1WTNKbFlYUnZjaWNzSUhaaGJDbGNiaUFnSUNCOUtWeHVYRzVjYmlBZ0lDQXZLaXBjYmlBZ0lDQWdLaUJEYjIxd2IyNWxiblJ6TDB4aFltVnNSbWxsYkdRZ1ZHOW5aMnhsSUVGMWRHOWpiMjF3YkdWMFpTNWNiaUFnSUNBZ0tpOWNibHh1SUNBZ0lDUnBibkIxZEM1dmJpZ25abTlqZFhOcGJpQm1iMk4xYzI5MWRDY3NJR1oxYm1OMGFXOXVLR1YyZENrZ2UxeHVJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDaGZJRDArSUh0Y2JpQWdJQ0FnSUNBZ0pHRmpMbU56Y3lnblpHbHpjR3hoZVNjc0lHVjJkQzUwZVhCbElEMDlQU0FuWm05amRYTnBiaWNnUHlBbllteHZZMnNuSURvZ0oyNXZibVVuS1Z4dUlDQWdJQ0FnZlN3Z01UQXdLVnh1SUNBZ0lIMHBYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJYQnZibVZ1ZEhNdlRHRmlaV3hHYVdWc1pDQlViMmRuYkdVZ0ppQlZjR1JoZEdVZ1EzSmxZWFJ2Y2k1Y2JpQWdJQ0FnS2k5Y2JseHVJQ0FnSUNSbGJDNXZiaWduYkdGaVpXeG1hV1ZzWkM1amNtVmhkRzl5Snl3Z1puVnVZM1JwYjI0b1pYWjBMQ0JrWVhSaEtTQjdYRzRnSUNBZ0lDQWtZM0psWVhSdmNpNWpjM01vSjJScGMzQnNZWGtuTENCa1lYUmhJRDhnSjJKc2IyTnJKeUE2SUNkdWIyNWxKeWxjYmlBZ0lDQWdJQ1JqY21WaGRHOXlMbWgwYld3b0pDaE1ZV0psYkVacFpXeGtUR2x6ZEVOeVpXRjBaVlJ3YkNoa1lYUmhLU2twWEc0Z0lDQWdmU2xjYmx4dVhHNGdJQ0FnTHlvcVhHNGdJQ0FnSUNvZ1EyOXRjRzl1Wlc1MGN5OU1ZV0psYkVacFpXeGtJRU55WldGMFpTQkVZWFJoYzNSaGRHVXVYRzRnSUNBZ0lDb3ZYRzVjYmlBZ0lDQWtaV3d1YjI0b0oyeGhZbVZzWm1sbGJHUXVZM0psWVhSbEp5d2dablZ1WTNScGIyNG9aWFowTENCa1lYUmhLU0I3WEc1Y2JpQWdJQ0FnSUNScGJuQjFkQzUyWVd3b0p5Y3BYRzRnSUNBZ0lDQnpaWFJVYVcxbGIzVjBLRjhnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWtaV3d1ZEhKcFoyZGxjaWduYkdGaVpXeG1hV1ZzWkM1amNtVmhkRzl5Snl3Z0p5Y3BYRzRnSUNBZ0lDQjlMQ0F3S1Z4dVhHNGdJQ0FnSUNCcFppaGphR1ZqYTB4aFltVnNSWGhwYzNScGJtY29aR0YwWVNrcElISmxkSFZ5Ymx4dVhHNGdJQ0FnSUNCc1pYUWdiR0ZpWld3Z1BTQjdYRzRnSUNBZ0lDQWdJR2xrT2lCRVlYUmxMbTV2ZHlncExGeHVJQ0FnSUNBZ0lDQmtZWFJoT2lCa1lYUmhYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ1FvVEdGaVpXeEdhV1ZzWkV4aFltVnNWSEJzS0dSaGRHRXBLUzV2YmlnblkyeHBZMnNuTENBbkxtcHpMV3hoWW1Wc1ptbGxiR1F0WTJ4dmMyVW5MQ0JtZFc1amRHbHZiaWhsZG5RcElIdGNiaUFnSUNBZ0lDQWdKQ2hsZG5RdVpHVnNaV2RoZEdWVVlYSm5aWFFwTG5KbGJXOTJaU2dwWEc0Z0lDQWdJQ0FnSUNSbGJDNTBjbWxuWjJWeUtDZHNZV0psYkdacFpXeGtMbkpsYlc5MlpTY3NJR3hoWW1Wc0tWeHVJQ0FnSUNBZ2ZTa3VZWEJ3Wlc1a1ZHOG9KR052Ym5SaGFXNWxjaWxjYmx4dUlDQWdJQ0FnWkdGMFlYTjBZWFJsVzJ4aFltVnNMbWxrWFNBOUlHeGhZbVZzTG1SaGRHRmNibHh1SUNBZ0lDQWdhV1lvSVdOb1pXTnJUV1Z0YjBWNGFYTjBhVzVuS0d4aFltVnNMbVJoZEdFcEtTQnRaVzF2Y21sNlpXeHBjM1F1Y0hWemFDaHNZV0psYkM1a1lYUmhLVnh1WEc0Z0lDQWdJQ0FrWld3dWRISnBaMmRsY2lnbmJHRmlaV3htYVdWc1pDNWxlSEJ2Y25RbktWeHVYRzRnSUNBZ2ZTbGNibHh1WEc0Z0lDQWdMeW9xWEc0Z0lDQWdJQ29nUTI5dGNHOXVaVzUwY3k5TVlXSmxiRVpwWld4a0lGSmxiVzkyWlNCRVlYUmhjM1JoZEdVdVhHNGdJQ0FnSUNvdlhHNWNiaUFnSUNBa1pXd3ViMjRvSjJ4aFltVnNabWxsYkdRdWNtVnRiM1psSnl3Z1puVnVZM1JwYjI0b1pYWjBMQ0JrWVhSaEtTQjdYRzVjYmlBZ0lDQWdJR1JsYkdWMFpTQmtZWFJoYzNSaGRHVmJaR0YwWVM1cFpGMWNibHh1SUNBZ0lDQWdKR1ZzTG5SeWFXZG5aWElvSjJ4aFltVnNabWxsYkdRdVpYaHdiM0owSnlsY2JpQWdJQ0I5S1Z4dVhHNWNiaUFnSUNBdktpcGNiaUFnSUNBZ0tpQkRiMjF3YjI1bGJuUnpMMHhoWW1Wc1JtbGxiR1FnVkhKMWJpQkJZM1JwZG1VZ1RHbHpkRWwwWlcwdVhHNGdJQ0FnSUNvdlhHNWNiaUFnSUNBa1pXd3ViMjRvSjJ4aFltVnNabWxsYkdRdVlXTjBhWFpsYkdsemRDY3NJR1oxYm1OMGFXOXVLR1YyZEN3Z2EyVjVLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2JHa2dQU0FrYkdsemRDNW1hVzVrS0Nkc2FTY3BYRzRnSUNBZ0lDQnNaWFFnWTNWeWNpQTlJQ1JzYVhOMExtWnBibVFvSjJ4cExtRmpkR2wyWlNjcExtbHVaR1Y0S0NsY2JseHVJQ0FnSUNBZ2JHa3VjbVZ0YjNabFEyeGhjM01vSjJGamRHbDJaU2NwWEc1Y2JpQWdJQ0FnSUdsbUtHdGxlU0E5UFQwZ016Z3BJQ1FvYkdrcExtVnhLRTFoZEdndWJXRjRLREFzSUdOMWNuSWdMU0F4S1NrdVlXUmtRMnhoYzNNb0oyRmpkR2wyWlNjcFhHNGdJQ0FnSUNCcFppaHJaWGtnUFQwOUlEUXdLU0FrS0d4cEtTNWxjU2hOWVhSb0xtMXBiaWhzYVM1c1pXNW5kR2dnTFNBeExDQmpkWEp5SUNzZ01Ta3BMbUZrWkVOc1lYTnpLQ2RoWTNScGRtVW5LVnh1SUNBZ0lIMHBYRzVjYmx4dUlDQWdJQzhxS2x4dUlDQWdJQ0FxSUVOdmJYQnZibVZ1ZEhNdlRHRmlaV3hHYVdWc1pDQlNaVUoxYVd4a0lFMWxiVzlNYVhOMExseHVJQ0FnSUNBcUwxeHVYRzRnSUNBZ0pHVnNMbTl1S0Nkc1lXSmxiR1pwWld4a0xtSjFhV3hrYldWdGIyeHBjM1FuTENCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDUnNhWE4wTG1oMGJXd29iV1Z0YjNKcGVtVnNhWE4wTG1acGJIUmxjaWhrY205d1FXTjBhWFpsWkNrdWJXRndLRXhoWW1Wc1JtbGxiR1JOWlcxdlZIQnNLU2xjYmlBZ0lDQjlLVnh1WEc1Y2JpQWdJQ0F2S2lwY2JpQWdJQ0FnS2lCRGIyMXdiMjVsYm5SekwweGhZbVZzUm1sbGJHUWdWSEpwWjJkbGNpQkRiR2xqYXk1Y2JpQWdJQ0FnS2k5Y2JseHVJQ0FnSUNSbGJDNXZiaWduWTJ4cFkyc25MQ0FuTG1wekxXeGhZbVZzWm1sbGJHUXRiV1Z0YjJ4cGMzUnBkR1Z0Snl3Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQWtaV3d1ZEhKcFoyZGxjaWduYkdGaVpXeG1hV1ZzWkM1amNtVmhkR1VuTENBa0tIUm9hWE1wTG5SbGVIUW9LUzUwY21sdEtDa3BYRzRnSUNBZ2ZTbGNibHh1SUNBZ0lDUmxiQzV2YmlnblkyeHBZMnNuTENBbkxtcHpMV3hoWW1Wc1ptbGxiR1F0WTNKbFlYUnZjaTFqYjI1MFlXbHVaWEluTENCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lHeGxkQ0FrWTNSNElEMGdKQ2gwYUdsektTNW1hVzVrS0NjdWFuTXRiR0ZpWld4bWFXVnNaQzFqY21WaGRHOXlMV052Ym5SbGJuUW5LVnh1SUNBZ0lDQWdKR1ZzTG5SeWFXZG5aWElvSjJ4aFltVnNabWxsYkdRdVkzSmxZWFJsSnl3Z0pHTjBlQzUwWlhoMEtDa3VkSEpwYlNncEtWeHVJQ0FnSUgwcFhHNWNibHh1SUNCOVhHNTlYRzVjYmx4dVRHRmlaV3hHYVdWc1pDNXZaaUE5SUdaMWJtTjBhVzl1S0c5d2RDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lFeGhZbVZzUm1sbGJHUW9iM0IwS1Z4dWZWeHVYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRXhoWW1Wc1JtbGxiR1JjYmlKZGZRPT1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kZW1vLXN5cy9zY3JpcHRzL2xhYmVsZmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCAxMiAxNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9qcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIF9qcXVlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanF1ZXJ5KTtcblxudmFyIF9wcm9kc3BlY3JvdyA9IHJlcXVpcmUoJy4vcHJvZHNwZWNyb3cuanMnKTtcblxudmFyIF9wcm9kc3BlY3JvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9kc3BlY3Jvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9kU3BlY1ZpZXdUcGwgPSBmdW5jdGlvbiBQcm9kU3BlY1ZpZXdUcGwoaWQpIHtcbiAgcmV0dXJuICdcXG48ZGl2IGRhdGEtaWQ9JyArIGlkICsgJyBjbGFzcz1cInNwZWMtcm93IGpzLXByb2RzcGVjdmlldy1yb3dcIj48L2Rpdj5cXG4nO1xufTtcblxudmFyIFByb2RTcGVjVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvZFNwZWNWaWV3KF9yZWYpIHtcbiAgICB2YXIgJGVsID0gX3JlZi4kZWw7XG4gICAgdmFyIF9yZWYkcm93ID0gX3JlZi5yb3c7XG4gICAgdmFyIHJvdyA9IF9yZWYkcm93ID09PSB1bmRlZmluZWQgPyAzIDogX3JlZiRyb3c7XG4gICAgdmFyIF9yZWYkZW5hYmxlZCA9IF9yZWYuZW5hYmxlZDtcbiAgICB2YXIgZW5hYmxlZCA9IF9yZWYkZW5hYmxlZCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGVuYWJsZWQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZFNwZWNWaWV3KTtcblxuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cbiAgICB0aGlzLmRhdGFzdGF0ZSA9IHt9O1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUHJvZFNwZWNWaWV3LCBbe1xuICAgIGtleTogJ2NyZWF0ZVJvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZVJvdyhsZW4pIHtcbiAgICAgIHZhciBpZCA9IERhdGUubm93KCk7XG5cbiAgICAgIHZhciAkcm93ID0gKDAsIF9qcXVlcnkyLmRlZmF1bHQpKFByb2RTcGVjVmlld1RwbChpZCkpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG4gICAgICB2YXIgcmVwbGFjZSA9ICcnO1xuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJlcGxhY2UgPSAn5LqMJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJlcGxhY2UgPSAn5LiJJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXBsYWNlID0gJ+S4gCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAkcm93OiAkcm93LFxuICAgICAgICByb3c6IF9wcm9kc3BlY3JvdzIuZGVmYXVsdC5vZih7ICRlbDogJHJvdywgbmFtZTogJ+inhOagvCcgKyByZXBsYWNlIH0pXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmRhdGFzdGF0ZS5yb3dzW2lkXSA9IGRhdGE7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsKCkge1xuICAgICAgdmFyIGRhdGFzdGF0ZSA9IHRoaXMuZGF0YXN0YXRlO1xuXG5cbiAgICAgIHZhciBkYXRhcm93cyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBrIGluIGRhdGFzdGF0ZS5yb3dzKSB7XG4gICAgICAgIHZhciByb3cgPSBkYXRhc3RhdGUucm93c1trXS5yb3c7XG5cbiAgICAgICAgZGF0YXJvd3MucHVzaChyb3cuZ2V0VmFsKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBlbmFibGU6IGRhdGFzdGF0ZS5jaGVja2VkLFxuICAgICAgICBkYXRhOiBkYXRhcm93c1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWw7XG4gICAgICB2YXIgZGF0YXN0YXRlID0gdGhpcy5kYXRhc3RhdGU7XG4gICAgICB2YXIgY3JlYXRlUm93ID0gdGhpcy5jcmVhdGVSb3c7XG4gICAgICB2YXIgZW5hYmxlZCA9IHRoaXMuZW5hYmxlZDtcblxuXG4gICAgICB0aGlzLiRjcmVhdGUgPSAkZWwuZmluZCgnLmpzLXByb2RzcGVjdmlldy1jcmVhdGVyb3cnKTtcbiAgICAgIHRoaXMuJGVuYWJsZSA9ICRlbC5maW5kKCcuanMtcHJvZHNwZWN2aWV3LWVuYWJsZScpO1xuICAgICAgdGhpcy4kYm9keSA9ICRlbC5maW5kKCcuanMtcHJvZHNwZWN2aWV3LWJvZHknKTtcblxuICAgICAgdGhpcy5kYXRhc3RhdGUucm93cyA9IHt9O1xuICAgICAgdGhpcy5kYXRhc3RhdGUuY2hlY2tlZCA9IGVuYWJsZWQ7XG4gICAgICBjcmVhdGVSb3cuYmluZCh0aGlzKSgwKTtcblxuICAgICAgdGhpcy5vbiA9ICRlbC5vbi5iaW5kKCRlbCk7XG4gICAgICB0aGlzLnRyaWdnZXIgPSAkZWwudHJpZ2dlci5iaW5kKCRlbCk7XG5cbiAgICAgIHRoaXMuZXZlbnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdldmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV2ZW50KCkge1xuICAgICAgdmFyICRlbCA9IHRoaXMuJGVsO1xuICAgICAgdmFyICRjcmVhdGUgPSB0aGlzLiRjcmVhdGU7XG4gICAgICB2YXIgJGVuYWJsZSA9IHRoaXMuJGVuYWJsZTtcbiAgICAgIHZhciAkYm9keSA9IHRoaXMuJGJvZHk7XG4gICAgICB2YXIgcm93ID0gdGhpcy5yb3c7XG4gICAgICB2YXIgZGF0YXN0YXRlID0gdGhpcy5kYXRhc3RhdGU7XG4gICAgICB2YXIgY3JlYXRlUm93ID0gdGhpcy5jcmVhdGVSb3c7XG4gICAgICB2YXIgdHJpZ2dlciA9IHRoaXMudHJpZ2dlcjtcbiAgICAgIHZhciBvbiA9IHRoaXMub247XG4gICAgICB2YXIgZ2V0VmFsID0gdGhpcy5nZXRWYWw7XG5cblxuICAgICAgY3JlYXRlUm93ID0gY3JlYXRlUm93LmJpbmQodGhpcyk7XG4gICAgICBnZXRWYWwgPSBnZXRWYWwuYmluZCh0aGlzKTtcblxuICAgICAgJGNyZWF0ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW4gPSBPYmplY3Qua2V5cyhkYXRhc3RhdGUucm93cykubGVuZ3RoO1xuICAgICAgICBpZiAobGVuID49IDMpIHJldHVybjtcbiAgICAgICAgY3JlYXRlUm93KGxlbik7XG5cbiAgICAgICAgdHJpZ2dlcigncHJvZHNwZWN2aWV3LmV4cG9ydCcsIGdldFZhbCgpKTtcbiAgICAgIH0pO1xuXG4gICAgICAkZWwub24oJ3Byb2RzcGVjcm93LnJlbW92ZXJvdycsICcuanMtcHJvZHNwZWN2aWV3LXJvdycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGFzdGF0ZS5yb3dzKS5sZW5ndGggPD0gMSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpZCA9ICgwLCBfanF1ZXJ5Mi5kZWZhdWx0KSh0aGlzKS5kYXRhKCdpZCcpO1xuICAgICAgICBkYXRhc3RhdGUucm93c1tpZF0uJHJvdy5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIGRhdGFzdGF0ZS5yb3dzW2lkXTtcblxuICAgICAgICB0cmlnZ2VyKCdwcm9kc3BlY3ZpZXcuZXhwb3J0JywgZ2V0VmFsKCkpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbC5vbigncHJvZHNwZWNyb3cuZXhwb3J0JywgJy5qcy1wcm9kc3BlY3ZpZXctcm93JywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmlnZ2VyKCdwcm9kc3BlY3ZpZXcuZXhwb3J0JywgZ2V0VmFsKCkpO1xuICAgICAgfSk7XG5cbiAgICAgICRlbmFibGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGF0YXN0YXRlLmNoZWNrZWQgPSAoMCwgX2pxdWVyeTIuZGVmYXVsdCkodGhpcykucHJvcCgnY2hlY2tlZCcpO1xuXG4gICAgICAgIHRyaWdnZXIoJ3Byb2RzcGVjdmlldy5leHBvcnQnLCBnZXRWYWwoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJvZFNwZWNWaWV3O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9kU3BlY1ZpZXc7XG5cblxuUHJvZFNwZWNWaWV3Lm9mID0gZnVuY3Rpb24gKG9wdCkge1xuICByZXR1cm4gbmV3IFByb2RTcGVjVmlldyhvcHQpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WTF4Y1pHVnRieTF6ZVhOY1hITmpjbWx3ZEhOY1hIQnliMlJ6Y0dWamRtbGxkeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3TzBGQlIwRXNTVUZCVFN4clFrRkJhMElzVTBGQmJFSXNaVUZCYTBJN1FVRkJRU3cyUWtGRFZDeEZRVVJUTzBGQlFVRXNRMEZCZUVJN08wbEJTM0ZDTEZrN1FVRkRia0lzT0VKQlFTdERPMEZCUVVFc1VVRkJha01zUjBGQmFVTXNVVUZCYWtNc1IwRkJhVU03UVVGQlFTeDNRa0ZCTlVJc1IwRkJORUk3UVVGQlFTeFJRVUUxUWl4SFFVRTBRaXcwUWtGQmRFSXNRMEZCYzBJN1FVRkJRU3cwUWtGQmJrSXNUMEZCYlVJN1FVRkJRU3hSUVVGdVFpeFBRVUZ0UWl4blEwRkJWQ3hMUVVGVE96dEJRVUZCT3p0QlFVTTNReXhUUVVGTExFZEJRVXdzUjBGQlZ5eEhRVUZZTzBGQlEwRXNVMEZCU3l4SFFVRk1MRWRCUVZjc1IwRkJXRHRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEU5QlFXWTdPMEZCUlVFc1UwRkJTeXhUUVVGTUxFZEJRV2xDTEVWQlFXcENPenRCUVVWQkxGTkJRVXNzU1VGQlREdEJRVU5FT3pzN096aENRVVZUTEVjc1JVRkJTenRCUVVOaUxGVkJRVWtzUzBGQlN5eExRVUZMTEVkQlFVd3NSVUZCVkRzN1FVRkZRU3hWUVVGSkxFOUJRVThzYzBKQlFVVXNaMEpCUVdkQ0xFVkJRV2hDTEVOQlFVWXNSVUZCZFVJc1VVRkJka0lzUTBGQlowTXNTMEZCU3l4TFFVRnlReXhEUVVGWU96dEJRVVZCTEZWQlFVa3NWVUZCVlN4RlFVRmtPMEZCUTBFc1kwRkJUeXhIUVVGUU8wRkJRMEVzWVVGQlN5eERRVUZNTzBGQlEwVXNiMEpCUVZVc1IwRkJWanRCUVVOQk8wRkJRMFlzWVVGQlN5eERRVUZNTzBGQlEwVXNiMEpCUVZVc1IwRkJWanRCUVVOQk8wRkJRMFk3UVVGRFJTeHZRa0ZCVlN4SFFVRldPMEZCUTBFN1FVRlVSanM3UVVGWlFTeFZRVUZKTEU5QlFVODdRVUZEVkN4alFVRk5MRWxCUkVjN1FVRkZWQ3hoUVVGTExITkNRVUZaTEVWQlFWb3NRMEZCWlN4RlFVRkZMRXRCUVVzc1NVRkJVQ3hGUVVGaExFMUJRVTBzVDBGQlR5eFBRVUV4UWl4RlFVRm1PMEZCUmtrc1QwRkJXRHM3UVVGTFFTeFhRVUZMTEZOQlFVd3NRMEZCWlN4SlFVRm1MRU5CUVc5Q0xFVkJRWEJDTEVsQlFUQkNMRWxCUVRGQ08wRkJRMFE3T3pzMlFrRkZVVHRCUVVGQkxGVkJRMFFzVTBGRVF5eEhRVU5oTEVsQlJHSXNRMEZEUkN4VFFVUkRPenM3UVVGSFVDeFZRVUZKTEZkQlFWY3NSVUZCWmpzN1FVRkZRU3hYUVVGSkxFbEJRVWtzUTBGQlVpeEpRVUZoTEZWQlFWVXNTVUZCZGtJc1JVRkJOa0k3UVVGQlFTeFpRVU55UWl4SFFVUnhRaXhIUVVOaUxGVkJRVlVzU1VGQlZpeERRVUZsTEVOQlFXWXNRMEZFWVN4RFFVTnlRaXhIUVVSeFFqczdRVUZGTTBJc2FVSkJRVk1zU1VGQlZDeERRVUZqTEVsQlFVa3NUVUZCU2l4RlFVRmtPMEZCUTBRN08wRkJSVVFzWVVGQlR5eFBRVUZQTEUxQlFWQXNRMEZCWXl4RlFVRmtMRVZCUVd0Q08wRkJRM1pDTEdkQ1FVRlJMRlZCUVZVc1QwRkVTenRCUVVWMlFpeGpRVUZOTzBGQlJtbENMRTlCUVd4Q0xFTkJRVkE3UVVGSlJEczdPekpDUVVWTk8wRkJRVUVzVlVGRlF5eEhRVVpFTEVkQlJYZERMRWxCUm5oRExFTkJSVU1zUjBGR1JEdEJRVUZCTEZWQlJVMHNVMEZHVGl4SFFVVjNReXhKUVVaNFF5eERRVVZOTEZOQlJrNDdRVUZCUVN4VlFVVnBRaXhUUVVacVFpeEhRVVYzUXl4SlFVWjRReXhEUVVWcFFpeFRRVVpxUWp0QlFVRkJMRlZCUlRSQ0xFOUJSalZDTEVkQlJYZERMRWxCUm5oRExFTkJSVFJDTEU5QlJqVkNPenM3UVVGSlRDeFhRVUZMTEU5QlFVd3NSMEZCWlN4SlFVRkpMRWxCUVVvc1EwRkJVeXcwUWtGQlZDeERRVUZtTzBGQlEwRXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJTU3hKUVVGS0xFTkJRVk1zZVVKQlFWUXNRMEZCWmp0QlFVTkJMRmRCUVVzc1MwRkJUQ3hIUVVGaExFbEJRVWtzU1VGQlNpeERRVUZUTEhWQ1FVRlVMRU5CUVdJN08wRkJSVUVzVjBGQlN5eFRRVUZNTEVOQlFXVXNTVUZCWml4SFFVRnpRaXhGUVVGMFFqdEJRVU5CTEZkQlFVc3NVMEZCVEN4RFFVRmxMRTlCUVdZc1IwRkJlVUlzVDBGQmVrSTdRVUZEUVN4blFrRkJWU3hKUVVGV0xFTkJRV1VzU1VGQlppeEZRVUZ4UWl4RFFVRnlRanM3UVVGRlFTeFhRVUZMTEVWQlFVd3NSMEZCVlN4SlFVRkpMRVZCUVVvc1EwRkJUeXhKUVVGUUxFTkJRVmtzUjBGQldpeERRVUZXTzBGQlEwRXNWMEZCU3l4UFFVRk1MRWRCUVdVc1NVRkJTU3hQUVVGS0xFTkJRVmtzU1VGQldpeERRVUZwUWl4SFFVRnFRaXhEUVVGbU96dEJRVVZCTEZkQlFVc3NTMEZCVER0QlFVTkVPenM3TkVKQlJVODdRVUZCUVN4VlFVZEtMRWRCU0Vrc1IwRmhSaXhKUVdKRkxFTkJSMG9zUjBGSVNUdEJRVUZCTEZWQlNVb3NUMEZLU1N4SFFXRkdMRWxCWWtVc1EwRkpTaXhQUVVwSk8wRkJRVUVzVlVGTFNpeFBRVXhKTEVkQllVWXNTVUZpUlN4RFFVdEtMRTlCVEVrN1FVRkJRU3hWUVUxS0xFdEJUa2tzUjBGaFJpeEpRV0pGTEVOQlRVb3NTMEZPU1R0QlFVRkJMRlZCVDBvc1IwRlFTU3hIUVdGR0xFbEJZa1VzUTBGUFNpeEhRVkJKTzBGQlFVRXNWVUZSU2l4VFFWSkpMRWRCWVVZc1NVRmlSU3hEUVZGS0xGTkJVa2s3UVVGQlFTeFZRVk5LTEZOQlZFa3NSMEZoUml4SlFXSkZMRU5CVTBvc1UwRlVTVHRCUVVGQkxGVkJWVW9zVDBGV1NTeEhRV0ZHTEVsQllrVXNRMEZWU2l4UFFWWkpPMEZCUVVFc1ZVRlhTaXhGUVZoSkxFZEJZVVlzU1VGaVJTeERRVmRLTEVWQldFazdRVUZCUVN4VlFWbEtMRTFCV2trc1IwRmhSaXhKUVdKRkxFTkJXVW9zVFVGYVNUczdPMEZCWlU0c2EwSkJRVmtzVlVGQlZTeEpRVUZXTEVOQlFXVXNTVUZCWml4RFFVRmFPMEZCUTBFc1pVRkJVeXhQUVVGUExFbEJRVkFzUTBGQldTeEpRVUZhTEVOQlFWUTdPMEZCUjBFc1kwRkJVU3hGUVVGU0xFTkJRVmNzVDBGQldDeEZRVUZ2UWl4WlFVRlhPMEZCUXpkQ0xGbEJRVWtzVFVGQlRTeFBRVUZQTEVsQlFWQXNRMEZCV1N4VlFVRlZMRWxCUVhSQ0xFVkJRVFJDTEUxQlFYUkRPMEZCUTBFc1dVRkJSeXhQUVVGUExFTkJRVllzUlVGQllUdEJRVU5pTEd0Q1FVRlZMRWRCUVZZN08wRkJSVUVzWjBKQlFWRXNjVUpCUVZJc1JVRkJLMElzVVVGQkwwSTdRVUZEUkN4UFFVNUVPenRCUVZOQkxGVkJRVWtzUlVGQlNpeERRVUZQTEhWQ1FVRlFMRVZCUVdkRExITkNRVUZvUXl4RlFVRjNSQ3haUVVGWE8wRkJRMnBGTEZsQlFVY3NUMEZCVHl4SlFVRlFMRU5CUVZrc1ZVRkJWU3hKUVVGMFFpeEZRVUUwUWl4TlFVRTFRaXhKUVVGelF5eERRVUY2UXl4RlFVRTBRenM3UVVGRk5VTXNXVUZCU1N4TFFVRkxMSE5DUVVGRkxFbEJRVVlzUlVGQlVTeEpRVUZTTEVOQlFXRXNTVUZCWWl4RFFVRlVPMEZCUTBFc2EwSkJRVlVzU1VGQlZpeERRVUZsTEVWQlFXWXNSVUZCYlVJc1NVRkJia0lzUTBGQmQwSXNUVUZCZUVJN1FVRkRRU3hsUVVGUExGVkJRVlVzU1VGQlZpeERRVUZsTEVWQlFXWXNRMEZCVURzN1FVRkZRU3huUWtGQlVTeHhRa0ZCVWl4RlFVRXJRaXhSUVVFdlFqdEJRVU5FTEU5QlVrUTdPMEZCVjBFc1ZVRkJTU3hGUVVGS0xFTkJRVThzYjBKQlFWQXNSVUZCTmtJc2MwSkJRVGRDTEVWQlFYRkVMRmxCUVZjN1FVRkRPVVFzWjBKQlFWRXNjVUpCUVZJc1JVRkJLMElzVVVGQkwwSTdRVUZEUkN4UFFVWkVPenRCUVV0QkxHTkJRVkVzUlVGQlVpeERRVUZYTEZGQlFWZ3NSVUZCY1VJc1dVRkJWenRCUVVNNVFpeHJRa0ZCVlN4UFFVRldMRWRCUVc5Q0xITkNRVUZGTEVsQlFVWXNSVUZCVVN4SlFVRlNMRU5CUVdFc1UwRkJZaXhEUVVGd1FqczdRVUZGUVN4blFrRkJVU3h4UWtGQlVpeEZRVUVyUWl4UlFVRXZRanRCUVVORUxFOUJTa1E3UVVGTlJEczdPenM3TzJ0Q1FYcElhMElzV1RzN08wRkJORWh5UWl4aFFVRmhMRVZCUVdJc1IwRkJhMElzVlVGQlV5eEhRVUZVTEVWQlFXTTdRVUZET1VJc1UwRkJUeXhKUVVGSkxGbEJRVW9zUTBGQmFVSXNSMEZCYWtJc1EwRkJVRHRCUVVORUxFTkJSa1FpTENKbWFXeGxJam9pY0hKdlpITndaV04yYVdWM0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklrWTZMMkYwYkdGdWRHbHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ1FnWm5KdmJTQW5hbkYxWlhKNUoxeHVhVzF3YjNKMElGQnliMlJUY0dWalVtOTNJR1p5YjIwZ0p5NHZjSEp2WkhOd1pXTnliM2N1YW5NblhHNWNibHh1WTI5dWMzUWdVSEp2WkZOd1pXTldhV1YzVkhCc0lEMGdhV1FnUFQ0Z1lGeHVQR1JwZGlCa1lYUmhMV2xrUFNSN2FXUjlJR05zWVhOelBWd2ljM0JsWXkxeWIzY2dhbk10Y0hKdlpITndaV04yYVdWM0xYSnZkMXdpUGp3dlpHbDJQbHh1WUZ4dVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCeWIyUlRjR1ZqVm1sbGR5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIc2dKR1ZzTENCeWIzY2dQU0F6TENCbGJtRmliR1ZrSUQwZ1ptRnNjMlVnZlNrZ2UxeHVJQ0FnSUhSb2FYTXVKR1ZzSUQwZ0pHVnNYRzRnSUNBZ2RHaHBjeTV5YjNjZ1BTQnliM2RjYmlBZ0lDQjBhR2x6TG1WdVlXSnNaV1FnUFNCbGJtRmliR1ZrWEc1Y2JpQWdJQ0IwYUdsekxtUmhkR0Z6ZEdGMFpTQTlJSHQ5WEc1Y2JpQWdJQ0IwYUdsekxtbHVhWFFvS1Z4dUlDQjlYRzVjYmlBZ1kzSmxZWFJsVW05M0tHeGxiaWtnZTF4dUlDQWdJR3hsZENCcFpDQTlJRVJoZEdVdWJtOTNLQ2xjYmx4dUlDQWdJR3hsZENBa2NtOTNJRDBnSkNoUWNtOWtVM0JsWTFacFpYZFVjR3dvYVdRcEtTNWhjSEJsYm1SVWJ5aDBhR2x6TGlSaWIyUjVLVnh1WEc0Z0lDQWdiR1YwSUhKbGNHeGhZMlVnUFNBbkoxeHVJQ0FnSUhOM2FYUmphQ2hzWlc0cElIdGNiaUFnSUNCallYTmxJREU2WEc0Z0lDQWdJQ0J5WlhCc1lXTmxJRDBnSitTNmpDZGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR05oYzJVZ01qcGNiaUFnSUNBZ0lISmxjR3hoWTJVZ1BTQW41TGlKSjF4dUlDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUhKbGNHeGhZMlVnUFNBbjVMaUFKMXh1SUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdWMElHUmhkR0VnUFNCN1hHNGdJQ0FnSUNBa2NtOTNPaUFrY205M0xGeHVJQ0FnSUNBZ2NtOTNPaUJRY205a1UzQmxZMUp2ZHk1dlppaDdJQ1JsYkRvZ0pISnZkeXdnYm1GdFpUb2dKK2luaE9hZ3ZDY2dLeUJ5WlhCc1lXTmxJSDBwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1a1lYUmhjM1JoZEdVdWNtOTNjMXRwWkYwZ1BTQmtZWFJoWEc0Z0lIMWNibHh1SUNCblpYUldZV3dvS1NCN1hHNGdJQ0FnYkdWMElIc2daR0YwWVhOMFlYUmxJSDBnUFNCMGFHbHpYRzVjYmlBZ0lDQnNaWFFnWkdGMFlYSnZkM01nUFNCYlhWeHVYRzRnSUNBZ1ptOXlLR3hsZENCcklHbHVJR1JoZEdGemRHRjBaUzV5YjNkektTQjdYRzRnSUNBZ0lDQnNaWFFnZXlCeWIzY2dmU0E5SUdSaGRHRnpkR0YwWlM1eWIzZHpXMnRkWEc0Z0lDQWdJQ0JrWVhSaGNtOTNjeTV3ZFhOb0tISnZkeTVuWlhSV1lXd29LU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z2UxeHVJQ0FnSUNBZ1pXNWhZbXhsT2lCa1lYUmhjM1JoZEdVdVkyaGxZMnRsWkN4Y2JpQWdJQ0FnSUdSaGRHRTZJR1JoZEdGeWIzZHpYRzRnSUNBZ2ZTbGNiaUFnZlZ4dVhHNGdJR2x1YVhRb0tTQjdYRzVjYmlBZ0lDQnNaWFFnZXlBa1pXd3NJR1JoZEdGemRHRjBaU3dnWTNKbFlYUmxVbTkzTENCbGJtRmliR1ZrSUgwZ1BTQjBhR2x6WEc1Y2JpQWdJQ0IwYUdsekxpUmpjbVZoZEdVZ1BTQWtaV3d1Wm1sdVpDZ25MbXB6TFhCeWIyUnpjR1ZqZG1sbGR5MWpjbVZoZEdWeWIzY25LVnh1SUNBZ0lIUm9hWE11SkdWdVlXSnNaU0E5SUNSbGJDNW1hVzVrS0NjdWFuTXRjSEp2WkhOd1pXTjJhV1YzTFdWdVlXSnNaU2NwWEc0Z0lDQWdkR2hwY3k0a1ltOWtlU0E5SUNSbGJDNW1hVzVrS0NjdWFuTXRjSEp2WkhOd1pXTjJhV1YzTFdKdlpIa25LVnh1WEc0Z0lDQWdkR2hwY3k1a1lYUmhjM1JoZEdVdWNtOTNjeUE5SUh0OVhHNGdJQ0FnZEdocGN5NWtZWFJoYzNSaGRHVXVZMmhsWTJ0bFpDQTlJR1Z1WVdKc1pXUmNiaUFnSUNCamNtVmhkR1ZTYjNjdVltbHVaQ2gwYUdsektTZ3dLVnh1WEc0Z0lDQWdkR2hwY3k1dmJpQTlJQ1JsYkM1dmJpNWlhVzVrS0NSbGJDbGNiaUFnSUNCMGFHbHpMblJ5YVdkblpYSWdQU0FrWld3dWRISnBaMmRsY2k1aWFXNWtLQ1JsYkNsY2JseHVJQ0FnSUhSb2FYTXVaWFpsYm5Rb0tWeHVJQ0I5WEc1Y2JpQWdaWFpsYm5Rb0tTQjdYRzVjYmlBZ0lDQnNaWFFnZTF4dUlDQWdJQ0FnSkdWc0xGeHVJQ0FnSUNBZ0pHTnlaV0YwWlN4Y2JpQWdJQ0FnSUNSbGJtRmliR1VzWEc0Z0lDQWdJQ0FrWW05a2VTeGNiaUFnSUNBZ0lISnZkeXhjYmlBZ0lDQWdJR1JoZEdGemRHRjBaU3hjYmlBZ0lDQWdJR055WldGMFpWSnZkeXhjYmlBZ0lDQWdJSFJ5YVdkblpYSXNYRzRnSUNBZ0lDQnZiaXhjYmlBZ0lDQWdJR2RsZEZaaGJGeHVJQ0FnSUgwZ1BTQjBhR2x6WEc1Y2JpQWdJQ0JqY21WaGRHVlNiM2NnUFNCamNtVmhkR1ZTYjNjdVltbHVaQ2gwYUdsektWeHVJQ0FnSUdkbGRGWmhiQ0E5SUdkbGRGWmhiQzVpYVc1a0tIUm9hWE1wWEc1Y2JseHVJQ0FnSUNSamNtVmhkR1V1YjI0b0oyTnNhV05ySnl3Z1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0lDQnNaWFFnYkdWdUlEMGdUMkpxWldOMExtdGxlWE1vWkdGMFlYTjBZWFJsTG5KdmQzTXBMbXhsYm1kMGFGeHVJQ0FnSUNBZ2FXWW9iR1Z1SUQ0OUlETXBJSEpsZEhWeWJseHVJQ0FnSUNBZ1kzSmxZWFJsVW05M0tHeGxiaWxjYmx4dUlDQWdJQ0FnZEhKcFoyZGxjaWduY0hKdlpITndaV04yYVdWM0xtVjRjRzl5ZENjc0lHZGxkRlpoYkNncEtWeHVJQ0FnSUgwcFhHNWNibHh1SUNBZ0lDUmxiQzV2YmlnbmNISnZaSE53WldOeWIzY3VjbVZ0YjNabGNtOTNKeXdnSnk1cWN5MXdjbTlrYzNCbFkzWnBaWGN0Y205M0p5d2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0JwWmloUFltcGxZM1F1YTJWNWN5aGtZWFJoYzNSaGRHVXVjbTkzY3lrdWJHVnVaM1JvSUR3OUlERXBJSEpsZEhWeWJseHVYRzRnSUNBZ0lDQnNaWFFnYVdRZ1BTQWtLSFJvYVhNcExtUmhkR0VvSjJsa0p5bGNiaUFnSUNBZ0lHUmhkR0Z6ZEdGMFpTNXliM2R6VzJsa1hTNGtjbTkzTG5KbGJXOTJaU2dwWEc0Z0lDQWdJQ0JrWld4bGRHVWdaR0YwWVhOMFlYUmxMbkp2ZDNOYmFXUmRYRzVjYmlBZ0lDQWdJSFJ5YVdkblpYSW9KM0J5YjJSemNHVmpkbWxsZHk1bGVIQnZjblFuTENCblpYUldZV3dvS1NsY2JpQWdJQ0I5S1Z4dVhHNWNiaUFnSUNBa1pXd3ViMjRvSjNCeWIyUnpjR1ZqY205M0xtVjRjRzl5ZENjc0lDY3Vhbk10Y0hKdlpITndaV04yYVdWM0xYSnZkeWNzSUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ2RISnBaMmRsY2lnbmNISnZaSE53WldOMmFXVjNMbVY0Y0c5eWRDY3NJR2RsZEZaaGJDZ3BLVnh1SUNBZ0lIMHBYRzVjYmx4dUlDQWdJQ1JsYm1GaWJHVXViMjRvSjJOb1lXNW5aU2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ1pHRjBZWE4wWVhSbExtTm9aV05yWldRZ1BTQWtLSFJvYVhNcExuQnliM0FvSjJOb1pXTnJaV1FuS1Z4dVhHNGdJQ0FnSUNCMGNtbG5aMlZ5S0Nkd2NtOWtjM0JsWTNacFpYY3VaWGh3YjNKMEp5d2daMlYwVm1Gc0tDa3BYRzRnSUNBZ2ZTbGNibHh1SUNCOVhHNTlYRzVjYmxCeWIyUlRjR1ZqVm1sbGR5NXZaaUE5SUdaMWJtTjBhVzl1S0c5d2RDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnliMlJUY0dWalZtbGxkeWh2Y0hRcFhHNTlYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlbW8tc3lzL3NjcmlwdHMvcHJvZHNwZWN2aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDggMTIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIHhwcm9kMShhKSB7XG4gIGlmIChhLmxlbmd0aCA9PT0gMCkgYSA9IFsnJ107XG4gIHZhciBpID0gMDtcbiAgdmFyIGlsZW4gPSBhLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaSA8IGlsZW4pIHtcbiAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBbYVtpXV07XG4gICAgaSArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHhwcm9kMihhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCA9PT0gMCkgYSA9IFsnJ107XG4gIGlmIChiLmxlbmd0aCA9PT0gMCkgYiA9IFsnJ107XG4gIHZhciBpID0gMDtcbiAgdmFyIGlsZW4gPSBhLmxlbmd0aDtcbiAgdmFyIGogPSB2b2lkIDA7XG4gIHZhciBqbGVuID0gYi5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKGkgPCBpbGVuKSB7XG4gICAgaiA9IDA7XG4gICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBbYVtpXSwgYltqXV07XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB4cHJvZDMoYSwgYiwgYykge1xuICBpZiAoYS5sZW5ndGggPT09IDApIGEgPSBbJyddO1xuICBpZiAoYi5sZW5ndGggPT09IDApIGIgPSBbJyddO1xuICBpZiAoYy5sZW5ndGggPT09IDApIGMgPSBbJyddO1xuICB2YXIgaSA9IDA7XG4gIHZhciBpbGVuID0gYS5sZW5ndGg7XG4gIHZhciBqID0gdm9pZCAwO1xuICB2YXIgamxlbiA9IGIubGVuZ3RoO1xuICB2YXIgayA9IHZvaWQgMDtcbiAgdmFyIGtsZW4gPSBjLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaSA8IGlsZW4pIHtcbiAgICBqID0gMDtcbiAgICB3aGlsZSAoaiA8IGpsZW4pIHtcbiAgICAgIGsgPSAwO1xuICAgICAgd2hpbGUgKGsgPCBrbGVuKSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IFthW2ldLCBiW2pdLCBjW2tdXTtcbiAgICAgICAgayArPSAxO1xuICAgICAgfVxuICAgICAgaiArPSAxO1xuICAgIH1cbiAgICBpICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIFRodW1ibmFpbFRhYmxlVmlld1Rib2R5Um93VHBsID0gZnVuY3Rpb24gVGh1bWJuYWlsVGFibGVWaWV3VGJvZHlSb3dUcGwocm93LCBpZHgpIHtcbiAgcmV0dXJuICdcXG48dHI+XFxuICA8dGQ+JyArIGlkeCArICc8L3RkPlxcbiAgPHRkPjxkaXYgY2xhc3M9XCJqcy10aHVtYm5haWx0YWJsZXZpZXctdXBsb2FkXCI+KjwvZGl2PjwvdGQ+XFxuICAnICsgcm93Lm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiAnPHRkPicgKyBuICsgJzwvdGQ+JztcbiAgfSkgKyAnXFxuICA8dGQ+WkgyODI5JyArIChpZHggPCAxMDAgPyAnMCcgKyBpZHggPCAxMCA/ICcwMCcgKyBpZHggOiBpZHggOiBpZHgpICsgJzwvdGQ+XFxuICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJhcmNvZGVcIiBjbGFzcz1cInNwZWMtdGFibGUtZmllbGRcIiAvPjwvdGQ+XFxuICA8dGQ+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJzcGVjLXRhYmxlLWZpZWxkXCIgLz48L3RkPlxcbiAgPHRkPjxzcGFuIGNsYXNzPVwianMtdGh1bWJuYWlsdGFibGV2aWV3LWFjdGlvblwiPuWIoOmZpDwvc3Bhbj48L3RkPlxcbjwvdHI+XFxuJztcbn07XG5cbnZhciBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyUGxhY2Vob2xkZXJCZWZvcmVUcGwgPSBmdW5jdGlvbiBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyUGxhY2Vob2xkZXJCZWZvcmVUcGwoXykge1xuICByZXR1cm4gJ1xcbjx0aCBjbGFzcz1cInNwZWMtdGFibGUtbjFcIj48L3RoPlxcbjx0aCBjbGFzcz1cInNwZWMtdGFibGUtbjIganMtdGh1bWJuYWlsdGFibGV2aWV3LXVwbG9hZFwiPueVpeWbvjwvdGg+XFxuJztcbn07XG5cbnZhciBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyUGxhY2Vob2xkZXJBZnRlclRwbCA9IGZ1bmN0aW9uIFRodW1ibmFpbFRhYmxlVmlld1RoZWFkZXJQbGFjZWhvbGRlckFmdGVyVHBsKF8pIHtcbiAgcmV0dXJuICdcXG48dGggY2xhc3M9XCJzcGVjLXRhYmxlLW4zXCI+5ZWG5ZOB57yW56CBPC90aD5cXG48dGggY2xhc3M9XCJzcGVjLXRhYmxlLW40XCI+5p2h5b2i56CBPC90aD5cXG48dGggY2xhc3M9XCJzcGVjLXRhYmxlLW41XCI+5ZSu5Lu3PC90aD5cXG48dGggY2xhc3M9XCJzcGVjLXRhYmxlLW42XCI+5pON5L2cPC90aD5cXG4nO1xufTtcblxudmFyIFRodW1ibmFpbFRhYmxlVmlld1RoZWFkZXJUcGwgPSBmdW5jdGlvbiBUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyVHBsKGhlYWRlcikge1xuICByZXR1cm4gJ1xcbjx0aD4nICsgKGhlYWRlciB8fCAnJykgKyAnPC90aD5cXG4nO1xufTtcblxudmFyIFRodW1ibmFpbFRhYmxlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGh1bWJuYWlsVGFibGVWaWV3KF9yZWYpIHtcbiAgICB2YXIgJGVsID0gX3JlZi4kZWw7XG4gICAgdmFyIGRhdGEgPSBfcmVmLmRhdGE7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGh1bWJuYWlsVGFibGVWaWV3KTtcblxuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaHVtYm5haWxUYWJsZVZpZXcsIFt7XG4gICAga2V5OiAnaW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICB2YXIgJGVsID0gdGhpcy4kZWw7XG5cblxuICAgICAgdGhpcy4kdGFibGUgPSAkZWwuZmluZCgnLmpzLXRodW1ibmFpbHRhYmxldmlldy10YWJsZScpO1xuICAgICAgdGhpcy4kYm9keSA9ICRlbC5maW5kKCcuanMtdGh1bWJuYWlsdGFibGV2aWV3LWJvZHknKTtcbiAgICAgIHRoaXMuJGhlYWRlciA9ICRlbC5maW5kKCcuanMtdGh1bWJuYWlsdGFibGV2aWV3LWhlYWRlcicpO1xuXG4gICAgICB0aGlzLmV2ZW50KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbm9ybWFsaXplZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vcm1hbGl6ZWQoKSB7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcblxuXG4gICAgICB2YXIgbGVuID0gZGF0YS5kYXRhLmxlbmd0aDtcbiAgICAgIHZhciByb3dzID0gZGF0YS5kYXRhLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gbi5sYWJlbHM7XG4gICAgICB9KTtcbiAgICAgIHZhciBuYW1lcyA9IGRhdGEuZGF0YS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIG4ubmFtZTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBleHBvcnREYXRhKG5yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyczogbmFtZXMsXG4gICAgICAgICAgcm93czogbnJcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChsZW4pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHJldHVybiBleHBvcnREYXRhKHhwcm9kMS5hcHBseShudWxsLCByb3dzKSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gZXhwb3J0RGF0YSh4cHJvZDIuYXBwbHkobnVsbCwgcm93cykpO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydERhdGEoeHByb2QzLmFwcGx5KG51bGwsIHJvd3MpKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIERhdGEgTGVuZ3RoLicpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBub3JtYWxpemVkID0gdGhpcy5ub3JtYWxpemVkO1xuICAgICAgdmFyICRib2R5ID0gdGhpcy4kYm9keTtcbiAgICAgIHZhciAkaGVhZGVyID0gdGhpcy4kaGVhZGVyO1xuXG4gICAgICB2YXIgX25vcm1hbGl6ZWQgPSB0aGlzLm5vcm1hbGl6ZWQoKTtcblxuICAgICAgdmFyIGhlYWRlcnMgPSBfbm9ybWFsaXplZC5oZWFkZXJzO1xuICAgICAgdmFyIHJvd3MgPSBfbm9ybWFsaXplZC5yb3dzO1xuXG5cbiAgICAgIHZhciBoZWFkZXIgPSAnXFxuJyArIFRodW1ibmFpbFRhYmxlVmlld1RoZWFkZXJQbGFjZWhvbGRlckJlZm9yZVRwbCgpICsgJ1xcbicgKyBoZWFkZXJzLm1hcChUaHVtYm5haWxUYWJsZVZpZXdUaGVhZGVyVHBsKS5qb2luKCcnKSArICdcXG4nICsgVGh1bWJuYWlsVGFibGVWaWV3VGhlYWRlclBsYWNlaG9sZGVyQWZ0ZXJUcGwoKSArICdcXG4nO1xuICAgICAgdmFyIGJvZHkgPSByb3dzLm1hcChUaHVtYm5haWxUYWJsZVZpZXdUYm9keVJvd1RwbCkuam9pbignJyk7XG5cbiAgICAgICRoZWFkZXIuaHRtbChoZWFkZXIpO1xuICAgICAgJGJvZHkuaHRtbChib2R5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdldmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGV2ZW50KCkge1xuICAgICAgdmFyICRlbCA9IHRoaXMuJGVsO1xuXG5cbiAgICAgICRlbC5vbigndGh1bWJuYWlsdGFibGV2aWV3LmNoZWNrZWQnLCAnLmpzLXRodW1ibmFpbHRhYmxldmlldy1hY3Rpb24nLCBmdW5jdGlvbiAoZXZ0KSB7fSk7XG5cbiAgICAgICRlbC5vbigndGh1bWJuYWlsdGFibGV2aWV3LnVwbG9hZCcsICcuanMtdGh1bWJuYWlsdGFibGV2aWV3LXVwbG9hZGUnLCBmdW5jdGlvbiAoZXZ0KSB7fSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRodW1ibmFpbFRhYmxlVmlldztcbn0oKTtcblxuVGh1bWJuYWlsVGFibGVWaWV3Lm9mID0gZnVuY3Rpb24gKG9wdCkge1xuICByZXR1cm4gbmV3IFRodW1ibmFpbFRhYmxlVmlldyhvcHQpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGh1bWJuYWlsVGFibGVWaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZMXhjWkdWdGJ5MXplWE5jWEhOamNtbHdkSE5jWEhSb2RXMWlibUZwYkhSaFlteGxkbWxsZHk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08wRkJRVUVzVTBGQlV5eE5RVUZVTEVOQlFXZENMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRTFCUVVjc1JVRkJSU3hOUVVGR0xFdEJRV0VzUTBGQmFFSXNSVUZCYlVJc1NVRkJTU3hEUVVGRExFVkJRVVFzUTBGQlNqdEJRVU51UWl4TlFVRkpMRWxCUVVrc1EwRkJVanRCUVVOQkxFMUJRVWtzVDBGQlR5eEZRVUZGTEUxQlFXSTdRVUZEUVN4TlFVRkpMRk5CUVZNc1JVRkJZanRCUVVOQkxGTkJRVThzU1VGQlNTeEpRVUZZTEVWQlFXbENPMEZCUTJZc1YwRkJUeXhQUVVGUExFMUJRV1FzU1VGQmQwSXNRMEZCUXl4RlFVRkZMRU5CUVVZc1EwRkJSQ3hEUVVGNFFqdEJRVU5CTEZOQlFVc3NRMEZCVER0QlFVTkVPMEZCUTBRc1UwRkJUeXhOUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFTkJRV2hDTEVWQlFXMUNMRU5CUVc1Q0xFVkJRWE5DTzBGQlEzQkNMRTFCUVVjc1JVRkJSU3hOUVVGR0xFdEJRV0VzUTBGQmFFSXNSVUZCYlVJc1NVRkJTU3hEUVVGRExFVkJRVVFzUTBGQlNqdEJRVU51UWl4TlFVRkhMRVZCUVVVc1RVRkJSaXhMUVVGaExFTkJRV2hDTEVWQlFXMUNMRWxCUVVrc1EwRkJReXhGUVVGRUxFTkJRVW83UVVGRGJrSXNUVUZCU1N4SlFVRkpMRU5CUVZJN1FVRkRRU3hOUVVGSkxFOUJRVThzUlVGQlJTeE5RVUZpTzBGQlEwRXNUVUZCU1N4VlFVRktPMEZCUTBFc1RVRkJTU3hQUVVGUExFVkJRVVVzVFVGQllqdEJRVU5CTEUxQlFVa3NVMEZCVXl4RlFVRmlPMEZCUTBFc1UwRkJUeXhKUVVGSkxFbEJRVmdzUlVGQmFVSTdRVUZEWml4UlFVRkpMRU5CUVVvN1FVRkRRU3hYUVVGUExFbEJRVWtzU1VGQldDeEZRVUZwUWp0QlFVTm1MR0ZCUVU4c1QwRkJUeXhOUVVGa0xFbEJRWGRDTEVOQlFVTXNSVUZCUlN4RFFVRkdMRU5CUVVRc1JVRkJUeXhGUVVGRkxFTkJRVVlzUTBGQlVDeERRVUY0UWp0QlFVTkJMRmRCUVVzc1EwRkJURHRCUVVORU8wRkJRMFFzVTBGQlN5eERRVUZNTzBGQlEwUTdRVUZEUkN4VFFVRlBMRTFCUVZBN1FVRkRSRHM3UVVGSFJDeFRRVUZUTEUxQlFWUXNRMEZCWjBJc1EwRkJhRUlzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUTBGQmRFSXNSVUZCZVVJN1FVRkRka0lzVFVGQlJ5eEZRVUZGTEUxQlFVWXNTMEZCWVN4RFFVRm9RaXhGUVVGdFFpeEpRVUZKTEVOQlFVTXNSVUZCUkN4RFFVRktPMEZCUTI1Q0xFMUJRVWNzUlVGQlJTeE5RVUZHTEV0QlFXRXNRMEZCYUVJc1JVRkJiVUlzU1VGQlNTeERRVUZETEVWQlFVUXNRMEZCU2p0QlFVTnVRaXhOUVVGSExFVkJRVVVzVFVGQlJpeExRVUZoTEVOQlFXaENMRVZCUVcxQ0xFbEJRVWtzUTBGQlF5eEZRVUZFTEVOQlFVbzdRVUZEYmtJc1RVRkJTU3hKUVVGSkxFTkJRVkk3UVVGRFFTeE5RVUZKTEU5QlFVOHNSVUZCUlN4TlFVRmlPMEZCUTBFc1RVRkJTU3hWUVVGS08wRkJRMEVzVFVGQlNTeFBRVUZQTEVWQlFVVXNUVUZCWWp0QlFVTkJMRTFCUVVrc1ZVRkJTanRCUVVOQkxFMUJRVWtzVDBGQlR5eEZRVUZGTEUxQlFXSTdRVUZEUVN4TlFVRkpMRk5CUVZNc1JVRkJZanRCUVVOQkxGTkJRVThzU1VGQlNTeEpRVUZZTEVWQlFXbENPMEZCUTJZc1VVRkJTU3hEUVVGS08wRkJRMEVzVjBGQlR5eEpRVUZKTEVsQlFWZ3NSVUZCYVVJN1FVRkRaaXhWUVVGSkxFTkJRVW83UVVGRFFTeGhRVUZQTEVsQlFVa3NTVUZCV0N4RlFVRnBRanRCUVVObUxHVkJRVThzVDBGQlR5eE5RVUZrTEVsQlFYZENMRU5CUVVNc1JVRkJSU3hEUVVGR0xFTkJRVVFzUlVGQlR5eEZRVUZGTEVOQlFVWXNRMEZCVUN4RlFVRmhMRVZCUVVVc1EwRkJSaXhEUVVGaUxFTkJRWGhDTzBGQlEwRXNZVUZCU3l4RFFVRk1PMEZCUTBRN1FVRkRSQ3hYUVVGTExFTkJRVXc3UVVGRFJEdEJRVU5FTEZOQlFVc3NRMEZCVER0QlFVTkVPMEZCUTBRc1UwRkJUeXhOUVVGUU8wRkJRMFE3TzBGQlIwUXNTVUZCVFN4blEwRkJaME1zVTBGQmFFTXNOa0pCUVdkRExFTkJRVU1zUjBGQlJDeEZRVUZOTEVkQlFVNDdRVUZCUVN3MFFrRkZPVUlzUjBGR09FSXNLMFZCU1d4RExFbEJRVWtzUjBGQlNpeERRVUZSTzBGQlFVRXNiMEpCUVZrc1EwRkJXanRCUVVGQkxFZEJRVklzUTBGS2EwTXNkVUpCUzNoQ0xFMUJRVTBzUjBGQlRpeEhRVUZaTEUxQlFVMHNSMEZCVGl4SFFVRlpMRVZCUVZvc1IwRkJhVUlzVDBGQlR5eEhRVUY0UWl4SFFVRTRRaXhIUVVFeFF5eEhRVUZuUkN4SFFVeDRRanRCUVVGQkxFTkJRWFJET3p0QlFWbEJMRWxCUVUwc1owUkJRV2RFTEZOQlFXaEVMRFpEUVVGblJEdEJRVUZCTzBGQlFVRXNRMEZCZEVRN08wRkJTMEVzU1VGQlRTd3JRMEZCSzBNc1UwRkJMME1zTkVOQlFTdERPMEZCUVVFN1FVRkJRU3hEUVVGeVJEczdRVUZQUVN4SlFVRk5MQ3RDUVVFclFpeFRRVUV2UWl3MFFrRkJLMElzUTBGQlF5eE5RVUZFTzBGQlFVRXNjVUpCUXk5Q0xGVkJRVlVzUlVGRWNVSTdRVUZCUVN4RFFVRnlRenM3U1VGTFRTeHJRanRCUVVOS0xHOURRVUV5UWp0QlFVRkJMRkZCUVdJc1IwRkJZU3hSUVVGaUxFZEJRV0U3UVVGQlFTeFJRVUZTTEVsQlFWRXNVVUZCVWl4SlFVRlJPenRCUVVGQk96dEJRVU42UWl4VFFVRkxMRWRCUVV3c1IwRkJWeXhIUVVGWU8wRkJRMEVzVTBGQlN5eEpRVUZNTEVkQlFWa3NTVUZCV2pzN1FVRkZRU3hUUVVGTExFbEJRVXc3UVVGRFJEczdPenN5UWtGRlRUdEJRVUZCTEZWQlEwTXNSMEZFUkN4SFFVTlRMRWxCUkZRc1EwRkRReXhIUVVSRU96czdRVUZIVEN4WFFVRkxMRTFCUVV3c1IwRkJZeXhKUVVGSkxFbEJRVW9zUTBGQlV5dzRRa0ZCVkN4RFFVRmtPMEZCUTBFc1YwRkJTeXhMUVVGTUxFZEJRV0VzU1VGQlNTeEpRVUZLTEVOQlFWTXNOa0pCUVZRc1EwRkJZanRCUVVOQkxGZEJRVXNzVDBGQlRDeEhRVUZsTEVsQlFVa3NTVUZCU2l4RFFVRlRMQ3RDUVVGVUxFTkJRV1k3TzBGQlJVRXNWMEZCU3l4TFFVRk1PMEZCUTBRN096dHBRMEZGV1R0QlFVRkJMRlZCUTB3c1NVRkVTeXhIUVVOSkxFbEJSRW9zUTBGRFRDeEpRVVJMT3pzN1FVRkhXQ3hWUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZNTEVOQlFWVXNUVUZCY0VJN1FVRkRRU3hWUVVGSkxFOUJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNSMEZCVml4RFFVRmpPMEZCUVVFc1pVRkJTeXhGUVVGRkxFMUJRVkE3UVVGQlFTeFBRVUZrTEVOQlFWZzdRVUZEUVN4VlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGTUxFTkJRVlVzUjBGQlZpeERRVUZqTzBGQlFVRXNaVUZCU3l4RlFVRkZMRWxCUVZBN1FVRkJRU3hQUVVGa0xFTkJRVm83TzBGQlJVRXNaVUZCVXl4VlFVRlVMRU5CUVc5Q0xFVkJRWEJDTEVWQlFYZENPMEZCUTNSQ0xHVkJRVTg3UVVGRFRDeHRRa0ZCVXl4TFFVUktPMEZCUlV3c1owSkJRVTA3UVVGR1JDeFRRVUZRTzBGQlNVUTdPMEZCUlVRc1kwRkJUeXhIUVVGUU8wRkJRMEVzWVVGQlN5eERRVUZNTzBGQlFWRXNhVUpCUVU4c1YwRkJWeXhQUVVGUExFdEJRVkFzUTBGQllTeEpRVUZpTEVWQlFXMUNMRWxCUVc1Q0xFTkJRVmdzUTBGQlVEdEJRVU5TTEdGQlFVc3NRMEZCVER0QlFVRlJMR2xDUVVGUExGZEJRVmNzVDBGQlR5eExRVUZRTEVOQlFXRXNTVUZCWWl4RlFVRnRRaXhKUVVGdVFpeERRVUZZTEVOQlFWQTdRVUZEVWl4aFFVRkxMRU5CUVV3N1FVRkJVU3hwUWtGQlR5eFhRVUZYTEU5QlFVOHNTMEZCVUN4RFFVRmhMRWxCUVdJc1JVRkJiVUlzU1VGQmJrSXNRMEZCV0N4RFFVRlFPMEZCUTFJN1FVRkJVeXhuUWtGQlRTeEpRVUZKTEV0QlFVb3NRMEZCVlN4dlFrRkJWaXhEUVVGT08wRkJTbFE3UVVGUFJEczdPelpDUVVWUk8wRkJRVUVzVlVGRFJDeFZRVVJETEVkQlF6aENMRWxCUkRsQ0xFTkJRMFFzVlVGRVF6dEJRVUZCTEZWQlExY3NTMEZFV0N4SFFVTTRRaXhKUVVRNVFpeERRVU5YTEV0QlJGZzdRVUZCUVN4VlFVTnJRaXhQUVVSc1FpeEhRVU00UWl4SlFVUTVRaXhEUVVOclFpeFBRVVJzUWpzN1FVRkJRU3gzUWtGSGFVSXNTMEZCU3l4VlFVRk1MRVZCU0dwQ096dEJRVUZCTEZWQlIwUXNUMEZJUXl4bFFVZEVMRTlCU0VNN1FVRkJRU3hWUVVkUkxFbEJTRklzWlVGSFVTeEpRVWhTT3pzN1FVRkxVQ3hWUVVGSkxHZENRVU5PTEN0RFFVUk5MRlZCUlU0c1VVRkJVU3hIUVVGU0xFTkJRVmtzTkVKQlFWb3NSVUZCTUVNc1NVRkJNVU1zUTBGQkswTXNSVUZCTDBNc1EwRkdUU3hWUVVkT0xEaERRVWhOTEU5QlFVbzdRVUZMUVN4VlFVRkpMRTlCUVU4c1MwRkJTeXhIUVVGTUxFTkJRVk1zTmtKQlFWUXNSVUZCZDBNc1NVRkJlRU1zUTBGQk5rTXNSVUZCTjBNc1EwRkJXRHM3UVVGRlFTeGpRVUZSTEVsQlFWSXNRMEZCWVN4TlFVRmlPMEZCUTBFc1dVRkJUU3hKUVVGT0xFTkJRVmNzU1VGQldEdEJRVU5FT3pzN05FSkJSVTg3UVVGQlFTeFZRVU5CTEVkQlJFRXNSMEZEVVN4SlFVUlNMRU5CUTBFc1IwRkVRVHM3TzBGQlIwNHNWVUZCU1N4RlFVRktMRU5CUVU4c05FSkJRVkFzUlVGQmNVTXNLMEpCUVhKRExFVkJRWE5GTEZWQlFWTXNSMEZCVkN4RlFVRmpMRU5CUlc1R0xFTkJSa1E3TzBGQlNVRXNWVUZCU1N4RlFVRktMRU5CUVU4c01rSkJRVkFzUlVGQmIwTXNaME5CUVhCRExFVkJRWE5GTEZWQlFWTXNSMEZCVkN4RlFVRmpMRU5CUlc1R0xFTkJSa1E3UVVGSFJEczdPenM3TzBGQlIwZ3NiVUpCUVcxQ0xFVkJRVzVDTEVkQlFYZENMRlZCUVZNc1IwRkJWQ3hGUVVGak8wRkJRM0JETEZOQlFVOHNTVUZCU1N4clFrRkJTaXhEUVVGMVFpeEhRVUYyUWl4RFFVRlFPMEZCUTBRc1EwRkdSRHM3YTBKQlNXVXNhMElpTENKbWFXeGxJam9pZEdoMWJXSnVZV2xzZEdGaWJHVjJhV1YzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWtZNkwyRjBiR0Z1ZEdseklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lablZ1WTNScGIyNGdlSEJ5YjJReEtHRXBJSHRjYmlBZ2FXWW9ZUzVzWlc1bmRHZ2dQVDA5SURBcElHRWdQU0JiSnlkZFhHNGdJR3hsZENCcElEMGdNRnh1SUNCc1pYUWdhV3hsYmlBOUlHRXViR1Z1WjNSb1hHNGdJR3hsZENCeVpYTjFiSFFnUFNCYlhWeHVJQ0IzYUdsc1pTQW9hU0E4SUdsc1pXNHBJSHRjYmlBZ0lDQnlaWE4xYkhSYmNtVnpkV3gwTG14bGJtZDBhRjBnUFNCYllWdHBYVjFjYmlBZ0lDQnBJQ3M5SURGY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WemRXeDBYRzU5WEc1Y2JtWjFibU4wYVc5dUlIaHdjbTlrTWloaExDQmlLU0I3WEc0Z0lHbG1LR0V1YkdWdVozUm9JRDA5UFNBd0tTQmhJRDBnV3ljblhWeHVJQ0JwWmloaUxteGxibWQwYUNBOVBUMGdNQ2tnWWlBOUlGc25KMTFjYmlBZ2JHVjBJR2tnUFNBd1hHNGdJR3hsZENCcGJHVnVJRDBnWVM1c1pXNW5kR2hjYmlBZ2JHVjBJR3BjYmlBZ2JHVjBJR3BzWlc0Z1BTQmlMbXhsYm1kMGFGeHVJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1cxMWNiaUFnZDJocGJHVWdLR2tnUENCcGJHVnVLU0I3WEc0Z0lDQWdhaUE5SURCY2JpQWdJQ0IzYUdsc1pTQW9haUE4SUdwc1pXNHBJSHRjYmlBZ0lDQWdJSEpsYzNWc2RGdHlaWE4xYkhRdWJHVnVaM1JvWFNBOUlGdGhXMmxkTENCaVcycGRYVnh1SUNBZ0lDQWdhaUFyUFNBeFhHNGdJQ0FnZlZ4dUlDQWdJR2tnS3owZ01WeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCeVpYTjFiSFJjYm4xY2JseHVYRzVtZFc1amRHbHZiaUI0Y0hKdlpETW9ZU3dnWWl3Z1l5a2dlMXh1SUNCcFppaGhMbXhsYm1kMGFDQTlQVDBnTUNrZ1lTQTlJRnNuSjExY2JpQWdhV1lvWWk1c1pXNW5kR2dnUFQwOUlEQXBJR0lnUFNCYkp5ZGRYRzRnSUdsbUtHTXViR1Z1WjNSb0lEMDlQU0F3S1NCaklEMGdXeWNuWFZ4dUlDQnNaWFFnYVNBOUlEQmNiaUFnYkdWMElHbHNaVzRnUFNCaExteGxibWQwYUZ4dUlDQnNaWFFnYWx4dUlDQnNaWFFnYW14bGJpQTlJR0l1YkdWdVozUm9YRzRnSUd4bGRDQnJYRzRnSUd4bGRDQnJiR1Z1SUQwZ1l5NXNaVzVuZEdoY2JpQWdiR1YwSUhKbGMzVnNkQ0E5SUZ0ZFhHNGdJSGRvYVd4bElDaHBJRHdnYVd4bGJpa2dlMXh1SUNBZ0lHb2dQU0F3WEc0Z0lDQWdkMmhwYkdVZ0tHb2dQQ0JxYkdWdUtTQjdYRzRnSUNBZ0lDQnJJRDBnTUZ4dUlDQWdJQ0FnZDJocGJHVWdLR3NnUENCcmJHVnVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGMzVnNkRnR5WlhOMWJIUXViR1Z1WjNSb1hTQTlJRnRoVzJsZExDQmlXMnBkTENCalcydGRYVnh1SUNBZ0lDQWdJQ0JySUNzOUlERmNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHb2dLejBnTVZ4dUlDQWdJSDFjYmlBZ0lDQnBJQ3M5SURGY2JpQWdmVnh1SUNCeVpYUjFjbTRnY21WemRXeDBYRzU5WEc1Y2JseHVZMjl1YzNRZ1ZHaDFiV0p1WVdsc1ZHRmliR1ZXYVdWM1ZHSnZaSGxTYjNkVWNHd2dQU0FvY205M0xDQnBaSGdwSUQwK0lHQmNiangwY2o1Y2JpQWdQSFJrUGlSN2FXUjRmVHd2ZEdRK1hHNGdJRHgwWkQ0OFpHbDJJR05zWVhOelBWd2lhbk10ZEdoMWJXSnVZV2xzZEdGaWJHVjJhV1YzTFhWd2JHOWhaRndpUGlvOEwyUnBkajQ4TDNSa1BseHVJQ0FrZTNKdmR5NXRZWEFvYmlBOVBpQmdQSFJrUGlSN2JuMDhMM1JrUG1BcGZWeHVJQ0E4ZEdRK1drZ3lPREk1Skh0cFpIZ2dQQ0F4TURBZ1B5QW5NQ2NnS3lCcFpIZ2dQQ0F4TUNBL0lDY3dNQ2NnS3lCcFpIZ2dPaUJwWkhnZ09pQnBaSGg5UEM5MFpENWNiaUFnUEhSa1BqeHBibkIxZENCMGVYQmxQVndpZEdWNGRGd2lJRzVoYldVOVhDSmlZWEpqYjJSbFhDSWdZMnhoYzNNOVhDSnpjR1ZqTFhSaFlteGxMV1pwWld4a1hDSWdMejQ4TDNSa1BseHVJQ0E4ZEdRK1BHbHVjSFYwSUhSNWNHVTlYQ0owWlhoMFhDSWdibUZ0WlQxY0luQnlhV05sWENJZ1kyeGhjM005WENKemNHVmpMWFJoWW14bExXWnBaV3hrWENJZ0x6NDhMM1JrUGx4dUlDQThkR1ErUEhOd1lXNGdZMnhoYzNNOVhDSnFjeTEwYUhWdFltNWhhV3gwWVdKc1pYWnBaWGN0WVdOMGFXOXVYQ0krNVlpZzZabWtQQzl6Y0dGdVBqd3ZkR1ErWEc0OEwzUnlQbHh1WUZ4dVhHNWpiMjV6ZENCVWFIVnRZbTVoYVd4VVlXSnNaVlpwWlhkVWFHVmhaR1Z5VUd4aFkyVm9iMnhrWlhKQ1pXWnZjbVZVY0d3Z1BTQmZJRDArSUdCY2JqeDBhQ0JqYkdGemN6MWNJbk53WldNdGRHRmliR1V0YmpGY0lqNDhMM1JvUGx4dVBIUm9JR05zWVhOelBWd2ljM0JsWXkxMFlXSnNaUzF1TWlCcWN5MTBhSFZ0WW01aGFXeDBZV0pzWlhacFpYY3RkWEJzYjJGa1hDSSs1NVdsNVp1K1BDOTBhRDVjYm1CY2JseHVZMjl1YzNRZ1ZHaDFiV0p1WVdsc1ZHRmliR1ZXYVdWM1ZHaGxZV1JsY2xCc1lXTmxhRzlzWkdWeVFXWjBaWEpVY0d3Z1BTQmZJRDArSUdCY2JqeDBhQ0JqYkdGemN6MWNJbk53WldNdGRHRmliR1V0YmpOY0lqN2xsWWJsazRIbnZKYm5vSUU4TDNSb1BseHVQSFJvSUdOc1lYTnpQVndpYzNCbFl5MTBZV0pzWlMxdU5Gd2lQdWFkb2VXOW91ZWdnVHd2ZEdnK1hHNDhkR2dnWTJ4aGMzTTlYQ0p6Y0dWakxYUmhZbXhsTFc0MVhDSSs1WlN1NUx1M1BDOTBhRDVjYmp4MGFDQmpiR0Z6Y3oxY0luTndaV010ZEdGaWJHVXRialpjSWo3bWs0M2t2Wnc4TDNSb1BseHVZRnh1WEc1amIyNXpkQ0JVYUhWdFltNWhhV3hVWVdKc1pWWnBaWGRVYUdWaFpHVnlWSEJzSUQwZ0tHaGxZV1JsY2lrZ1BUNGdZRnh1UEhSb1BpUjdhR1ZoWkdWeUlIeDhJQ2NuZlR3dmRHZytYRzVnWEc1Y2JseHVZMnhoYzNNZ1ZHaDFiV0p1WVdsc1ZHRmliR1ZXYVdWM0lIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2V5QWtaV3dzSUdSaGRHRWdmU2tnZTF4dUlDQWdJSFJvYVhNdUpHVnNJRDBnSkdWc1hHNGdJQ0FnZEdocGN5NWtZWFJoSUQwZ1pHRjBZVnh1WEc0Z0lDQWdkR2hwY3k1cGJtbDBLQ2xjYmlBZ2ZWeHVYRzRnSUdsdWFYUW9LU0I3WEc0Z0lDQWdiR1YwSUhzZ0pHVnNJSDBnUFNCMGFHbHpYRzVjYmlBZ0lDQjBhR2x6TGlSMFlXSnNaU0E5SUNSbGJDNW1hVzVrS0NjdWFuTXRkR2gxYldKdVlXbHNkR0ZpYkdWMmFXVjNMWFJoWW14bEp5bGNiaUFnSUNCMGFHbHpMaVJpYjJSNUlEMGdKR1ZzTG1acGJtUW9KeTVxY3kxMGFIVnRZbTVoYVd4MFlXSnNaWFpwWlhjdFltOWtlU2NwWEc0Z0lDQWdkR2hwY3k0a2FHVmhaR1Z5SUQwZ0pHVnNMbVpwYm1Rb0p5NXFjeTEwYUhWdFltNWhhV3gwWVdKc1pYWnBaWGN0YUdWaFpHVnlKeWxjYmx4dUlDQWdJSFJvYVhNdVpYWmxiblFvS1Z4dUlDQjlYRzVjYmlBZ2JtOXliV0ZzYVhwbFpDZ3BJSHRjYmlBZ0lDQnNaWFFnZXlCa1lYUmhJSDBnUFNCMGFHbHpYRzVjYmlBZ0lDQnNaWFFnYkdWdUlEMGdaR0YwWVM1a1lYUmhMbXhsYm1kMGFGeHVJQ0FnSUd4bGRDQnliM2R6SUQwZ1pHRjBZUzVrWVhSaExtMWhjQ2h1SUQwK0lHNHViR0ZpWld4ektWeHVJQ0FnSUd4bGRDQnVZVzFsY3lBOUlHUmhkR0V1WkdGMFlTNXRZWEFvYmlBOVBpQnVMbTVoYldVcFhHNWNiaUFnSUNCbWRXNWpkR2x2YmlCbGVIQnZjblJFWVhSaEtHNXlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0JvWldGa1pYSnpPaUJ1WVcxbGN5eGNiaUFnSUNBZ0lDQWdjbTkzY3pvZ2JuSmNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCemQybDBZMmdvYkdWdUtTQjdYRzRnSUNBZ1kyRnpaU0F4T2lCeVpYUjFjbTRnWlhod2IzSjBSR0YwWVNoNGNISnZaREV1WVhCd2JIa29iblZzYkN3Z2NtOTNjeWtwWEc0Z0lDQWdZMkZ6WlNBeU9pQnlaWFIxY200Z1pYaHdiM0owUkdGMFlTaDRjSEp2WkRJdVlYQndiSGtvYm5Wc2JDd2djbTkzY3lrcFhHNGdJQ0FnWTJGelpTQXpPaUJ5WlhSMWNtNGdaWGh3YjNKMFJHRjBZU2g0Y0hKdlpETXVZWEJ3Ykhrb2JuVnNiQ3dnY205M2N5a3BYRzRnSUNBZ1pHVm1ZWFZzZERvZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkRmNuSnZjaUJFWVhSaElFeGxibWQwYUM0bktWeHVJQ0FnSUgxY2JseHVJQ0I5WEc1Y2JpQWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lHeGxkQ0I3SUc1dmNtMWhiR2w2WldRc0lDUmliMlI1TENBa2FHVmhaR1Z5SUgwZ1BTQjBhR2x6WEc1Y2JpQWdJQ0JzWlhRZ2V5Qm9aV0ZrWlhKekxDQnliM2R6SUgwZ1BTQjBhR2x6TG01dmNtMWhiR2w2WldRb0tWeHVYRzRnSUNBZ2JHVjBJR2hsWVdSbGNpQTlJR0JjYmlSN1ZHaDFiV0p1WVdsc1ZHRmliR1ZXYVdWM1ZHaGxZV1JsY2xCc1lXTmxhRzlzWkdWeVFtVm1iM0psVkhCc0tDbDlYRzRrZTJobFlXUmxjbk11YldGd0tGUm9kVzFpYm1GcGJGUmhZbXhsVm1sbGQxUm9aV0ZrWlhKVWNHd3BMbXB2YVc0b0p5Y3BmVnh1Skh0VWFIVnRZbTVoYVd4VVlXSnNaVlpwWlhkVWFHVmhaR1Z5VUd4aFkyVm9iMnhrWlhKQlpuUmxjbFJ3YkNncGZWeHVZRnh1SUNBZ0lHeGxkQ0JpYjJSNUlEMGdjbTkzY3k1dFlYQW9WR2gxYldKdVlXbHNWR0ZpYkdWV2FXVjNWR0p2WkhsU2IzZFVjR3dwTG1wdmFXNG9KeWNwWEc1Y2JpQWdJQ0FrYUdWaFpHVnlMbWgwYld3b2FHVmhaR1Z5S1Z4dUlDQWdJQ1JpYjJSNUxtaDBiV3dvWW05a2VTbGNiaUFnZlZ4dVhHNGdJR1YyWlc1MEtDa2dlMXh1SUNBZ0lHeGxkQ0I3SUNSbGJDQjlJRDBnZEdocGMxeHVYRzRnSUNBZ0pHVnNMbTl1S0NkMGFIVnRZbTVoYVd4MFlXSnNaWFpwWlhjdVkyaGxZMnRsWkNjc0lDY3Vhbk10ZEdoMWJXSnVZV2xzZEdGaWJHVjJhV1YzTFdGamRHbHZiaWNzSUdaMWJtTjBhVzl1S0dWMmRDa2dlMXh1WEc0Z0lDQWdmU2xjYmx4dUlDQWdJQ1JsYkM1dmJpZ25kR2gxYldKdVlXbHNkR0ZpYkdWMmFXVjNMblZ3Ykc5aFpDY3NJQ2N1YW5NdGRHaDFiV0p1WVdsc2RHRmliR1YyYVdWM0xYVndiRzloWkdVbkxDQm1kVzVqZEdsdmJpaGxkblFwSUh0Y2JseHVJQ0FnSUgwcFhHNGdJSDFjYm4xY2JseHVWR2gxYldKdVlXbHNWR0ZpYkdWV2FXVjNMbTltSUQwZ1puVnVZM1JwYjI0b2IzQjBLU0I3WEc0Z0lISmxkSFZ5YmlCdVpYY2dWR2gxYldKdVlXbHNWR0ZpYkdWV2FXVjNLRzl3ZENsY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdWR2gxYldKdVlXbHNWR0ZpYkdWV2FXVjNYRzRpWFgwPVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RlbW8tc3lzL3NjcmlwdHMvdGh1bWJuYWlsdGFibGV2aWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDggMzEiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDEpKSgxMzMpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMiAxNCAxNiAxNyAxOCIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9qcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxudmFyIF9qcXVlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanF1ZXJ5KTtcblxudmFyIF9wcm9kc3BlY3ZpZXcgPSByZXF1aXJlKCcuL3NjcmlwdHMvcHJvZHNwZWN2aWV3LmpzJyk7XG5cbnZhciBfcHJvZHNwZWN2aWV3MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb2RzcGVjdmlldyk7XG5cbnZhciBfdGh1bWJuYWlsdGFibGV2aWV3ID0gcmVxdWlyZSgnLi9zY3JpcHRzL3RodW1ibmFpbHRhYmxldmlldy5qcycpO1xuXG52YXIgX3RodW1ibmFpbHRhYmxldmlldzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aHVtYm5haWx0YWJsZXZpZXcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHN2ID0gX3Byb2RzcGVjdmlldzIuZGVmYXVsdC5vZih7ICRlbDogKDAsIF9qcXVlcnkyLmRlZmF1bHQpKCcuanMtcHJvZHNwZWN2aWV3JykgfSk7XG5cbnBzdi5vbigncHJvZHNwZWN2aWV3LmV4cG9ydCcsIGZ1bmN0aW9uIChldnQsIGRhdGEpIHtcbiAgdmFyIHR0diA9IG5ldyBfdGh1bWJuYWlsdGFibGV2aWV3Mi5kZWZhdWx0KHsgJGVsOiAoMCwgX2pxdWVyeTIuZGVmYXVsdCkoJy5qcy10aHVtYm5haWx0YWJsZXZpZXcnKSwgZGF0YTogZGF0YSB9KTtcbiAgY29uc29sZS5sb2coZGF0YSwgdHR2Lm5vcm1hbGl6ZWQoKSk7XG4gIHR0di5yZW5kZXIoKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZMXhjWkdWdGJ5MXplWE5jWEdsdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3UVVGSFFTeEpRVUZKTEUxQlFVMHNkVUpCUVdFc1JVRkJZaXhEUVVGblFpeEZRVUZGTEV0QlFVc3NjMEpCUVVVc2EwSkJRVVlzUTBGQlVDeEZRVUZvUWl4RFFVRldPenRCUVVWQkxFbEJRVWtzUlVGQlNpeERRVUZQTEhGQ1FVRlFMRVZCUVRoQ0xGVkJRVk1zUjBGQlZDeEZRVUZqTEVsQlFXUXNSVUZCYjBJN1FVRkRhRVFzVFVGQlNTeE5RVUZOTEdsRFFVRjFRaXhGUVVGRkxFdEJRVXNzYzBKQlFVVXNkMEpCUVVZc1EwRkJVQ3hGUVVGdlF5eE5RVUZOTEVsQlFURkRMRVZCUVhaQ0xFTkJRVlk3UVVGRFFTeFZRVUZSTEVkQlFWSXNRMEZCV1N4SlFVRmFMRVZCUVd0Q0xFbEJRVWtzVlVGQlNpeEZRVUZzUWp0QlFVTkJMRTFCUVVrc1RVRkJTanRCUVVORUxFTkJTa1FpTENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lSam92WVhSc1lXNTBhWE1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnSkNCbWNtOXRJQ2RxY1hWbGNua25YRzVwYlhCdmNuUWdVSEp2WkZOd1pXTldhV1YzSUdaeWIyMGdKeTR2YzJOeWFYQjBjeTl3Y205a2MzQmxZM1pwWlhjdWFuTW5YRzVwYlhCdmNuUWdWR2gxYldKdVlXbHNWR0ZpYkdWV2FXVjNJR1p5YjIwZ0p5NHZjMk55YVhCMGN5OTBhSFZ0WW01aGFXeDBZV0pzWlhacFpYY3Vhbk1uWEc1Y2JseHViR1YwSUhCemRpQTlJRkJ5YjJSVGNHVmpWbWxsZHk1dlppaDdJQ1JsYkRvZ0pDZ25MbXB6TFhCeWIyUnpjR1ZqZG1sbGR5Y3BJSDBwWEc1Y2JuQnpkaTV2YmlnbmNISnZaSE53WldOMmFXVjNMbVY0Y0c5eWRDY3NJR1oxYm1OMGFXOXVLR1YyZEN3Z1pHRjBZU2tnZTF4dUlDQnNaWFFnZEhSMklEMGdibVYzSUZSb2RXMWlibUZwYkZSaFlteGxWbWxsZHloN0lDUmxiRG9nSkNnbkxtcHpMWFJvZFcxaWJtRnBiSFJoWW14bGRtbGxkeWNwTENCa1lYUmhPaUJrWVhSaElIMHBYRzRnSUdOdmJuTnZiR1V1Ykc5bktHUmhkR0VzSUhSMGRpNXViM0p0WVd4cGVtVmtLQ2twWEc0Z0lIUjBkaTV5Wlc1a1pYSW9LVnh1ZlNsY2JseHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGVtby1zeXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=index.js.map