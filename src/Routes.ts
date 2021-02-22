import App from './App';
import Home from './containers/home';
import Songs from './containers/songs';
import NotFound from './containers/not-found';

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [{
  path: '/',
  component: App,
  loadData: App.loadData,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
      key: 'homw'
    },
    {
      path: '/songs',
      component: Songs,
      exact: true,
      loadData: Songs.loadData,
      key: 'songs'
    },
    {
      component: NotFound
    }
  ]
}]