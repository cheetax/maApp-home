var initialState = [
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
    //tate.merge(initialState);
    switch (action.type) {
        case "SET_YEAR_UP":
            state[action.object.id - 1].year += 1;
            console.log("actionUp",state);
            //break;
            return [...state];
        case "SET_YEAR_DOWN":
            state[action.object.id - 1].year -= 1;
            console.log("actionDown", state);
           // break;
            return [...state];
        default:
            return state;
    }
    console.log("actionEnd", state);
   // return state;
}