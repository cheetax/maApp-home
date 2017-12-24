import { GetContent } from "../services/GetContent";
import { AsyncStorage } from "react-native";

let clanInfo;
let rules;
let dataBase;

export const getDataBase = (forceUpdate = false) => new Promise(async (succes, fail) => {

    await AsyncStorage.getItem('clanInfo').then((data) => {
        clanInfo = JSON.parse(data);
    })
    if (forceUpdate || !clanInfo) {
        //console.log((forceUpdate || !dataBase));
        await GetContent().then((data) => {
            clanInfo = data;
            AsyncStorage.setItem('clanInfo', JSON.stringify(clanInfo));
            //succes(clanInfo);
        }, (error) => {
            fail(error)
        });
    }
    await AsyncStorage.getItem('rules').then((data) => {
        rules = JSON.parse(data);
    })
    dataBase = { ...clanInfo, rules}
    succes(dataBase);
}, (error) => {
    fail(error);
})

export const saveRulesToBase = async (data) => await AsyncStorage.setItem('rules', JSON.stringify(data));
