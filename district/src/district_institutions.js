
import {inject, bindable} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(BindingSignaler)
export class DistrictInstitutions {
	@bindable district;
	@bindable districtId;
	constructor (signaler) {
		this.signaler = signaler;
	}

	districtChanged (value) {
		this.loadDistrict();
	}

	districtIdChanged (value) {
		this.loadDistrict();
	}

	activate (model) {
		this.district = model.district;
		this.districtId = model.districtId;
		this.loadDistrict();
	}

	loadDistrict () {
		if (this.districtId && this.district) {
			this.district.load(this.districtId).then(
				() => {
					this.district.loadRelationship('institutions', this.districtId).then(
						() => {
							this.signaler.signal('institutions-refresh');
						}
					);
				}
			);
		}
	}
}
