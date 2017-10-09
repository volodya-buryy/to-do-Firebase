'use strict';
import  _ from 'lodash/core';
import angularLogo from '_images/angular.png';
import * as firebase from 'firebase';

function MainController($log, $firebaseArray) {
	'ngInject';

	$log.debug('Hello from main controller!');
	this.lodash_version = _.VERSION;
	this.angularLogo = angularLogo;
	let rootRef = firebase.database().ref().child("angular");

	let ref = rootRef.child('obj') 
	this.mes = $firebaseArray(ref);

	this.toDoList = [];

	this.pushToList = function(item){
		this.mes.$add({
			todo: item
		})
		this.toDoList.push(item);

	}

}

export default MainController;
