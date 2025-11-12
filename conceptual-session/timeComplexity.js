// console.log('time complexity');

// big O(1) ----------------------------
function bigOOne(arr){
	return arr[1];
};
// console.log(bigOOne(['a', 'b', 'c']));

// big O(n) --------------------------
function bigON(arr){
	for(let i of arr){
		console.log(i);
	}
};


// big O(n^2) ------------------------
function bigONSquare(arr){
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){
			console.log('result i: --->',arr[i],'result j: --->', arr[j]);
		}
	}
};

// bigONSquare(['a', 'b', 'c']);

// big O(logn) -------------------------
function targetNumber(n){
	while(n > 1){
		console.log(n);
		n = Math.floor(n/2);
	}
};

targetNumber(16);