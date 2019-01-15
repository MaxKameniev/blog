import axios from 'axios';

export const getPosts = (data) => ({
    type: 'GET_POSTS',
    data,
})


function fetchPosts() {
    return axios.get('http://localhost:3001/posts')
} 

export const fetchPostsAsync = () => dispatch => {
    fetchPosts()
    .then(data => dispatch(getPosts(data.data)))
    .catch(err => console.log(err))
}