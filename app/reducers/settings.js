const initialSettings = {
    probationPeriod: 0
}

const initialAccount = {
    login: '',
    password: '',
    statusLogin: false,
}

export function settings(state = initialSettings, action) {
    //console.log('actionStatus', action.type);
    switch (action.type) {
        case "CHANGE_SETTINGS":
            state = action.payload;
            return { ...state };;
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}

export function account(state = initialAccount, action) {
    //console.log('actionStatus', action.type);
    var newstate;
    switch (action.type) {
        // case 'GET_CONTENT':
        //     newstate = {...action.payload.account};
        //     break;
        case "SET_LOGIN":
            newstate = { ...action.payload };
            break;
        case 'LOGIN':
            newstate = { ...state, statusLogin: action.payload }
            break;
    }
    return newstate || state;
    // console.log("actionEnd", state);
    // return state;
}