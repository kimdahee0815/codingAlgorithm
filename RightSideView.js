/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let answer = [];
  let tmp = [];
  let height = 0;
  DFS(root, height, answer, tmp);
  return answer;
};

function DFS(root, height, answer, tmp){
  if(root){
      tmp.push(root.val);
      if(!root.left && !root.right){
          if(answer.length === 0){
             tmp.forEach(el => answer.push(el));
          }else{
              if(answer.length > tmp.length){
                  answer.splice(0, tmp.length);
                  for(let i = 0; i < tmp.length; i++){
                      answer.splice(i, 0, tmp[i])
                  }
              }
              else{
                  answer.splice(0, answer.length);
                  for(let i = 0; i < tmp.length; i++){
                      answer.push(tmp[i])
                  }
              }
          }
          return answer;
      }
      
      DFS(root.left, height+1, answer, tmp);
      if(answer.length !== 0){
          tmp = tmp.slice(0,height+1)
      }
      DFS(root.right, height+1, answer, tmp);
  }else{
      return answer;
  }
}