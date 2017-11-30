import GetContent from '../services/GetContent';

var items = /\.[a-z,A-Z,\_]+/g.exec('div.c_orange.normal');
items.map((item) => { console.log(item) });
//GetContent();

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

    var items = [];
    // const regexp = '/\.[a-z,A-Z,\_]+/g';

    const regex = /\.[a-z,A-Z,\_]+/g;
    const str = `div.c_orange.normal`;
    let m;
    
    while ((m = regex.exec(str)) !== null) {
        items.push(...m);
    }

    //items = regexp.exec(`div.c_orange.normal`);
    items.map((item) => { console.log(item) });

    //tate.merge(initialState);
    switch (action.type) {
        case "SET_YEAR_UP":
            state[action.object].year += 1;
            console.log("actionUp", state);
            //break;
            return [...state];
        case "SET_YEAR_DOWN":
            state[action.object].year -= 1;
            console.log("actionDown", state);
            // break;
            return [...state];
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}