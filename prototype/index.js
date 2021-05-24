
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.show = function () {
        console.log(`Nombre: ${this.name} Precio: ${this.price}`)
    }
}



let p1 = new Product("tv", 200);
let p2 = new Product("lapiz", 20);
p1.show()
p2.show()
