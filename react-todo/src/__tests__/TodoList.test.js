import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList.jsx";

describe("TodoList", () => {
  test("renders initial demo todos", () => {
    render(<TodoList />);

    const list = screen.getByLabelText("Todo items");
    expect(list).toBeInTheDocument();

    expect(screen.getByText("Learn React Testing Library")).toBeInTheDocument();
    expect(screen.getByText("Write Jest tests")).toBeInTheDocument();
    expect(screen.getByText("Ship the ALX task")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByLabelText("New todo");
    await user.type(input, "New item");
    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(screen.getByText("New item")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);

    const item = screen.getByText("Learn React Testing Library");
    // click the button that contains the item text
    fireEvent.click(item.closest("button"));

    expect(item).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const target = screen.getByText("Ship the ALX task");
    // Find its delete button via aria label (id depends on initialTodos; third item is id 3)
    const deleteBtn = screen.getByLabelText("delete-3");
    await user.click(deleteBtn);

    expect(target).not.toBeInTheDocument();
  });
});
