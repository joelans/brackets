module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  for(let i = 0; i < str.length; i++) {
    if(str.charAt[i] == "(" || str.charAt[i] == "[" || str.charAt[i] == "{" || str.charAt[i] == "|") {
      stack.push(str.charAt[i]);
    } else if(str.charAt[i] == ")" && stack[stack.length - 1] == "(") {
      stack.pop();
    } else if(str.charAt[i] == "]" && stack[stack.length - 1] == "[") {
      stack.pop();
    } else if(str.charAt[i] == "}" && stack[stack.length - 1] == "{") {
      stack.pop();
    } else if(str.charAt[i] == "|" && stack[stack.length - 1] == "|") {
      stack.pop();
    } else stack.push(str.charAt[i]);
  }
  return stack.length == 0;
}
