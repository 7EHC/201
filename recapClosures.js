class products{
    constructor(name, category, price) {
        this.name = name
        this.category = category
        this.price = price
    }
    getName(){
        return this.name
    }
    getCategory(){
        return this.category
    }
    getPrice(){
        return this.price
    }
    getProduct(){
        return {name: this.name, category: this.category, price: this.price}
    }
}

let pd1 = new products('iphone 14', 'mobile', '25900')
let pd2 = new products('iphone 14 pro', 'mobile', '25900')
let pd3 = new products('Samsung TV', 'tv', '15900')
let pd4 = new products('LG TV', 'tv', '11900')
let pd5 = new products('AsusZen Book', 'laptop', '45900')
let pd6 = new products('MSI Katana', 'laptop', '55900')

function ProductStore(){
    let productList = []

    function addProduct(prod){
        return productList.push(prod)
    }

    function deleteProduct(prod_name){
        productList = productList.filter(item => item.name !== prod_name)
        return productList
    }

    function findByName(name){
        return productList.filter(item => item.name.includes(name))
    }

    function findByCategory(category){
        return productList.filter(item => item.category === category)
    }

    function findByPrice(price){
        return productList.filter(item => item.price <= price)
    }

    function getAllProduct(){
        return productList
    }

    return {addProduct, deleteProduct, findByPrice, findByCategory, findByName, getAllProduct}
}

const {addProduct, deleteProduct, findByPrice, findByCategory, findByName, getAllProduct} = ProductStore()

addProduct(pd1.getProduct())
addProduct(pd2.getProduct())
addProduct(pd3.getProduct())
addProduct(pd4.getProduct())
addProduct(pd5.getProduct())
addProduct(pd6.getProduct())

console.log(getAllProduct())

deleteProduct('iphone 14 pro')

console.log(getAllProduct())

console.log(findByName('LG'))