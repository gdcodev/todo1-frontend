import { setFlashMessage } from '../redux/actions/flashMessage';

export const showSuccessMessage = (text, dispatch) => {
  dispatch(setFlashMessage({
    text,
    type: 'success',
    isVisible: true
  }));
};
export const showErrorMessage = (text, dispatch) => {
  dispatch(setFlashMessage({
    text,
    type: 'error',
    isVisible: true
  }));
};
