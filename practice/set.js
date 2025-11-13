// remove duplicate =================

const arr = ['apple', 'banana', 'orange', 'apple'];

// forEach method ====================
const removeDuplicate = (arr) =>{
	let uniqueArr = [];

	arr.forEach(element => {
		if(!uniqueArr.includes(element)){
			uniqueArr.push(element);
		};
	});
	return uniqueArr;
};

console.log(removeDuplicate(arr));


// for of loop ================
const removeDuplicateForOfLoop = (arr) =>{
	let uniqueArr = [];

	for(let ar of arr){
		if(!uniqueArr.includes(ar)){
			uniqueArr.push(ar);
		}
	};
	return uniqueArr;
};

console.log(removeDuplicateForOfLoop(arr));

// set method ================

const removeDuplicateSetMethod = (arr) =>{
	let uniqueArr = new Set(arr);

	return Array.from(uniqueArr);
};

console.log(removeDuplicateSetMethod(arr));