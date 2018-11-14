function findMissingLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    if (str[0] == str[0].toUpperCase()) {
        alphabet = alphabet.toUpperCase();
    }
    alphabet = alphabet.split('');

    let index = alphabet.indexOf(str[0]);
    let strip = alphabet.slice(index, index + str.length);

    return strip.filter(x => !str.includes(x))[0];
}