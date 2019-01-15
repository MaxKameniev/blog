export default function getComments (state = [], action) {
    switch (action.type){
        case 'GET_COMMENTS':
        return action.data;
        default:
        return state;
    }
}