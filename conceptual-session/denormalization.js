//========== student + snakes basket example

// Students Table
const students = [
  { id: 1, name: "Akash" },
  { id: 2, name: "Rafi" }
];

// Snacks Table
const snacks = [
  { id: 101, name: "Burger", studentId: 1 },
  { id: 102, name: "Juice", studentId: 2 },
  { id: 103, name: "Chips", studentId: 1 },
  { id: 104, name: "orange", studentId: 3 }
];

const mainBasket = snacks.reduce((basket, snack)=>{
	// console.log('basket:--->', basket, 'snack:--->', snack);
	const { studentId } = snack;

	if(!basket[studentId]){
		basket[studentId] = [] ;
	}
	basket[studentId].push(snack);
	
	// console.log(basket);
	return basket;
}, {});

// console.log(mainBasket);

const studentWithSnaks = students.map(student =>({
	...student,
	basket: mainBasket[student.id] || []
}));

console.log(studentWithSnaks);