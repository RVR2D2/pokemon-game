import {useState, useEffect, useContext} from 'react';
import PokemonCard from "../../components/PokemonCard";
import {FireBaseContext} from "../../context/firebaseContext";

const DATA = {
	"abilities": [
		"keen-eye",
		"tangled-feet",
		"big-pecks"
	],
	"stats": {
		"hp": 63,
		"attack": 60,
		"defense": 55,
		"special-attack": 50,
		"special-defense": 50,
		"speed": 71
	},
	"type": "flying",
	"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
	"name": "pidgeotto",
	"base_experience": 122,
	"height": 11,
	"id": 17,
	"values": {
		"top": "A",
		"right": 2,
		"bottom": 7,
		"left": 5
	}
}

const GamePage = ({}) => {
	const firebase = useContext(FireBaseContext);
	const [pokemons, setPokemons] = useState({})
	
	useEffect(() => {
		firebase.getPokemonSoket((pokemons) => {
			setPokemons(pokemons);
		});
	}, [])
	
	const handleChangeActive = (id) => {
		setPokemons(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = {...item[1]};
				if (pokemon.id === id) {
					pokemon.active = !pokemon.active
				}
				
				acc[item[0]] = pokemon;
				firebase.postPokemon(item[0], pokemon);
				return acc;
			}, {});
		});
	};
	
	const handleAddPokemon = () => {
		const data = DATA;
		firebase.addPokemon(data);
	};
	
	return (
		<>
			<div>
				This is game page!
				<div>
					<button onClick={handleAddPokemon}>Add new Pokemons</button>
				</div>
				<div className='flex'>
					{Object.entries(pokemons).map(([key, {name, id, img, type, values, active}]) => (
						<PokemonCard
							key={key}
							name={name}
							img={img}
							id={id}
							type={type}
							isActive={active}
							onClickCard={handleChangeActive}
							values={values}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default GamePage;
