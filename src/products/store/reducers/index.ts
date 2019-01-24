import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

// interface for type checking
export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

// reducers
export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
}

// selectors: products
export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// selectors: products >> pizza
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

// selectors: products >> pizza >> data
export const getPizzaEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzaEntities
);

export const getAllPizzas = createSelector(
  getPizzaEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
)

// selectors: products >> pizza >> loaded
export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
);

// selectors: products >> pizza >> loading
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
);