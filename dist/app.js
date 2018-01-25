webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-class-component v6.1.2
  * (c) 2015-2017 Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(0));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        var keys = Object.getOwnPropertyNames(vm);
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    var data = new Component();
    Component.prototype._init = originalInit;
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (process.env.NODE_ENV !== 'production') {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured'
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    'cid',
    'super',
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        if (key === 'prototype') {
            return;
        }
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        if (!hasProto) {
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        if (process.env.NODE_ENV !== 'production'
            && reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports['default'] = Component$1;
exports.createDecorator = createDecorator;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo0_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo1_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo2_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo3_js__ = __webpack_require__(11);






new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    render: function render(h) {
        return h(
            __WEBPACK_IMPORTED_MODULE_1__demo0_js__["a" /* default */],
            null,
            []
        );
    }
}).$mount(document.querySelector('#demo0'));

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    render: function render(h) {
        return h(
            __WEBPACK_IMPORTED_MODULE_2__demo1_js__["a" /* default */],
            null,
            []
        );
    }
}).$mount(document.querySelector('#demo1'));

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    render: function render(h) {
        return h(
            __WEBPACK_IMPORTED_MODULE_3__demo2_js__["a" /* default */],
            {
                attrs: { innerText: 'Yes, I am Demo2 Text' }
            },
            []
        );
    }
}).$mount(document.querySelector('#demo2'));

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    render: function render(h) {
        return h(
            __WEBPACK_IMPORTED_MODULE_4__demo3_js__["a" /* default */],
            {
                attrs: { innerText: 'Hey demo3, What is HOC?' }
            },
            []
        );
    }
}).$mount(document.querySelector('#demo3'));

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'demo0',
    render: function render(h) {
        return h(
            "div",
            { "class": "demo0" },
            ["Hello Demo0"]
        );
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_class_component__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Demo1 = __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default()(_class = function () {
    function Demo1() {
        _classCallCheck(this, Demo1);
    }

    _createClass(Demo1, [{
        key: "render",
        value: function render() {
            var h = arguments[0];

            return h(
                "div",
                { "class": "demo1" },
                ["Hello Demo1"]
            );
        }
    }]);

    return Demo1;
}()) || _class;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_class_component__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Demo2 = (_dec = __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default()({
    props: {
        innerText: String
    }
}), _dec(_class = function () {
    function Demo2() {
        _classCallCheck(this, Demo2);
    }

    _createClass(Demo2, [{
        key: "getName",
        value: function getName() {
            return "Demo2";
        }
    }, {
        key: "render",
        value: function render() {
            var h = arguments[0];

            return h(
                "div",
                { "class": "demo2" },
                [this.innerText]
            );
        }
    }]);

    return Demo2;
}()) || _class);
var Demo2Extend = (_dec2 = __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default()({
    props: {
        name: String
    }
}), _dec2(_class2 = function (_Demo) {
    _inherits(Demo2Extend, _Demo);

    function Demo2Extend() {
        _classCallCheck(this, Demo2Extend);

        return _possibleConstructorReturn(this, (Demo2Extend.__proto__ || Object.getPrototypeOf(Demo2Extend)).apply(this, arguments));
    }

    _createClass(Demo2Extend, [{
        key: "getName",


        // @override
        value: function getName() {
            return Demo2Extend.options.methods.getName.call(this) + 'Extend';
            // super.getName() + 'Extend';
        }

        // @override

    }, {
        key: "render",
        value: function render() {
            var h = arguments[0];

            // super is not supported
            var vnode = Demo2Extend.options.render.call(this, this.$createElement);

            vnode.data.class += '-extend';

            vnode.children.push(h(
                "div",
                null,
                ["Demo2Extend render content: ", this.getName()]
            ));

            return vnode;
        }
    }]);

    return Demo2Extend;
}(Demo2)) || _class2);


/* harmony default export */ __webpack_exports__["a"] = (Demo2Extend);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_class_component__);
var _dec2, _dec3, _class2;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// 反向继承 渲染劫持
var CatchError = function CatchError(errorMessage) {
    return function (WrapComponent) {
        var _dec, _class;

        return _dec = __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default()({
            name: WrapComponent.options.name + 'Controller'
        }), _dec(_class = function (_WrapComponent) {
            _inherits(NewDemo3, _WrapComponent);

            function NewDemo3() {
                _classCallCheck(this, NewDemo3);

                return _possibleConstructorReturn(this, (NewDemo3.__proto__ || Object.getPrototypeOf(NewDemo3)).apply(this, arguments));
            }

            _createClass(NewDemo3, [{
                key: 'render',
                value: function render() {
                    var h = arguments[0];

                    try {
                        return WrapComponent.options.render.call(this, this.$createElement);
                    } catch (e) {
                        return h(
                            'div',
                            { style: { color: 'red' } },
                            [errorMessage, e.message]
                        );
                    }
                }
            }]);

            return NewDemo3;
        }(WrapComponent)) || _class;
    };
};

var Demo3 = (_dec2 = CatchError('Error'), _dec3 = __WEBPACK_IMPORTED_MODULE_0_vue_class_component___default()({
    props: {
        innerText: String
    }
}), _dec2(_class2 = _dec3(_class2 = function () {
    function Demo3() {
        _classCallCheck(this, Demo3);
    }

    _createClass(Demo3, [{
        key: 'render',
        value: function render() {
            var h = arguments[0];


            // throw new Error('an error in render');

            return h(
                'div',
                { 'class': 'class3' },
                [this.innerText]
            );
        }
    }]);

    return Demo3;
}()) || _class2) || _class2);


/* harmony default export */ __webpack_exports__["a"] = (Demo3);

/***/ })
],[7]);