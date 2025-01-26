function countMentions(numberOfUsers, events){
  const answer = new Array(numberOfUsers).fill(0);
  let getBackOnlineObj = {};
  for(let i = 0; i < numberOfUsers;i++){
    getBackOnlineObj[i] = 0;
  }
  let allNum = 0;
  let mentionedId = "";
  let onlineList = "";
  events = events.sort(function(a,b ){
    if(a[1] === b[1]){
      if(a[0] === 'OFFLINE'){
        return -1;
      }
      return 1;
    }else{
      return a[1] - b[1]
    }
  })

  for(let event of events){
    let kind = event[0];
    let second = event[1];
    let ids = event[2];
    if(kind === "MESSAGE"){
      if(ids === "HERE"){
        Object.entries(getBackOnlineObj).forEach(keyValPair => {if(Number(keyValPair[1]) <= Number(second)){getBackOnlineObj[keyValPair[0]] = 0; }})
        let onlineCandidates = Object.keys(getBackOnlineObj).map(key => {if(Number(getBackOnlineObj[key]) === 0){return key}}).filter(el => el !== "undefined");
        onlineList += onlineCandidates.join(" ") + " "

      }else if(ids === "ALL"){
        allNum++;
      }else{
        let regex = /[a-z]/g
        ids = ids.replace(regex, "");
        mentionedId += ids + " "
      }
    }else if(kind ==="OFFLINE"){
      let getBackOnline = Number(second) + 60;
      getBackOnlineObj[ids] = getBackOnline;
    }
  }
  let mentionedUser = mentionedId.split(" ")
  for(let i = 0; i < mentionedUser.length; i++){
    if(mentionedUser[i] !== ""){
      answer[mentionedUser[i]] += 1;
    }
  }
  for(let i = 0; i < numberOfUsers; i++){
    answer[i] += allNum;
  }
  let onlineListArr = onlineList.trim().split(" ")
  for(let i = 0 ; i < onlineListArr.length; i++){
    if(onlineListArr[i] !== ""){
      answer[onlineListArr[i]] += 1;
    }
  }
  return answer;
}
console.log(countMentions(2, [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]))
console.log(countMentions(2, [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]))
console.log(countMentions(2, [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]))
console.log(countMentions(3, [["MESSAGE","2","HERE"],["OFFLINE","2","1"],["OFFLINE","1","0"],["MESSAGE","61","HERE"]]))