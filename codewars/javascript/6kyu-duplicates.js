function duplicateCount(text) {
    try {
        return text.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length;
    } catch (e) {
        return 0;
    }
}