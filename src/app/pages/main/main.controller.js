'use strict';
import  _ from 'lodash/core';
import angularLogo from '_images/angular.png';
import * as firebase from 'firebase';

function MainController($log, $firebaseArray, toDoFirebaseStoreService) {
	'ngInject';

	this.toDoList = toDoFirebaseStoreService.getList();
	console.log(this.toDoList)

	this.pushToList = item => {
		toDoFirebaseStoreService.setItemToList(item);
		this.toDo = null;
	}

	this.remove = item => {
		toDoFirebaseStoreService.remove(item);
	}

	this.completed = item => {
		toDoFirebaseStoreService.completed(item);
	}

	this.removeComplete = item => {
		toDoFirebaseStoreService.removeComplete(item);
	}

}

export default MainController;
