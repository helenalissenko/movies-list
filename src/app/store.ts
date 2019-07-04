import { SET_SEARCH_FILTER, SET_SEARCH_TERM } from './actions';

export interface IAppState {
    searchTerm: string;
    searchFilter: string;
}
export const INITIAL_STATE: IAppState = {
    searchTerm: '',
    searchFilter: ''
}
export function rootReducer(state, action) {
    switch (action.type) {
        case SET_SEARCH_FILTER:
            return {
                ...state,
                searchFilter: action.value
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.value
            }
    }
    return state;
}