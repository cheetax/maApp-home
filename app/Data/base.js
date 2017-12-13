import { GetContent } from "../services/GetContent";
import { AsyncStorage } from "react-native";

let dataBase;

export const getDataBase = (forceUpdate = false) => new Promise(async (succes, fail) => {

    await AsyncStorage.getItem('dataBase').then((data) => {
        dataBase = JSON.parse(data);
    })
    if (forceUpdate || !dataBase) {
        //console.log((forceUpdate || !dataBase));
        await GetContent().then((data) => {
            dataBase = data;
            AsyncStorage.setItem('dataBase',JSON.stringify(dataBase));
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