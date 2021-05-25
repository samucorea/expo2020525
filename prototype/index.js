
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.show = function () {
    console.log(`Nombre: ${this.name} Precio: ${this.price}`)
}

function Food(name, price) {
    this.category = "food"
    Product.call(this, name, price)
}
Food.prototype = Object.create(Product.prototype)
Food.prototype.show = function () {
    console.log(`Name: ${this.name} Price: ${this.price} Category: ${this.category}`)
}




let p1 = new Product("tv", 200);
let p2 = new Product("lapiz", 20);
p1.show()
p2.show()


let f1 = new Food("pizza", 300)
f1.show()

