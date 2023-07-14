import { DefaultStateInfra } from './infra/state.infra';
import books from '../../../../books.json';
import { StateRepository } from './repository/state.repository';
import { StateUsecase } from './application/state.usecase';

const stateInfra = new DefaultStateInfra(books);
const stateRepository = new StateRepository(stateInfra);
export const stateUseCase = new StateUsecase(stateRepository);
