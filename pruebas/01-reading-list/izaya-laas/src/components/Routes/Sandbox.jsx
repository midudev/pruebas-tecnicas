import { currentPath } from '../../signals/store';

const Sandbox = () => {
	currentPath.value = '/sandbox';

	return <div>Sandbox</div>;
};

export default Sandbox;
