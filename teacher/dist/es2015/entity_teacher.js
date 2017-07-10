var _desc, _value, _class, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
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

import { bindable } from 'aurelia-framework';

export let EntityTeacher = (_class = class EntityTeacher {
	constructor() {
		_initDefineProp(this, 'teacher', _descriptor, this);

		_initDefineProp(this, 'teacherId', _descriptor2, this);
	}

	activate(model) {
		this.teacher = model.teacher;
		this.teacherId = model.teacherId;
		this.loadTeacher();
	}

	teacherChanged(value) {}

	teacherIdChanged(value) {}

	loadTeacher() {
		if (this.teacher && this.teacherId) {
			this.teacher.load(this.teacherId).then(() => {});
		}
	}
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'teacher', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'teacherId', [bindable], {
	enumerable: true,
	initializer: null
})), _class);