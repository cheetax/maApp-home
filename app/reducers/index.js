import { combineReducers } from "redux";
import clanInfo from "./clanInfo";
import actionStatus from './status'

const rootReducer = combineReducers({
    clanInfo,
    actionStatus,
});

export default rootReducer