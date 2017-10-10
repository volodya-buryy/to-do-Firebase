'use strict';
import * as firebase from 'firebase';

class toDoFirebaseStoreService {
    constructor($firebaseArray) {

        let rootRef = firebase.database().ref().child("angular");
        let ref = rootRef.child('obj');

        this.toDoList = $firebaseArray(ref);
    }
    getList(){
        return this.toDoList;
    }

    setItemToList(item){
        this.toDoList.$add({
            todo: item
        })
    }

    completed(item){
        item.done = true;
		this.toDoList.$save(item);
    }

    remove(item){
        this.toDoList.$remove(item);
    }

    removeComplete(item){
        item.done = false;
		this.toDoList.$save(item);
    }
}
toDoFirebaseStoreService.$inject = ['$firebaseArray'];
export default toDoFirebaseStoreService