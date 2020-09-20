import { SET_USER, CLEAR_USER, OPEN_SIDEBAR } from '../types';

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
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebar: true
      }
    default:
      return state;
  }
} 