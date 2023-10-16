
let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openShopping.addEventListener('click', ()=> {
    body.classList.add('active')
})

openShopping.addEventListener('dblclick', ()=> {
    body.classList.remove('active')
})

closeShopping.addEventListener('click', ()=> {
    body.classList.remove('active')
})

function addToCard(key) {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]))
        listCards[key].quantity = 1
    }
    reloadCard()
}

function reloadCard() {
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0 
    
    total.innerText = totalPrice.toLocaleString() + '$'
    quantity.innerText = count
}

function changeQuantity(key, quantity) {
    if(quantity == 0) {
        delete listCards[key]
    } else {
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}