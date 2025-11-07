// const createCounter = ()=>{
// 	let count = 5;

// 	return (amount)=>{
// 		count = count + amount;
// 		return count;
// 	}
// };

// const counter = createCounter();

// console.log(counter(2));+
// console.log(counter(7));
// console.log(counter(7));

class Counter{
	constructor(count){
		this.count = count;
	}

	add(amount){
		this.count = this.count + amount;
	};

	print(){
		console.log(this.count);
	}
};

const counter1 = new Counter(0);

counter1.add(3);
counter1.add(4);

counter1.print();

const counter2 = new Counter(0);

counter2.add(2);
counter2.add(6);

counter2.print();