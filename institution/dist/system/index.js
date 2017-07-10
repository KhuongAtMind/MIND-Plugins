'use strict';

System.register([], function (_export, _context) {
	"use strict";

	function configure(config) {
		config.globalResources(['./entity_institution', './institution_classes', './institution_teachers']);
	}

	_export('configure', configure);

	return {
		setters: [],
		execute: function () {}
	};
});