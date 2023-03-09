let pizzas = []

const subHeader = document.getElementById('subheader')
const pizzaList = document.getElementById('pizzaList')

fetch("http://localhost:3000/pizzas")
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