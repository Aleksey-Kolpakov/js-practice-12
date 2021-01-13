import './styles.css';
//fetch('http://hn.algolia.com/api/v1/search?query=...');
// const options = {
//     method: 'GET',
//     headers: {
//         Accept: 'application/json'
//     },

// };
// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(data => console.log(data));

// fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story')
// .then(response => response.json())
// .then(data => console.log(data));
const appKey = 'f3661bcb94794689953c71c4f900de83';

const options = {
    headers: {
        Authorization: appKey,
    },
};

fetch('https://newsapi.org/v2/everything?q=bitcoin', options)
    .then(response => response.json())
    .then(data => console.log(data));;