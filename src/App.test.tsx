import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { countriesActions } from './store/countries';

// amCharts ships ES modules that CRA's Jest does not transform, and the map is
// not what these tests are about
jest.mock('./components/Country/CountryMap', () => ({
  __esModule: true,
  default: () => null,
}));

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

beforeEach(() => {
  // the countries request never resolves: the app stays in its loading state
  (global as any).fetch = jest.fn(() => new Promise(() => {}));
  // jsdom has no <dialog> modal support
  HTMLDialogElement.prototype.showModal = jest.fn(function (
    this: HTMLDialogElement,
  ) {
    this.setAttribute('open', '');
  });
  HTMLDialogElement.prototype.close = jest.fn(function (
    this: HTMLDialogElement,
  ) {
    this.removeAttribute('open');
  });
});

test('renders the header with the info and theme buttons', () => {
  renderApp();
  expect(
    screen.getByRole('button', { name: /about this app/i }),
  ).toBeInTheDocument();
  expect(screen.getByLabelText('theme-switch')).toBeInTheDocument();
});

test('the info button opens the dialog with the credits', () => {
  renderApp();
  expect(screen.getByText('Developed by:')).toBeInTheDocument();
  expect(screen.getByText('Luiz Daniel Lima')).toBeInTheDocument();
  expect(screen.getByText('Data from:')).toBeInTheDocument();
  expect(screen.getByText('Open Weather')).toBeInTheDocument();
  expect(screen.getByText('Rest Countries')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /about this app/i }));
  expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
});

test('the country modal opens and closes through the store', () => {
  renderApp();
  expect(store.getState().countries.modalOpen).toBe(false);

  act(() => {
    store.dispatch(countriesActions.openModal());
  });
  expect(store.getState().countries.modalOpen).toBe(true);
  // the modal reacts by opening its native <dialog>
  expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();

  act(() => {
    store.dispatch(countriesActions.closeModal());
  });
  expect(store.getState().countries.modalOpen).toBe(false);
  expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
});
