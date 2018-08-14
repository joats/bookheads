import { Action } from '@ngrx/store'
import { Book } from '../models/book.model'
import * as BookActions from '../actions/book.actions'

const initialState: Book = {
    title: 'Harry Potter',
    price: 45
}

export function reducer(state: Book[] = [initialState], action: BookActions.Actions) {

    switch(action.type) {
        case BookActions.ADD_BOOK:
            return [...state, action.payload];
        default:
            return state;
    }
}