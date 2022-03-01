# Storefront

## Phase 1 User Stories

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## Application Architecture

- Begin with creating your application using create-react-app
- Install Material UI as a dependency
- Write an App component that serves as the container for all sub-components of this application

- A <Header> component which shows the name of your virtual store
- A <Footer> component which shows your copyright and contact information
- A <Categories> component
  - Shows a list of all categories
  - Dispatches an action when one is clicked to “activate” it
  - Create an action that will trigger the reducer to change the active category
  - Update the active category in the reducer when this aciton is dispatched
- A <Products> component
  - Displays a list of products associated with the selected category
  - The state should be a list of all products
  - Each product should have a category association, name, description, price, inventory count
  - Create an action that will trigger when the active category is changed
    - multiple reducers can respond to the same actions
  - Create a reducer that will filter the products list based on the active category
- Active Category
  - State should store active category
  - Other components (products, etc) might need to reference this
