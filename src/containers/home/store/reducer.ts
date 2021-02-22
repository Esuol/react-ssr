import { CHANGE_LIST } from './constants';

const defaulState = {
  newsList: []
};

type State = {
  newsList: any[]
}

type Action = {
  type: string;
  list: any[]
}

export default (state: State = defaulState, action: Action) => {
  switch(action.type) {
		case CHANGE_LIST:
			return {
				...state,
				newsList: action.list
			}
		default:
			return state;
	}
}