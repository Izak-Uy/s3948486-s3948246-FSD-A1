import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "./Login";
import { checkEmailExists, verifyLogin, loginUserDB } from "../data/repository";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { act } from "react-dom/test-utils";

// Mock repository functions
jest.mock("../data/repository", () => {
  const originalModule = jest.requireActual("../data/repository");

  return {
    ...originalModule,
    checkEmailExists: jest.fn(),
    verifyLogin: jest.fn(),
    loginUserDB: jest.fn(),
  };
});

jest.mock("react", () => {
  const originalModule = jest.requireActual("react");

  return {
    ...originalModule,
    useContext: jest.fn(),
  };
});

// Mock useNavigate
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

const mockLoginUser = jest.fn();
const mockSetUser = jest.fn();
useContext.mockReturnValue([null, mockSetUser, mockLoginUser, null]);

verifyLogin.mockImplementation((email, password) => {
  return (email === "email@email.email" && password === "Password1#");
});

let container;
let emailInput;
let passwordInput;
let submitButton;

// Note: tests will fail if form components don't render since they are searched for in the beforeEach.
beforeEach(() => {
  act(() => {
    const utils = render(<Login />);
    container = utils.container;
  });
  emailInput = screen.getByPlaceholderText("Enter email");
  passwordInput = screen.getByPlaceholderText("Enter password");
  submitButton = screen.getByRole("button", { name: "Submit" });
});

afterEach(() => {
  jest.clearAllMocks();
});

// Testing to check client-side validation. 2 errors should show if both fields are empty.
test("no inputs show errors", () => {
  act(() => {
    fireEvent.click(submitButton);
  });

  waitFor(() => {
    expect(screen.getByText("Email address is required")).toBeTruthy();
    expect(screen.getByText("Password is required")).toBeTruthy();
  });
});

// Testing to check client-side validation. If valid email and password is entered, no errors should show.
// ValidateLogin function with API call is mocked to test email and password against a hard coded user login.
test("valid email and password shows no errors", async () => {
  checkEmailExists.mockResolvedValue(true);
  loginUserDB.mockResolvedValue({
    user_id: 1,
  });
  useNavigate.mockReturnValue(() => jest.fn());

  fireEvent.change(emailInput, { target: { value: "email@email.email" } });
  fireEvent.change(passwordInput, { target: { value: "Password1#" } });

  act(() => {
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(loginUserDB).toHaveBeenCalledTimes(1);
    expect(loginUserDB).toHaveBeenCalledWith(
      "email@email.email",
      "Password1#"
    );
    expect(mockLoginUser).toHaveBeenCalledTimes(1);
    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(useNavigate).toHaveBeenCalled();
  });

});

// Testing to check client-side validation. If invalid email and password is entered, errors should show.
// ValidateLogin function with API call is mocked to test email and password against a hard coded user login.
test("invalid email and password shows errors", async () => {
  checkEmailExists.mockResolvedValue(false);

  fireEvent.change(emailInput, { target: { value: "email" } });
  fireEvent.change(passwordInput, { target: { value: "Password1!" } });

  act(() => {
    fireEvent.click(submitButton);
  });

  await waitFor(() => {
    expect(container.querySelectorAll(".error-message").length).toBe(2);

    expect(loginUserDB).toHaveBeenCalledTimes(0);
    expect(mockLoginUser).toHaveBeenCalledTimes(0);
    expect(mockSetUser).toHaveBeenCalledTimes(0);
  });
});