/**
 * Reducer - index
 * 汇总
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import modal from './modal';
// import giftCate from './gift_cate';
// import giftItem from './gift_item';
// import giftPlan from './gift_plan';
// import giftRecord from './gift_record';

// import toolLists from './tool_lists';

export default combineReducers({
	modal,
    routing: routerReducer
});