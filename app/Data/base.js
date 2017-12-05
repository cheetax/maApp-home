import { GetContent } from "../services/GetContent";

let data = null;

export const getDataBase = (forceUpdate = false) => new Promise(async (succes, fail) => {
    if (forceUpdate || data === null) {
        await GetContent().then((data) => {
            data = data;
            succes(data);
        }, (error) => {
            fail(error)
        });
    }
    else {
        succes(data);
    }
}, (error) => {
    fail(error);
})