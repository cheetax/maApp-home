import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status';
import rules from './rules';

const rootReducer = combineReducers({
    clanInfo,
    actionStatus,
    rules,
});

export default rootReducer