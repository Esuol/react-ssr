import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getHomeList } from './store/actions';
import styles from './style.css';
import WithStyles from '../../withStyle';

type Props = {
  list: any[],
  getHomeList: () => void
}

const Home: React.FC<Props> = (props: Props) => {
  const { list, getHomeList } = props;

  const getList = useMemo(() =>list.map(item => <div className={styles.item} key={item.id} onClick={() => { onClickItem(item.title) }} >{item.title}</div>), [list]);

  const onClickItem = (title: string) => {
    console.log('title:', title)
  };

  useEffect(() => {
    !list.length && getHomeList();
  }, [list])

  return (
    <React.Fragment>
      <Helmet>
        <title>首页</title>
        <meta name="description" content="新闻页面 - 丰富多彩的资讯" />
      </Helmet>
      <div className={styles.container}>
				{getList()}
			</div>
    </React.Fragment>
  )
}

const mapState = state => ({
  list: state.home.newsList
});

const mapDispatch = dispatch => ({
  getHomeList() {
    dispatch(getHomeList);
  }
});

const ExportHome =  connect(mapState, mapDispatch)(WithStyles(Home, styles));

ExportHome.loadData = store => store.dispatch(getHomeList());

export default ExportHome;

