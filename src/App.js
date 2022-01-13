import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import cn from 'classnames'
import s from './style.module.css'
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFound from "./routes/404";

const App = () => {
	const math = useRouteMatch('/')
	
	return (
		<Switch>
			<Route path='/404' component={NotFound}/>
			<Route>
				<>
					<MenuHeader bgActive={!math.isExact}/>
					<div className={cn(s.wrap, {
						[s.isHomePage]: math.isExact
					})}>
						<Switch>
							<Route path="/" exact component={HomePage}/>
							<Route path="/home" component={HomePage}/>
							<Route path="/game" component={GamePage}/>
							<Route path="/about" component={AboutPage}/>
							<Route path="/contact" component={ContactPage}/>
							<Route render={() => (
								<Redirect to='/404'/>
							)}/>
						</Switch>
					</div>
					
					<Footer/>
				</>
			</Route>
		</Switch>
	)
};

export default App;
