import {useState} from 'react'
import cn from 'classnames'
import s from './pokemonCard.module.css'
import cardBackSide from './assets/card-back-side.jpeg'

const PokemonCard = ({name, img, id, type, values}) => {
	const [isActive, setActive] = useState(false)
	
	const handleClick = () => {
		setActive(!isActive)
	}
	
	return (
		<div className={s.root} onClick={handleClick}>
			<div className={cn(s.pokemonCard, {[s.active]: isActive})}>
				<div className={cn(s.cardFront)}>
					<div className={cn(s.wrap, s.front)}>
						<div className={cn(s.pokemon, s[type])}>
							<div className={cn(s.values)}>
								<div className={cn(s.count, s.top)}>{values.top}</div>
								<div className={cn(s.count, s.right)}>{values.right}</div>
								<div className={cn(s.count, s.bottom)}>{values.bottom}</div>
								<div className={cn(s.count, s.left)}>{values.left}</div>
							</div>
							<div className={cn(s.imgContainer)}>
								<img src={img} alt={name}/>
							</div>
							<div className={cn(s.info)}>
								<span className={cn(s.number)}>#{id}</span>
								<h3 className={cn(s.name)}>{name}</h3>
								<small className={cn(s.type)}>Type: <span>{type}</span></small>
							</div>
						</div>
					</div>
				</div>
				
				<div className={cn(s.cardBack)}>
					<div className={cn(s.wrap, s.back)}>
						<img src={cardBackSide} alt="Сard Backed"/>
					</div>
				</div>
			
			</div>
		</div>
	);
};

export default PokemonCard;

