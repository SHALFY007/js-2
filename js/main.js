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
        this.fetchGoods();
        this.amount = 0;
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
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
        const goodItem = new GoodsItem(good.title, good.price, id++);
        listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.getAmountAll();
list.render();

class CartItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.count = 0;
    }
    getCount() {
        /*document.querySelectorAll('.good-card-button').forEach(item => {
           item.addEventListener('click', e => {
           idItem = e.target.parentElement.getAttribute("data-id");
        
           });  
        });*/
        
        
    }
    render() {
        
    }
}

class CartList {
    constructor() {
        this.goods = [];
        this.list();
    }
    list() {
        this.goods = []
    }
    getAmountAll() {
        
    }
    render() {
        
    }
}
new CartItem('dsf', 12).getCount();







































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
