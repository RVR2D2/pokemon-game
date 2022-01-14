import {useHistory} from "react-router-dom";
import {useState, useEffect} from 'react'
import PokemonCard from "../../components/PokemonCard";
import database from "../../services/firebase"

const GamePage = () => {
	const history = useHistory()
	const [pokemons, setPokemons] = useState({})
	const handleClick = () => {
		history.push('/');
	}
	
	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, [])
	
	const handleChangeActive = (id) => {
		setPokemons(prevState => {
			return Array.from(prevState, (item) => {
				if (item.id === id) {
					item.active = true;
				}
				return item;
			})
		})
	}
	
	return (
		<>
			<div>
				This is game page!
				<div className='flex'>
					{Object.entries(pokemons).map(([key,{name, id, img, type, values, active}]) => (
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
			<button onClick={handleClick}>Home</button>
		</>
	);
};

export default GamePage;
