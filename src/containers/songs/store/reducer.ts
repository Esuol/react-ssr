import { CHANGE_LIST } from './constants';

const defaultState = {
  songsList: []
}

type State = {
  songsList: any[]
}

type Action = {
  type: string;
  list: any[]
}

export default (state: State = defaultState, action: Action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return {
				...state,
				songsList: action.list
			}
		default:
			return state;
	}
}