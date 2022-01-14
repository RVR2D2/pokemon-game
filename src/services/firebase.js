import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCZGKiAqbnZ8aaqv41ClHapEiWE3hx47xU",
	authDomain: "pokemon-game-application.firebaseapp.com",
	databaseURL: "https://pokemon-game-application-default-rtdb.firebaseio.com",
	projectId: "pokemon-game-application",
	storageBucket: "pokemon-game-application.appspot.com",
	messagingSenderId: "673044848547",
	appId: "1:673044848547:web:49f8013827d7311847c416"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;