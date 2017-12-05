const initialAction = {
    inAction: false,
}

export default function actionStatus(state = initialStatus, action) {
    console.log(action.type);
    switch (action.type) {
        case "CHANGE":
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
            console.log(action.payload);    
            return state; 
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}