module.exports = function check(str, bracketsConfig) {
  // your solution
  const hm = new Map(bracketsConfig);
  const hmcount = new Map();
  for(const key of hm.keys()) {
    if(!hmcount.has(key)) hmcount.set(key, 1);
    else hmcount.set(key, hmcount.get(key) + 1);
  }
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    if(hm.has(str.charAt(i)) && hmcount.get(str.charAt(i)) > 0) {
      stack.push(str.charAt(i));
      hmcount.set(str.charAt(i), hmcount.get(str.charAt(i)) - 1);
    } else if(stack.length != 0 && str.charAt(i) == hm.get(stack[stack.length - 1])) {
      stack.pop();
    } else stack.push(str.charAt(i));
  }
  return stack.length == 0;
}
