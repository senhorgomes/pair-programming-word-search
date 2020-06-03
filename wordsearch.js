const wordSearch = (letters, word) => { 
    if (word === '') {
        return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    
    let verticalArray = [];
    for (let n = 0; n < letters[0].length; n++) {
    let tempVerticalArray =[]
    for(let i = 0; i < letters.length; i++) {
      tempVerticalArray.push(letters[i][n]);
    }
    verticalArray.push(tempVerticalArray)
    }
    const verticalJoin = verticalArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false
};


module.exports = wordSearch