class Stack{
	constructor(){
		this.items = [];
	}

	// 0(1)
	push(value){
		this.items.push(value);
	}

	// 0(1)
	pop(){
		if(this.isEmpty()){
			return undefined;
		};

		return this.items.pop();
	}

	// 0(1)
	peek(){
		if(this.isEmpty()){
			return undefined;
		};
		return this.items[this.items.length - 1];

	}

	// 0(1)
	isEmpty(){
		return this.items.length === 0;
	};

	// 0(n)
	print(){
		console.log(this.items.slice().reverse().join(' - '));
	}
};

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());