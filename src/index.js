module.exports = function check(str, bracketsConfig) {
  const stack = [];
    const openBrackets = bracketsConfig.map(pair => pair[0]);
    const closeBrackets = bracketsConfig.map(pair => pair[1]);
    const bracketsMap = Object.fromEntries(bracketsConfig);

    for (let char of str) {
        if (openBrackets.includes(char)) {
            if (closeBrackets.includes(char) && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0 || bracketsMap[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
