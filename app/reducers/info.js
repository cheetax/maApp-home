const initialState = {
    user: "Djon",
    year: 2015
}

export default function userInfo(state=initialState, action) {
    console.log(action);
    switch (action.type) {
        case "SET_YEAR":
            return {... state, year: action.payload}
        default:
            console.log(state);
            return state;
    }    
}