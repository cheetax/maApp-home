const initialSettings = {
    probationPeriod: '7'
}

const initialAccount = {
    login: '',
    password: '',
    statusLogin: false,
    inAction: false,
    inActionLogin: false,
}

export function settings(state = initialSettings, action) {
    //console.log('actionStatus', action.type);
    switch (action.type) {
        case "EDIT_SETTINGS":
            newState = action.payload;
            return newState;;
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
            newstate = { ...action.payload, statusLogin: false, inAction: false, inActionLogin: false };
            break;
        case 'LOGIN':
            newstate = { ...state, statusLogin: action.payload.login, inAction: action.payload.inAction, inActionLogin: action.payload.inActionLogin }
            break;
        case 'UNLOGIN':
            newstate = { ...state, statusLogin: false }
            break;
    }
    return newstate || state;
    // console.log("actionEnd", state);
    // return state;
}