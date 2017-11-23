const initialState = {
    user: "Djon",
    year: 2015
}

export default function userInfo(state=initialState, action) {
    console.log(state);
    switch (action.type) {
        case "SET_YEAR":
            

    }
    return state;
}