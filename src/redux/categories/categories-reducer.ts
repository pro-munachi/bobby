import { CategoriesTypes } from './categoris-actions';
import { Reducer, ReducerAction, ReducerState } from 'react';
import { Cartegory } from '../../data'


interface Action{
  type: string;
  categories?: Cartegory[];
  error?: string;

}
const initialCategories = []

export const CategoriesReducer<Reducer<Cartegory[], Action>> = (categories=[], action) => {
  switch (action.type) {
    case CategoriesTypes.FETCH_CATEGORIES:
      return categories: action.payload;
    default:
      return categories;
  }
}