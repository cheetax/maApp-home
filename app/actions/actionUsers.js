import { getDataBase, saveRulesToBase, getAccount, saveAccountToBase } from '../Data/base';
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
        dispatch({
            type: 'SET_LOGIN',
            payload: account
        })
        await Login(account).then(async (status) => {
            dispatch({
                type: 'LOGIN',
                payload: { login: status.login, inAction: false, inActionLogin: false },
            })
            await getDataBase(forceUpdate, status.login).then((data) => {
                dispatch({
                    type: 'GET_CONTENT',
                    payload: data,
                });

            });
        }, (status) => {
            console.log(status)
        });
    }, async (status) => {
        dispatch({
            type: 'NAV_LOGIN_PAGE',
        })
        console.log(status.login)
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

export const actionLogin = (account) => async (dispatch) => {
    dispatch({
        type: 'SET_LOGIN',
        payload: account
    })
    await saveAccountToBase(account);
    dispatch({
        type: 'LOGIN',
        payload: { login: false, inAction: true },
    })    
    await Login(account).then((status) => {
        dispatch({
            type: 'LOGIN',
            payload: { login: status.login, inActionLogin: true, inAction: false },
        })
        setTimeout(() => {
            dispatch({
                type: 'LOGIN',
                payload: { login: status.login, inAction: false, inActionLogin: false },
            })
            dispatch({
                type: 'Navigation/BACK',
                key: 'Login'
            })
        }, 5000);
        if (status.login) {

        }
    });
} 