function revrot(str, sz) {
    let toReturn = "";
    if (sz <= 0 || str == "") return toReturn
    if (sz > str.length) return toReturn

    let chunks = str.match(new RegExp('.{1,' + sz + '}', 'g')).filter(word => word.length >= sz);

    chunks.forEach(chunk => {
        if (sumDigits(chunk) % 2 === 0) {
            chunk = chunk.split("").reverse().join("");
        } else {
            chunk = chunk.substring(chunk.length, 1) + chunk[0];
        }
        toReturn += chunk;
    });
    return toReturn;
}

function sumDigits(n) {
    return n.split("")
        .map(x => x ** 3)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
};

// OPTIMIZED

function revrot(str, sz) {
    if (sz < 1 || sz > str.length)
        return '';

    let reverse = s => s.split('').reverse().join('');
    let rotate = s => s.slice(1) + s.slice(0, 1);
    let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0);

    return str
        .match(new RegExp('.{' + sz + '}', 'g'))
        .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
        .join('');
}