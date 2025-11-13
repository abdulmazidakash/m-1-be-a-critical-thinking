// const arr = Array.from({length: 5}).fill(0);
const arr = Array.from({length: 5}, (_, i) => i);

// console.log(arr);
const range = (start, stop, step) => Array.from(
	{length: Math.ceil((stop - start) / step)}, 
	(_, i)=> start + i * step);

// console.log(range(0, 10, 1));

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];

// const subTotal = cartItems.reduce((subTotal, product)=>{
// 	console.log('Subtotal: --->', subTotal, 'Product: --->', product);
// 	return subTotal + product.price * product.quantity;
// }, 0);

const subTotal = cartItems.reduce((subTotal, product)=>{
	// console.log(subTotal, product);
	const addSubTotalAndPrice = subTotal + product.price ;
	// console.log('plus sub total: --->', addSubTotalAndPrice);
	const multiplySubTotal = addSubTotalAndPrice * product.quantity;
	// console.log('multiply sub total: --->', multiplySubTotal);
	return multiplySubTotal;
}, 0)
// const subTotal = cartItems.reduce(
//   (sum, product) => sum + product.price * product.quantity,
//   0
// );

// console.log(subTotal);

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const topScorer = players.reduce((bestPlayer, player)=>{

	// console.log('Best player: --->', bestPlayer);
	// console.log('player: --->', player);
	// console.log('==============');
	if(bestPlayer.score > player.score){
		return bestPlayer;
	};
	return player;
}, players[0]);

// console.log(topScorer);

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupTable = postsArray.reduce((table, post)=>{
	// console.log(table, post);
	table[post.id] = post;

	return table;
}, {});

// console.log(lookupTable);

const find = postsArray.find((post)=> post.id === 'p-102');

// console.log(find);

const singlePost = lookupTable['p-102'];
// console.log(singlePost);

for(let post in lookupTable){
	// console.log(lookupTable[post]);
	// console.log(post);
};


const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const count = surveyResponses.reduce((table, response)=>{
	// console.log(table, response);
	// if(table[response]){
	// 	table[response] = table[response] + 1;
	// }else{
	// 	table[response] = 1;
	// };

	table[response] = (table[response] || 0) + 1;

	return table;
}, {});

console.log(count);

