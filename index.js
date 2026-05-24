/*  let age = 25;
console.log(age);
age = 30;
console.log(age);
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Alice");
greet("Bob");*/

/*function add(a, b) {
    return a + b;
}
const result = add(5, 3);
const result2 = add(10, 20);
console.log(result);
console.log(result2);*/


/*const grade = 85;

if (grade >= 70) {
  console.log("Satisfactory");
} else {
  console.log("Unsatisfactory");
}*/

/*function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory
*/
/*function checkStorage(available, ordered) {
  if (available > ordered) {
    return "Order is processed, our manager will contact you";
  } else {
    return "Not enough goods in stock!";
  }
}
console.log (checkStorage(100, 50));
console.log (checkStorage(100, 130));
console.log (checkStorage(200, 20));
console.log (checkStorage(200, 150));
console.log (checkStorage(150, 180));8*/
/* const grade = 85;

if (grade >=90) {
  console.log("Perfectly");
}else if (grade>=80){
  console.log("Good");
}else if (grade>=70){
  console.log("Satisfactory");
}else {
  console.log("Unsatisfactory");
}*/
/*function checkStorage(available, ordered) {
if (ordered == 0) {
  return "There are no products in the order!";
} else if (ordered > available) {
  return  "Your order is too large, there are not enough items in stock!";
}else {
  return "The order is accepted, our manager will contact you";
}
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(250, 200));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80));*/

/*const a=5;
const b=10;
const max = a > b ? "max" : "min";
console.log(max);*/

/*const balance = 200;
const message =balance > 0 ? "Positive balance" : "Negative balance";
console.log(message);*/

/*const price = 1000;
const discount = price >=1000 ? 0.1 : 0;
const finalPrice = "з  урахуванням знижки ваша ціна становить: " + (price - (price * discount));
console.log(finalPrice);*/

/*function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
}

console.log(checkPassword("jqueryismyjam"));    // "Access granted"
console.log(checkPassword("angul4r1sl1f3"));    // "Access denied, wrong password!"
console.log(checkPassword("r3actsux"));         // "Access denied, wrong password!" */

/*function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
}
 console.log(checkPassword("jqueryismyjam"));
 console.log(checkPassword("angul4r1sl1f3"));
 console.log(checkPassword("r3actsux"));*/




 /*function getSubscriptionPrice(type) {  
  switch (type) {
    case "starter":
      return 0;
      break;
    case "professional":
      return 20;
        break;
    case "organization":
      return 50;
      break;
    default:
      return "Invalid subscription type";
  }
}
let type = "professional";
console.log(getSubscriptionPrice(type));
// 0
console.log(getSubscriptionPrice("organization"));
console.log(getSubscriptionPrice("starter"));
console.log(getSubscriptionPrice("random"));
console.log(getSubscriptionPrice("premium"));*/

/*function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
}

console.log(checkAccess("pro"));
console.log(checkAccess("starter"));*/

/*function getSubstring(string, length) {
  return string.slice(0, length);
}
console.log(getSubstring("Hello, world!", 3));
console.log(getSubstring("Hello, world!", 5));
console.log(getSubstring("Hello, world!", 8));
console.log(getSubstring("Hello, world!", 11));
console.log(getSubstring("Hello, world!", 0));*/

/*function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else if (to === "lower") {
    return input.toLowerCase();
  }
} 
console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "lower"));
console.log(normalizeInput("Stay Awhile and Listen", "upper"));*/

                   /*Метод includes()*/;


/*const message = "Please buy our stuff!";
const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}*/

/*function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}
console.log(checkForName("Jason Neis", "Jason"));
console.log(checkForName("Jason Neis", "jAsOn"));
console.log(checkForName("Jason Neis", "Jacob"));
console.log(checkForName("Caty Stars", "Caty"));
console.log(checkForName("Caty Stars", "cAtY"));
console.log(checkForName("Caty Stars", "Andromeda"));*/

 /*function checkFileExtension(fileName, ext) { 
 if (fileName.endsWith(ext))  {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
 }
  
console.log(checkFileExtension("styles.css", ".css"));
console.log(checkFileExtension("styles.css", ".js"));
console.log(checkFileExtension("app.js", ".js"));               
console.log(checkFileExtension("app.js", ".html"));
console.log(checkFileExtension("index.html", ".html"));
console.log(checkFileExtension("index.html", ".css"));
console.log(checkFileExtension("index.html", ".js"));*/

