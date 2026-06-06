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
/*Метод includes()*/
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
//const produkt = {
//  name: "Генератор захисного поля",
//  price: 1000,
//  quantity: 5,
//  category: "Товари для дому",
//  isOnSale: true,
//  details: {
//    weight: "1kg",
//    color: "silver",
//    dimensions: "10x10x10cm"
//  }
//}
//
//console.log(produkt.name);
//console.log(produkt.price);
//console.log(produkt.quantity);
//console.log(produkt.category);
//console.log(produkt.isOnSale);
//console.log(produkt.details);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  }
//
//  console.log(apartment.imgUrl);
//  console.log(apartment.descr);
//  console.log(apartment.rating);
//  console.log(apartment.price);
//  console.log(apartment.tags);
//    const apartment = {
//      imgUrl: "https://via.placeholder.com/640x480",
//      descr: "Spacious apartment in the city center",
//      rating: 4,
//      price: 2153,
//      tags: ["premium", "promoted", "top"],
//      owner: {
//        name: "Henry",
//        phone: "982-126-1588",
//        email: "henry.carter@aptmail.com"
//      }
//    };
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  const bookTitle = book.title;
//  console.log(bookTitle);
//
//  const bookGenres = book.genres;
//  console.log(bookGenres);
//
//  const bookReting = book.rating;
//  console.log(bookReting);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
//
//  const aptRating = apartment.rating;
//  const aptDescr = apartment.descr;
//  const aptPrice = apartment.price;
//  const aptTags = apartment.tags;
// ------------------------------- Доступ до вкладених властивостей---------------------------------------
//   const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swimming", "music", "sci-fi"],
//   };
//
//   //console.log(user.location.country);
//   const country = user.location.country;
//   console.log(country);
//
//   const hobbies = user.hobbies[0];
//   console.log(hobbies);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//  const ownerName = apartment.owner.name;
//  const ownerPhone = apartment.owner.phone;
//  const ownerEmail = apartment.owner.email;
//  const numberOfTags = apartment.tags.length;
//  const lastTag = apartment.tags[apartment.tags.length - 1];
//
//
//  console.log(ownerName);
//  console.log(ownerPhone);
//  console.log(ownerEmail);
//  console.log(numberOfTags);
//  console.log(lastTag);
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  console.log(book['author']);
//  console.log(book.title);
//  console.log(book['genres']);
//  console.log(book.isPublic);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
//
//  const aptRating = apartment["rating"];
//  const aptDescr = apartment["descr"];
//  const aptPrice = apartment["price"];
//  const aptTags = apartment["tags"];
//
//  console.log(aptRating);
//  console.log(aptDescr);
//  console.log(aptPrice);
//  console.log(aptTags);
//-------------------------------Зміна значення властивостей----------------------------------------
//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//
//   book.rating = 9;
//   console.log(book.rating);
//   book.isPublic = false;
//   console.log(book.isPublic);
//   book.genres.push("drama");
//   console.log(book.genres);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//  apartment.price = 5000;
//  apartment.rating = 4.7;
//  apartment.owner.name = "Henry Sibola";
//  apartment.tags.push("trusted");
//  console.log(apartment.price);
//  console.log(apartment.rating);
//  console.log(apartment.owner.name);
//  console.log(apartment.tags);
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  book.pageCount = 836;
//  book.originalLanguage = "en";
//  book.translations = ["ua", "ru"];
//  book.price = {
//    hardcover: 39,
//    softcover: 29,
//  };
//
//  console.log(book.pageCount); // 836
//  console.log(book.originalLanguage); // "en"
//  console.log(book.translations); // ["ua", "ru"]
//  console.log(book); // { hardcover: 39, softcover: 29 }
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4.7,
//    price: 5000,
//    tags: ["premium", "promoted", "top", "trusted"],
//    owner: {
//      name: "Henry Sibola",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//
//  apartment.area = 60;
//  apartment.rooms = 3;
//  apartment.location = {
//    country: "Jamaica",
//    city: "Ocho Rios",
//  };
//
//  console.log(apartment.area);
//  console.log(apartment.rooms);
//  console.log(apartment.location);
//
//  const name = "Repair Droid";
//  const price = 2500;
//  const image = "https://via.placeholder.com/640x480";
//  const tags = ["on sale", "trending", "best buy"];
//
//  const product = {
//    name,
//    price,
//    image,
//    tags,
//  };
//
//  console.log(product);
//  console.log(product.name);
//  console.log(product.price);
//  console.log(product.image);
//  console.log(product.tags);
//   const emailInputName = "email";
//   const passwordInputName = "password";
//
//   const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//   };
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    rating: 8.38,
//  };
//
//  for (const key in book) {
//    console.log(key); // Ключ
//    console.log(book[key]);  // Значення властивості з таким ключем
//  }
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//
//  const keys = [];
//  const values = [];
//  for (const key in apartment) {
//    keys.push(key);
//    values.push(apartment[key]);
//  }
//
//  console.log(keys); // ["descr", "rating", "price"]
//  console.log(values); // ["Spacious apartment in the city center", 4, 2153]
//  const book = {
//    title: 'The Last Kingdom',
//    author: 'Bernard Cornwell',
//    genres: ['historical prose', 'adventure'],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  const keys = Object.keys(book);
//  //console.log(keys);
//  for(const key of keys) {
//    console.log(key);
//  }
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  const keys = Object.keys(apartment);
//
//  for(const key of keys) {
//    values.push(apartment[key]);
//  }
//  console.log(values);
//  function countProps(object) {
//    re
//turn Object.keys(object).length;
//  }
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    rating: 8.38,
//  };
//  const keys = Object.keys(book);
//  console.log(keys);
//
//  const values = Object.values(book);
//  console.log(values);
//-----------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Порахуй суму всіх числових значень
//  const user = {
//    name: "Іван",
//    age: 25,
//    city: "Київ",
//    isOnline: true,
//  };
//   const keys = Object.keys(user);
//    console.log(keys);
//  const  value = Object.values(user);
//  console.log(value);
//  const length = Object.keys(user).length;
//  console.log(length);
//-------------------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Виведи тільки перший ключ
// 4. Виведи тільки останнє значення
//  const product = {
//    name: "Телефон",
//    price: 500,
//    brand: "Samsung",
//    inStock: true,
//  };
//
//  const keys = Object.keys(product);
//  console.log(keys);
//  const length = Object.keys(product)[0];
//  console.log(length);
//  const lastValue = Object.values(product)[Object.values(product).length - 1];
//  console.log(lastValue);
//  const values = Object.values(product);
//  console.log(values);
//---------------------------------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Порахуй суму всіх числових значень
//  const movie = {
//    title: "Inception",
//    director: "Christopher Nolan",
//    year: 2010,
//    rating: 9.2,
//  };
//
//  const keys =Object.keys(movie);
//  console.log(keys);
//  const values = Object.values(movie);
//  console.log(values);
//  let sum = 0;
//  for (const value of values) {
//    if (typeof value === "number") {
//      sum += value;
//    }
//  }
//  console.log(sum);
//-------------------------------------------------------------------------------------
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//
//  const keys = apartment;
//  const values = apartment;
//  apartment.keys = Object.keys(apartment);
//  apartment.values = Object.values(apartment);
//
//  console.log(apartment.keys);
//  console.log(apartment.values);
//--------------------------------------------------------------------------------------------------
//  function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    const salaryValues = Object.values(salaries);
//    for (const salary of salaryValues) {
//      totalSalary += salary;
//    }
//    return totalSalary;
//  }
//
//  console.log(countTotalSalary({}));
//  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
//------------------------------------------------------------------------------------------------
//  const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Tell-Tale Heart",
//      author: "Edgar Allan Poe",
//      rating: 7.75,
//    }
//  ];
//
//  for (const book of books) {
//    //console.log(book); // Об'єкт книги
//    //console.log(book.title); // Назва
//    //console.log(book.author); // Автор
//    //console.log(book.rating); // Рейтинг
//  }
//
//  for (const book of books) {
//    //console.log(book.title);
//  }
//  console.log(firstBook = books[0]);
//  console.log(firstBook.title);
//  console.log(firstBook.author);
//==================================================================================================
//  const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
//
//  const hexColors = [];
//  const rgbColors = []
//  for (const color of colors) {  hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
//  }
//
//  console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//  console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
//================================================================================================
//  const books = [
//    { title: "The Last Kingdom", author: "Bernard Cornwell" },
//    { title: "Beside Still Waters", author: "Robert Sheckley" },
//    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
//  ];
//
//  const authorToSearchFor = "Robert Sheckley";
//
//  for (const book of books) {
//    if (book.author === authorToSearchFor) {
//      console.log(`Found the book by ${authorToSearchFor}: ${book.title}`);
//      break; // Виходимо з циклу після знаходження книги
//    }
//  }
//================================================================================================
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
/*Метод includes()*/
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
//const produkt = {
//  name: "Генератор захисного поля",
//  price: 1000,
//  quantity: 5,
//  category: "Товари для дому",
//  isOnSale: true,
//  details: {
//    weight: "1kg",
//    color: "silver",
//    dimensions: "10x10x10cm"
//  }
//}
//
//console.log(produkt.name);
//console.log(produkt.price);
//console.log(produkt.quantity);
//console.log(produkt.category);
//console.log(produkt.isOnSale);
//console.log(produkt.details);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  }
//
//  console.log(apartment.imgUrl);
//  console.log(apartment.descr);
//  console.log(apartment.rating);
//  console.log(apartment.price);
//  console.log(apartment.tags);
//    const apartment = {
//      imgUrl: "https://via.placeholder.com/640x480",
//      descr: "Spacious apartment in the city center",
//      rating: 4,
//      price: 2153,
//      tags: ["premium", "promoted", "top"],
//      owner: {
//        name: "Henry",
//        phone: "982-126-1588",
//        email: "henry.carter@aptmail.com"
//      }
//    };
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  const bookTitle = book.title;
//  console.log(bookTitle);
//
//  const bookGenres = book.genres;
//  console.log(bookGenres);
//
//  const bookReting = book.rating;
//  console.log(bookReting);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
//
//  const aptRating = apartment.rating;
//  const aptDescr = apartment.descr;
//  const aptPrice = apartment.price;
//  const aptTags = apartment.tags;
// ------------------------------- Доступ до вкладених властивостей---------------------------------------
//   const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     hobbies: ["swimming", "music", "sci-fi"],
//   };
//
//   //console.log(user.location.country);
//   const country = user.location.country;
//   console.log(country);
//
//   const hobbies = user.hobbies[0];
//   console.log(hobbies);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//  const ownerName = apartment.owner.name;
//  const ownerPhone = apartment.owner.phone;
//  const ownerEmail = apartment.owner.email;
//  const numberOfTags = apartment.tags.length;
//  const lastTag = apartment.tags[apartment.tags.length - 1];
//
//
//  console.log(ownerName);
//  console.log(ownerPhone);
//  console.log(ownerEmail);
//  console.log(numberOfTags);
//  console.log(lastTag);
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  console.log(book['author']);
//  console.log(book.title);
//  console.log(book['genres']);
//  console.log(book.isPublic);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//  };
//
//  const aptRating = apartment["rating"];
//  const aptDescr = apartment["descr"];
//  const aptPrice = apartment["price"];
//  const aptTags = apartment["tags"];
//
//  console.log(aptRating);
//  console.log(aptDescr);
//  console.log(aptPrice);
//  console.log(aptTags);
//-------------------------------Зміна значення властивостей----------------------------------------
//   const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
//
//   book.rating = 9;
//   console.log(book.rating);
//   book.isPublic = false;
//   console.log(book.isPublic);
//   book.genres.push("drama");
//   console.log(book.genres);
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
//    owner: {
//      name: "Henry",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//  apartment.price = 5000;
//  apartment.rating = 4.7;
//  apartment.owner.name = "Henry Sibola";
//  apartment.tags.push("trusted");
//  console.log(apartment.price);
//  console.log(apartment.rating);
//  console.log(apartment.owner.name);
//  console.log(apartment.tags);
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  book.pageCount = 836;
//  book.originalLanguage = "en";
//  book.translations = ["ua", "ru"];
//  book.price = {
//    hardcover: 39,
//    softcover: 29,
//  };
//
//  console.log(book.pageCount); // 836
//  console.log(book.originalLanguage); // "en"
//  console.log(book.translations); // ["ua", "ru"]
//  console.log(book); // { hardcover: 39, softcover: 29 }
//  const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4.7,
//    price: 5000,
//    tags: ["premium", "promoted", "top", "trusted"],
//    owner: {
//      name: "Henry Sibola",
//      phone: "982-126-1588",
//      email: "henry.carter@aptmail.com",
//    },
//  };
//
//
//  apartment.area = 60;
//  apartment.rooms = 3;
//  apartment.location = {
//    country: "Jamaica",
//    city: "Ocho Rios",
//  };
//
//  console.log(apartment.area);
//  console.log(apartment.rooms);
//  console.log(apartment.location);
//
//  const name = "Repair Droid";
//  const price = 2500;
//  const image = "https://via.placeholder.com/640x480";
//  const tags = ["on sale", "trending", "best buy"];
//
//  const product = {
//    name,
//    price,
//    image,
//    tags,
//  };
//
//  console.log(product);
//  console.log(product.name);
//  console.log(product.price);
//  console.log(product.image);
//  console.log(product.tags);
//   const emailInputName = "email";
//   const passwordInputName = "password";
//
//   const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",
//   };
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    genres: ["historical prose", "adventure"],
//    rating: 8.38,
//  };
//
//  for (const key in book) {
//    console.log(key); // Ключ
//    console.log(book[key]);  // Значення властивості з таким ключем
//  }
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//
//  const keys = [];
//  const values = [];
//  for (const key in apartment) {
//    keys.push(key);
//    values.push(apartment[key]);
//  }
//
//  console.log(keys); // ["descr", "rating", "price"]
//  console.log(values); // ["Spacious apartment in the city center", 4, 2153]
//  const book = {
//    title: 'The Last Kingdom',
//    author: 'Bernard Cornwell',
//    genres: ['historical prose', 'adventure'],
//    isPublic: true,
//    rating: 8.38,
//  };
//
//  const keys = Object.keys(book);
//  //console.log(keys);
//  for(const key of keys) {
//    console.log(key);
//  }
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  const keys = Object.keys(apartment);
//
//  for(const key of keys) {
//    values.push(apartment[key]);
//  }
//  console.log(values);
//  function countProps(object) {
//    re
//turn Object.keys(object).length;
//  }
//  const book = {
//    title: "The Last Kingdom",
//    author: "Bernard Cornwell",
//    rating: 8.38,
//  };
//  const keys = Object.keys(book);
//  console.log(keys);
//
//  const values = Object.values(book);
//  console.log(values);
//-----------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Порахуй суму всіх числових значень
//  const user = {
//    name: "Іван",
//    age: 25,
//    city: "Київ",
//    isOnline: true,
//  };
//   const keys = Object.keys(user);
//    console.log(keys);
//  const  value = Object.values(user);
//  console.log(value);
//  const length = Object.keys(user).length;
//  console.log(length);
//-------------------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Виведи тільки перший ключ
// 4. Виведи тільки останнє значення
//  const product = {
//    name: "Телефон",
//    price: 500,
//    brand: "Samsung",
//    inStock: true,
//  };
//
//  const keys = Object.keys(product);
//  console.log(keys);
//  const length = Object.keys(product)[0];
//  console.log(length);
//  const lastValue = Object.values(product)[Object.values(product).length - 1];
//  console.log(lastValue);
//  const values = Object.values(product);
//  console.log(values);
//---------------------------------------------------------------------------------------------------
// 1. Виведи всі ключі
// 2. Виведи всі значення
// 3. Порахуй суму всіх числових значень
//  const movie = {
//    title: "Inception",
//    director: "Christopher Nolan",
//    year: 2010,
//    rating: 9.2,
//  };
//
//  const keys =Object.keys(movie);
//  console.log(keys);
//  const values = Object.values(movie);
//  console.log(values);
//  let sum = 0;
//  for (const value of values) {
//    if (typeof value === "number") {
//      sum += value;
//    }
//  }
//  console.log(sum);
//-------------------------------------------------------------------------------------
//  const apartment = {
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//  };
//
//  const keys = apartment;
//  const values = apartment;
//  apartment.keys = Object.keys(apartment);
//  apartment.values = Object.values(apartment);
//
//  console.log(apartment.keys);
//  console.log(apartment.values);
//--------------------------------------------------------------------------------------------------
//  function countTotalSalary(salaries) {
//    let totalSalary = 0;
//    const salaryValues = Object.values(salaries);
//    for (const salary of salaryValues) {
//      totalSalary += salary;
//    }
//    return totalSalary;
//  }
//
//  console.log(countTotalSalary({}));
//  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
//  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
//------------------------------------------------------------------------------------------------
//  const books = [
//    {
//      title: "The Last Kingdom",
//      author: "Bernard Cornwell",
//      rating: 8.38,
//    },
//    {
//      title: "Beside Still Waters",
//      author: "Robert Sheckley",
//      rating: 8.51,
//    },
//    {
//      title: "The Tell-Tale Heart",
//      author: "Edgar Allan Poe",
//      rating: 7.75,
//    }
//  ];
//
//  for (const book of books) {
//    //console.log(book); // Об'єкт книги
//    //console.log(book.title); // Назва
//    //console.log(book.author); // Автор
//    //console.log(book.rating); // Рейтинг
//  }
//
//  for (const book of books) {
//    //console.log(book.title);
//  }
//  console.log(firstBook = books[0]);
//  console.log(firstBook.title);
//  console.log(firstBook.author);
//==================================================================================================
//  const colors = [
//    { hex: "#f44336", rgb: "244,67,54" },
//    { hex: "#2196f3", rgb: "33,150,243" },
//    { hex: "#4caf50", rgb: "76,175,80" },
//    { hex: "#ffeb3b", rgb: "255,235,59" },
//  ];
//
//  const hexColors = [];
//  const rgbColors = []
//  for (const color of colors) {  hexColors.push(color.hex);
//    rgbColors.push(color.rgb);
//  }
//
//  console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
//  console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
//================================================================================================
//  const books = [
//    { title: "The Last Kingdom", author: "Bernard Cornwell" },
//    { title: "Beside Still Waters", author: "Robert Sheckley" },
//    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
//  ];
//
//  const authorToSearchFor = "Robert Sheckley";
//
//  for (const book of books) {
//    if (book.author === authorToSearchFor) {
//      console.log(`Found the book by ${authorToSearchFor}: ${book.title}`);
//      break; // Виходимо з циклу після знаходження книги
//    }
//  }
//================================================================================================
//
//  function getProductPrice(productName) {
//    const products = [
//      { name: "Radar", price: 1300, quantity: 4 },
//      { name: "Scanner", price: 2700, quantity: 3 },
//      { name: "Droid", price: 400, quantity: 7 },
//      { name: "Grip", price: 1200, quantity: 9 },
//    ];
//
//    for (const product of products) {
//      if (product.name === productName) {
//        return product.price;
//      }
//    }
//
//    return null; // Return null if product is not found
//  }
//
//  console.log(getProductPrice("Radar"));
//  console.log(getProductPrice("Grip"));
//  console.log(getProductPrice("Scanner"));
//  console.log(getProductPrice("Droid"));
//  console.log(getProductPrice("Engine")); // null
//==================================================================================================
//  const books = [
//    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
//  ];
//
//  const titles = [];
//  for (const book of books) {
//    titles.push(book.title)
//  }
//  console.log(titles);
//
//  //
//================================================================================================
//  const books = [
//    { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//    { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//    { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
//  ];
//
//  let totalRating = 0;
//
//  for (const book of books) {
//    totalRating += book.rating;
//  }
//
//  const averageRating = totalRating / books.length;
//  console.log(averageRating);
//==================================================================================================
//  function getAllPropValues(propName) {
//    const products = [
//      { name: "Radar", price: 1300, quantity: 4 },
//      { name: "Scanner", price: 2700, quantity: 3 },
//      { name: "Droid", price: 400, quantity: 7 },
//      { name: "Grip", price: 1200, quantity: 9 },
//    ];
//
//    const values = [];
//    for (const product of products) {
//      if (propName in product) {
//        values.push(product[propName]);
//      }
//    }
//    return values;
//  }
//
//  console.log(getAllPropValues("name"));
//  console.log(getAllPropValues("quantity"));
//  console.log(getAllPropValues("price"));
//  console.log(getAllPropValues("category"));
//==================================================================================================
//  function calculateTotalPrice(productName) {
//    const products = [
//      { name: "Radar", price: 1300, quantity: 4 },
//      { name: "Scanner", price: 2700, quantity: 3 },
//      { name: "Droid", price: 400, quantity: 7 },
//      { name: "Grip", price: 1200, quantity: 9 },
//    ];
//    for (const product of products) {
//      if (product.name === productName) {
//        return product.price * product.quantity;
//      }
//    }
//    return `Product ${productName} not found!`;
//  }
//
//  console.log(calculateTotalPrice("Blaster"));
//  console.log(calculateTotalPrice("Radar"));
//  console.log(calculateTotalPrice("Droid"));
//  console.log(calculateTotalPrice("Grip"));
//  console.log(calculateTotalPrice("Scanner"));
//==================================================================================================
//  const atTheOldToad = {
//    potions: [],
//    getPotions() {
//      return "List of all available potions";
//    },
//    addPotion(potionName) {
//      return `Adding ${potionName}`;
//    },
//  };
//
//  console.log(atTheOldToad.getPotions());
//  console.log(atTheOldToad.addPotion("Invisibility"));
//  console.log(atTheOldToad.addPotion("Invisibility"));
//  console.log(atTheOldToad.addPotion("Power potion"));
//==================================================================================================
//  const bookShelf = {
//    books: ["The Last Kingdom", "The Mist"],
//    getBooks() {
//      console.log(this);
//    },
//  };
//
//  bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}
//==================================================================================================
//  const bookShelf = {
//    books: ["The Last Kingdom", "The Mist"],
//    getBooks() {
//      return this.books;
//    }
//  };
//
//  //console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
//  // ["The Last Kingdom", "The Mist"]
//==================================================================================================
//  const atTheOldToad = {
//    potions: ["Speed potion", "Stone skin"],
//    getPotions() {
//      return this.potions;
//    },
//  };
//  console.log(atTheOldToad.getPotions()); // ["Speed potion", "Stone skin"]
//==================================================================================================
//  const bookShelf = {
//    books: ["The Last Kingdom"],
//    getBooks() {
//      return this.books;
//    },
//    addBook(bookName) {
//      this.books.push(bookName);
//    }
//  };
//
//  console.log(bookShelf.getBooks());
//  bookShelf.addBook("The Mist");
//  bookShelf.addBook("Dream Guardian");
//  console.log(bookShelf.getBooks());
//==================================================================================================
//  const atTheOldToad = {
//    potions: ["Speed potion", "Stone skin"],
//    getPotions() {
//      return this.potions;
//    },
//    addPotion(potionName) {},
//  };
//==================================================================================================
//  const user = {
//      name: 'vitalii',
//      age: 45,
//      city: 'limassol',
//    }
//
//  console.log(user.name);
//  console.log(user.age);
//  console.log(user.city);
//==================================================================================================
//  const product = {
//    name: "Ноутбук",
//    price: 1500,
//    inStock: true,
//  };
//
//
//  for (const key in product) {
//    console.log(key);
//    console.log(product[key]);
//    console.log(Object.keys(product).length);
//  }
//==================================================================================================
//  const users = [
//    { name: "Іван", age: 25 },
//    { name: "Марія", age: 30 },
//    { name: "Олег", age: 22 },
//  ];
//
//
//  for (const user of users) {
//    console.log(user.name);
//  }
//
//  for (const user of users) {
//    if (user.age > 24) {
//      console.log(user.name);
//    }
//  }

