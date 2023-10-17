import { render } from "@testing-library/react";
import { ErrorScreen } from "../../../Layout/ErrorScreen";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => jest.fn(),
}));

test("renders correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <ErrorScreen/>
    </BrowserRouter>,
  );
  expect(container).toMatchSnapshot();
});
