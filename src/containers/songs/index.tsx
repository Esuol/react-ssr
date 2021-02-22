import React, {useEffect, useMemo, Fragment} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getSongsList } from './store/actions';
import { Redirect } from 'react-router-dom';
import styles from './style.css';
import WithStyle from '../../withStyle';

type Props = {
  list: any[],
  getSongsList: () => void,
  login: boolean
}

const Songs: React.FC<Props> = (props: Props) => {
  const { list, getSongsList, login } = props;

  const lists = useMemo(() =>  list.map(item => <div className={styles.item} key={item.id}>{item.title}</div>), [list])

  useEffect(() => {
    getSongsList();
  }, [])

  return (
    login
    ? (
      <Fragment>
        <Helmet>
					<title>翻译页面 - 丰富多彩的翻译内容</title>
					<meta name="description" content="翻译页面 - 丰富多彩的翻译内容" />
				</Helmet>
				<div className={styles.container}>
					{lists}
				</div>
      </Fragment>
    )
    : (<Redirect to='/'/>)
  )
}

const mapState = state => ({
  list: state.songs.songsList,
  login: state.header.login
})

const mapDispatch = dispatch => ({
  getSongsList() {
    dispatch(getSongsList());
  }
})

const ExportSongs = connect(mapState, mapDispatch)(WithStyle(Songs, styles));

ExportSongs.loadData = store => store.dispatch(getSongsList());

export default ExportSongs;