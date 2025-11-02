// const startTime = performance.now();
// console.time('task')
// for(let i = 0; i <= 500; i++){
// 	console.log(i);
// };

// const endTime = performance.now();

// console.log(`this code took ${endTime - startTime} ms`);
// console.timeEnd('task')

// const firstArray = [];
// const secondArray = [];

// for(let i = 0; i<=5000; i++){
// 	if(i <= 3000){
// 		firstArray.push(i);
// 	};
// 	secondArray.push(i);
// };

// console.log('first array', firstArray.length);
// console.log('second array', secondArray.length);

// console.time('task');
// console.timeEnd('task');
// console.time('map1');
// const firstUserList = firstArray.map((number)=> ({userId: number}));
// console.timeEnd('map1');

// console.time('map2');
// const secondUserList = secondArray.map((number)=> ({userId: number}));
// console.timeEnd('map2');

// console.time('find');

// const user = secondUserList.find((user)=> user.userId === 500000);
// const user = secondUserList[400000]

// console.timeEnd('find');

// const set = new Set();
// set.add('apple');
// set.add('banana');
// set.add('mango');
// set.add('apple');

// console.log(set);
// console.log(set.size);

// const mezba = { userName: 'Mezba'};
// const mizan = { userName: 'Mizan'};
// const tanmoy = { userName: 'Tanmoy'};

// const set = new Set();
// set.add(mizan);
// set.add(mezba);
// set.add(tanmoy);
// set.add(mizan);

// console.log(set);

// const arr = ['apple', 'mango', 'banana', 'apple'];
// const set = new Set(arr);
// console.log(set);

// const test = set.forEach((value)=> console.log(value));
// console.log(test);
// const setArray = Array.from(set);
// console.log(setArray);
// console.log(set.has('orange'));
// console.log(set.delete('orange'));
// setArray.push('orange');
// console.log(arr);
// console.log(setArray);
// console.log(set.delete('banana'));
// console.log(set);
const arr = ['apple', 'mango', 'banana', 'apple'];

const removeDupArray = (arr)=>{
	const newArr = [];

	arr.forEach((element) => {
		if(!newArr.includes(element)){
			newArr.push(element);
		}
	});
	return newArr;
};

console.log(removeDupArray(arr));

const removeDupSet = (arr)=>{
	const set = new Set(arr);

	return Array.from(set);
};
console.log(removeDupSet(arr));



