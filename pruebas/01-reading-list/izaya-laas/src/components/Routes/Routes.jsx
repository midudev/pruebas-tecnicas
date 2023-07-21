import { Router, Route } from 'wouter';
import { ROUTES } from './routes';
const Pages = () => {
	return (
		<Router>
			{ROUTES.map(({ pathname, component }) => {
				return <Route path={pathname} component={component} />;
			})}
		</Router>
	);
};

export default Pages;
