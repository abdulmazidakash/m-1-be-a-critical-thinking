//

function iSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        // console.log(key);
        
        let j = i -1;
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j--;
        };
        arr [ j + 1] = key;
    };
    return arr;
};

// const nums = [2, 5, 8, 1, 4];
// console.log(iSort(nums))

function binary(arr, target){
	let left = 0;
	let right = arr.length -1;

	while(left <= right){
		let mid = Math.floor((left - right) / 2);

		if(arr[mid] === target){
			return mid;
		} else if(arr[mid] < target){
			left = mid + 1;
		}else{
			right = mid -1;
		}
	};
	return -1;
};

