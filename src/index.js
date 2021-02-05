module.exports = function check(str, bracketsConfig) {
  let strArr = str.split('');
  let infLoop = true;

  while (infLoop) {
    //prevent inf loop if do not exec 17line
    infLoop = false;

    for (let i = 0, leni = strArr.length; i < leni; i++) {
      for (let j = 0, lenj = bracketsConfig.length; j < lenj; j++) {

        let openBracket = bracketsConfig[j][0];
        let closeBracket = bracketsConfig[j][1];

        if ((strArr[i] === openBracket) && (strArr[i + 1] === closeBracket)) {
          //delete valid brackets from incoming str
          strArr.splice(i, 2);
          (strArr.length === 0) ? infLoop = false: infLoop = true;
        }
      }
    }
  }
  return strArr.length === 0;
}
