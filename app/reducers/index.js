import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status';
import {rules, editRule} from './rules';
import nav from './stackNavigator';
import { settings, account } from './settings';

const rootReducer = combineReducers({
    clanInfo: clanInfo,
    actionStatus: actionStatus,
    rules: rules,
    editRule,
    settings,
    account,
    nav: nav,
});

export default rootReducer;