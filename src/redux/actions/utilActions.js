import {
  SET_MESSAGE,
  REMOVE_MESSAGE,
  SET_LOADING,
  REMOVE_LOADING,
} from './types';

export const setMessage = (message, modalType, header, messageTime = 5000) => (
  dispatch
) => {
  dispatch({
    type: SET_MESSAGE,
    payload: { message, modalType, header },
  });

  const timer = setTimeout(() => {
    dispatch(removeMessage());
    clearTimeout(timer);
  }, messageTime);
};

export const removeMessage = () => ({
  type: REMOVE_MESSAGE,
});

export const setLoading = () => {
  console.log('I AM GOING TO SET LOADING....');

  return {
    type: SET_LOADING,
  };
};

export const removeLoading = () => ({
  type: REMOVE_LOADING,
});
