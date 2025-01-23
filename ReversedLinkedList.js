class ListNode{
	constructor(val, next = null){
		this.val = val;
		this.next = next;
	}
}
const linkedList = [5,4,3,2,1].reduce((acc, val) => new ListNode(val, acc), null);
const printList = (head) => {
	let result = "";
        let curNode = head;
        while (curNode !== null) {
            result += curNode.val + "--> ";
            curNode = curNode.next;
        }
        return result;
}
function getReversedLinkedList(head){
	let curNode = head;
	let prevNode = null;
	while(curNode){
		const next = curNode.next;
		curNode.next = prevNode;
		prevNode = curNode;
		curNode = next;
	}
	head = prevNode;
	return head;
}
console.log(printList(linkedList));
console.log(printList(getReversedLinkedList(linkedList)))