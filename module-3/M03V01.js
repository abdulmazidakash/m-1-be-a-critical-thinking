//stateful and stateless

const counter = (amount)=>{
	let count = 0;

	count = count + amount;
	return count;
};

// console.log(counter(2));
// console.log(counter(4));

const counterObj = {
	count: 0,

	add(amount){
		this.count = this.count + amount;
		
	},

	print(){
		console.log(this.count);
	}
};

counterObj.add(2);
counterObj.add(2);
counterObj.print();