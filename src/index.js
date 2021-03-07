module.exports = function check(str, bracketsConfig) {
  let joinedBrackets = bracketsConfig.map(item => item.join(''));

    for (let brack of joinedBrackets) {
        str = str.split(brack).join('')
    }
    let count = 0;
    for (let brack of joinedBrackets) {
        if (str.includes(brack)) count++;
    }
    if(count > 0) {
        return check(str, bracketsConfig)
    }

return !Boolean(str)
};
