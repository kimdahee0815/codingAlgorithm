// CoderByte
function LongestWord(sen) {
    // code goes here
    let noPunctuationArr = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    const wordArr = sen.split(" ");
    const wordArrMapNum = noPunctuationArr.map((word) => word.length);
    const foundIndex = wordArrMapNum.indexOf(Math.max(...wordArrMapNum));
    sen = wordArr[foundIndex];
    return sen;
}

// keep this function call here
console.log(LongestWord("fun&!! time"));