/*const message = "Hello, world!";
const index = message. indexOf("world");
console.log(index); // 7

const message2 = "Welcome to Bahamas!";
const index2 = message2.indexOf("Bahamas");
console.log(index2); // 11

const message3 = "JavaScript is awesome!";
const index3 = message3.indexOf("Python");
console.log(index3); // -1 */

/*function getFileName(file) {
  const index = file.indexOf(".");
  if (index === -1) {
    return file;
  }
  return file.slice(0, index);
};

console.log(getFileName("styles.css"));
console.log(getFileName("app.js"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));*/

/*const input = "  JavaScript is awesome!                 ";
const normalizedInput = input.trim();
const index = normalizedInput;

console.log(index);
console.log(index.length);*/

/*function createFileName(name, ext) {
  return name.trim() + "." + ext.trim();
}

console.log(createFileName(" order ", "txt"));
console.log(createFileName("report ", "csv"));
console.log(createFileName(" presentation", "xml"));*/

/*let count = 0;

while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}*/

/*function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну

  while (counter < maxClients) {
    console.log(counter);
    counter += 1;
  }
}

countClients(18, 25);*/

/*function calculateTotal(number) {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
}


console.log(calculateTotal(18));*/



/*

console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(0)); // 0*/

/*for ( let i = 0; i<=10; i++){
  console.log(i);
}*/

/*function calculateEvenTotal(number) {
    let total = 0;
    let i = 1;
    while (i <= number) {
      if (i%2 === 0) {
        total += i;
      }
      i ++;
    }
    return total;
}

console.log(calculateEvenTotal(1));
console.log(calculateEvenTotal(3));
console.log(calculateEvenTotal(7));
console.log(calculateEvenTotal(18));
console.log(calculateEvenTotal(27));
console.log(calculateEvenTotal(100));*/


/*function findNumber(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);*/

/*function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
}
}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));*/


/*function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"*/ 

/*const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

const tags = [];
for (let i=0; i<3; i++) {
  tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"]*/

/*function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); 

// [29, 30, 31, 32, 33, 34]  

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}

function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  return total;
}
 console.log(calculateTotalPrice([12, 85, 37, 4]));
 console.log(calculateTotalPrice([164, 48, 291]));
 console.log(calculateTotalPrice([412, 371, 94, 63, 176])); */
 
 
 /*function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}
 console.log(getEvenNumbers(2, 5)); // [2, 4]
 console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
 console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
 console.log(getEvenNumbers(8, 8)); // [8]
 console.log(getEvenNumbers(7, 7)); // [] };*/


 /*    function checkStorage(storage, item) {
       const lowerItem = item.toLowerCase();
       const lowerStorage = storage.map(el => el.toLowerCase());
       
       if (lowerStorage.includes(lowerItem)) {
         return `${lowerItem} is available to order!`;
       } else {
         return `Sorry! We are out of stock!`;
       }
     }
       
     console.log(checkStorage(["apple", "plum", "pear"], "plum"));
     console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
     console.log(checkStorage(["apple", "plum", "pear"], "pear"));
     console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
     console.log(checkStorage(["apple", "plum", "pear"], "orange"));
     console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
*/     

/*     function getCommonElements(array1, array2) {
       const result = [];
       for (let i = 0; i < array1.length; i += 1) {
         if (array2.includes(array1[i])) {
           result.push(array1[i]);
         }
       }
       return result;
     }
     
     console.log(getCommonElements([1, 2, 3], [2, 4]));
     console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
     console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
     console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
     console.log(getCommonElements([1, 2, 3], [10, 20, 30]));  
*/

/*     const planets = ["Earth", "Mars", "Venus"];
     
     for (const planet of planets) {
       console.log(planet);
     }
*/

 /*   function calculateTotalPrice(order) {
      let total = 0;
    
      for (const price of order) {
        total += price;
      }
    
      return total; 
    }
    
    console.log(calculateTotalPrice([12, 85, 37, 4]));
    console.log(calculateTotalPrice([164, 48, 291]));
    console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  
    console.log(calculateTotalPrice([]));
*/
/*    function sum(a, b) {
      console.log(arguments);
      return a + b;
    }
    
    sum(2, 5);
*/    
