# 🧠 **Critical Thinker — JavaScript Practice Notebook**

A hands-on learning project for mastering **JavaScript logic**, **problem-solving**, and **conceptual clarity** through step-by-step examples and challenges.

---

## 🗂 **Updated Project Structure**

```
CRITICAL-THINKER/
├── conceptual-session/
│   ├── binning.js
│   ├── denormalization.js
│   ├── linkedlist.js
│   ├── reducePractice.js
│   ├── sort.js
│   ├── timeComplexity.js
│
├── data-structure/
│   ├── arrayOfObjects.js
│   ├── nestedArray.js
│   ├── objectManipulation.js
│   ├── mapSetWeakMap.js
│   ├── destructuring.js
│
├── algorithm/
│   ├── filterMapReduce.js
│   ├── findMaxMin.js
│   ├── groupByCategory.js
│   ├── frequencyCounter.js
│   ├── totalRevenueByCategory.js
│   ├── recursion.js
│
├── module-2/
│   ├── M02V02.js
│   ├── M02V05.js
│   ├── M02V06.js
│   ├── M02V07.js
│   ├── M02V08.js
│   ├── M02V09.js
│   ├── M02V10.js
│
├── module-3/
│
├── module-4/
│
├── practice/
│   ├── index.js
│   ├── map.js
│   ├── set.js
│   ├── reduce.js
│   ├── filter.js
│   ├── combine.js
│
└── README.md
```

---

## 📖 **Notebook-Style Learning Topics**

### 🔹 1. **Array of Objects (arrayOfObjects.js)**

👉 Practice reading, combining, and transforming arrays.

**Example:**

```js
const players = [
  { name: "Sakib", runs: 45 },
  { name: "Tamim", runs: 62 },
  { name: "Mushfiq", runs: 38 }
];

const totalRuns = players.reduce((sum, player) => sum + player.runs, 0);
console.log("Total Runs:", totalRuns);
```

🧠 *Concepts:* reduce(), iteration, accumulation

---

### 🔹 2. **Reduce for Counting (frequencyCounter.js)**

👉 Count how many times each response appears.

**Example:**

```js
const surveyResponses = ["Yes", "No", "Yes", "Maybe", "No", "Yes"];

const count = surveyResponses.reduce((table, response) => {
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});

console.log(count); 
// { Yes: 3, No: 2, Maybe: 1 }
```

🧠 *Concepts:* conditional counting, default values, accumulator object

---

### 🔹 3. **Revenue Calculation (totalRevenueByCategory.js)**

👉 Group by category and calculate total price + quantity.

**Example:**

```js
const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 }
];

const totalSalesByCategory = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  if (!table[category]) table[category] = { totalRevenue: 0, itemCount: 0 };
  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table;
}, {});

console.log(totalSalesByCategory);
```

🧠 *Concepts:* grouping, reduce(), nested objects

---

### 🔹 4. **Combination Practice (combine.js)**

👉 Merge two arrays of objects using a shared key.

**Example:**

```js
const users = [
  { id: 1, name: "Akash" },
  { id: 2, name: "Sakib" }
];

const scores = [
  { id: 1, score: 90 },
  { id: 2, score: 75 }
];

const combined = users.map(user => ({
  ...user,
  ...scores.find(score => score.id === user.id)
}));

console.log(combined);
// [{id:1, name:"Akash", score:90}, {id:2, name:"Sakib", score:75}]
```

🧠 *Concepts:* map(), find(), object spread

---

### 🔹 5. **Sorting (sort.js)**

👉 Compare bubble sort, selection sort, and built-in sort.

**Example:**

```js
const numbers = [4, 2, 9, 1, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5, 9]
```

🧠 *Concepts:* time complexity (O(n log n)), sorting logic

---

### 🔹 6. **Linked List (linkedlist.js)**

👉 Understand node creation and traversal.

---

### 🔹 7. **Time Complexity (timeComplexity.js)**

👉 Learn how loop depth affects performance.

---

### 🔹 8. **Map and Set (mapSetWeakMap.js)**

👉 Practice handling unique data and key-value storage.

**Example:**

```js
const numbers = [1, 2, 3, 2, 1];
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3]
```

---

## 🧠 **Practice Challenges**

✅ Write a program to find **top 3 highest-priced items**.
✅ Count how many items in each **category**.
✅ Combine two arrays and calculate **total score** for each user.
✅ Write custom **groupBy()** function using `reduce()`.
✅ Find **total salary** of employees by department.
✅ Flatten a **nested array** using `reduce()`.

---

## 🧩 **Notebook Practice Tips**

| Concept  | Try This                | File                        |
| -------- | ----------------------- | --------------------------- |
| Reduce   | Count elements in array | `frequencyCounter.js`       |
| Map      | Transform object keys   | `map.js`                    |
| Filter   | Get only items > 50     | `filter.js`                 |
| Combine  | Merge user data         | `combine.js`                |
| Grouping | Group by category       | `totalRevenueByCategory.js` |

---

## 🧮 **Run Examples**

```bash
node ./algorithm/frequencyCounter.js
node ./data-structure/arrayOfObjects.js
node ./conceptual-session/sort.js
```

---

## 💡 **Learning Goals**

* Master **reduce(), map(), filter()**
* Deep understanding of **data structure operations**
* Improve logical and analytical skills
* Write clean, reusable JavaScript functions

