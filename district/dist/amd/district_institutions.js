define(['exports', 'aurelia-framework', 'aurelia-templating-resources'], function (exports, _aureliaFramework, _aureliaTemplatingResources) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DistrictInstitutions = undefined;

	function _initDefineProp(target, property, descriptor, context) {
		if (!descriptor) return;
		Object.defineProperty(target, property, {
			enumerable: descriptor.enumerable,
			configurable: descriptor.configurable,
			writable: descriptor.writable,
			value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
		});
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

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

	var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

	var DistrictInstitutions = exports.DistrictInstitutions = (_dec = (0, _aureliaFramework.inject)(_aureliaTemplatingResources.BindingSignaler), _dec(_class = (_class2 = function () {
		function DistrictInstitutions(signaler) {
			_classCallCheck(this, DistrictInstitutions);

			_initDefineProp(this, 'district', _descriptor, this);

			_initDefineProp(this, 'districtId', _descriptor2, this);

			this.signaler = signaler;
		}

		DistrictInstitutions.prototype.districtChanged = function districtChanged(value) {
			this.loadDistrict();
		};

		DistrictInstitutions.prototype.districtIdChanged = function districtIdChanged(value) {
			this.loadDistrict();
		};

		DistrictInstitutions.prototype.activate = function activate(model) {
			this.district = model.district;
			this.districtId = model.districtId;
			this.loadDistrict();
		};

		DistrictInstitutions.prototype.loadDistrict = function loadDistrict() {
			var _this = this;

			console.log('load district');
			if (this.districtId && this.district) {
				this.district.load(this.districtId).then(function () {
					_this.district.loadRelationship('institutions', _this.districtId).then(function () {
						_this.signaler.signal('institutions-refresh');
					});
				});
			}
		};

		return DistrictInstitutions;
	}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'district', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'districtId', [_aureliaFramework.bindable], {
		enumerable: true,
		initializer: null
	})), _class2)) || _class);
});