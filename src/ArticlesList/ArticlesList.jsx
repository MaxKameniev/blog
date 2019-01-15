import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ArticleShort from '../ArticleShort/AticleShort';

class ArticlesList extends Component {

    render() {
        return (
            <div className="article__wrapper">
                {this.props.posts.map(el =>
                    <NavLink exact to={`/posts/${el.id}`} key={el.id}>
                        <ArticleShort data={el} getId={this.props.getId} />
                    </NavLink>
                )}
                
            </div>
        );
    }
}

function MSTP(state) {
    return {
        posts: state.posts
    }
}

export default connect(MSTP)(ArticlesList);