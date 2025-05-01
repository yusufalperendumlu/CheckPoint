const targetString = (str) => {
    const targetStr = str.split("").reduce((acc, char) => {
        if (acc[acc.length - 1] !== char) {
            acc.push(char);
        }
        
        return acc;
    }).join("");
       

    return targetStr;
}

console.log(targetString("aaabbbccdeeeaaaa"));
