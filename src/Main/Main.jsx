import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/store/store';
import ArticlesList from '../ArticlesList/ArticlesList';
import ArticleForm from '../ArticleForm/ArticleForm';
import ArticlePage from '../ArticlePage/ArticlePage';

const Main = ({id, getId}) => {
    return (
        <div>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' render={props => <ArticlesList getId={getId} />} />
                    <Route path='/add-post' component={ArticleForm} />
                    <Route path={`/posts/:id`} render={props => <ArticlePage {...props} />} />
                </Switch>
            </ConnectedRouter>
        </div>
    );
};

export default Main;