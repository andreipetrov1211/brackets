module.exports = function check(str, bracketsConfig) {
  let obj = {};

  bracketsConfig.forEach(element => {
    obj[element[1]] = element[0];
  });

  let brackets = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      if (brackets.length > 0 && obj[str[i]] === brackets[brackets.length - 1]) {
        brackets.pop();
      } else {
        brackets.push(str[i]);
      };
    } else {
      brackets.push(str[i]);
    };
  };
  if (brackets.length === 0) {
    return true;
  } else {
    return false;
  };
}