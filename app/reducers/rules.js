const initialRules = {
    Gold: [],
    Exp: [
        {            
            minParam: 0,
            maxParam: 1499,
            exp: 50000,
        },
        {
            minParam: 1499,
            maxParam: 1999,
            exp: 120000,
        },
        {
            minParam: 2000,
            maxParam: 2499,
            exp: 250000,
        },
        {
            minParam: 2500,
            maxParam: 2999,
            exp: 350000,
        },
        {
            minParam: 3000,
            maxParam: 3499,
            exp: 500000,
        },
        {
            minParam: 3500,
            maxParam: 3999,
            exp: 800000,
        },
        {
            minParam: 4000,
            maxParam: 999999,
            exp: 1000000,
        },
    ],
    Crystals: [],
}

export default function rules (state = initialRules, action) {
    //console.log('actionRules', action.type);
    switch (action.type) {
        case "CHANGE_RULES_EXP":            
            return {...state};        
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}