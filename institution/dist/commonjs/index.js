'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.configure = configure;
function configure(config) {
	config.globalResources(['./entity_institution', './institution_classes', './institution_teachers']);
}