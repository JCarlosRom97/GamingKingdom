import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideMenu from "../../../Layout/SideMenu";
import { BrowserRouter as Router } from "react-router-dom";
test("renders correctly", () => {
  const { container } = render(
    <Router>
      <SideMenu />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});

test("check links", () => {
  render(
    <Router>
      <SideMenu />
    </Router>,
  );
  const gamingKingdom = screen.getByText("Gaming Kingdom");

  expect(gamingKingdom.textContent).toBe("Gaming Kingdom");

  fireEvent(
    gamingKingdom,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );

  const homeButton = screen.getByText("Home");

  expect(homeButton.textContent).toBe("Home");

  fireEvent(
    homeButton,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    }),
  );
});
