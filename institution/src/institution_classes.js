import {inject, bindable} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(BindingSignaler)
export class InstitutionClasses {
	@bindable institution;
	@bindable institutionId;
	constructor (signaler) {
		this.signaler = signaler;
	}

	activate (model) {
		this.institution = model.institution;
		this.institutionId = model.institutionId;
		this.loadClasses();
	}

	institutionChanged (value) {
		this.loadClasses();
	}

	institutionIdChanged (value) {
		this.loadClasses();
	}

	loadClasses () {
		if (this.institution && this.institutionId) {
			this.institution.load(this.institutionId).then(
				() => {
					this.institution.loadRelationship('classes', this.institutionId).then(
						() => {
							this.signaler.signal('classes-refresh');
						}
					);
				}
			);
		}
	}
}
