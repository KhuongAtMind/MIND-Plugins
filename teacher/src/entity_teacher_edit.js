import {inject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class EntityTeacherEdit {
	@bindable teacher;
	@bindable teacherId;
	constructor (router) {
		this.router = router;
	}

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

	saveNewValue () {
		this.teacher.commit().then(
			() => {
				this.router.navigateBack();
			}
		);
	}
}
