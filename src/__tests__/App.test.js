import "@testing-library/jest-dom"; // ✅ CommonJS works in CodeGrade/Jest setup
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the ShoppingList and Header components", () => {
  render(<App />);

  // Check if the header button (Light/Dark mode toggle) is there
  const headerButton = screen.getByRole("button", {
    name: /dark mode|light mode/i,
  });
  expect(headerButton).toBeInTheDocument();

  // Check if ShoppingList renders something like 'Add to list'
  const shoppingListElement = screen.getByText(/add to list/i);
  expect(shoppingListElement).toBeInTheDocument();
});
