import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearInput, postArticleAsync } from '../redux/actions/addArticleAction';
import { fetchPostsAsync } from '../redux/actions/getPostsAction';
import './ArticleForm.css';

class ArticleForm extends Component {


    createArticle = (event) => {
        event.preventDefault();
        this.props.postArticleAsync(event);
        this.props.clearInput(event);
        this.props.fetchPostsAsync();
    };

    render() {
        return (
            <form className="article__form" onSubmit={this.createArticle}>
                <input className="form__title" placeholder="Article Title" name="articleTitle" />
                <textarea className="form__textarea" placeholder="Article Description" name="articleDesc">
                </textarea>
                <button>Submit</button>
            </form>
        )
    }
}

function MDTP(dispatch) {
    return {
        clearInput: function (event) {
            clearInput(event)
        },
        postArticleAsync: function(event) {
            dispatch(postArticleAsync(event))
        },
        fetchPostsAsync: function() {
            dispatch(fetchPostsAsync())
        }
    }
}

export default connect(null, MDTP)(ArticleForm);