//==================================================================================


//  const calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   }
//  }//  
//  console.log(calculator.add(2, 3)); 
//  console.log(calculator.multiply(4, 5)); 

//==================================================================================

//  const userProfile = {
//    name: "John Doe",
//    age: 30,
//    city: "New York",
//    getInfo() {
//      return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
//    }
//  };
//  
//  console.log(userProfile.getInfo());

//==================================================================================

//  const cart = {
//    items: [],
//    totalPrice: 0,
//    addItems(name, price) {
//      this.items.push(name);
//      this.totalPrice += price;
//    },
//    getTotalPrice() {
//      return this.totalPrice;
//    }
//  }
//  
//  cart.addItems("Laptop", 1500);
//  cart.addItems("Phone", 800);
//  cart.addItems("Headphones", 200);
//  
//  console.log(cart.getTotalPrice()); 
//  console.log(cart.items); 

//==================================================================================

//  const fruits = ["apple", "banana", "orange"];
//  const vegetables = ["carrot", "potato", "tomato"];
//  const allProducts = [...fruits, ...vegetables];
//  console.log(allProducts); // ["apple", "banana", "orange", "carrot", "potato", "tomato"]

//==================================================================================

//  const userInfo = {
//    name: "Іван",
//    age: 25,
//  };
//  
//  const userContacts = {
//    email: "ivan@gmail.com",
//    phone: "+380991234567",
//  };
//  
//  const user = { ...userInfo, ...userContacts };
//  console.log(user); 

