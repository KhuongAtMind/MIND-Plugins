'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
	"use strict";

	var bindable, _desc, _value, _class, _descriptor, _descriptor2, EntityInstitution;

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

	return {
		setters: [function (_aureliaFramework) {
			bindable = _aureliaFramework.bindable;
		}],
		execute: function () {
			_export('EntityInstitution', EntityInstitution = (_class = function () {
				function EntityInstitution() {
					_classCallCheck(this, EntityInstitution);

					_initDefineProp(this, 'institution', _descriptor, this);

					_initDefineProp(this, 'institutionId', _descriptor2, this);
				}

				EntityInstitution.prototype.activate = function activate(model) {
					this.institution = model.institution;
					this.institutionId = model.institutionId;
					this.loadInstitution();
				};

				EntityInstitution.prototype.institutionChanged = function institutionChanged(value) {
					this.loadInstitution();
				};

				EntityInstitution.prototype.institutionIdChanged = function institutionIdChanged(value) {
					this.loadInstitution();
				};

				EntityInstitution.prototype.loadInstitution = function loadInstitution() {
					if (this.institution && this.institutionId) {
						this.institution.load(this.institutionId).then(function () {});
					}
				};

				return EntityInstitution;
			}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'institution', [bindable], {
				enumerable: true,
				initializer: null
			}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'institutionId', [bindable], {
				enumerable: true,
				initializer: null
			})), _class));

			_export('EntityInstitution', EntityInstitution);
		}
	};
});