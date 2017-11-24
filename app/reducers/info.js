const initialState = [
    {
        id: 1,
        user: "Djon",
        year: 2015
    },
    {
        id: 2,
        user: "Gray",
        year: 2011
    }
]

export default function userInfo(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case "SET_YEAR_UP":
            action.object.year += 1;
            return { ...state, [action.object.id - 1]: action.object }
        case "SET_YEAR_DOWN":
            action.object.year -= 1;
            return { ...state, [action.object.id - 1]: action.object }
        default:
            console.log(state);
            return state;
    }
}