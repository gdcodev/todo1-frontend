import { handle } from 'redux-pack';

export const handleAction = (state, action, handlers) => handle(state, action, {
  start: (prevState) => ({ ...prevState, isLoading: true }),
  finish: (prevState) => ({ ...prevState, isLoading: false }),
  ...handlers
});
