import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import createReduxStore from '../../store/index.js';
import Categories from "./Categories";
import { fireEvent } from "@testing-library/dom";


describe('Testing the Categories component', () => {

  it('Should render all categories', () => {
    render(
      <Provider store={createReduxStore()}>
        <Categories />
      </Provider>
    );

    let shoesDisplay = screen.getByText('Shoes');
    expect(shoesDisplay).toBeInTheDocument();
  })

  it('Clicking on a category activates the category', () => {
    render(
      <Provider store={createReduxStore()}>
        <Categories />
      </Provider>
    );

    let shoesDisplay = screen.getByText('Shoes');
    fireEvent.click(shoesDisplay);

    let activeCategory = screen.getAllByTestId('activeCategory');
    expect(activeCategory.text).toBe('shoes');
  })
})