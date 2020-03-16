import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verificando o selected tá na tela', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Selected:/i);
  expect(linkElement).toBeInTheDocument();
});
test('Verificando o Reddit!!! tá na tela', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Reddit!!!/i);
  expect(linkElement).toBeInTheDocument();
});
