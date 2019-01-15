import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import getPosts from './getPostsReducer';
import getComments from './getCommentsReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    posts: getPosts,
    comments: getComments,
})