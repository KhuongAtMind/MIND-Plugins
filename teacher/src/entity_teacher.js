import {bindable} from 'aurelia-framework';

export class EntityTeacher {
	@bindable teacher;
	@bindable teacherId;

	activate (model) {
		this.teacher = model.teacher;
		this.teacherId = model.teacherId;
		this.loadTeacher();
	}

	teacherChanged (value) {
		//this.loadTeacher();
	}

	teacherIdChanged (value) {
		//this.loadTeacher();
	}

	loadTeacher () {
		if (this.teacher && this.teacherId) {
			this.teacher.load(this.teacherId).then(
				() => {}
			);
		}
	}
}
