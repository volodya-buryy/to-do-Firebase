/*global NODE_ENV*/
'use strict';
import * as firebase from 'firebase';

function config($logProvider, $compileProvider) {
	'ngInject';

    $logProvider.debugEnabled(true);

    if (NODE_ENV === 'production') {
        $logProvider.debugEnabled(false);
        $compileProvider.debugInfoEnabled(false);
    }
    //Initialize Firebase
    console.log(firebase)
    firebase.initializeApp({
        apiKey: "AIzaSyAso8HzCfARYRMkqobiUoPY-VDIBO3ZANg",
        authDomain: "to-do-75c3c.firebaseapp.com",
        databaseURL: "https://to-do-75c3c.firebaseio.com",
        projectId: "to-do-75c3c",
        storageBucket: "",
        messagingSenderId: "541054476385"
    });

  
}

export default config;
