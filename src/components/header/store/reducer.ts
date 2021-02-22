import { CHANGE_LOGIN } from './constants';

const defaultState = {
  login: true
};

type State = {
  login: boolean
}

type Action = {
  value: boolean,
  type: string
}

export default (state: State = defaultState, action: Action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.value
      }
    default:
      return state;
  }
}