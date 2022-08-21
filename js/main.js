const API_URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class GoodsItem {
    constructor(title, price, id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }
    render() {
        return `<div class="good-card" data-id=${this.id}>
                   <h3 class="good-card-header">${this.title}</h3>
                   <p class="good-card-price">${this.price}</p>
                   <a href="#" class="good-card-button">Purchase</a>
               </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods().then(data => {
            this.goods = data;
            console.log(data);
            this.render();
        });
        this.amount = 0;
    }
    fetchGoods() {
        /*this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];*/
        
         return fetch(`${API_URL}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
             console.log(error)
         });
    }
    getAmountAll() {
        for (let i=0; i< this.goods.length; i++) {
            this.amount += this.goods[i].price;
        }
        console.log(this.amount);
    }
    render() {
        let listHtml = '';
        let id = 0;
        this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price, id++);
        listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.getAmountAll();
//list.render();

class Visibility {
    constructor(selector) {
        this.selector = selector;
    }
    visible() {
        document.querySelector(`.${this.selector}`).classList.toggle('open');
    
}
}

class ClickVisibleElement {
    constructor(mainElement, newElement) {
        this.mainElement = mainElement;
        this.newElement = newElement;
        this._render();
    }
    _render() {
        document.querySelector(`.${this.mainElement}`).addEventListener('click', event => {
            new Visibility(this.newElement).visible();
        })
    }
}

new ClickVisibleElement('cart-button', 'cart-block');
class CartItem {
    constructor(title, price, count) {
        this.title = title;
        this.price = price;
        this.count = count;
    }
    render() {
        return `<ul class="cart-block-title">
                   <li class="cart-block-title-mini">${this.title}</li>
                   <li class="cart-block-title-mini">${this.price}</li>
                   <li class="cart-block-title-mini">${this.count}</li>
               </ul>`
    }
}

class CartList {
    constructor() {
        this.goods = [];
        this.data = [];
        this.list().then(data => {
            this.data = data;
            this.goods = data.contents;
            //console.log(this.goods);
            this.render();
        })
    }
    list() {
         return fetch(`${API_URL}/getBasket.json`)
        .then(result => result.json())
        .catch(e => console.log(e))
    }
    addGood() {
        
    }
    RemoveGood() {
        
    }
    getAmountAll() {
        
    }
    render() {
        let html = '';
        let renderArr = this.goods.forEach(item => {
            let goodItem = new CartItem(item.product_name, item.price, item.quantity);
            html += goodItem.render();
        });
        
        const cartBlock = document.querySelector('.cart-list');
        cartBlock.insertAdjacentHTML('beforeend', html);
        const countOfGoods = document.querySelector('#countOfGoods');
        const amountOfGoods = document.querySelector('#amountOfGoods');
        countOfGoods.textContent = `Всего товаров: ${this.data.countGoods}`;
        amountOfGoods.textContent = `Сумма: ${this.data.amount}`;
    }
}

new CartList();







































/*const goods = [
{ title: 'Shirt', price: 150 },
{ title: 'Socks', price: 50 },
{ title: 'Jacket', price: 350 },
{ title: 'Shoes', price: 250 },
];
const renderGoodsItem = (products) => {
    return `<div class="good-card">
                   <h3 class="good-card-header">${products.title}</h3>
                   <p class="good-card-price">${products.price}</p>
                   <a href="#" class="good-card-button">Purchase</a>
               </div>`;
};
const renderGoodsList = (list = []) => {
let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join('');
    document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);*/
