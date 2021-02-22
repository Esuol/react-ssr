import { CHANGE_LIST } from './constants';

const changeList = (list: any[]) => ({
  type: CHANGE_LIST,
  list
});

export const getSongsList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/songs.json')
            .then(res => {
              if(res.data.success) {
                const list = res.data.data;
                dispatch(changeList(list));
              } else {
                const list = [];
                dispatch(changeList(list));
              }
            })
  }
}