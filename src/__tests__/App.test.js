import "@testing-library/jest-dom"; // ✅ this line enables toBeInTheDocument()
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the ShoppingList and Header components", () => {
  render(<App />);

  // Checks for text from your Header (usually includes 'Dark Mode' or 'Light Mode')
  const headerButton = screen.getByRole("button", {
    name: /dark mode|light mode/i,
  });
  expect(headerButton).toBeInTheDocument();

  // Checks for ShoppingList content
  const shoppingListElement = screen.getByText(/add to list/i);
  expect(shoppingListElement).toBeInTheDocument();
});
