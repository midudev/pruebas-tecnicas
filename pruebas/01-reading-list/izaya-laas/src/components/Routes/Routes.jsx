import AllBooks from './AllBooks';
import MyBooks from './MyBooks';
import Recommends from './Recommends';
import Sandbox from './Sandbox';

import { Router, Route } from 'wouter';
const Pages = () => {
	return (
		<Router>
			<Route path="/" component={AllBooks} />
			<Route path="/sandbox" component={Sandbox} />
			<Route path="/my-books" component={MyBooks} />
			<Route path="/recommends" component={Recommends} />
		</Router>
	);
};

export default Pages;
