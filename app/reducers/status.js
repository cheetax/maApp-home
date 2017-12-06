const initialAction = {
    inAction: false,
}

export default function actionStatus(state = initialStatus, action) {
    console.log(action.type);
    switch (action.type) {
        case "CHANGE_STATUS":
            state.inAction = !state.inAction;
            //console.log("actionUp", state);
            //break;
            return [state];        
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}