import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status';
import rules from './rules';
import nav from './stackNavigator';

const rootReducer = combineReducers({
    clanInfo: clanInfo,
    actionStatus: actionStatus,
    rules: rules,
    nav: nav,
});

export default rootReducer;