import { GetContent } from "../services/GetContent";
import { AsyncStorage } from "react-native";

let clanInfo;
let rules;
let account;
let dataBase;

export const getDataBase = (forceUpdate = false, login = false) => new Promise(async (succes, fail) => {

    await AsyncStorage.getItem('clanInfo').then((data) => {
        clanInfo = JSON.parse(data);
    })

    if ((forceUpdate || !clanInfo) && login) {
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
    dataBase = { ...clanInfo, rules, account }
    succes(dataBase);
}, (error) => {
    fail(error);
})

export const getAccount = () => new Promise(async (succes, fail) => {
    await AsyncStorage.getItem('account').then((account) => {
        succes(JSON.parse(account));
    }, (error) => fail(error))
})

export const saveRulesToBase = async (data) => {
    await AsyncStorage.setItem('rules', JSON.stringify(data)).then(async () => {
        // await AsyncStorage.getItem('rules').then((data) => {
        //     rules = JSON.parse(data);
        // })
    })
};

export const saveAccountToBase = async (account) => {
    await AsyncStorage.setItem('account', JSON.stringify(account));
}
