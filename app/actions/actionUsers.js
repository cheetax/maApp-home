import { getDataBase, saveRulesToBase } from '../Data/base';

export const selectPage = (selPage) => dispatch => {
    dispatch({
        type: 'SELECT_PAGE',
        payload: selPage,
    });
}

export const getContent = (forceUpdate) => dispatch => {
    // console.log(new Date(), 'get content: start');
    dispatch({
        type: 'CHANGE_STATUS',
    });
    getDataBase(forceUpdate).then((data) => {
        dispatch({
            type: 'GET_CONTENT',
            payload: data,
        });
        dispatch({
            type: 'CHANGE_STATUS',
        });
    });
}

let previousRules;

export const saveRules = (currentRules) => {
    if (!previousRules) {previousRules = currentRules}
    if (previousRules !== currentRules) {
        saveRulesToBase(currentRules);
    }
    previousRules = currentRules;
}

const _compareRules = (rulesA, rulesB)  => {
    return (rulesA.minParam === rulesB.minParam || rulesA.maxParam === rulesB.maxParam || rulesA.value === rulesB.value);
}