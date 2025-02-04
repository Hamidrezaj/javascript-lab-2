// If condition

let number = 0;

if (number > 0) {
  console.log('positive');
} else if (number < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// Switch for day of the week

let day = 3;

switch (day) {
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('Monday');
    break;
  case 3:
    console.log('Tuesday');
    break;
  case 4:
    console.log('Wednesday');
    break;
  case 5:
    console.log('Thursday');
    break;
  case 6:
    console.log('Friday');
    break;
  case 7:
    console.log('Saturday');
    break;
}

// loops 1 to 5
console.log('for loop');
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/////////
console.log('while loop');
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

/////////
console.log('do while loop');

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

// break
console.log('break at 3');

i = 1;

while (i <= 5) {
  console.log(i);
  i++;
  if (i === 3) {
    console.log(i);
    break;
  }
}

// continue

console.log('continue at 3');
i = 1;

while (i <= 5) {
  if (i === 3) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// Local & Global Variables

console.log('global and local variable examples');
let globalVar = "I'm global!";

function scopeExample() {
  let localVar = "I'm local!";
  console.log(globalVar);
  console.log(localVar);
}

scopeExample();
console.log(globalVar);
// console.log(localVar); // Causes and Error as locaVar is local to the function
