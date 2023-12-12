String.prototype.camelCase = function () {
    if (this == "") {
        return "";
    }
    let string = this.toString().split(" ");
    let stringResult = "";
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].slice(1);
        stringResult += string[i];
    }
    return stringResult;
}