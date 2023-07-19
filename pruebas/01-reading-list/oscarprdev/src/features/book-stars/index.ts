import { stateInfra, stateRepository } from "../../core/store/app-state-store";
import { BookStarsUsecase } from "./application/book-stars.usecase";
import { BookStarsRepository } from "./repository/book-stars.repository";

const booksStarsRepository = new BookStarsRepository(stateInfra)
export const booksStarsUsecase = new BookStarsUsecase(stateRepository, booksStarsRepository)