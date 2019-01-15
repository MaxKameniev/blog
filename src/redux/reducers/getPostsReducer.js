export default function getPosts (state = [], action) {
    switch (action.type){
        case 'GET_POSTS':
        return action.data;
        default:
        return state;
    }
}