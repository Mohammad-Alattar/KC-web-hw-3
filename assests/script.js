function item(name, img, price) {
    let items = {
        name: name,
        img: img,
        price: price,
        id: 0,
        isAdded: false,
    }
    return items
}
let items = [item("eren", "images/aot.jpg", 25), item("yonu", "images/bc.jpg", 30), item("killua", "images/killua.jpg", 50)]
let orders = []
function loadItems() {
    let container = document.getElementById("container")
    container.innerHTML = "";
    items.forEach((element) => {
        container.innerHTML += `
        <div class="box">
        <img src="${element.img}" alt="${element.name}" width="256" height="340">
        <h3>${element.name}</h3>
        <p>${element.price}$</p>
        <button type="button" id="${element.name}" onclick="addOrder(this.id)" class="add">Add to Cart</button>
        </div>
        `
    })
}
function loadCart() {
    let cart = document.getElementById("cart")
    cart.innerHTML = ""
    orders.forEach((order) => { 
        cart.innerHTML += `
        <div class="item">
        <img src="${order.img}" alt="${order.name}" width="128" height="128">
        <h3>${order.name}</h3>
        <p>${order.price}$</p>
        <h1 id="data">${order.id}</h1>
        <button type="button" id="${order.name}" onclick="removeOrder(this.id)" class="add">Remove from cart</button>
        </div>
        `
        order.isAdded = true
    })
}
function addOrder(id) {
    let getItem = items.find((item) =>  item.name == id)
    if (getItem.isAdded) {
        getItem.id = getItem.id + 1
        loadCart()
        total()
        return
    }
    orders.push(getItem)
    loadCart()
    total()
}
function removeOrder(name) {
    let item = orders.find((order) => order.name == name)
    if (item.id <= 0) {
        loadCart()
        total()
        return
    }
    item.id--
    loadCart()
    total()
}
function total() {
    let total = document.getElementById("total")
    num = 0
    orders.forEach((order) => {
        nums = order.price * order.id 
        num = num + nums
    })
    total.innerHTML = `<h1>${num}$</h1>`
}
loadItems()