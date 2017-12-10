export default function clanInfo(state = { users: [], expirienceUsers: []}, action) {
    console.log('userInfo', action.type);
    switch (action.type) {
        case 'GET_CONTENT':
            console.log('payload', action.payload);   
            state = action.payload;
            return {...state};
        // case 'CHANGE_STATUS':
        //     return state;
        default:
            return state;
            //return state;
    }
    // console.log("actionEnd", state);
    // return state;
}