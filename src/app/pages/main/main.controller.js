'use strict';

function MainController($log, toDoFirebaseStoreService) {
	'ngInject';

	this.toDoList = toDoFirebaseStoreService.getList();

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
