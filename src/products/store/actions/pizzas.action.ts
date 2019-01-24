// so that we can type check our action creators
import { Action } from '@ngrx/store';

// interface for checking if the pizza payload is correct
import { Pizza } from '../../models/pizza.model';

// action constants
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

//action creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types: used in reducer for type checking
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess;