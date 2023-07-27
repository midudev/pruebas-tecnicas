import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import bookSlice from '../../redux/booksSlice'
import { Provider, useDispatch } from "react-redux";
import { store } from "../../redux/store";
import Card from "./Card";
import Book from "../../data";
import { vitest, vi } from "vitest";


describe("first test", () => {
    test("renders a card component", () => {
        render(
            <Provider store={store}>
                <Card
                    title="title"
                    synopsis="synopsis"
                    isbn="isbn"
                    cover="cover"
                    readings="readings"
                    isReading="isReading"
                />
            </Provider>
        );
        expect(screen.getByText("title")).toBeDefined();
    });

    // test("renders a card component with a cover image", () => { 
    //     const { actions, reducer } = bookSlice;

    //     const addToReadingSpy = vi.fn();

    //     const mocks = vi.hoisted(() => {
    //         return {
    //             addToReadingSpy,
    //         };
    //     });

    //     addToReadingSpy.mockImplementationOnce(() => ({
    //         type: "books/addToReading",
    //         payload: Book.getById(isbn),
    //     }));

    //     vi.mock("../../redux/booksSlice", () => {
    //         return {
    //             ...mocks,
    //             default: {
    //                 ...actions,
    //                 addToReading: mocks.addToReadingSpy,
    //             },
    //         };
    //     });
    //     const isbn = "1234567890";
    //     const cover = "cover.jpg";
    //     const title = "Test Title";
    //     const synopsis = "Test Synopsis";
    //     const isReading = false;

    //     render(
    //         <Provider store={store}>
    //             <Card
    //                 cover={cover}
    //                 isbn={isbn}
    //                 title={title}
    //                 synopsis={synopsis}
    //                 isReading={isReading}
    //                 dispatch={dispatch}
    //             />
    //         </Provider>
    //     );
    //     const cardElement = screen.getByText("Test Title", { selector: ".card-title" });
    //     userEvent.click(cardElement);
    //     expect(addToReading).toHaveBeenCalledWith("isbn");
    // })
});

