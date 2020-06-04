const wordSearch = (letters, word) => { 
    const reversed = word.split('').reverse().join('');
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
        let string = "";
        letters.forEach(subArr => string += subArr[i]);
        verticalJoin.push(string);
    }
    // for (let i = 0; i < letters.length; i++) {
    //     for (let j = 0; i < letters[i].length; i++) {
    //         if (letters[i][j] === word.charAt(0)) {
    //             let diagonalString = "";
    //             for (let k = 0; k < word.length; k++) {
    //                 if (letters[i + k][j + k] === word.charAt(k)) {
    //                     diagonalString += word.charAt(k);
    //                     console.log(diagonalString);
    //                 }
    //             }
    //             if (diagonalString.length === word.length) {
    //                 return true;
    //             }
    //         }
    //     }
    // }
    for (const l of horizontalJoin) {
        if (l.includes(word) || l.includes(reversed)) return true;
    }
    for (const l of verticalJoin) {
        if (l.includes(word) || l.includes(reversed)) {
            return true;
        }
    }
    return false; 
}
// wordSearch([["a","b","c"], ["d", "e", "f"]], 'ae');
module.exports = wordSearch