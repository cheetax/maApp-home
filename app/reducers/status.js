const initialStatus = {
    inAction: false,
    nom: 0,
    name: 'true'
}

export default function actionStatus(state = initialStatus, action) {
    console.log('actionStatus', action.type);
    switch (action.type) {
        case "CHANGE_STATUS":
            state.inAction = !state.inAction;
            state.nom += 1;
            console.log("actionStatus", state.inAction);
            //break;
            return state;        
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}