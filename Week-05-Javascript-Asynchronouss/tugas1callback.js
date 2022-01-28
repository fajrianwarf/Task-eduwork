// import {render} from "./table.js";
// const axios = require('axios');

// axios.get("https://jsonplaceholder.typicode.com/users")
// .then( result => document.getElementById('callback')
// .innerHTML = render(result.data));

// function getTodos() {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then( res => console.log(res))
//     .catch( err => console.error(err));
// }

// getTodos();


const link = 'https://jsonplaceholder.typicode.com/users';
const id = document.getElementById('callback');

axios.get(link)
  .then(res => {
    id.innerHTML = render(res.data);
})

function render(result) {
  let table = '';
  result.forEach(data => {
    table += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.phone}</td>
                <td>${data.website}</td>
                <td>${data.company.name}</td>
              </tr>`;
  })
  return table;
} 