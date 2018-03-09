import { Clipboard} from 'react-native';
 
export const CopyStatistic = (data) => {
    //console.log(data)
    var str = ''
    data.forEach(element => {
        str = str + element.name + ' ⋆ ' + (parseInt(element.exp)/1000).toFixed(1) + 'K' + ' ⋆ >' + parseInt(element.ruleExp.value) / 1000 + 'K' + ' ⋆ дней: ' + element.dayOfClan + '\n'
    });
    Clipboard.setString(str);
    //return {}
}
