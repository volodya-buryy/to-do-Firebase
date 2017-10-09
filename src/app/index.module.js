
import config from './index.config';
import run from './index.run';

import uiRouter from '@uirouter/angularjs';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import * as firebase from 'firebase';
import angularfire from 'angularfire';

const App = angular.module("TO_DO", [
		// plugins
		uiRouter,
		"ngCookies", 
		"ngTouch", 
		"ngSanitize", 
		"ngAria",

		// core
		coreModule.name,

		// components
		indexComponents.name,

		// routes
		indexRoutes.name,

		// pages
		mainModule.name,

		"firebase",

	]
);

App
  .config(config)
  .run(run);



export default App;
