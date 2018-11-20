function revrot(str, sz) {
    if (sz <= 0 || str == "") return ""
    if (sz > str.length) return ""
    let toReturn = "";

    for (let i = 0; i <= str.length; i += sz) {
        let res = str.substring(i, sz);

        if ((((parseInt(res, 10) - 1) % 9 + 1) ** 3) % 2 === 0) {
            res = res.split("").reverse().join("");
        } else {
            res = res.charAt(str.length - 1) + str.substring(0, str.length - 1);
        }
        toReturn += res;
    }
    return toReturn
}