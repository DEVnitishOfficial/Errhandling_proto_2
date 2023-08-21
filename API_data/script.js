

// 8. Get Data from API and Display it on the browser console.
// Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to
// the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list
// of posts, and then display them to the browser console.

// async function fetchData(){
//     const data = await 
//     fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
//     console.log(data);
// }
// fetchData();



function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message))
}
fetchData();