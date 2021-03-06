function accum(s) {
    let final = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j == 0) final += s.charAt(i).toUpperCase()
            else final += s.charAt(i).toLowerCase()
        }
        final += "-"
    }
    return final.slice(0, -1);
}

// OPTIMIZED
  return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');