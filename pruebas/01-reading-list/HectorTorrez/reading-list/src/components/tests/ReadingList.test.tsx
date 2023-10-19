import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ReadingList } from "../ReadingList";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("ReadingList", () => {
  test("should render a book", () => {
    render(
      <Provider store={store}>
        <ReadingList
          title="The Lord of the Rings"
          pages={1000}
          genre="Fantasy"
          cover="https://images-na.ssl-images-amazon.com/images/I/51ZQqFj7PZL._SX331_BO1,204,203,200_.jpg"
          year={1954}
          ISBN="9780618640157"
          author={{ name: "J. R. R. Tolkien", otherBooks: ["The Hobbit"] }}
          synopsis="The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work."
        />
      </Provider>
    );

    expect(ReadingList).toBeDefined();
  });
});
