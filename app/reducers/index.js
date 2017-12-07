import { combineReducers } from "redux";
import clanInfo from "./info";
import actionStatus from './status'

const rootReducer = combineReducers({
    clanInfo,
    actionStatus,
});

export default rootReducer