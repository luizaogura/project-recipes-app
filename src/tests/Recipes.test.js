import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouter } from './helpers/renderWithRouter';
import App from '../App';

// TEM QUE FAZER UM FETCH COM MOCK

describe('Verificar se no Recipes na rota Meals...', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/meals');
    });
  });
  test('Tem o Header', () => {
    const headerTitleEl = screen.getByRole('heading', { name: /meals/i });
    expect(headerTitleEl).toBeInTheDocument();
    const profileIconEl = screen.getByRole('img', { name: /profileIcon/i });
    expect(profileIconEl).toBeInTheDocument();
    const searchButtonEl = screen.getByRole('img', { name: /searchIcon/i });
    expect(searchButtonEl).toBeInTheDocument();
  });

  test('Tem o SearchButton', () => {
    const searchButtonEl = screen.getByRole('img', { name: /searchIcon/i });
    userEvent.click(searchButtonEl);
    const inputSearchEl = screen.getByTestId('search-input');
    expect(inputSearchEl).toBeInTheDocument();
    const radioIngredientEl = screen.getByText(/ingredient/i);
    expect(radioIngredientEl).toBeInTheDocument();
    const radioNameEl = screen.getByText(/name/i);
    expect(radioNameEl).toBeInTheDocument();
    const radioFirstLetterEl = screen.getByText(/first letter/i);
    expect(radioFirstLetterEl).toBeInTheDocument();
  });

  test('Tem os botões de categoria', async () => {
    const categoryBeef = await screen.findByRole('button', { name: /beef/i });
    expect(categoryBeef).toBeInTheDocument();
    const categoryBreakfast = await screen.findByRole('button', { name: /breakfast/i });
    expect(categoryBreakfast).toBeInTheDocument();
    const categoryChicken = await screen.findByRole('button', { name: /chicken/i });
    expect(categoryChicken).toBeInTheDocument();
    const categoryDessert = await screen.findByRole('button', { name: /dessert/i });
    expect(categoryDessert).toBeInTheDocument();
    const categoryGoat = await screen.findByRole('button', { name: /goat/i });
    expect(categoryGoat).toBeInTheDocument();
  });

  test('Tem o Footer', () => {
    const drinkIconEl = screen.getByRole('img', { name: /drinkicon/i });
    expect(drinkIconEl).toBeInTheDocument();
    userEvent.click(drinkIconEl);

    const mealsIconEl = screen.getByRole('img', { name: /mealicon/i });
    expect(mealsIconEl).toBeInTheDocument();
    userEvent.click(mealsIconEl);
  });

  test('Testa se é possível clicar nos botões de categoria', async () => {
    const categoryBeef = await screen.findByRole('button', { name: /beef/i });
    userEvent.click(categoryBeef);
    const categoryBreakfast = await screen.findByRole('button', { name: /breakfast/i });
    userEvent.click(categoryBreakfast);
    const categoryChicken = await screen.findByRole('button', { name: /chicken/i });
    userEvent.click(categoryChicken);
    const categoryDessert = await screen.findByRole('button', { name: /dessert/i });
    userEvent.click(categoryDessert);
    const categoryGoat = await screen.findByRole('button', { name: /goat/i });
    userEvent.click(categoryGoat);
  });
});

describe('Verificar se no Recipes na rota Drinks...', () => {
  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    act(() => {
      history.push('/drinks');
    });
  });
  test('Tem os botões de categoria', async () => {
    const categoryOrdinaryDrink = await screen.findByRole('button', { name: /ordinary/i });
    expect(categoryOrdinaryDrink).toBeInTheDocument();
    const categoryCocktail = await screen.findByRole('button', { name: /cocktail/i });
    expect(categoryCocktail).toBeInTheDocument();
    const categoryShake = await screen.findByRole('button', { name: /shake/i });
    expect(categoryShake).toBeInTheDocument();
    const categoryOther = await screen.findByRole('button', { name: /other/i });
    expect(categoryOther).toBeInTheDocument();
    const categoryCocoa = await screen.findByRole('button', { name: /cocoa/i });
    expect(categoryCocoa).toBeInTheDocument();
  });

  test('Testa se é possível clicar nos botões de categoria', async () => {
    const categoryOrdinaryDrink = await screen.findByRole('button', { name: /ordinary/i });
    userEvent.click(categoryOrdinaryDrink);
    const categoryCocktail = await screen.findByRole('button', { name: /cocktail/i });
    userEvent.click(categoryCocktail);
    const categoryShake = await screen.findByRole('button', { name: /shake/i });
    userEvent.click(categoryShake);
    const categoryOther = await screen.findByRole('button', { name: /other/i });
    userEvent.click(categoryOther);
    const categoryCocoa = await screen.findByRole('button', { name: /cocoa/i });
    userEvent.click(categoryCocoa);
  });
});
