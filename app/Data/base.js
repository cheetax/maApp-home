import { GetContent } from "../services/GetContent";

let dataBase;

export const getDataBase = (forceUpdate = false) => new Promise(async (succes, fail) => {
    if (forceUpdate || !dataBase) {
        await GetContent().then((data) => {
            let dataBase = data;
            succes(dataBase);
        }, (error) => {
            fail(error)
        });
    }
    else {
        succes(dataBase);
    }
}, (error) => {
    fail(error);
})