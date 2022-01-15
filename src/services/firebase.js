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

class Firebase {
	constructor() {
		this.fire = firebase;
		this.database = this.fire.database();
	}
	
	getPokemonSoket = (cb) => {
		this.database.ref('pokemons').on('value', (snapshot) => {
			cb(snapshot.val());
		})
	};
	
	getPokemonsOnce = async () => {
		return await this.database
			.ref('pokemons')
			.once('value')
			.then(snapshot => snapshot.val());
	}
	
	postPokemon = (key, pokemon) => {
		this.database.ref(`pokemon/${key}`).set(pokemon);
	};
	
	addPokemon = (data, cb) => {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database.ref('pokemons/' + newKey)
			.set(data)
			.then(() => cb());
	};
}


export default Firebase;