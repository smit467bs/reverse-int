module.exports = function reverse(n) {
    var str = String(Math.abs(n));
    var resultStr = '';

    for (var i = str.length - 1; i >= 0; --i) {
        resultStr += `${str[i]}`;
    }

    return +resultStr;
}
