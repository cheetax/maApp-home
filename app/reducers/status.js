const initialStatus = {
    inAction: false,
    selectedPage: 0,
}

export default function actionStatus(state = initialStatus, action) {
    //console.log('actionStatus', action.type);
    switch (action.type) {
        case "CHANGE_STATUS":
            state.inAction = !state.inAction;
            //state.nom += 1;
            //console.log("actionStatus", state.inAction);
            //break;
            return { ...state }; 
        case 'SELECT_PAGE':
            state.selectedPage = action.payload;
            return { ...state };
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}