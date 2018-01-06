const initialRules = {
    Gold: [],
    Exp: [
        // {
        //     minParam: 0,
        //     maxParam: 1499,
        //     exp: 50000,
        // },
        // {
        //     minParam: 1499,
        //     maxParam: 1999,
        //     exp: 120000,
        // },
        // {
        //     minParam: 2000,
        //     maxParam: 2499,
        //     exp: 250000,
        // },
        // {
        //     minParam: 2500,
        //     maxParam: 2999,
        //     exp: 350000,
        // },
        // {
        //     minParam: 3000,
        //     maxParam: 3499,
        //     exp: 500000,
        // },
        // {
        //     minParam: 3500,
        //     maxParam: 3999,
        //     exp: 800000,
        // },
        // {
        //     minParam: 4000,
        //     maxParam: 999999,
        //     exp: 1000000,
        // },
    ],
    Crystals: [],
}

export function rules(state = initialRules, action) {
    //console.log('actionRules', action.type);
    switch (action.type) {
        case "CHANGE_RULES_EXP":
            return { ...state };
        case 'GET_CONTENT':
            //console.log('payload', action.payload);   
            newstate = action.payload.rules;
            return { ...newstate || state };
        case 'ADD_RULES':
            switch (action.payload.index) {
                case 0:
                    newstate = { ...state, Gold: state.Gold.concat([action.payload.newRule]) };
                    break;
                case 1:
                    newstate = { ...state, Exp: state.Exp.concat([action.payload.newRule]) };
                    break;
                case 2:
                    newstate = { ...state, Crystals: state.Crystals.concat([action.payload.newRule]) };
                    break;
            }
            return { ...newstate || state };
        case 'EDIT_RULES':
            var oldRule = action.payload.oldRule;
            var newRule = action.payload.newRule;
            switch (action.payload.index) {
                case 0:
                    newstate = { ...state, Gold: state.Gold.filter((value,index,array) => {
                        return value.minParam !== oldRule.minParam || value.maxParam !== oldRule.maxParam || value.value !== oldRule.value ;
                    }).concat([newRule]) };
                    break;
                case 1:
                    newstate = { ...state, Exp: state.Exp.filter((value,index,array) => {

                        return value.minParam !== oldRule.minParam || value.maxParam !== oldRule.maxParam || value.value !== oldRule.value ;
                    }).concat([newRule]) };
                    break;
                case 2:
                    newstate = { ...state, Crystals: state.Crystals.filter((value,index,array) => {
                        return value.minParam !== oldRule.minParam || value.maxParam !== oldRule.maxParam || value.value !== oldRule.value ;
                    }).concat([newRule]) };
                    break;
            }
            return { ...newstate || state };
        case 'DELETE_RULE':
            switch (action.payload.index) {
                case 0:
                    rule = action.payload.item;
                    newstate = {
                        ...state, Gold: state.Gold.filter((value, index, array) => {
                            return value !== rule
                        })
                    };
                    break;
                case 1:
                    rule = action.payload.item;
                    newstate = {
                        ...state, Exp: state.Exp.filter((value, index, array) => {
                            return value !== rule
                        })
                    };
                    break;
                case 2:
                    rule = action.payload.item;
                    newstate = {
                        ...state, Crystals: state.Crystals.filter((value, index, array) => {
                            return value !== rule
                        })
                    };
                    break;
            }
            return { ...newstate }
        default:
            return state;
    }
    // console.log("actionEnd", state);
    // return state;
}

export function editRule(state = { gold: {}, exp: {}, crystals: {} }, action) {
    switch (action.type) {
        case 'ADD_RULES_VIEW':
            return { gold: { minParam: '', maxParam: '', value: '' }, exp: { minParam: '', maxParam: '', value: '' }, crystals: { minParam: '', maxParam: '', value: '' } };
        case 'EDIT_RULES_VIEW':
            switch (action.payload.index) {
                case 0:
                    newstate = { gold: { ...action.payload.item }, exp: { minParam: '', maxParam: '', value: '' }, crystals: { minParam: '', maxParam: '', value: '' } };
                    break;
                case 1:
                    newstate = { gold: { minParam: '', maxParam: '', value: '' }, exp: { ...action.payload.item }, crystals: { minParam: '', maxParam: '', value: '' } };
                    break;
                case 2:
                    newstate = { gold: { minParam: '', maxParam: '', value: '' }, exp: { minParam: '', maxParam: '', value: '' }, crystals: { ...action.payload.item } };
                    break;
            }
            return { ...newstate }
        default:
            return state;
    }
}