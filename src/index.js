module.exports = function toReadable (number) {
let numberSymb = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    numberName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    result = '';
    if (number <= 12) {
        let i = numberSymb.indexOf(number);
        result = `${numberName[i]}`;
    }
    if (number === 13) result = 'thirteen'
    if (number >= 14 && number <= 19) {
        let i = numberSymb.indexOf((number[1]).toString());
        result = `${numberName[j]}teen`;
    }
    return result;

}
console.log(toReadable(4));