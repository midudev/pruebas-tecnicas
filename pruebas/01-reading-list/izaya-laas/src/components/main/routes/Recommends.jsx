import { localPathname } from '../../../utils/localPathname';
import { currentPath } from '../../../signals/store';

const Recommends = () => {
  currentPath.value = localPathname();

  return <div>Recommends</div>;
};

export default Recommends;
