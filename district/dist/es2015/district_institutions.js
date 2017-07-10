var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

import { inject, bindable } from 'aurelia-framework';
import { BindingSignaler } from 'aurelia-templating-resources';

export let DistrictInstitutions = (_dec = inject(BindingSignaler), _dec(_class = (_class2 = class DistrictInstitutions {
	constructor(signaler) {
		_initDefineProp(this, 'district', _descriptor, this);

		_initDefineProp(this, 'districtId', _descriptor2, this);

		this.signaler = signaler;
	}

	districtChanged(value) {
		this.loadDistrict();
	}

	districtIdChanged(value) {
		this.loadDistrict();
	}

	activate(model) {
		this.district = model.district;
		this.districtId = model.districtId;
		this.loadDistrict();
	}

	loadDistrict() {
		console.log('load district');
		if (this.districtId && this.district) {
			this.district.load(this.districtId).then(() => {
				this.district.loadRelationship('institutions', this.districtId).then(() => {
					this.signaler.signal('institutions-refresh');
				});
			});
		}
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'district', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'districtId', [bindable], {
	enumerable: true,
	initializer: null
})), _class2)) || _class);