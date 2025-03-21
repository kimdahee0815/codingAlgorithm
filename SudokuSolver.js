const nums = [1,2,3,4,5,6,7,8,9];
function solveSudoku(board){
  for(let i =0;i<board.length; i++){
    for(let j = 0; j<board[0].length; j++){
      if(board[i][j] === "."){
        DFSSolveSudoku(board, i, j, [0]);
      }
      board[i][j] = String(board[i][j]);
    }
  }
  return board;
}
function DFSSolveSudoku(board, row, column, res){
  if(board[row][column] !== "."){ //if the cell is not empty
    if(column+1 >= 9){
      if(row+1 >= 9) {
        res[0] = 1;
        return;
      }
      else DFSSolveSudoku(board, row+1, 0, res);
    }else DFSSolveSudoku(board, row, column+1, res);
  }
  if(board[row][column] !== "." && typeof board[row][column] === "number" || board[row][column] === "."){
    if(res[0] === 1){
      return;
    }else{
      for(let num of nums){ //try all numbers
        if(res[0] === 1){
          return;
        }
        let success = true;
        for(let n of nums){ //check if the number is valid
          let boxX = row - (row%3);
          let boxY = column - (column%3);
          let quotient = Math.floor((n-1)/3);
          let remainder = (n-1)%3;
          if(Number(board[row][n-1])===num || Number(board[n-1][column])===num || Number(board[boxX+quotient][boxY+remainder])===num){
            success = false;
            break;
          }
        }
        if(success){
          board[row][column] = num;
          if(column+1 >= 9){
            if(row+1>=9) {
              res[0] = 1;
              return;
            }
            else DFSSolveSudoku(board, row+1, 0, res);
          }else DFSSolveSudoku(board, row, column+1, res);
        }else{
          if(typeof board[row][column] === "number"){
            board[row][column] = ".";
          }
        }
      } 
    }
  }
  
  if(res[0] === 1){
    return board;
  }else{
    if(typeof board[row][column] === "number"){
      board[row][column] = ".";
    }
  }
}

console.log(solveSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]])); 
  // [["5","3","4","6","7","8","9","1","2"],
  // ["6","7","2","1","9","5","3","4","8"],
  // ["1","9","8","3","4","2","5","6","7"],
  // ["8","5","9","7","6","1","4","2","3"],
  // ["4","2","6","8","5","3","7","9","1"],
  // ["7","1","3","9","2","4","8","5","6"],
  // ["9","6","1","5","3","7","2","8","4"],
  // ["2","8","7","4","1","9","6","3","5"],
  // ["3","4","5","2","8","6","1","7","9"]]
console.log(solveSudoku([
  [".",".","9","7","4","8",".",".","."],
  ["7",".",".",".",".",".",".",".","."],
  [".","2",".","1",".","9",".",".","."],
  [".",".","7",".",".",".","2","4","."],
  [".","6","4",".","1",".","5","9","."],
  [".","9","8",".",".",".","3",".","."],
  [".",".",".","8",".","3",".","2","."],
  [".",".",".",".",".",".",".",".","6"],
  [".",".",".","2","7","5","9",".","."]])); 
  // [["5","1","9","7","4","8","6","3","2"],
  // ["7","8","3","6","5","2","4","1","9"],
  // ["4","2","6","1","3","9","8","7","5"],
  // ["3","5","7","9","8","6","2","4","1"],
  // ["2","6","4","3","1","7","5","9","8"],
  // ["1","9","8","5","2","4","3","6","7"],
  // ["9","7","5","8","6","3","1","2","4"],
  // ["8","3","2","4","9","1","7","5","6"],
  // ["6","4","1","2","7","5","9","8","3"]]
