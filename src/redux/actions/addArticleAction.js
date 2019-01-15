import axios from "axios";

export const clearInput = (event) => {
    event.target.articleTitle.value = '';
    event.target.articleDesc.value = '';
}

const addNewArticle = (event) => ({
        title: event.target.articleTitle.value,
        body: event.target.articleDesc.value,
})

function postArticle(event) {
    return axios.post(
        'http://localhost:3001/posts',
        addNewArticle(event)
    )
}

export const postArticleAsync = (event) => dispatch => {
    postArticle(event)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}