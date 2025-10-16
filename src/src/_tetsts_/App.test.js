import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the ShoppingList app without crashing", () => {
  render(<App />);
  // Adjust this line depending on what appears in your App component
  // For example, if your App has a <h1>Shopping List</h1>:
  expect(screen.getByText(/shopping list/i)).toBeInTheDocument();
});
