import { SET_USER, CLEAR_USER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { uid: action.payload ? action.payload.id : null, ...action.payload.data() },
        loading: false
      }
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        loading: false
      }
    default:
      return state;
  }
} 