import { getDataBase, saveRulesToBase, getAccount } from '../Data/base';
import { Login } from "../services/GetContent";

export const selectPage = (selPage) => dispatch => {
    dispatch({
        type: 'SELECT_PAGE',
        payload: selPage,
    });
}

export const getContent = (forceUpdate) => async (dispatch) => {
    // console.log(new Date(), 'get content: start');
    dispatch({
        type: 'CHANGE_STATUS',
    });
    await getAccount().then(async (account) => {
        await Login(account).then(async (status) => {
            if (status.login) {
                dispatch({
                    type: 'LOGIN',
                    payload: status.login,
                })
            }
            await getDataBase(forceUpdate, status.login).then((data) => {
                dispatch({
                    type: 'GET_CONTENT',
                    payload: data,
                });

            });
        });
    }, (error) => {
        console.log(error)
    })
    dispatch({
        type: 'CHANGE_STATUS',
    });

}

let previousRules;

export const saveRules = (currentRules) => {
    if (!previousRules) { previousRules = currentRules }
    if (previousRules !== currentRules) {
        saveRulesToBase(currentRules);
    }
    previousRules = currentRules;
}

const _compareRules = (rulesA, rulesB) => {
    return (rulesA.minParam === rulesB.minParam || rulesA.maxParam === rulesB.maxParam || rulesA.value === rulesB.value);
}

export const actionLogin = (account) => dispatch => {
    dispatch({
        type: 'SET_LOGIN',
        payload: account
    })
    Login(account).then((status) => {
        if (status.code) {
            dispatch({
                type: 'LOGIN',
                payload: status.code,
            })
        }
    });
} 