//==================================================================================
// function sum(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3));        // 6
// console.log(sum(1, 2, 3, 4, 5));  // 15
// console.log(sum(10, 20));         // 30

//==================================================================================

//  function multiply(multiplier, ...numbers) {
//    return numbers.map(number => number * multiplier);    
//  } 
//  
//  console.log(multiply(2, 1, 2, 3));   
//  console.log(multiply(3, 1, 2, 3));
//  console.log(multiply(10, 1, 2, 3)); 

//==================================================================================

//  function makePizza() {
//    return "Your pizza is being prepared, please wait.";
//  }
//  
//  const result = makePizza();
//  const pointer = makePizza;
//  
//  console.log(result);
//  console.log(pointer);

//==================================================================================

//  function greet(name) {
//    console.log(`Hello, ${name}!`);
//  }
//  
//  function notify(name) {
//    console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//  }
//  
//  function registerGuest(name, callback) {
//    console.log(`Registering ${name}!`);
//    callback(name);
//  }
//  
//  registerGuest("Mango", greet);
//  registerGuest("Mango", notify);

//==================================================================================

//  function deliverPizza(pizzaName) {
//    return `Delivering ${pizzaName} pizza.`;
//  }
//  
//  function makePizza(pizzaName) {
//    return `Pizza ${pizzaName} is being prepared, please wait...`;
//  }
//  
//  function makeMessage(pizzaName, callback) {
//    return callback(pizzaName);
//  }
//   makeMessage("Royal Grand", makePizza)
//   console.log(makeMessage("Royal Grand", makePizza));
//   makeMessage("Ultracheese", deliverPizza)
//   console.log(makeMessage("Ultracheese", deliverPizza));

//==================================================================================