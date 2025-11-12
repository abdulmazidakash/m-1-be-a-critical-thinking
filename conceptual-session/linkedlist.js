class Node{
	constructor(value){
		this.value = value;
		this.next = null;
	}
};

class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	};

	// append ============
	append(value){
		const newNode = new Node(value);
		console.log('New Node Append: --->', newNode);
		if(this.head === null){
			this.head = newNode;
			this.tail = newNode;
		}else{
			this.tail.next = newNode;
			this.tail = newNode;
		};
		this.length++;
		return this;
	};

	// prepend ===============
	prepend(value){
		const newNode = new Node(value);
		console.log('New Node Prepend:--->', newNode);
		if(this.head === null){
			this.head = newNode;
			this.tail = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		};
		this.length++;
		return this;
	};

	// insert =============
	insert(value, index){

		if(index < 0 || index > this.length){
			console.log('Invalid Index');
			return;
		}

		if(index === 0){
			return this.prepend(value);
		}
		if(index === this.length){
			return this.append(value);
		}

		const newNode = new Node(value);
		console.log('New Node Insert:--->', newNode);
		// const leadingNode = null;
		const leadingNode = this.traverseToIndex(index - 1);
		const holdingNode = leadingNode.next;
		leadingNode.next = newNode;
		newNode.next = holdingNode;

		this.length++;
	};

	traverseToIndex(index){
		let count = 0;
		let currentNode = this.head; // 0
		
		while(count !== index){
			currentNode = currentNode.next;
			count++;
		};
		return currentNode;
	};

	// remove ============
	remove(index){
		if(index < 0 || index > this.length){
			console.log('invalid index');
			return;
		};

		if(index === 0){
			this.head = this.head.next; // H = A, C = H,N
			
			if(this.length === 1){
				this.tail = null;
			};
			this.length--;
		};
		const leadingNode = this.traverseToIndex(index - 1);
		const removeNode = leadingNode.next ; // C
		leadingNode.next = removeNode.next ; // A
		console.log('Remove Node: --->', removeNode);
		if(leadingNode.next === null){
			this.tail = leadingNode;
		};
		this.length--;
	}


	// print ============
	print(){
		let node = this.head;
		let str = '';

		while(node){
			str += node.value + ' => ';
			node = node.next;
		}
		console.log(str + 'Null');
	}
};

const linkedList = new LinkedList();

linkedList.append('a');
linkedList.append('b');
linkedList.prepend('a');
// linkedList.print();
// linkedList.insert(1, 'c');
linkedList.insert('c', 1);
linkedList.print();
linkedList.remove(1);
linkedList.print();