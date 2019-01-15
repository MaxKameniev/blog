import axios from "axios";

export const clearInputComment = (event) => {
    event.target.inputComment.value = '';
}

const addNewComment = (event) => ({
    postId: +event.target.articleId.value,
    body: event.target.inputComment.value,
})

function postComment(event) {
    return axios.post(
        'http://localhost:3001/comments',
        addNewComment(event)
    )
}

export const postCommentAsync = (event) => dispatch => {
    postComment(event)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}