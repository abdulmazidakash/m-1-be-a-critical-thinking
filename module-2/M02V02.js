// const obj = {
// 	nextLevel: { courseId: 'Level2'},
// 	'programming-hero': {courseId: 'PH-001'},
// };

// console.log(obj["programming-hero"]);

// const obj = {};

// obj.nextLevel = {courseId: 'Level2'};
// obj[true] = { courseId: 'boolean-true'};

// console.log(obj);

// const course1 = { name: 'Programming hero'};
// const course2 = { name: 'Next Level Web Development'};

// const obj = {};

// obj[course2] = { courseId: 'level2'};
// obj[course1] = { courseId: 'level1'};

// console.log(obj);

// const map = new Map();
// // console.log(map);
// map.set(course1, {courseId: 'level1'});
// map.set(course2, {courseId: 'level2'});

// console.log(map);
// console.log(map.size);
// map.delete(course1);
// console.log(map);
;
// console.log(map.has(course1));
// map.forEach((value, key)=> console.log('key:',key, 'value:', value));
// map.forEach((value, key)=> (key.name = 'shohoz shorol simple ' + key.name));
// console.log(map);

// console.log([...map.keys()]);
// console.log([...map.values()]);
// for(let key of map.keys()){
// 	// console.log(key);
// 	key.name = 'shohoz shorol simple ' + key.name;
// };

// console.log(map.entries());

// const course1 = { name: 'Programming hero'};
// const course2 = { name: 'Next Level Web Development'};

// // const course = [
// // 	['Programming hero', 'level-1'],
// // 	['Next Level Web Developer', 'level-2'],
// // ];
// const course = [
// 	[course1, 'level-1'],
// 	[course2, 'level-2'],
// ];

// const map = new Map(course);
// console.log(map);

const rawApiData = [
  {
    id: "p-001",
    productName: "Quantum Laptop",
    category: "Electronics",
    price: 1200,
    rating: 4.8,
    stock: 15,
  },
  {
    id: "p-002",
    productName: "The Art of Code",
    category: "Books",
    price: 45,
    rating: 4.5,
    stock: 100,
  },
  {
    id: "p-003",
    productName: "Cyber Hoodie",
    category: "Clothing",
    price: 80,
    rating: 4.7,
    stock: 50,
  },
  {
    id: "p-004",
    productName: "4K Drone",
    category: "Electronics",
    price: 650,
    rating: 4.3,
    stock: 20,
  },
  {
    id: "p-005",
    productName: "Basic JavaScript",
    category: "Books",
    price: 25,
    rating: 3.8,
    stock: 200,
  },
  {
    id: "p-006",
    productName: "Smart Watch",
    category: "Electronics",
    price: 250,
    rating: 4.7,
    stock: 70,
  },
  {
    id: "p-007",
    productName: "Classic T-Shirt",
    category: "Clothing",
    price: 30,
    rating: 4.2,
    stock: 300,
  },
  {
    id: "p-008",
    productName: "Design Patterns",
    category: "Books",
    price: 55,
    rating: 4.9,
    stock: 80,
  },
  {
    id: "p-009",
    productName: "VR Headset",
    category: "Electronics",
    price: 400,
    rating: 4.6,
    stock: 30,
  },
  {
    id: "p-010",
    productName: "USB-C Cable",
    category: "Electronics",
    price: 15,
    rating: 4.0,
    stock: 500,
  },
  {
    id: "p-011",
    productName: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 300,
    rating: 4.7,
    stock: 40,
  },
  {
    id: "p-012",
    productName: "Algorithms Explained",
    category: "Books",
    price: 50,
    rating: 4.5,
    stock: 60,
  },
];

//? output => [{name: 'phone'}, {name: 'smart watch}];

//*process
//TODO Filter => Electronics
//TODO Sort by => Rating
//TODO Slice => first 3 (top 3)
//TODO Map => transform object shape to {name: "name"}

// const topElectronicsProducts = rawApiData
// .filter((item)=> item.category === 'Electronics')
// .sort((a, b)=> b.rating - a.rating)
// .slice(0, 3)
// .map(item => {
// 	return { name: item.productName}
// })

// console.log(topElectronicsProducts);

// const numbers = [2, 23, 54, 64, 35];
// const fruits = ['Banana', 'Apple', 'Mango', 'cherry', 'orange'];

// console.log(numbers);
// const sortedNumber = numbers.sort();
// const sortedNumber = numbers.sort((a, b)=> a - b);
// console.log(sortedNumber);
// fruits.sort();
// fruits.sort((a, b)=> a.localeCompare(b));
// console.log(fruits);

// const arr = [3, 3, 4, 5, 56, 67, [4, 2,[3,6, [4,5], 3]]];
// console.log(arr);
// // const flatArr = arr.flat(2);
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);

// const tagFromPosts = [
// 	['javaScript', 'react', 'css'],
// 	['node', 'express'],
// 	['css', 'html', ,'react']
// ];

// const filterTags = [new Set(tagFromPosts.flat())];
// console.log(filterTags);

// const numbers = [2, 4, 4, 5, 6];
// const hasEvenNumber = numbers.some((number)=> number % 2 === 0);
// console.log(hasEvenNumber);

// const currentUserRoles = ['user', 'editor', 'admin'];
// const featureAccessRoles = ['admin', 'manager'];

// const canAccess = currentUserRoles.some((role)=>
// 	featureAccessRoles.includes(role));
// console.log(canAccess);

// const arr = Array.from({ length: 5});
// const arr = Array.from({ length: 5}).fill(0);
// const arr = Array.from({ length: 5}).fill(null);
// const arr = Array.from({ length: 5}, (_, i)=> i);
// const arr = Array.from([1, 3, 4], (value, i)=> value * value);
// console.log(arr);

const range = (start, stop, step)=>
	Array.from(
		{length: Math.ceil((stop - start) / step)},
		(_, i)=> start + i * step
	);

	console.log(range(0, 11, 2));