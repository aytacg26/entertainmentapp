import {
  SET_MESSAGE,
  REMOVE_MESSAGE,
  SET_LOADING,
  REMOVE_LOADING,
} from '../actions/types';

const initialState = {
  message: null,
  modalType: null,
  header: null,
  loading: true,
};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: payload.message,
        modalType: payload.modalType,
        header: payload.header,
        loading: false,
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        message: null,
        modalType: null,
        header: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default messageReducer;
