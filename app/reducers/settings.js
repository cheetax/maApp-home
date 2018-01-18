const initialSettings = {    
    probationPeriod: 0
}

const initialAccount = {
    login: '',
    password: '',
    statusLogIn: false,
}

export function settings(state = initialSettings, action) {
    //console.log('actionStatus', action.type);
    switch (action.type) {
        case "CHANGE_SETTINGS":
            state = action.payload;
            return { ...state }; ;
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}

export function account(state = initialAccount, action) {
    //console.log('actionStatus', action.type);
    switch (action.type) {
        case "LOGIN":
            state = {...action.payload};
            return { ...state }; ;
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}