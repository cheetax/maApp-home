import GetContent from '../services/GetContent';

export function setYearUpAction(object) {
    return {
        type: "SET_YEAR_UP",
        payload: object
    }
}

export function setYearDownAction(object) {
    return {
        type: "SET_YEAR_DOWN",
        payload: object
    }
}

export const getContent = () => dispatcher => {
    console.log('get content: start');
    GetContent();
    console.log('get content: Ok');
    //console.log('getContent');

    dispatcher({
        type: 'GET_CONTENT',
        payload: {},        
    });
}