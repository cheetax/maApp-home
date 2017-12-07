export default function userInfo(state = [], action) {
    console.log('userInfo', action.type);
    switch (action.type) {
        case "SET_YEAR_UP":
            state[action.payload].year += 1;
            //console.log("actionUp", state);
            //break;
            return [...state];
        case "SET_YEAR_DOWN":
            state[action.payload].year -= 1;
            //console.log("actionDown", state);
            // break;
            return [...state];
        case 'GET_CONTENT':
            console.log('payload', action.payload);    
            return []; 
        default:
            return [...state];
    }
    // console.log("actionEnd", state);
    // return state;
}