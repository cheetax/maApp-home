import { getDataBase } from '../Data/base';

export const setYearUpAction = (object) => dispatch => {
    return dispatch({
        type: "SET_YEAR_UP",
        payload: object
    });
}

export const setYearDownAction = (object) => dispatch => {
    return dispatch({
        type: "SET_YEAR_DOWN",
        payload: object
    });
}

export const getContent = () => dispatch => {
    console.log(new Date(),'get content: start');
    getDataBase().then((data) => {
        dispatch({
            type: 'GET_CONTENT',
            payload: data.users,
        });
    });
}