'use strict';

System.register(['aurelia-framework', 'aurelia-templating-resources'], function (_export, _context) {
	"use strict";

	var inject, bindable, BindingSignaler, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, InstitutionTeachers;

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
			inject = _aureliaFramework.inject;
			bindable = _aureliaFramework.bindable;
		}, function (_aureliaTemplatingResources) {
			BindingSignaler = _aureliaTemplatingResources.BindingSignaler;
		}],
		execute: function () {
			_export('InstitutionTeachers', InstitutionTeachers = (_dec = inject(BindingSignaler), _dec(_class = (_class2 = function () {
				function InstitutionTeachers(signaler) {
					_classCallCheck(this, InstitutionTeachers);

					_initDefineProp(this, 'institution', _descriptor, this);

					_initDefineProp(this, 'institutionId', _descriptor2, this);

					this.signaler = signaler;
				}

				InstitutionTeachers.prototype.activate = function activate(model) {
					this.institution = model.institution;
					this.institutionId = model.institutionId;
					this.loadTeachers();
				};

				InstitutionTeachers.prototype.institutionChanged = function institutionChanged(value) {
					this.loadTeachers();
				};

				InstitutionTeachers.prototype.institutionIdChanged = function institutionIdChanged(value) {
					this.loadTeachers();
				};

				InstitutionTeachers.prototype.loadTeachers = function loadTeachers() {
					var _this = this;

					if (this.institution && this.institutionId) {
						this.institution.load(this.institutionId).then(function () {
							_this.institution.loadRelationship('teachers', _this.institutionId).then(function () {
								_this.signaler.signal('teachers-refresh');
							});
						});
					}
				};

				return InstitutionTeachers;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'institution', [bindable], {
				enumerable: true,
				initializer: null
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'institutionId', [bindable], {
				enumerable: true,
				initializer: null
			})), _class2)) || _class));

			_export('InstitutionTeachers', InstitutionTeachers);
		}
	};
});