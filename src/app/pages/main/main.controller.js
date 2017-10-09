'use strict';
import  _ from 'lodash/core';
import angularLogo from '_images/angular.png';

function MainController($log) {
	'ngInject';

	$log.debug('Hello from main controller!');
	this.lodash_version = _.VERSION;
	this.angularLogo = angularLogo;

	this.toDoList = [];

	this.pushToList = function(item){
		this.toDoList.push(item);
	}

}

export default MainController;
