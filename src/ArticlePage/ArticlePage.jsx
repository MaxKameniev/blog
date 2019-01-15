import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommentsAsync } from '../redux/actions/getCommentsAction';
import { clearInputComment, postCommentAsync } from '../redux/actions/addCommentsAction';
import './ArticlePage.css';

class ArticlePage extends Component {

    state = {
        id: null
    }

    componentDidMount() {
        this.postId();
        this.props.fetchCommentsAsync();
    }

    createComment = (event) => {
        event.preventDefault();
        this.props.postCommentAsync(event);
        this.props.clearInputComment(event);
        this.props.fetchCommentsAsync();
    };
    
    postId = () => this.setState({id: +this.props.match.params.id});

    render() {
        return (
            <div>
                {this.props.posts.map(el =>
                    el.id === +this.state.id 
                    ? 
                        <div className="article__body" key={el.id}>
                            <h2 className="article__text">{el.title}</h2>
                            <div className="article__author">{el.body}</div>
                        </div>
                    : null
                )}
                <div>
                    <h3>Comments:</h3>
                    {this.props.comments.map(el =>
                        el.postId === +this.state.id
                        ? <div key={el.id}>{el.body}</div>
                        : null
                    )}
                </div>
                <form onSubmit={this.createComment}>
                    <input placeholder="Add comment" name="inputComment"/>
                    <input type="hidden" name="articleId" value={this.state.id || ''}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

function MSTP(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function MDTP(dispatch) {
    return {
        fetchCommentsAsync: function() {
            dispatch(fetchCommentsAsync())
        },
        postCommentAsync: function(event) {
            dispatch(postCommentAsync(event))
        },
        clearInputComment: function(event) {
            clearInputComment(event);
        }
    }
}

export default connect(MSTP, MDTP)(ArticlePage);