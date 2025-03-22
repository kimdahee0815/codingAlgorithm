class Character{
  constructor(c){
    this.val = c;
    this.next = {};
    this.isEnd = false;
  }
}

class Trie{
  constructor(){
    this.root = {};
  }

  insert(word){
    let current = this.root;
    for(let i=0; i<word.length; i++){
      if(i===0){
        if(!current[word[i]]){
          let newC = new Character(word[i]);
          current[word[i]] = newC;
        }
        if(i === word.length-1){
          current[word[i]].isEnd = true;
        }
        current = current[word[i]];
      }else{
        if(!current.next[word[i]]){
          let newC = new Character(word[i]);
          current.next[word[i]] = newC;
        }
        if(i === word.length-1){
          current.next[word[i]].isEnd = true;
        }
        current = current.next[word[i]];
      }
    }
  }

  search(word){
    let current = this.root;
    for(let i=0; i<word.length; i++){
      if(i===0){
        if(current[word[i]]){
          current = current[word[i]];
          if(i === word.length - 1){
            if(current.isEnd){
              return true;  
            }
          }
        }else{
          return false;
        }
      }else{
        if(current.next[word[i]]){
          current = current.next[word[i]];
          if(i === word.length - 1){
            if(current.isEnd){
              return true;  
            }
          }
        }else{
          return false;
        }
      }
    }
    return false;
  }

  startsWith(prefix){
    let current = this.root;
    for(let i=0; i<prefix.length; i++){
      if(i===0){
        if(current[prefix[i]]){
          current = current[prefix[i]];
        }else{
          return false;
        }
      }else{
        if(current.next[prefix[i]]){
          current = current.next[prefix[i]];
        }else{
          return false;
        }
      }
    }
    return true;
  }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apples");
trie.insert("applet");
trie.insert("applesauce");
console.log(trie.search("apple")); //true
console.log(trie.search("appled"));
console.log(trie.startsWith("app")); //true
console.log(trie.startsWith("apple")); //true
console.log(trie.startsWith("apples")); //true
console.log(trie.startsWith("applet")); //true
console.log(trie.startsWith("applesauce")); //true
console.log(trie.startsWith("appl")); //true
console.log(trie.startsWith("ap")); //true
console.log(trie.startsWith("a")); //true
console.log(trie.startsWith("b")); //false
console.log(trie.startsWith("c")); //false
console.log(trie.startsWith("d")); //false
console.log(trie.search("appl")); //false
