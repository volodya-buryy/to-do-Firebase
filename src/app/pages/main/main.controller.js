'use strict';
import  _ from 'lodash/core';
import angularLogo from '_images/angular.png';
import * as firebase from 'firebase';

function MainController($log, $firebaseArray) {
	'ngInject';

	let rootRef = firebase.database().ref().child("angular");
	let ref = rootRef.child('obj');

	this.toDoList = $firebaseArray(ref);

	this.pushToList = item => {
		this.toDoList.$add({
			todo: item
		})
		this.toDo = null;
	}

	this.remove = item => {
		this.toDoList.$remove(item);
	}

	this.completed = item => {
		item.done = true;
		this.toDoList.$save(item);
	}

	this.removeComplete = item => {
		item.done = false;
		this.toDoList.$save(item);
	}

}

export default MainController;
