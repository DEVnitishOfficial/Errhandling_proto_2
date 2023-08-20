// 4. Arrange in alphabetical order.
// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

const books = [
  {
    title: "Making India Awesome",
    author: "Chetan Bhagat",
    year: "2022",
  },
  {
    title: "Beginning of the Beginning  ",
    author: "Bhagwan Shri Rajneesh",
    year: "2012",
  },
  {
    title: "Arthashastra ",
    author: "Kautilya",
    year: "2001",
  }
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(" , "))
}
function extractTitle(books,callback){
   const Tiltles =  books.map(book => book.title);
   callback(Tiltles)
}
extractTitle(books,logTitles)
