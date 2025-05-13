import { DemoData } from "./demoAction";
  
  export interface DrinksState {
    loading: boolean;
    data: DemoData[];
  }
  
  export interface AppState {
    drinks: DrinksState;
  }
  
const initialState: AppState = {
  drinks: {
    loading: false,
    data: [],
  },
};

type AppAction =
  | { type: 'GET_COCKTAIL_REQUEST' }
  | { type: 'GET_COCKTAIL_REQUEST_SUCCESS'; data: { drinks: DemoData[] } };

const demoReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case 'GET_COCKTAIL_REQUEST':
      return {
        ...state,
        drinks: {
          ...state.drinks,
          loading: true,
        },
      };
    case 'GET_COCKTAIL_REQUEST_SUCCESS':
      return {
        ...state,
        drinks: {
          loading: false,
          data: action.data.drinks,
        },
      };
    default:
      return state;
  }
};

export default demoReducer;
