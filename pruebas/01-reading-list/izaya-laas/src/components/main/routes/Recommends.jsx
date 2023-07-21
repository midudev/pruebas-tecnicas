import { currentPath } from '../../../signals/store';

const Recommends = () => {
	currentPath.value = '/recommends';

	return <div>Recommends</div>;
};

export default Recommends;
