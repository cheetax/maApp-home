import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status';
import {rules, editRule} from './rules';
import nav from './stackNavigator';

const rootReducer = combineReducers({
    clanInfo: clanInfo,
    actionStatus: actionStatus,
    rules: rules,
    editRule,
    nav: nav,
});

export default rootReducer;