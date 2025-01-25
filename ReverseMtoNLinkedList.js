class LinkedListNode{
	constructor(val, next = null){
		this.val = val;
		this.next = next;
	}
}
const linkedList = [5,4,3,2,1].reduce((acc, val) => new LinkedListNode(val, acc), null);
const printList = (head) => {
	let result = "";
        let curNode = head;
        while (curNode !== null) {
            result += curNode.val + "--> ";
            curNode = curNode.next;
        }
        return result;
}
function reverseMtoNLinkedList(head, m, n){
	let curNode = head;
	let prevNode = null;
	let startNode = null;
	let finishNode = null;
	let count = 1;
	while(curNode !== null){
		let nextNode = curNode.next;
		if(m <= count && count <= n && m < n){
			if(count === m){
				curNode.next = null;
				finishNode = curNode;
			}else if(count === n){
        curNode.next = prevNode;
        if(startNode !== null){
          startNode.next = curNode;
        }
			  finishNode.next = nextNode;
        prevNode = finishNode;  
        if(m === 1){
          head = curNode;
        }
        curNode = nextNode;
        count++;
				continue;
			}else{
				curNode.next = prevNode;
			}
		}else{
			startNode = curNode;
		}
		prevNode = curNode;
		curNode = nextNode;
		count++;
	}
	return head;
}
console.log(printList(linkedList));
//console.log(printList(reverseMtoNLinkedList(linkedList, 2,4)));
//console.log(printList(reverseMtoNLinkedList(linkedList, 1,5)));
//console.log(printList(reverseMtoNLinkedList(linkedList, 1,4)));
console.log(printList(reverseMtoNLinkedList(linkedList, 2,5)));