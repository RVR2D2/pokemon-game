import s from './header.module.css'
import cn from 'classnames'

const Header = ({title, descr, onClickButton}) => {
	
	const handleClick = () => {
		console.log('<Header/>')
		onClickButton && onClickButton('game')
	}
	
	return (
		<header className={cn(s.root)}>
			<div className={cn(s.forest)}></div>
			<div className={cn(s.container)}>
				{title && <h1>{title}</h1>}
				{descr && <p>{descr}</p>}
				<button onClick={handleClick}>Start game</button>
			</div>
		</header>
	);
};

export default Header;
