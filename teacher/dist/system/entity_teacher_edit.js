'use strict';

System.register(['aurelia-framework', 'aurelia-router'], function (_export, _context) {
	"use strict";

	var inject, bindable, Router, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, EntityTeacherEdit;

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
		}, function (_aureliaRouter) {
			Router = _aureliaRouter.Router;
		}],
		execute: function () {
			_export('EntityTeacherEdit', EntityTeacherEdit = (_dec = inject(Router), _dec(_class = (_class2 = function () {
				function EntityTeacherEdit(router) {
					_classCallCheck(this, EntityTeacherEdit);

					_initDefineProp(this, 'teacher', _descriptor, this);

					_initDefineProp(this, 'teacherId', _descriptor2, this);

					this.router = router;
				}

				EntityTeacherEdit.prototype.activate = function activate(model) {
					this.teacher = model.teacher;
					this.teacherId = model.teacherId;
					this.loadTeacher();
				};

				EntityTeacherEdit.prototype.teacherChanged = function teacherChanged(value) {};

				EntityTeacherEdit.prototype.teacherIdChanged = function teacherIdChanged(value) {};

				EntityTeacherEdit.prototype.loadTeacher = function loadTeacher() {
					if (this.teacher && this.teacherId) {
						this.teacher.load(this.teacherId).then(function () {});
					}
				};

				EntityTeacherEdit.prototype.saveNewValue = function saveNewValue() {
					var _this = this;

					this.teacher.commit().then(function () {
						_this.router.navigateBack();
					});
				};

				return EntityTeacherEdit;
			}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'teacher', [bindable], {
				enumerable: true,
				initializer: null
			}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'teacherId', [bindable], {
				enumerable: true,
				initializer: null
			})), _class2)) || _class));

			_export('EntityTeacherEdit', EntityTeacherEdit);
		}
	};
});