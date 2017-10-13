import ReactDOM from 'react-dom';
import './style/index.css';
import '../../node_modules/antd/dist/antd.less';
// import IndexApp from './pages/index/index_app.js';
import appRouter from './router.js'; // 载入路由


ReactDOM.render(appRouter, document.getElementById('root'));
