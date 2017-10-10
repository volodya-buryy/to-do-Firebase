'use strict';

const shared = angular.module('core.shared', []);

import toDoFirebaseStoreService from'./services/to-do-firebase.service.js'

shared.service('toDoFirebaseStoreService',  toDoFirebaseStoreService)

export default shared;
