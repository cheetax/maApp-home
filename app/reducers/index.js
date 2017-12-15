import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status';
import rules from './rules';
import navReducer from './stackNavigator';

const rootReducer = combineReducers({
    clanInfo,
    actionStatus,
    rules,
    navReducer,
});

export default rootReducer