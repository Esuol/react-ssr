import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store';
import styles from './style.css';
import WithStyle from '../../withStyle'

type Props = {
  login: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const Header: React.FC<Props> = (props: Props) => {
  const { login, handleLogin, handleLogout } = props;

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.item}>首页</Link>
      {
        login
        ? <React.Fragment>
           	<Link to='/songs' className={styles.item}>歌曲列表</Link>
						<span onClick={handleLogout} className={styles.item}>退出</span>
        </React.Fragment>
        :<span onClick={handleLogin} className={styles.item}>登陆</span>
      }
    </div>
  );
}

const mapState = state => ({
  login: state.header.login
});

const mapDispatch = dispatch => ({
  handleLogin () {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
});

export default connect(mapState, mapDispatch)(WithStyle(Header, styles));