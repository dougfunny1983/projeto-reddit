import React from 'react';
import {
  render,
  fireEvent,
  waitForDomChange,
  cleanup,
} from '@testing-library/react';
import App from './App';

const clear = () => afterEach(() => cleanup());

describe('Testando a tela', () => {
  clear();
  test('Verificando o selected tá na tela', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Selected:/i);
    expect(linkElement).toBeInTheDocument();
  });
  clear();

  test('Verificando o Reddit!!! tá na tela', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Reddit!!!/i);
    expect(linkElement).toBeInTheDocument();
  });
  clear();
});

describe('Testando o Select', () => {
  clear();
  test('Olhando os elementos na tela', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Escolha o Post/i)).toBeInTheDocument();
  });
  clear();
  test('Verificando mudanças no select', () => {
    const { getByTestId, getByText } = render(<App />);
    const select = getByTestId(/select/i);
    fireEvent.change(select, { target: { value: 'reactjs' } });
    expect(getByText(/Selected: reactjs/i)).toBeInTheDocument();
    fireEvent.change(select, { target: { value: 'frontend' } });
    expect(getByText(/Selected: frontend/i)).toBeInTheDocument();
  });
  clear();
  test('Verificando mudanças no select 1', async () => {
    const { getByTestId, getByText, getAllByTestId } = render(<App />);
    await waitForDomChange();
    const select = getByTestId(/select/i);
    fireEvent.change(select, { target: { value: 'frontend' } });
    expect(getByText(/Selected: frontend/i)).toBeInTheDocument();
    const tagLi = getAllByTestId(/TagLi/i)
    expect(tagLi.length).toBe(27);
  });
  clear();
  clear();
  test('Verificando mudanças no select 2', async () => {
    const { getByTestId, getByText, getAllByTestId } = render(<App />);
    await waitForDomChange();
    const select = getByTestId(/select/i);
    fireEvent.change(select, { target: { value: 'reactjs' } });
    expect(getByText(/Selected: reactjs/i)).toBeInTheDocument();
    const tagLi = getAllByTestId(/TagLi/i)
    expect(tagLi.length).toBe(27);
  });
  clear();
});

describe('campo de atualização', () => {
  test('testando o componente do refresh',  () => {
    const { getByText } = render(<App />);
    expect(getByText(/refresh/i)).toBeInTheDocument();
    expect(getByText(/refresh/i)).not.toBeDisabled()
    expect(getByText(/Ultima atualização: →/i)).toBeInTheDocument();
    fireEvent.click(getByText(/refresh/i))
    expect(getByText(/Atualização da página/i)).toBeInTheDocument();
  })
  
})


