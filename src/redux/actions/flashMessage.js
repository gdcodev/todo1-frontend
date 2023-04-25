import { message } from 'antd';
import { SET_FLASH_MESSAGE } from './types';

export const setFlashMessage = (flashMessageContent) => (dispatch) => {
  dispatch({
    type: SET_FLASH_MESSAGE,
    flashMessageContent
  });
  if (flashMessageContent.type === 'error') {
    message.error(flashMessageContent.text);
  }
  if (flashMessageContent.type === 'success') {
    message.success(flashMessageContent.text);
  }
};
