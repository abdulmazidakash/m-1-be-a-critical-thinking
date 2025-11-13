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

// console.log(count);

const votes = ["A", "B", "A", "C", "A", "B", "A", "C", "B", "A"];

// let table = {};


// 	for (let key in table) {
// 	console.log(`${key}: ${table[key]}`);
// 	}

const vote = votes.reduce((table, vote)=>{
	// if(table[vote]){
	// 	table[vote] = table[vote] + 1;
	// }else{
	// 	table[vote] = 1;
	// };

	table[vote] = (table[vote] || 0) + 1;
	return table;
}, {});

// console.log(vote);
const surveyResponses1 = ["yes","no","yes","maybe","yes","no"];

const vote1 = surveyResponses1.reduce((table, response, index) => {
//   console.log(`Iteration ${index}: before ->`, table);
  // safe increment:
  table[response] = (table[response] || 0) + 1;
//   console.log(`Iteration ${index}: after  ->`, table);
//   console.log('---');
  return table;
}, {});

// console.log('Final vote:', vote);

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const totalSalesByCategory = sales.reduce((table, sale)=>{
	const { category, price, quantity } = sale;

	if(!table[category]){
		table[category] = { totalRevenue: 0, itemCount: 0};
	};

	table[category].totalRevenue += price * quantity;
	table[category].itemCount += quantity;

	return table;
}, {});

// console.log(totalSalesByCategory);

const users1 = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts1 = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

const postByUserId = posts1.reduce((table, post)=>{
	const { userId } = post;
	if(!table[userId]){
		table[userId] = [];
	}
	table[userId].push(post);

	return table;
}, {});

// console.log(postByUserId);
const userIdWithPost = users1.map((user)=>{
	// console.log(user);

	return { ...user, post: postByUserId[user.id] || []};
});

// console.log(JSON.stringify(userIdWithPost));

// const lookupTable1 = posts1.reduce((table, post)=>{
// 	console.log(post);
// 	table[post.id] = post;
// 	return table;
// }, {});

// console.log(lookupTable1);

// const count1 = posts1.reduce((table, post)=>{
// 	const { userId } = post;
// 	// console.log(userId);
// 	if(table[userId]){
// 		table[userId] = table[userId] + 1;
// 	}else{
// 		table[userId] = 1;
// 	};
// 	return table;
// }, {});

// console.log(count1);

const events1 = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

const interval = 30 * 60 * 1000;

const getBinningTimeStamp1 = (timestamp) =>{
	// console.log('time:--->',timestamp);
	const date = new Date(timestamp);
	const floored = Math.floor(date.getTime() / interval) * interval;
	// console.log('floored time: --->',floored);

	return new Date(floored).toISOString();
};

// console.log(getBinningTimeStamp("2025-10-22T10:01:00Z"));

const binnedData1 = events1.reduce((acc, event)=>{
	const bin = getBinningTimeStamp1(event.timestamp);

	if(!acc[bin]){
		acc[bin] = { total: 0};
	}
	acc[bin].total += 1;

	return acc;

}, {});

console.log('binned Data: ===>', binnedData1);