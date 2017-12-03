import GetContent from '../services/GetContent';

GetContent();

var initialState = [
    {
        id: 1,
        user: "Djon",
        year: 2015
    },
    {
        id: 2,
        user: "Djon",
        year: 2015
    },
    {
        id: 3,
        user: "Djon",
        year: 2015
    },
    {
        id: 4,
        user: "Djon",
        year: 2015
    },
    {
        id: 5,
        user: "Gray",
        year: 2011
    }
]


export default function userInfo(state = initialState, action) {
   
    switch (action.type) {
        case "SET_YEAR_UP":
            state[action.payload].year += 1;
            //console.log("actionUp", state);
            //break;
            return [...state];
        case "SET_YEAR_DOWN":
            state[action.payload].year -= 1;
            //console.log("actionDown", state);
            // break;
            return [...state];
        case 'GET_CONTENT':            
            return state; 
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}