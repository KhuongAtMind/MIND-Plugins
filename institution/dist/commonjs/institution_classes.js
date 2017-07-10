'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InstitutionClasses = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _aureliaFramework = require('aurelia-framework');

var _aureliaTemplatingResources = require('aurelia-templating-resources');

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var InstitutionClasses = exports.InstitutionClasses = (_dec = (0, _aureliaFramework.inject)(_aureliaTemplatingResources.BindingSignaler), _dec(_class = (_class2 = function () {
	function InstitutionClasses(signaler) {
		_classCallCheck(this, InstitutionClasses);

		_initDefineProp(this, 'institution', _descriptor, this);

		_initDefineProp(this, 'institutionId', _descriptor2, this);

		this.signaler = signaler;
	}

	InstitutionClasses.prototype.activate = function activate(model) {
		this.institution = model.institution;
		this.institutionId = model.institutionId;
		this.loadClasses();
	};

	InstitutionClasses.prototype.institutionChanged = function institutionChanged(value) {
		this.loadClasses();
	};

	InstitutionClasses.prototype.institutionIdChanged = function institutionIdChanged(value) {
		this.loadClasses();
	};

	InstitutionClasses.prototype.loadClasses = function loadClasses() {
		var _this = this;

		if (this.institution && this.institutionId) {
			this.institution.load(this.institutionId).then(function () {
				_this.institution.loadRelationship('classes', _this.institutionId).then(function () {
					_this.signaler.signal('classes-refresh');
				});
			});
		}
	};

	return InstitutionClasses;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'institution', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'institutionId', [_aureliaFramework.bindable], {
	enumerable: true,
	initializer: null
})), _class2)) || _class);