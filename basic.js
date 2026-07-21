// 1. Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed

let people = ['Sahed', 'Rana', 'Abdulla'];

console.log(people);

// 2. Log the length of the array from Task 1.
// Expected: 3

people_len = people.length;
console.log('The lenght of the array of People: ', people_len)


// 3. Log the item at index 0 and index 2 of the array.

console.log(people[0]);
console.log(people[2]);

// 4. Change the item at index 1 to a new value. Log the array.
people.splice(1,1,"Karim");
console.log(people);

// Alternative 

people[1] = 'Nayeem';
console.log(people);

// 5. Add one item to the end of the array. Log the array.

people.push('Sohel');
console.log(people);

/* 
6. Remove the last item from the array. Log the array and the removed value.
7. Add one item to the start of the array. Log the array.
8. Remove the first item from the array. Log the array and the removed value.
9. Check whether the array contains a specific value. Log true or false.
10. Find the position of a specific value in the array. Log the number.
11. Loop through the array with a for loop and log each item.
12. Loop through the array with a while loop and log each item.
 */