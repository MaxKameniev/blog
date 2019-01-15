import axios from 'axios';

export const getComments = (data) => ({
    type: 'GET_COMMENTS',
    data,
})


function fetchPosts() {
    return axios.get('http://localhost:3001/comments')
} 

export const fetchCommentsAsync = () => dispatch => {
    fetchPosts()
    .then(data => dispatch(getComments(data.data)))
    .catch(err => console.log(err))
}