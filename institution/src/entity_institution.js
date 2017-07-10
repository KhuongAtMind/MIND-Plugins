import {bindable} from 'aurelia-framework';

export class EntityInstitution {
	@bindable institution;
	@bindable institutionId;

	activate (model) {
		this.institution = model.institution;
		this.institutionId = model.institutionId;
		this.loadInstitution();
	}

	institutionChanged (value) {
		this.loadInstitution();
	}

	institutionIdChanged (value) {
		this.loadInstitution();
	}

	loadInstitution () {
		if (this.institution && this.institutionId) {
			this.institution.load(this.institutionId).then(
				() => {}
			);
		}
	}
}
