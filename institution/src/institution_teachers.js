import {inject, bindable} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';

@inject(BindingSignaler)
export class InstitutionTeachers {
	@bindable institution;
	@bindable institutionId;
	constructor (signaler) {
		this.signaler = signaler;
	}

	activate (model) {
		this.institution = model.institution;
		this.institutionId = model.institutionId;
		this.loadTeachers();
	}

	institutionChanged (value) {
		this.loadTeachers();
	}

	institutionIdChanged (value) {
		this.loadTeachers();
	}

	loadTeachers () {
		if (this.institution && this.institutionId) {
			this.institution.load(this.institutionId).then(
				() => {
					this.institution.loadRelationship('teachers', this.institutionId).then(
						() => {
							this.signaler.signal('teachers-refresh');
						}
					);
				}
			);
		}
	}
}
