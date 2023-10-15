import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Profile from './Profile';
import { useContext } from 'react';
import { act } from 'react-dom/test-utils';
import { updateUser, verifyLogin } from '../data/repository';
import { useNavigate } from 'react-router-dom';

let container;

// Mock useContext
jest.mock('react', () => {
  const orig = jest.requireActual('react');

  return {
    ...orig,
    useContext: jest.fn(),
  };
})

// mock repository functions
jest.mock('../data/repository', () => {
  const originalModule = jest.requireActual('../data/repository');

  return {
    ...originalModule,
    updateUser: jest.fn(),
    verifyLogin: jest.fn(),
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

const mockLogoutUser = jest.fn();
const mockUser = {
  name: 'Test User',
  email: 'email@email.email',
  password: 'Password1#',
  id: 1,
}
const mockSetUser = jest.fn();
useContext.mockReturnValue([mockUser, mockSetUser, null , mockLogoutUser]);

beforeEach(() => {
  act(() => {
    const utils = render(<Profile />);
    container = utils.container;
  });
});

// Note: tests will fail if form components don't render since they are searched for and used during tests.

// tests that empty inputs for all forms show error messages
test('empty fields show error messages', async () => {
  act(() => {
    const nameEditButton = container.querySelector('.form-name > .edit-icon');
    fireEvent.click(nameEditButton);
  });
  let submitButton = container.querySelector('.name-submit');
  act(() => {
    fireEvent.click(submitButton);
  });
  await waitFor(() => expect(container.querySelectorAll('.error-message').length).toBe(1), { timeout: 500 });
  
  act(() => {
    const emailEditButton = container.querySelector('.form-email > .edit-icon');
    fireEvent.click(emailEditButton);
  });
  submitButton = container.querySelector('.email-submit');
  act(() => {
    fireEvent.click(submitButton);
  });
  await waitFor(() => expect(container.querySelectorAll('.error-message').length).toBe(1), { timeout: 500 });

  act(() => {
    const passwordEditButton = container.querySelector('.form-password > .edit-icon');
    fireEvent.click(passwordEditButton);
  });
  submitButton = container.querySelector('.password-submit');
  act(() => {
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(container.querySelectorAll('.error-message').length).toBe(3);
  }, { timeout: 500 });
});

// tests that the forms submit with valid inputs. API calls mocked
test('valid inputs submit forms', async () => {
  verifyLogin.mockResolvedValue(true);

  act(() => {
    const nameEditButton = container.querySelector('.form-name .edit-icon');
    fireEvent.click(nameEditButton);
  });
  let submitButton = container.querySelector('.name-submit');
  act(() => {
    fireEvent.change(container.querySelector('.form-name .input'), { target: { value: 'New Name' } });
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(mockSetUser).toHaveBeenCalledTimes(1);
    expect(updateUser).toHaveBeenCalledTimes(1);

  }, { timeout: 500 });

  act(() => {
    const emailEditButton = container.querySelector('.form-email .edit-icon');
    fireEvent.click(emailEditButton);
  });
  submitButton = container.querySelector('.email-submit');
  act(() => {
    fireEvent.change(container.querySelector('.form-email .input'), { target: { value: 'email@email.email' } });
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(mockSetUser).toHaveBeenCalledTimes(2);
    expect(updateUser).toHaveBeenCalledTimes(2);
  }, { timeout: 500 });

  act(() => {
    const passwordEditButton = container.querySelector('.form-password .edit-icon');
    fireEvent.click(passwordEditButton);
  });
  submitButton = container.querySelector('.password-submit');
  act(() => {
    fireEvent.change(screen.getByPlaceholderText("Enter old password"), { target: { value: 'Password1#' } });
    fireEvent.change(screen.getByPlaceholderText("Enter new password"), { target: { value: 'Password2#' } });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), { target: { value: 'Password2#' } });
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(mockSetUser).toHaveBeenCalledTimes(3);
    expect(updateUser).toHaveBeenCalledTimes(3);
  }, { timeout: 500 });
});

// tests that the forms do not submit with invalid inputs. API calls mocked.
test('invalid inputs do not submit forms', async () => {
  verifyLogin.mockResolvedValue(false);
  act(() => {
    const emailEditButton = container.querySelector('.form-email .edit-icon');
    fireEvent.click(emailEditButton);
  });
  let submitButton = container.querySelector('.email-submit');
  act(() => {
    fireEvent.change(container.querySelector('.form-email .input'), { target: { value: 'email' } });
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(container.querySelectorAll('.error-message').length).toBe(1);
  }, { timeout: 500 });

  act(() => {
    const passwordEditButton = container.querySelector('.form-password .edit-icon');
    fireEvent.click(passwordEditButton);
  });
  submitButton = container.querySelector('.password-submit');
  act(() => {
    fireEvent.change(screen.getByPlaceholderText("Enter old password"), { target: { value: 'Password1#' } });
    fireEvent.change(screen.getByPlaceholderText("Enter new password"), { target: { value: 'Passw' } });
    fireEvent.change(screen.getByPlaceholderText("Confirm password"), { target: { value: 'Password3#' } });
    fireEvent.click(submitButton);
  });
  await waitFor(() => {
    expect(container.querySelectorAll('.error-message').length).toBe(3);
  }, { timeout: 500 });
});