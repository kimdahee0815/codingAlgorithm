class LinkedListNode{
	constructor(val, next = null){
		this.val = val;
		this.next = next;
	}
}
const linkedList = [5,4,3,2,1].reduce((acc, val) => new LinkedListNode(val, acc), null);
const linkedList2 = [5,3].reduce((acc, val) => new LinkedListNode(val, acc), null);

function flattenMultiLevelDoublyLinkedList(head){
	let currentNode = head;
	let spinPointNode = [];
	let spinPointNextNode = [];
	while(currentNode){
		if(currentNode.child !== null){
			spinPointNode.push(currentNode); //child로 빠지는 시점의 node를 spinPointNode에 저장
			spinPointNextNode.push(currentNode.next); //child로 빠지는 시점의 node의 다음 노드를 spinPointNextNode에 저장
			currentNode.next = null; //child로 빠질 때 그 다음 노드(next node)와의 연결 끊기
			currentNode = currentNode.child; //childNode로 이동
			
		}else{
			if(currentNode.next === null){ //노드의 끝 도착
				if(spinPointNextNode.length === 0){ //만약 spinPointNextNode 배열에서 뽑을 노드가 더 이상 없으면 break해서 빠져나오기
					break;
				}
				const nextNode = spinPointNextNode.pop(); //그 다음 노드를 저장해둔 spinPointNextNode 배열에서 뽑기
				currentNode.next = nextNode; //현재 노드의 다음 노드를 spinPointNextNode 배열에서 뽑은 노드와 연결하기
				
			}
			currentNode = currentNode.next; //다음 노드로 이동
		}
	}
	return head;
}