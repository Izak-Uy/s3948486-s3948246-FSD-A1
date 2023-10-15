import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from './Signup';
import { addUser, checkEmailExists } from '../data/repository';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { act } from 'react-dom/test-utils';

let container;
let nameInput;
let emailInput;
let passwordInput;
let confirmPasswordInput;
let submitButton;

// Mock useContext
jest.mock('react', () => {
  const orig = jest.requireActual('react');

  return {
    ...orig,
    useContext: jest.fn(),
  };
})

// Mock useNavigate
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

// mock repository functions
jest.mock('../data/repository', () => {
  const originalModule = jest.requireActual('../data/repository');

  return {
    ...originalModule,
    addUser: jest.fn(),
    checkEmailExists: jest.fn(),
  };
});

const mockLoginUser = jest.fn();
useContext.mockReturnValue([null, null, mockLoginUser, null]);

beforeEach(() => {
  act(() => {
    const utils = render(<Signup />);
    container = utils.container;
  });
  
  nameInput = screen.getByPlaceholderText('Enter name');
  emailInput = screen.getByPlaceholderText('Enter email');
  passwordInput = screen.getByPlaceholderText('Enter password');
  confirmPasswordInput = screen.getByPlaceholderText('Confirm password');
  submitButton = screen.getByRole('button', { name: 'Submit' });
});

// Testing to check client-side form validation. All fields should show an error if empty.
test('no inputs shows error messages', async () => {
  act(() => {
    fireEvent.click(submitButton);
  });

  waitFor(() => {
    expect(screen.getByText('Name is required')).toBeTruthy();
    expect(screen.getByText('Email is required')).toBeTruthy();
    expect(screen.getByText('Password is required')).toBeTruthy();
    expect(screen.getByText('Confirm password is required')).toBeTruthy();
  });
});

// Testing to check client-side validation. With a valid email,
// password, password confirmation and name, the form should
// submit. Validation from API calls are mocked to be true for this test.
test('valid inputs submits form', async () => {
  addUser.mockResolvedValueOnce({ user_id: 1 });
  checkEmailExists.mockResolvedValueOnce(false);
  act(() => {
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'email@email.email' } });
    fireEvent.change(passwordInput, { target: { value: 'Password1#' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'Password1#' } });
    fireEvent.click(submitButton);
  });

  waitFor(() => {
    expect(addUser).toHaveBeenCalledTimes(1);
    expect(addUser).toHaveBeenCalledWith(
      'email@email.email',
      'Password1#',
      'Test User'
    );
    expect(mockLoginUser).toHaveBeenCalledTimes(1);
    expect(useNavigate).toHaveBeenCalledTimes(1);
  });
});