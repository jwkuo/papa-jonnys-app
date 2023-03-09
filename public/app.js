const API_URL = 'https://x9ln0qkcxb.execute-api.us-east-1.amazonaws.com/dev'

let pizzas = []

const subHeader = document.getElementById('subheader')
const pizzaList = document.getElementById('pizzaList')

fetch(`${API_URL}/pizzas`)
  .then((response) => response.json())
  .then((data) => {
    pizzas = data.data
    let listItems = ''
    pizzas.forEach(pizza => {
        listItems += `<li>
            <img alt="Pizza" src="images/pizza-icon.jpg">
            <div class="pizza-info">
                <h3>${pizza.name}</h3>
                <h4>Price: <span>$${pizza.price}</span></h4>
            </div>
        </li>`
    })
    pizzaList.innerHTML = listItems
    subHeader.innerText = 'Checkout our Pizzas!'
  });