function revrot(str, sz) {
    let toReturn = "";
    if (sz <= 0 || str == "") return toReturn
    if (sz > str.length) return toReturn

    let chunks = str.match(new RegExp('.{1,' + sz + '}', 'g'));
    if (chunks[chunks.length - 1].length < sz) {
        chunks.pop();
    }

    console.log(chunks)
    for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        if (sumDigits(chunk) % 2 === 0) {
            chunk = chunk.split("").reverse().join("");
        } else {
            chunk = chunk.substring(chunk.length, 1) + chunk[0];
        }
        toReturn += chunk;
    }
    return toReturn;
}

function sumDigits(n) {
    const array1 = n.split("").map(x => x ** 3);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array1.reduce(reducer)
}