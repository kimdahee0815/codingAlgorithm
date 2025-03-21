class Monarchy{
  constructor(name){
    this.emperor = name;
    this.succession = {[name]:[]};
    this.deathList = {};
  }

  birth(child, parent){
    if (!this.succession[parent]){
      this.succession[parent] = [];
    }
    this.succession[parent].push(child);
  }

  death(name){
    this.deathList[name] = true;
  }

  getOrderOfSuccession(){
    let successionTree = [];
    let queue = [this.emperor];
    while(queue.length > 0){
      if(this.succession[queue[0]]){
        queue.splice(1, 0, ...this.succession[queue[0]]);
      }
      let key = queue.shift();
      if(!this.deathList[key]){
        successionTree.push(key);
      }
    }
    return successionTree;
  }
}

let monarch = new Monarchy("Jake");
monarch.birth("Catherine", "Jake");
monarch.birth("Tom", "Jake"); 
monarch.birth("Celine", "Jake");
monarch.birth("Peter", "Celine"); 
monarch.birth("Jane", "Catherine");
monarch.birth("Farah", "Jane");
monarch.birth("Mark", "Catherine");
console.log(monarch.getOrderOfSuccession()); //["Jake", "Catherine", "Jane", "Farah", "Mark", "Tom", "Celine", "Peter"]
monarch.death("Jane");
monarch.death("Jake");
console.log(monarch.getOrderOfSuccession()); //["Jake", "Catherine", "Farah", "Mark", "Tom", "Celine", "Peter"]

let monarch2 = new Monarchy("Tom");
monarch2.birth("Diana", "Tom");
monarch2.birth("Elizabeth", "Tom");
monarch2.birth("Charles", "Tom");
monarch2.birth("William", "Charles");
monarch2.birth("Harry", "Charles");   
monarch2.birth("George", "William");
monarch2.birth("Charlotte", "William");
monarch2.birth("Louis", "William");
monarch2.birth("Archie", "Harry");
monarch2.birth("Lilibet", "Harry");
monarch2.birth("Lili", "Harry");
monarch2.birth("Aiden", "Diana");
console.log(monarch2.getOrderOfSuccession()); 
monarch2.death("William");
monarch2.death("Harry");
console.log(monarch2.getOrderOfSuccession()); //["Tom", "Diana", "Aiden", "Elizabeth", "Charles", "George", "Charlotte", "Louis", "Archie", "Lilibet", "Lili"]]
monarch2.death("Tom");
console.log(monarch2.getOrderOfSuccession()); //["Diana", "Aiden", "Elizabeth", "Charles", "George", "Charlotte", "Louis", "Archie", "Lilibet", "Lili"]]
monarch2.death("Diana");
console.log(monarch2.getOrderOfSuccession()); //["Aiden", "Elizabeth", "Charles", "George", "Charlotte", "Louis", "Archie", "Lilibet", "Lili"]]