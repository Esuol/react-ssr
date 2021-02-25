import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import { getServerStore } from '../store';
import routes from '../routes';
// const path = require('path');
const process = require('process');

type Context = {
  css: any[];
  action?: string;
  url?: string;
  NOT_FOUND?: any
}

const app = express();
app.use(express.static('public'));

app.use('/api', proxy('http://127.0.0.1', {
  proxyReqPathResolver: function(req) {
    console.log('proxyReqPathResolver>>>>', req.path, req.url);
    return '/api/' + req.url
  }
}))

app.get('*', (req, res) => {
  const store = getServerStore(req);
  // 根据路由的路径，来往store里面加数据
  const matchedRoutes = matchRoutes(routes, req.path);
  // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
			const promise = new Promise((resolve, reject) => {
        console.log('>>>>item.route.loadData(store))>>',item.route.loadData(store) )
        if(item.route.loadData instanceof Promise) {
          console.log('onnn')
          item.route.loadData(store)
            .then(resolve)
            .catch(e => console.log('error', e))
        } else {
          resolve(item.route.loadData(store));
        }
			})
			promises.push(promise);
		}
  })
  Promise.all(promises).then(() => {
    const context: Context = { css: [] };
    const html = render(store, routes, req, context);
    if(context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if(context.NOT_FOUND) {
      res.status(404);
			res.send(html);
    } else {
      res.send(html);
    }
  }).catch((e) => {
    console.log('error', e)
  })
})

const server = app.listen(9002);